<template>
    <div class="wrapper">
        <p class="box">
            <span>北京</span>
            <input type="text" placeholder="面试地址" @input="getsuggest">
        </p>
        <ul class="searchList">
            <li v-for="(item, index) in suggestions" :key="index"  @click="select(index)">
                <img src="../../../static/images/location.svg" alt="">
                <view>
                    <p>{{item.title}}</p>
                    <p class="addr">{{item.address}}</p>
                </view>
            </li>
        </ul>
    </div>
</template>
<script>
import QQMapWX from "@/utils/qqMap"
import{mapMutations} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            suggestions:[]
        }
    },
    computed:{
    },  
    methods:{
        ...mapMutations({
            updateState: 'addView/updateState'
        }),
        getsuggest(e){
            let qqmapsdk = new QQMapWX({
                key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
            });
             var _this = this;
            //调用关键词提示接口
            let timer=null;
            clearTimeout(timer)
            timer=setTimeout(()=>{
                qqmapsdk.getSuggestion({
                keyword: e.target.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
                success: function(res) {//搜索成功后的回调
                    _this.suggestions=res.data
                }
            })
            },1500)
           
        },
        select(index){
            this.updateState({
                obj: this.suggestions[index]
            })
            wx.navigateBack();
        }
    },
    created(){
       
    },
    mounted(){
    }
}
</script>
<style>
    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .box{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ccc;
        padding: 5px 10px;
        display: flex;
        align-items: center;
    }
    span{
        width: 80px;
        text-align: center;
    }
    input{
        border-left: 1px solid #ccc;
        padding: 0 15px;
    }
    .searchList{
        width: 100%;
        box-sizing: border-box;
        flex: 1;
    }
    .searchList li{
        width: 100%;
        height: 42px;
        padding: 5px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
    }
     .searchList li img{
        width: 44rpx;
        height: 44rpx;
        margin: 0 20px;
     }
    .addr{
        font-size: 24rpx;
        color: #999;
    }
</style>