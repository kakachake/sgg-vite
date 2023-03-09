import * as jsxRuntime from 'react/jsx-runtime';

export const data = {
  islandProps: [],
  islandToPathMap: {}
};

const originJsx = jsxRuntime.jsx;
const originJsxs = jsxRuntime.jsxs;

const internalJsx = (jsx, type, props, ...args) => {
  if (props && props.__island) {
    data.islandProps.push(props);
    const id = type.name;
    data.islandToPathMap[id] = props.__island;
    delete props.__island;
    return originJsx('div', {
      __island: `${id}:${data.islandProps.length - 1}`,
      children: originJsx(type, props, ...args)
    });
  }
  return originJsx(type, props, ...args);
};

export const jsx = internalJsx.bind(null, originJsx);
export const jsxs = internalJsx.bind(null, originJsxs);
export const Fragment = jsxRuntime.Fragment;

export const clearIslandData = () => {
  data.islandProps = [];
  data.islandToPathMap = {};
};
