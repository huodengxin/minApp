<template>
          <div class="section">
            <p class="top">
                <span class="title">面试地址:</span>
                <span>吉林市长春市朝阳区西港路767号</span>
            </p>
            <p>
                <span class="title">面试时间:</span>
                <span>2016-06-29 16:00</span>
            </p>
            <p>
                <span class="title">联系方式:</span>
                <span>18355162035</span>
            </p>
            <p>
                <span class="title">是否提醒:</span>
                <span>未提醒</span>
            </p>
             <p>
                <span class="title">面试状态:</span>
                <span>未开始</span>
            </p>
            <p class="bottom">
                <span class="title">取消提醒:</span>
                <switch/>
            </p>
            <div class="btnBox"> 
                <button class="left">去打卡</button>
                <button class="right">放弃面试</button>
            </div>
        </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

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