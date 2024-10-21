import "@/assets/styles/main.scss"

import { createApp } from 'vue'
import App from './App.vue'

import stores from "@/stores"
import router from "@/plugins"
import directives from "@/directives"

const app = createApp(App)

router(app)
directives(app)
stores(app)

app.mount("#app")