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

## 部署（和资本大鳄同一台服务器，Caddy）

1. DNS：`eleven666.cyou`、`www.eleven666.cyou` 两条 A 记录指向服务器 IP。
2. 把仓库放到服务器 `/srv/elevenarcade`（`git clone` 或 `scp -r`）。
3. `/etc/caddy/Caddyfile`：

```caddyfile
eleven666.cyou, www.eleven666.cyou {
    root * /srv/elevenarcade
    encode gzip
    file_server
}

capital-croc.eleven666.cyou {
    reverse_proxy localhost:2567
}
```

4. `sudo systemctl reload caddy`。更新网站只需在服务器上 `git pull`，不用重启。
