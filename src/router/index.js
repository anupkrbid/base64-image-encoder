import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import Donate from '@/components/Donate';
import Tutorial from '@/components/Tutorial';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/tutorial', name: 'Tutorial', component: Tutorial },
    { path: '/faq', name: 'FAQ', component: FAQ },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },
    { path: '/donate', name: 'Donate', component: Donate },
    { path: '*', redirect: '/' }
  ]
})
