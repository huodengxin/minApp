import request from "../utils/request"
//登录
export let login=code=>{
   return  request.post("/user/code2session",{
           code
    })
}
//面试列表
export let getLists=()=>{
    return request.get("/sign")
}
//面试详情
export let getListDetails=(id)=>{
    return request.get("/sign/"+id)
} 
//个人中心
export let encryptDatas=(params)=>{
    return request.post("/user/decrypt",params)
}
