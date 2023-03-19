//发布流程安排
// 1. 确定变动版本级别 patch | minor | major，遵循 semver 规范
// 2. 执行测试
// 3. 自动修改包版本
// 4. 执行pnpm build
// 5. 生成CHANGELOG.md
// 6. release commit
// 7. 执行 npm publish
// 8. 执行 git push 并打 tag
// 命令行颜色展示
import chalk from 'chalk';
import execa from 'execa';
import { prompt } from 'enquirer';
import semver from 'semver';
import minimist from 'minimist';
import { program } from 'commander';
import { createRequire } from 'module';
import fs from 'fs-extra';
import path from 'path';
const require = createRequire(import.meta.url);

// const args = minimist(process.argv.slice(2)); // slice(2) 去掉 node 和当前文件名
program.option('-d, --dry', 'dry run');
program.parse(process.argv);
const options = program.opts();

const isDry = options.dry;

const versionIncrements = ['patch', 'minor', 'major'] as const;

const pkg = require('../package.json');
const currentVersion = pkg.version;

const directRun = (bin: string, args: string[]) => {
  return execa(bin, args, {
    stdio: 'inherit'
  });
};

const dryRun = (bin: string, args: string[]) => {
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`));
  return;
};

function updateVersion(version: string) {
  pkg.version = version;
  fs.writeFileSync(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(pkg, null, 2),
    {
      encoding: 'utf-8'
    }
  );
}

const run = isDry ? dryRun : directRun;

const step = (msg) => console.log(chalk.cyan(msg));

async function main() {
  const { release } = await prompt<{
    release: string;
  }>({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map(
      (i) => `${i} (${semver.inc(currentVersion, i)})`
    )
  });

  const targetVersion = release.match(/\((.*)\)/)![1];

  const { confirm } = await prompt<{
    confirm: boolean;
  }>({
    type: 'confirm',
    name: 'confirm',
    message: `Releasing ${targetVersion}. Confirm?`
  });

  if (!confirm) return;

  step('\nRunnning tests...');
  await run('pnpm', ['test:unit']);
  await run('pnpm', ['test:e2e']);

  if (!isDry) {
    step('\nUpdate version...');
    updateVersion(targetVersion);
  }
  step('\nBuilding package...');
  await run('pnpm', ['build']);

  step('\nGenerating changelog...');
  await run('pnpm', ['changelog']);

  step('\nCommitting changes...');
  await run('git', ['add', '-A']);
  await run('git', ['commit', '-m', `'release: v${targetVersion}'`]);

  step('\nPublishing packages');
  await run('pnpm', ['publish', '--access', 'public']);

  step('\nPublishing to GitHub');
  await run('git', ['tag', `v${targetVersion}`]);
  await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
  await run('git', ['push']);
}

main().catch((err) => {
  console.log(err);
  updateVersion(currentVersion);
});
