module.exports = {
  title: 'Hello World',
  description: 'Just playing around',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Practice', link: '/practice/css' },
      { text: '面试题', link: '/note/note1' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/note/': [
        ['note1', '面试题 - 1'],
      ],
      '/practice/': [
        ['html', 'HTML'],
        ['css', 'CSS 世界'],
        ['js', 'JS 基础'],
        ['react', 'React'],
        ['node', 'Node.js'],
      ],
    }
  }
}
