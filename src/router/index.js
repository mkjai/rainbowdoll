import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Specialization from '../views/Specialization.vue'
import Knits from '../views/specialization/Knits.vue'
import Sweater from '../views/specialization/Sweater.vue'
import Denim from '../views/specialization/Denim.vue'
import Factory from '../views/Factory.vue'
import Quote from '../views/Quote.vue'

const routes = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction,
    meta: { title: 'Rainbow Doll | Clothing Manufacturer & Sourcing Agent' },
  },
  {
    path: '/specialization',
    name: 'specialization',
    component: Specialization,
    meta: { title: 'Specialization | Rainbow Doll' },
  },
  {
    path: '/specialization/knits',
    name: 'knits',
    component: Knits,
    meta: { title: 'Knits Manufacturing | Rainbow Doll' },
  },
  {
    path: '/specialization/sweater',
    name: 'sweater',
    component: Sweater,
    meta: { title: 'Sweater Manufacturing | Rainbow Doll' },
  },
  {
    path: '/specialization/denim',
    name: 'denim',
    component: Denim,
    meta: { title: 'Denim Manufacturing | Rainbow Doll' },
  },
  {
    path: '/factory',
    name: 'factory',
    component: Factory,
    meta: { title: 'Our Factories | Rainbow Doll' },
  },
  {
    path: '/quote',
    name: 'quote',
    component: Quote,
    meta: { title: 'Get a Quote | Rainbow Doll' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Rainbow Doll'
})

export default router
