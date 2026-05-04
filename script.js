const planets = [
  {
    id: 'photography',
    cn: '摄影星球',
    label: '摄影',
    en: 'Photography World',
    desc: '城市观察、风景、系列摄影与视觉档案。',
    lines: ['光是我的语言，影像是我与世界的对话。', '定格光影，收藏瞬间。'],
    color: 'radial-gradient(circle at 30% 26%, #ffe1a5 0 5%, #b4762b 18%, #42301f 40%, #0b0c0e 74%)',
    glow: 'rgba(240, 178, 76, .48)',
    tiles: ['精选作品', '系列档案', '摄影数据库', '摄影笔记']
  },
  {
    id: 'ai4s',
    cn: 'AI4S 星球',
    label: 'AI4S',
    en: 'AI for Science',
    desc: '工具流、方法论、实验记录、模型与科学应用。',
    lines: ['在 AI 与科学的交汇处，把数据、算法与物理世界连接成可验证的洞察。'],
    color: 'radial-gradient(circle at 33% 24%, #d8f7ff 0 5%, #1f74a7 18%, #0d2e4b 48%, #07111d 76%)',
    glow: 'rgba(82, 177, 236, .46)',
    tiles: ['重点专题', '工具与方法', '实验记录', '视频内容']
  },
  {
    id: 'reading',
    cn: '阅读星球',
    label: '阅读',
    en: 'Reading World',
    desc: '公众号文章、读书笔记、知识系统与长期思考。',
    lines: ['持续阅读，长期思考，慢慢写作。'],
    color: 'radial-gradient(circle at 35% 25%, #fff0c2 0 6%, #a67837 22%, #3b2e22 50%, #090908 78%)',
    glow: 'rgba(224, 171, 88, .42)',
    tiles: ['精选文章', '读书笔记', '知识地图', '本月书单']
  },
  {
    id: 'skinlab',
    cn: '护肤实验星球',
    label: '护肤实验',
    en: 'Skin Lab World',
    desc: '功能性护肤、生物技术、原料研究与产品实验。',
    lines: ['以科学为语言，以数据为基石，探索皮肤的本质。'],
    color: 'radial-gradient(circle at 35% 25%, #d2fff1 0 6%, #3fa889 20%, #174f4c 48%, #071113 76%)',
    glow: 'rgba(89, 224, 189, .42)',
    tiles: ['核心实验', '成分研究', '配方迭代', '产品实验笔记']
  },
  {
    id: 'investment',
    cn: '投资星球',
    label: '投资',
    en: 'Investment World',
    desc: '市场观察、周期判断、公司研究与投资框架。',
    lines: ['在不确定的宇宙中寻找可复利的确定性。'],
    color: 'radial-gradient(circle at 34% 24%, #ffdfa9 0 6%, #9b5d31 20%, #3a1f24 52%, #08080a 78%)',
    glow: 'rgba(213, 117, 79, .45)',
    tiles: ['重点观察', '市场观察', '公司研究', '周期与框架']
  },
  {
    id: 'lab',
    cn: 'Lab 星球',
    label: 'Lab',
    en: 'Lab World',
    desc: '项目原型、工具实验、跨界想法与未来构想。',
    lines: ['在这里搭建原型、验证想法，把灵感落地成可用方案。'],
    color: 'radial-gradient(circle at 35% 24%, #f2deff 0 6%, #8b56c7 22%, #281f4b 50%, #090910 76%)',
    glow: 'rgba(178, 112, 255, .44)',
    tiles: ['实验项目', '原型展示', '灵感白板', '工具与工作流']
  }
];

const slots = [
  { x: '22%', y: '67%', size: '112px', scale: 1.18, z: 8 },
  { x: '42%', y: '26%', size: '88px', scale: 1, z: 4 },
  { x: '77%', y: '28%', size: '92px', scale: 1.02, z: 4 },
  { x: '92%', y: '52%', size: '96px', scale: 1.04, z: 4 },
  { x: '72%', y: '72%', size: '92px', scale: 1, z: 4 },
  { x: '48%', y: '78%', size: '78px', scale: .92, z: 3 }
];

let selected = 0;
const planetLayer = document.getElementById('planetLayer');
const planetCard = document.getElementById('planetCard');
const homeView = document.getElementById('home-view');
const worldView = document.getElementById('world-view');

function renderPlanets() {
  planetLayer.innerHTML = '';
  planets.forEach((planet, i) => {
    const relative = (i - selected + planets.length) % planets.length;
    const slot = slots[relative];
    const el = document.createElement('button');
    el.className = `planet slot-${relative} ${relative === 0 ? 'is-active' : ''}`;
    el.type = 'button';
    el.setAttribute('aria-label', `进入${planet.cn}`);
    el.style.setProperty('--x', slot.x);
    el.style.setProperty('--y', slot.y);
    el.style.setProperty('--size', slot.size);
    el.style.setProperty('--scale', slot.scale);
    el.style.setProperty('--z', slot.z);
    el.style.setProperty('--planet-bg', planet.color);
    el.style.setProperty('--planet-glow', planet.glow);
    el.innerHTML = `<span class="planet-label">${planet.label}</span>`;
    el.addEventListener('click', () => openWorld(i));
    planetLayer.appendChild(el);
  });
  renderCard();
}

function renderCard() {
  const p = planets[selected];
  planetCard.style.setProperty('--planet-bg', p.color);
  planetCard.style.setProperty('--planet-glow', p.glow);
  planetCard.innerHTML = `
    <div class="card-status">✦ 已选中</div>
    <h2>${p.cn}</h2>
    <div class="english">${p.en}</div>
    <div class="divider"></div>
    <p>${p.desc}</p>
    <div class="card-hint">点击星球，进入这个世界  ›</div>
  `;
}

function nextPlanet(direction = 1) {
  selected = (selected + direction + planets.length) % planets.length;
  renderPlanets();
}

function openWorld(index = selected) {
  selected = index;
  const p = planets[selected];
  location.hash = p.id;
  renderWorld(p);
}

function renderWorld(p) {
  homeView.classList.remove('is-active');
  worldView.classList.add('is-active');
  worldView.innerHTML = `
    <div class="world-content">
      <section class="world-hero">
        <h1>${p.cn}</h1>
        <div class="subtitle">${p.en}</div>
        <p>${p.lines.join('<br />')}<br />这里是 ${p.cn} 的第一版内容骨架，后续可以接入文章、图片、视频号或数据库。</p>
        <div class="world-actions">
          <a class="solid-btn" href="#home">返回宇宙入口</a>
          <a class="ghost-btn" href="#${p.id}">当前星球</a>
        </div>
      </section>
      <section class="world-grid">
        ${p.tiles.map((tile, i) => `<article class="world-tile"><h3>0${i + 1} ${tile}</h3><p>预留内容模块。后续可连接 Markdown、CMS、摄影数据库或外部平台。</p></article>`).join('')}
      </section>
    </div>
  `;
}

function route() {
  const hash = (location.hash || '#home').replace('#', '');
  if (hash === 'home' || hash === '') {
    worldView.classList.remove('is-active');
    homeView.classList.add('is-active');
    return;
  }
  if (hash === 'about') {
    worldView.classList.add('is-active');
    homeView.classList.remove('is-active');
    worldView.innerHTML = `
      <div class="world-content">
        <section class="world-hero">
          <h1>关于我</h1>
          <div class="subtitle">About HORIZONIER</div>
          <p>这里是地平线行者的个人宇宙说明页。后续可以写入你的个人简介、内容版图、平台入口与联系方式。</p>
          <div class="world-actions"><a class="solid-btn" href="#home">返回宇宙入口</a></div>
        </section>
        <section class="world-grid">
          <article class="world-tile"><h3>01 我是谁</h3><p>个人简介与核心定位。</p></article>
          <article class="world-tile"><h3>02 我在做什么</h3><p>摄影、AI4S、护肤实验、阅读、投资与 Lab。</p></article>
          <article class="world-tile"><h3>03 内容入口</h3><p>微信公众号、视频号、Bilibili、网站专栏。</p></article>
          <article class="world-tile"><h3>04 联系方式</h3><p>后续可补充邮箱、二维码或商务合作入口。</p></article>
        </section>
      </div>`;
    return;
  }
  const idx = planets.findIndex(p => p.id === hash);
  if (idx >= 0) {
    selected = idx;
    renderPlanets();
    renderWorld(planets[idx]);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    if (!homeView.classList.contains('is-active')) location.hash = 'home';
    nextPlanet(1);
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    if (!homeView.classList.contains('is-active')) location.hash = 'home';
    nextPlanet(-1);
  }
  if (event.key === 'Enter' && homeView.classList.contains('is-active')) {
    event.preventDefault();
    openWorld(selected);
  }
  if (event.key === 'Escape') {
    location.hash = 'home';
  }
});

window.addEventListener('hashchange', route);
renderPlanets();
route();
