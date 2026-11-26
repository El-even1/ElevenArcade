# Eleven Arcade · 十一号街机厅

eleven666.cyou 的游戏网站。纯静态，没有构建步骤：

| 路径 | 内容 |
| --- | --- |
| `index.html` | 首页（介绍页）：粒子随滚动变形 球 → 11 → ▶ → 多人 → 像素小怪，最下面是游戏卡片（介绍 + 立即游玩） |
| `arcade/index.html` | 游戏世界 · 像素街机厅：投币 → 镜头推进投币口 → 从机器屏幕拉出来进入街机厅；顶部是分区导航，每台机器一款游戏 |
| `data.js` | **全部内容数据**：分区（`zones`）和游戏（`games`）。上架新游戏 / 新分区只改这里 |
| `assets/` | 图标、游戏立绘 |

## 上架新游戏

在 `data.js` 的 `games` 里加一项（`zone` 填所属分区 id，`live: true` 表示可玩）。首页会多一张卡片，对应分区里会多一台机器（不足 4 台时用「维修中」机器补齐）。

## 新分区

在 `zones` 里加一项并做一个分区页面（比如 `ink/index.html`），把 `open` 设为 `true`、`href` 指向它。没开放的分区在导航里显示 SOON，点了提示「筹备中」。

## 本地预览

```bash
python3 -m http.server 8000
```

打开 http://localhost:8000 。`/arcade/#hall` 可以跳过投币直接进大厅。

## 部署（GitHub Pages → https://arcade.eleven666.cyou）

仓库根目录的 `CNAME` 文件写着自定义域名，`.nojekyll` 让 Pages 原样发布静态文件。

1. 仓库需为公开（或账号是 GitHub 付费版）。
2. Settings → Pages → Build and deployment：Source 选 **Deploy from a branch**，分支选发布分支、目录 `/ (root)`，保存。
3. 同一页 Custom domain 应自动显示 `arcade.eleven666.cyou`；证书签好后勾选 **Enforce HTTPS**。
4. 域名 DNS 加一条 CNAME：主机记录 `arcade` → `el-even1.github.io`。

之后往发布分支推送，网站一两分钟内自动更新。
