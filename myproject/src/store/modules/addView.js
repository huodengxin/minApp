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
        lat:"",
        id:""
    }
}
const mutations={
    //面试地址的定位
    updateState(state, obj){
        console.log("obj...",obj)
        state.current.address= obj.obj.address
        state.current.lng= obj.obj.location.lng
        state.current.lat= obj.obj.location.lat
        state.current.id= obj.obj.id
        console.log( "lat...",state.current.lat,"lng....", state.current.lng)
    },
    //初始定位
    chengeLoaction(state,obj){
        state.longitude=obj.longitude;
        state.latitude=obj.latitude;
    },
    gotoClock(state,obj){
        state.current.lat=obj.latitude;
        state.current.lng=obj.longitude;
        state.current.id= obj.id
        console.log( "lat1...",state.current.lat,"lng.1...", state.current.lng)
        wx.navigateTo({
            url:'/pages/clock/main?title='+obj.company
        })
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