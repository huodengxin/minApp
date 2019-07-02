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
   list:[
    {
        "title":"未开始"
    },{
        "title":"已打卡"
    },{
        "title":"已放弃"
    },{
      "title":"全部"
    }
    ],
    newArr:[],
    newList:[],
    id:"",
    detailArr:[]
}
const mutations={
    //Tab切换
    listCheck(state,index){
        state.ind=index;
    },
    getListMutations(state,arr){
        state.newArr=arr;

    },
    //去往面试列表详情页
    gotoDetail(state,id){
        state.id=id;
        wx.navigateTo({
            url:'/pages/viewListDetail/main?id='+id
          })
    },
    //面试详情数据
    getDetailList(state,obj){
        state.detailArr.unshift(obj)
        state.detailArr=mapArr(state.detailArr)
        wx.setNavigationBarTitle({title:state.detailArr[0].company})
    }
}
const getters={
    getListGetters(state){
        state.newArr=mapArr(state.newArr)
         //切换时对数据的筛选
        if(state.ind===3){
            return state.newArr  
        }else{
            state.newList=state.newArr.filter(val=>val.type==state.list[state.ind].title)
        }  
        return state.newList
    }
}
const actions={
    //面试列表初始数据获取
    getList({commit}){
        getLists().then(res=>{
            commit("getListMutations",res.data)
        })
    },
    //面试详情数据获取
    getListDetail(state){
        getListDetails(state.state.id).then(res=>{
            state.commit("getDetailList",res.data)
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