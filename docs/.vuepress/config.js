module.exports = {
  title: 'Hello World',
  description: 'Just playing around',
  theme: 'reco',
  base: '/blog/',
  themeConfig: {
    type: 'blog',
    author: 'liihom',
    authorAvatar: '/cat.jpeg',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Practice', link: '/practice/css' },
      { text: '面试题', link: '/note/note1' },
      { icon: 'reco-github', link: 'https://liihom.github.io/blog/' },
    ],
    blogConfig: {
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    },
    sidebar: {
      '/note/': [
        ['note1', '面试题 - 1'],
        ['git', 'git command alias'],
        ['player', '视频'],
      ],
      '/practice/': [
        ['html', 'HTML'],
        ['css', 'CSS 世界'],
        ['js', 'JS 基础'],
        ['react', 'React'],
        ['node', 'Node.js'],
        ['webrtc', 'WebRTC'],
      ],
    },
    subSidebar: 'auto',
  }
}
