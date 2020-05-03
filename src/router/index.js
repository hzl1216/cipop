import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import tissue from '../pages/tissue'
import individual from '../pages/individual'
import clinical from '../pages/clinical'
import rna from '../pages/rna'
import protein from '../pages/protein'
import phosphoprotein from '../pages/phosphoprotein'
import wes from '../pages/wes'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title:'home'
    }
  },
  {
    path: '/tissue',
    component: tissue
  },
  {
    path: '/individual',
    component: individual
  },
  {
    path: '/clinical',
    component: clinical
  },
  {
    path: '/rna',
    component: rna
  },
  {
    path: '/protein',
    component: protein
  },
  {
    path: '/phosphoprotein',
    component: phosphoprotein
  },
 
  {
    path: '/wes',
    component: wes
  }

]
export default new VueRouter({
  routes,
  //去掉地址栏的"/#/"
  mode : "history"
})
