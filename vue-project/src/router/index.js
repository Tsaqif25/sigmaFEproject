import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RentFacility from '../views/RentFacility.vue'
import RentDetail from '../views/RentDetail.vue'
import Login from '../views/LoginView.vue'
import profileEdit from '../views/profileEdit.vue'
import history from '../views/History.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/RentDetail',
      name: 'RentDetail',
      component: RentDetail 
    },

    {
      path: '/RentFacility',
      name: 'RentFacility',
      component: RentFacility
    },

    {
      path: '/profileEdit',
      name: 'profileEdit',
      component:profileEdit 
    },

    {
      path: '/history',
      name: 'history',
      component:history 
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'notFound',
    //   component: NotFoundView
    // },
 

  ]
})

export default router
