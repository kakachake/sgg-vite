import { pluginMdxHMR } from './pluginMdxHmr';
import { pluginMdxRollup } from './pluginMdxRollup';

export async function createMdxPlugins() {
  return [await pluginMdxRollup(), await pluginMdxHMR()];
}
