import { createApp } from 'vue'
import App from './App.vue'
import VueWriter from "vue-writer";
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueKinesis from "vue-kinesis";

const vuetify = createVuetify({
  components,
  directives,
})

import './styles/styles.scss'
//icons
import "primeicons/primeicons.css";


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(VueWriter)
app.use(VueKinesis)
app.mount('#app')
