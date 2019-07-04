import {addViewList} from "@/request"
const state={
    longitude:"",
    latitude:"",
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
    //面试地址的定位
    updateState(state, obj){
        state.current.address= obj.obj.address
        state.current.lng= obj.obj.location.lng
        state.current.lat= obj.obj.location.lat
    },
    //初始定位
    chengeLoaction(state,obj){
        state.longitude=obj.longitude;
        state.latitude=obj.latitude;
        console.log("long",state.longitude)
        console.log("lat",state.latitude)
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