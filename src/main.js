import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// 挂载路由
import router from './router'
app.use(router)
// 挂载Pinia
import { createPinia } from 'pinia'
app.use(createPinia())
app.mount('#app')
