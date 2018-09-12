import Vue from 'vue';
import VueRouter from 'vue-router';

// conatiners
import { AppContainer } from '../components/containers/App';
import { CounterContainer } from '../components/containers/Counter';
import { ListContainer } from '../components/containers/List';
import { FormContainer } from '../components/containers/Form';
import { DashboardContainer } from '../components/containers/Dashboard';

// modules
import { Navbar } from '../components/modules/Navbar';


// register the plugin
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: AppContainer,
      name: 'index',
      path: '/',
    }, {
      component: CounterContainer,
      name: 'counter',
      path: '/counter',
    }, {
      component: ListContainer,
      name: 'list',
      path: '/list',
    }, {
      component: FormContainer,
      name: 'form',
      path: '/form',
    }, {
      component: DashboardContainer,
      name: 'dashboard',
      path: '/dashboard',
    }, {
      component: DashboardContainer,
      name: 'dashboard',
      path: '/dashboard',
    }
  ],
});

export default router;
