import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huggingface数据集格式规范",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'CSV', link: '/' },
      { text: 'JSON', link: '/JSON' },
      { text: 'Parquet', link: '/Parquet'},
      { text: 'Text', link: '/Text'},
      { text: 'Arrow', link: '/Arrow'},
      { text: 'ImageFolder', link: '/ImageFolder'},
      { text: 'AudioFolder', link: '/AudioFolder'},
      { text: 'Webdataset', link: '/Webdataset'}
    ],

    sidebar: [
      {
        text: 'CSV',
        items: [
          { text: 'JSON', link: '/JSON' },
          { text: 'Parquet', link: '/Parquet' },
          { text: 'Text', link: '/Text'},
          { text: 'Arrow', link: '/Arrow'},
          { text: 'ImageFolder', link: '/ImageFolder'},
          { text: 'AudioFolder', link: '/AudioFolder'},
          { text: 'Webdataset', link: '/Webdataset'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
