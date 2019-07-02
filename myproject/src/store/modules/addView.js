import request from "../../utils/request"
const state={
    num:105,
    longitude:"113.324520",
    latitude:"23.099994",
    current: {
        company: '',
        phone: '',
        address: '',
        description: ''
      }
}
const mutations={
    updateState(state, obj){
        console.log(obj.obj.address)
        state.current.address= obj.obj.address
    }
}
const getters={
    getNum(state){
        return state.num
    }
}
const actions={
   addViewActions({commit},obj){
       console.log(obj)
     request.post("/sign",obj).then(res=>{
       console.log(res)
        // commit("addViewMutions",res)
     }) 
   }
}
export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}