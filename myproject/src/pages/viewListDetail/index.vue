<template>
    <div class="section">
        <p class="top">
            <span class="title">面试地址 : </span>
            <span>{{detailArr[0].address}}</span>
        </p>
        <p>
            <span class="title">面试时间 : </span>
            <span>{{detailArr[0].create_time}}</span>
        </p>
        <p>
            <span class="title">联系方式 : </span>
            <span>{{detailArr[0].phone}}</span>
        </p>
        <p>
            <span class="title">是否提醒 : </span>
            <span>{{detailArr[0].reminds}}</span>
        </p>
        <p>
            <span class="title">面试状态 : </span>
            <span>{{detailArr[0].type}}</span>
        </p>
        <div v-if="detailArr[0].status!==1">
            <p class="bottom">
                <span class="title">取消提醒 : </span>
                <switch @change="changeRemind"/>
            </p>
            <div class="btnBox"> 
                <button class="left" @click="gotoClock(detailArr[0].company)">去打卡</button>
                <button class="right" 
                    @click="giveUp">放弃面试</button>
            </div>
        </div>    
    </div>
</template>
<script>
import {mapActions, mapMutations, mapState} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            check:false
        }
    },
    computed:{
        ...mapState({
            "detailArr" : state=>state.viewList.detailArr
        })
    },
    methods:{
        ...mapActions({
            getListDetail : "viewList/getListDetail",
            giveupView:"viewList/giveupView"
        }),
        ...mapMutations({
            getDetailList : "viewList/getDetailList"
        }),
        async giveUp(){
            let data= await this.giveupView({id:this.detailArr[0].id,params:{status:1}}) 
            if(data.code==0){
                wx.showModal({
                    title:'温馨提示',
                    content:'确定要放弃吗',
                    success (res) {
                    if (res.confirm) { 
                        wx.showToast({
                            title:data.msg
                        })         
                } else if (res.cancel) {
                console.log('用户点击取消')
                }}
            })
            }
           
           
        },
        async changeRemind(e){
            console.log(e.target.value)
            if(e.target.value){
                let data= await this.giveupView({id:this.detailArr[0].id,params:{remind	:1}})
                console.log("xuyaode...",data)
                if(data.code==0){
                    wx.showToast({
                        title:data.msg
                    })
                }
            }
            
        },
        gotoClock(title){
            wx.navigateTo({
                url:'/pages/clock/main?title='+title
            })
        }
    },
    created(){
       
    },
    mounted(){

    },
    onLoad(){
        this.getListDetail()
       
    }
}
</script>
<style>
    p{
        height: 42px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        margin:0 12px;
        font-size: 16px;
    }
    .section{
        border-top:1px solid #ccc; 
    }
    .bottom{
        margin: 0; 
        padding-left: 12px;
    }
    .title{
        width: 100px;
        color:#666;
    }
    .btnBox{
        display: flex;
        margin: 40px 15px;
    }
    .left{
        width: 46%;
        background:#197dbf;
        color:#fff;
        border-radius: 0; 
    }
    .right{
        width: 46%;
        background:#dc4e42;
        color:#fff; 
        border-radius: 0; 
    }
</style>