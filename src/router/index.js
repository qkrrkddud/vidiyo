import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderJoinMembership from '../views/HeaderJoinMembership.vue'
import HeaderLogin from '../views/HeaderLogin.vue'
import HomeView from '../views/HomeView.vue'
import SearchMovie from '../views/SearchMovie.vue'
import DetailPage from '../views/DetailPage.vue'
import EvalView from '../views/EvalView.vue'
import StorageView from '../views/StorageView.vue'
import AppProfile from '../views/AppProfile.vue'
import ActorDetail from '../views/ActorDetail.vue'
import CustomerView from '../views/CustomerView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import QustList from '../views/QustList.vue'
import QusttList from '../views/QusttList.vue'
import RegisterInquiry from '../views/RegisterInquiry.vue'
import CustomerAnswer from '../views/CustomerAnswer.vue'
import InquiryList from '../views/InquiryList.vue'

const routes = [
  {
    path: '/search',
    name: 'search',
    component: SearchMain
  },

  {
    path: '/joinmembership',
    name: 'joinmembership',
    component: HeaderJoinMembership
  },
  {
    path: '/login',
    name: 'login',
    component: HeaderLogin
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/searchmovie',
    name: 'searchmovie',
    component: SearchMovie
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailPage
  },
  {
    path: '/Eval',
    name: 'Eval',
    component: EvalView
  },
  {
    path: '/storage',
    name: 'storage',
    component: StorageView
  },
  {
    path: '/profile',
    name: 'profile',
    component: AppProfile
  },
  {
    path: '/actor',
    name: 'actor',
    component: ActorDetail
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieDetail
  },
  {
    path: '/customorlist',
    name: 'customorlist',
    component: QustList
  },
  {
    path: '/customerand',
    name: 'customerand',
    component: QusttList
  },
  {
    path: '/registeri',
    name: 'registeri',
    component: RegisterInquiry
  },
  {
    path: '/answer',
    name: 'answer',
    component: CustomerAnswer
  },
  {
    path: '/inlist',
    name: 'inlist',
    component: InquiryList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
