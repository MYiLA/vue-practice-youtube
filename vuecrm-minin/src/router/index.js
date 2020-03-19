import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // шаг 3. регистрация новых роутов происходит путем добавления новых объектов сюда
  {
    // путь роута
    path: '/login',
    // название роута
    name: 'login',
    // передача дополнительных свойств роуту
    meta: { layout: 'empty' }, // передаем ему нужную страницу
    // название компонента(пишем через функцию, чтобы сделать ленивую загрузку)
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: { layout: 'main' },
    component: () => import('../views/Detail-record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
