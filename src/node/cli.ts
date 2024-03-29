import cac from 'cac';
import { resolve } from 'path';
import { build } from './build';
import { resolveConfig } from './config';
import { preview } from './preview';

const cli = cac('island').version('0.0.1').help();

cli.command('dev [root]', 'start dev server').action(async (root: string) => {
  const createServer = async () => {
    const { createDevServer } = await import('./dev');
    const server = await createDevServer(root, async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
});

cli
  .command('build [root]', 'build in production')
  .action(async (root: string) => {
    try {
      root = resolve(root);
      const config = await resolveConfig(root, 'build', 'production');
      await build(root, config);
    } catch (e) {
      console.log(e);
    }
  });

cli
  .command('preview [root]', 'preview production build')
  .option('--port <port>', 'port to use for preview')
  .action(async (root: string, { port }: { port: number }) => {
    try {
      root = resolve(root);
      preview(root, { port });
    } catch (error) {
      console.log(error);
    }
  });
cli.parse();

// 调试 CLI：
// 1. 在 package.json 中声明 bin 字段
// 2. 通过 npm link 将命令 link 到全局
// 3. 执行 island dev 命令
