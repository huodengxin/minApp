import {addViewList} from "@/request"
const state={
    longitude:"113.324520",
    latitude:"23.099994",
    current: {
        company: '',
        phone: '',
        address: '',
        description: '',
        lng:"",
        lat:""
    }
}
const mutations={
    updateState(state, obj){
        console.log(obj.obj.location)
        state.current.address= obj.obj.address
        state.current.lng= obj.obj.location.lng
        state.current.lat= obj.obj.location.lat
    }
}
const getters={
   
}
const actions={
    async addViewActions({commit}, obj){
        let data=await addViewList(obj)
        return data
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}