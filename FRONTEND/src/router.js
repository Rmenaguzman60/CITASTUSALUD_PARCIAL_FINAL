import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import perfil from './components/perfil'
import citas from './components/citas'
import citamedica from './components/citamedica'
import citaodontologica from './components/citaodontologica'
import eventos from './components/eventos'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/citas',
      name: 'citas',
      component: citas
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: perfil
    },
    {
      path: '/citamedica',
      name: 'citamedica',
      component: citamedica
    },
    {
      path: '/citaodontologica',
      name: 'citaodontologica',
      component: citaodontologica
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: eventos
    }
  ]
})
