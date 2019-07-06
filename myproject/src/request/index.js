import request from "../utils/request"
//登录
export let login=code=>{
    return  request.post("/user/code2session", {
        code
    })
}
//面试列表
export let getLists=(status)=>{
    console.log("xxxx",status)
    return request.get("/sign",status)
}
//面试详情
export let getListDetails=(id)=>{
    return request.get("/sign/" + id)
} 
//个人中心
export let encryptDatas=(params)=>{
    return request.post("/user/decrypt", params)
}
//添加面试
export let addViewList=(obj)=>{
    return request.post("/sign", obj)
}
//更新面试
export let viewGiveup=(obj)=>{
    console.log("放弃面试...",obj)
    return request.put(`/sign/${obj.id}`,obj.params)
}
