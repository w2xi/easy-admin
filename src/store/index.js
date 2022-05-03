import Vue from 'vue'
import Vuex from 'vuex'
import router, { resetRouter } from '../router'
import userApi from '../api/user'
import createRoutes from '../utils/createRoutes'
import {
  setToken,
  removeToken,
} from '../utils/auth'
import { toTree } from '../utils/common'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [],
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList
    },
    TOGGLE_SIDEBAR(state) {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false

      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
  },
  actions: {
    login({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        userApi.login(data)
          .then((res) => {
            const token = res.data.token
            setToken(token)

            dispatch('getUserInfo')

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    getUserInfo({ commit }){
      return new Promise((resolve, reject) => {
        userApi.info()
          .then((res) => {
            let menus = toTree(res.data.menus)

            commit('SET_MENU_LIST', menus)

            console.log(menus);

            const routes = createRoutes(menus)
            routes.forEach(item => router.addRoute(item))

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        userApi.logout()
          .then(() => {
            clearAll()
            resetRouter()

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    resetToken({ commit }) {
      return new Promise((resolve) => {
        removeToken()
        resolve()
      })
    },

    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
  },
  getters: {},
  modules: {},
})