/* Eleven Arcade 的全部内容数据。上架新游戏 / 新分区只改这个文件。
 * 首页（index.html）和各分区页（如 arcade/index.html）都读 window.ARCADE。
 * 路径一律相对站点根目录写，页面里会按自己的位置补前缀。 */
window.ARCADE = {
  zones: [
    {
      id: 'pixel',
      name: '像素街机厅',
      en: 'PIXEL ARCADE',
      href: 'arcade/',
      desc: '投一枚币，走进十一号街机厅。每一台机器都是一款游戏。',
      open: true,
    },
    {
      id: 'ink',
      name: '水墨馆',
      en: 'INK HALL',
      desc: '一局一江湖。筹备中。',
      open: false,
    },
    {
      id: 'next',
      name: '新分区',
      en: 'COMING SOON',
      desc: '下一个分区正在施工。',
      open: false,
    },
  ],

  games: [
    {
      id: 'capital-croc',
      zone: 'pixel',
      name: '资本大鳄',
      en: 'CAPITAL CROC',
      url: 'https://capital-croc.eleven666.cyou',
      live: true,
      status: '联机试玩中',
      players: '4–6 人',
      blurb: '轮流当老板谈生意：凑投资人、谈分成、派代理人、送人出差、三连挖角——谈不拢就喊一声「我是大老板」把整单抢下来。',
      intro: '一张 16 格的生意地图，轮流当老板掷骰子，决定这单谈不谈。要做成生意，得凑齐对应领域的投资人：跟大家谈分成、打出代理人顶替、把对手送去出差、连挖三次角……实在谈不拢，喊一声「我是大老板」把整单抢下来。尔虞我诈二十分钟，钱最多的人才是真正的资本大鳄。',
      tags: ['多人联机', '谈判博弈', '派对', '手机可玩', '可单机练习'],
      stats: [['4–6', '玩家'], ['~20', '分钟一局'], ['6', '大领域']],
      color: '#ffc93c',
      art: ['med', 're', 'tech', 'energy', 'fin', 'ent'].map(k => 'assets/games/capital-croc/' + k + '.jpg'),
    },
  ],
};
