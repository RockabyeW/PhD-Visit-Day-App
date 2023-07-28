import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'
import professor from './professor.json'
import schedule from './schedule.json'
import lab from './lab.json'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import Reimbursement from "./views/Reimbursement.vue";
import questions from './Questions.json'
const app = createApp(App)
app.use(BootstrapVueNext)

app.config.globalProperties.schedule = schedule;
app.config.globalProperties.professor = professor;
app.config.globalProperties.lab = lab;

app.use(router)
app.use(BootstrapVueNext)

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;
import Attraction from './Landscape.json'
app.config.globalProperties.Attraction = Attraction;

import Dining from './Dining.json'
app.config.globalProperties.Dining = Dining;
app.config.globalProperties.questions = questions;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

import Navigation from './Navigation.json'
app.config.globalProperties.Navigation = Navigation;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
app.component("Reimbursement", Reimbursement);
