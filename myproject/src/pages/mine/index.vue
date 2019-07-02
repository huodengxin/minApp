<template>
    <div class='myBox'>
        <div class="myTop">
            <div class="imgs">
                <img src="../../../static/images/my.png" alt="">
            </div>
            <div class="user">
                {{phoneNumber}}
            </div>
        </div>
        <div class='myBottom'>
           <p>
               <span>
                   <icon class="_icon data-v-636e9b19" size="18" type="waiting" role="img"></icon>
                    我的面试
               </span>
                <span>
                    <img src="../../../static/images/arrow.svg" alt="">
                </span>
           </p> 
            <p>
               <span>
                   <icon class="_icon data-v-636e9b19" size="18" type="info" role="img"></icon>
                   客服中心
               </span>
                <span>
                     <img src="../../../static/images/arrow.svg" alt="">
                </span>
           </p>
           <p v-if="!btnShow">
               <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取授权</button>
           </p> 
            <p v-if="showSetting">
               <button open-type="openSetting">设置</button>
           </p> 
        </div>
    </div>
</template>
<script>
import {encryptDatas} from "@/request"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phoneNumber:"",
            showSetting:false,
            btnShow:false
        }
    },
    computed:{

    },
    methods:{
        async getPhoneNumber(e){
             console.log("e....",e)
            if(e.target.errMsg=='getPhoneNumber:ok'){
                //授权成功
                console.log(0)
                let data=await encryptDatas({
                   encryptedData:e.target.encryptedData,
                   iv:e.target.iv 
                })
                //  this.showSetting=true;
                 this.phoneNumber=data.data.phoneNumber.slice(0,3)+"****"+data.data.phoneNumber.slice(7,11)
            }
        }
    },
    created(){
        let that=this;
        wx.getSetting({
            success (res) {
            console.log("auth...",res)
            if(res.authSetting['scope.userInfo']){
                wx.getUserInfo({
                    withCredentials:true,
                    success(res){
                        that.btnShow=true;
                        console.log("userInfo...",res)
                    }
                })
            }else{
                that.btnShow=false
            }
        },
        fail: function(error) {
                console.error("error",error);
            },
        complete: function(res) {
                console.log("res3...",res);
            }
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.myBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.myTop{
    background: #f4f6f9;
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.imgs{
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 50%; 
}
img{
    width: 50px;
    height: 50px;
}
.user{
   padding-top: 20px;
}
p{
    padding: 20px;
    border-bottom: 1px solid #eee;
    color:#666;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
span{
    display: flex;
    align-items: center;
}
icon{
    margin-right: 20px;
}
span img{
    width: 20px;
    height: 20px;
}
</style>