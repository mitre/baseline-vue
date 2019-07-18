
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import "prismjs";
import Prism from "vue-prism-component";
import "prismjs/components/prism-ruby";
import "prismjs/themes/prism.css";
import "material-icons/iconfont/material-icons.css";

// import { Carousel, Slide } from 'vue-carousel';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
Vue.use(Vuesax)
  // Vue.component('carousel', Carousel);
  // Vue.component('slide', Slide);
}