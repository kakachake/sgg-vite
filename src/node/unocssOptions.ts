import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind, presetMini } from 'unocss';

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind(), presetMini()]
};

export default options;
