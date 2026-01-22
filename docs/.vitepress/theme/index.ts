// .vitepress/theme/index.ts
// 引入 Teek 主题
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";  // 文章一级标题渐变色
import "vitepress-theme-teek/theme-chalk/tk-container-bg.css";  // 容器背景样式更改，内置 container-var
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";  // > 引用块样式
import "vitepress-theme-teek/theme-chalk/tk-mark.css";  // 标记样式
import "vitepress-theme-teek/theme-chalk/tk-table.css";  // 表格样式
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";  // 文章页淡入效果



// 自定义样式
import './style/custom-container.css' // 自定义容器样式
// import './style/custom-blockquote.css' // 自定义引用块样式
import './style/custom-vp.css' // 自定义vitepress样式


export default {
  extends: Teek,
};
