// .vitepress/theme/index.ts
// 引入 Teek 主题
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";  // 文章一级标题渐变色
import "vitepress-theme-teek/theme-chalk/tk-container-bg.css";  // 容器背景样式更改，内置 container-var
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";  // > 引用块样式

export default {
  extends: Teek,
};
