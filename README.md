# HORIZONIER / 地平线行者

这是一个静态版个人宇宙入口网站原型。

## 当前版本

- 首页保持 16:9 桌面首屏 UI。
- 顶部只保留 logo + HORIZONIER、关于我、进入宇宙。
- 中心为大魔王核心，六个星球沿椭圆轨道排布。
- 键盘左右键切换星球，Enter 进入当前星球，Esc 返回首页。
- 点击任意星球直接进入对应世界页。
- 底部保留地球 / 湖光 / 地平线视觉。

## 本地运行

因为是纯静态项目，不需要安装依赖：

```bash
python3 -m http.server 5173
```

然后打开：

```text
http://localhost:5173
```

## GitHub Pages 部署

仓库里已经包含 `.github/workflows/pages.yml`。

推到 GitHub 后：

1. 打开仓库 Settings → Pages
2. Source 选择 GitHub Actions
3. 推送到 `main` 分支后会自动部署

## 文件结构

```text
index.html
styles.css
script.js
.github/workflows/pages.yml
README.md
```

## 后续建议

下一步可以把六个星球页从占位内容升级为真正模块：

- 摄影星球：作品、系列、数据库、摄影笔记
- AI4S 星球：工具流、方法论、实验记录、视频内容
- 阅读星球：公众号文章、读书笔记、知识地图
- 护肤实验星球：成分研究、配方迭代、产品实验
- 投资星球：市场观察、公司研究、周期框架
- Lab 星球：原型项目、工具实验、灵感白板
