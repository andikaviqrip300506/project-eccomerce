import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style.css'

const app = createApp(App);

app.use(store);
app.use(router).mount('#app');
app.use(VueSweetalert2);
