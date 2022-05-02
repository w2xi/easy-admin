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

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [],
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList
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
        userApi.getUserInfo()
          .then((res) => {
            let menus = toTree(res.data.menus)

            commit('SET_MENU_LIST', menus)

            console.log(menus);

            const routes = createRoutes(menus)

            console.log(routes);
  
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
  },
  getters: {},
  modules: {},
})