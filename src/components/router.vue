<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import VBind from '../components/VBind.vue'
import VHtml from '../components/VHtml.vue'
import EventHandling from '../components/EventHandling.vue'
import KeyboardEvent from '../components/KeyboardEvent.vue'
import Computed from '../components/Computed.vue'
import Watch from '../components/Watch.vue'
import Style from '../components/Style.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/helloworld', component: HelloWorld },
  { path: '/vbind', component: VBind },
  { path: '/vhtml', component: VHtml },
  { path: '/EventHandling', component: EventHandling },
  { path: '/KeyboardEvent', component: KeyboardEvent },
  { path: '/Computed', component: Computed },
  { path: '/Watch', component: Watch },
  { path: '/Style', component: Style },
];

const router = new VueRouter({
  routes
});

export default router;



</script>

