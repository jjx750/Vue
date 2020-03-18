import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//get数据
import getRequest from './data/js/getRequest'
Vue.prototype.getRequest = getRequest;
// loading
import getloading from './data/js/loading'
Vue.prototype.getloading = getloading;
// vant
import { Loading } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Toast } from 'vant';
import { Divider } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Sku } from 'vant';
import { Button } from 'vant';
import { AddressEdit } from 'vant';
import { AddressList } from 'vant';
import { Area } from 'vant';

Vue.use(Loading);
Vue.use(AddressList);
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Button);
Vue.use(Sku);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Divider);
Vue.use(Toast);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Image);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
