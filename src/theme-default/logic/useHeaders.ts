import { useEffect, useState } from 'react';
import { Header } from 'shared/types';
import path from 'path';

export function useHeaders(initHeaders: Header[]) {
  const [headers, setHeaders] = useState(initHeaders);

  useEffect(() => {
    if (import.meta.env.DEV) {
      import('island:dev-root').then((res) => {
        import.meta.hot.on('mdx-changed', ({ filePath }) => {
          const relativePath = filePath.replace(res.default, '');

          // 拉取到vite处理后的模块内容
          import(
            /* @vite-ignore */ `${relativePath}?import&t=${Date.now()}`
          ).then((res) => {
            console.log(res);
            setHeaders(res.toc);
          });
        });
      });
    }
  });
  return headers;
}
