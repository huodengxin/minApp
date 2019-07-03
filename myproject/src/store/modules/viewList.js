import {getLists,getListDetails} from "../../request"
function mapArr(arr){
    return arr.map(val=>{
        //对时间的处理
            if(val.create_time.includes("/")){
                val.create_time=val.create_time
            }else{
                val.create_time=new Date(Number(val.create_time)).toLocaleString()
            }  
        //对状态的处理
            if(val.status==-1){
                val.type='未开始'
            }else if (val.status==0){
                val.type='已打卡'
            }else{
                val.type='已放弃'
            }
            if(val.remind==-1){
                val.reminds="未提醒"
            }else{
                val.reminds="已提醒"
            }
            if(val.address.split(',').length>1){
                val.address=JSON.parse(val.address.split(',')[2].split(':')[1])
            }else{
                val.address=val.address
            }
            return val
    })
}
const state={
    ind:0,
    id:'',
    list:[
        {
            "title":"未开始",
            "id":-1,
        },{
            "title":"已打卡",
            "id":0
        },{
            "title":"已放弃",
            "id":1
        },{
        "title":"全部"
        }
    ],
    newArr:[],
    detailArr:[],
}
const mutations={
    //Tab切换
    listCheck(state, index){
        state.ind=index;
    },
    getListMutations(state, obj){
        if(obj.page===1){
            state.newArr=obj.arr;
        }
        else{
            state.newArr=[...state.newArr,...obj.arr];
        }
    },
    //去往面试列表详情页
    gotoDetail(state, id){
        console.log("id123..",id)
        state.id=id
        wx.navigateTo({
            url:'/pages/viewListDetail/main?id=' + id
        })
    },
    //面试详情数据
    getDetailList(state, obj){
        state.detailArr.unshift(obj)
        state.detailArr=mapArr(state.detailArr)
        wx.setNavigationBarTitle({title:state.detailArr[0].company})
    }
}
const getters={
     getListGetters(state){
        return  state.newArr=mapArr(state.newArr)
     }
}
const actions={
    //面试列表初始数据获取
    getList({commit},obj){
        getLists(obj).then(res=>{
            commit("getListMutations", {arr:res.data,page:obj.page})
        })
    },
    //面试详情数据获取
    getListDetail(state){
        getListDetails(state.state.id).then(res=>{
            state.commit("getDetailList", res.data)
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