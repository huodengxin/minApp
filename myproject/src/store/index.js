import Vue from "vue"
import Vuex from "vuex"
import addView from "./modules/addView"
import viewList from "./modules/viewList"
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        addView,
        viewList
    }
})