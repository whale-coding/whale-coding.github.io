# 本地运行

依赖安装（只能用 pnpm 安装依赖）

```bash
pnpm install
```

文档项目启动

```bash
pnpm run docs:dev
```

可以运行以下命令来构建文档：

```bash
pnpm run docs:build
```

构建文档后，通过运行以下命令可以在本地预览它：

```bash
pnpm run docs:preview
```

`preview` 命令将启动一个本地静态 Web 服务 `http://localhost:4173`，该服务以 `.vitepress/dist` 作为源文件。这是检查生产版本在本地环境中是否正常的一种简单方法。
