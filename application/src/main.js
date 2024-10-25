import "@/assets/styles/main.scss"

import "vegaia-style/lib/vegaia-style.css"

import { createApp } from 'vue'
import App from './App.vue'

import stores from "@/stores"
import router from "@/router"
import directives from "@/directives"

const app = createApp(App)

router(app)
directives(app)
stores(app)

app.mount("#app")