import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DesignFromPixsoView from '../views/DesignFromPixsoView.vue'
import HomeView from '../views/HomeView.vue'
import Pixso183MobileView from '../views/Pixso183MobileView.vue'
import PixsoAboutMeView from '../views/PixsoAboutMeView.vue'
import PixsoArticleDetailView from '../views/PixsoArticleDetailView.vue'
import PostView from '../views/PostView.vue'

// GitHub Pages 对子路径（如 /design、/posts/xxx）直接访问会 404，除非服务端配 SPA 回退。
// Hash 路由（/#/design）不依赖服务器重写，线上本地都稳定。
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: DesignFromPixsoView, meta: { fullBleed: true } },
    { path: '/blog', name: 'blog', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/design', redirect: '/' },
    {
      path: '/pixso-183',
      name: 'pixso-183',
      component: Pixso183MobileView,
      meta: { fullBleed: true },
    },
    {
      path: '/article/sample',
      name: 'article-sample-pixso',
      component: PixsoArticleDetailView,
      meta: { fullBleed: true },
    },
    {
      path: '/about-me',
      name: 'about-me-pixso',
      component: PixsoAboutMeView,
      meta: { fullBleed: true },
    },
    { path: '/posts/:slug', name: 'post', component: PostView, props: true },
  ],
})

export default router
