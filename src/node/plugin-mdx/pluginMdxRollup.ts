import pluginMdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import type { Plugin } from 'vite';
import rehypePluginAutolinkHeadings from 'rehype-autolink-headings';
import rehypePluginSlug from 'rehype-slug';
import remarkPluginMDXFrontMatter from 'remark-mdx-frontmatter';
import remarkPluginFrontmatter from 'remark-frontmatter';
import { rehypePluginPreWrapper } from './rehypePlugins/preWrapper';
import { rehypePluginShiki } from './rehypePlugins/shiki';
import { remarkPluginToc } from './remarkPlugins/toc';
import shiki from 'shiki';

export async function pluginMdxRollup(): Promise<Plugin> {
  return pluginMdx({
    remarkPlugins: [
      remarkGfm,
      [remarkPluginMDXFrontMatter, { name: 'frontmatter' }],
      remarkPluginFrontmatter,
      remarkPluginToc
    ],
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: 'header-anchor'
          },
          content: {
            type: 'text',
            value: '#'
          }
        }
      ],
      rehypePluginPreWrapper,
      [
        rehypePluginShiki,
        {
          highlighter: await shiki.getHighlighter({
            theme: 'nord'
          })
        }
      ]
    ]
  }) as unknown as Plugin;
}
