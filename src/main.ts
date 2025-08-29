import { createApp } from 'vue'
import { createPinia } from 'pinia'
const SecretPiniaPlugin = (context: { store: any }) => {
  return {
    secret: 'the cake is a lie',
  }
}
const pinia = createPinia()
pinia.use(SecretPiniaPlugin)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
