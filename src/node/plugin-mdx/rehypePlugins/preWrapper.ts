import type { Plugin } from 'unified';

import { visit } from 'unist-util-visit';
import type { Element, Root } from 'hast';

export const rehypePluginPreWrapper: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' &&
        node.children[0]?.type === 'element' &&
        node.children[0]?.tagName === 'code' &&
        node.data?.isVisited !== true
      ) {
        const codeNode = node.children[0] as Element;
        const codeClassName = codeNode.properties?.className?.toString() || '';
        const lang = codeClassName.replace('language-', '');

        const cloneNode: Element = {
          type: 'element',
          tagName: 'pre',
          children: node.children,
          properties: {
            className: codeClassName
          },
          data: {
            isVisited: true
          }
        };

        node.tagName = 'div';
        node.properties = node.properties || {};
        node.properties.className = codeClassName;

        node.children = [
          {
            type: 'element',
            tagName: 'span',
            properties: {
              className: 'code-lang'
            },
            children: [
              {
                type: 'text',
                value: lang
              }
            ]
          },
          cloneNode
        ];
      }
    });
  };
};
