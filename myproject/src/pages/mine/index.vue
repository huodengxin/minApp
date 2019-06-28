<template>
    <div class='myBox'>
        <div class="myTop">
            <div class="imgs">
                <img src="../../../static/images/my.png" alt="">
            </div>
            <div class="user">
                **********
            </div>
        </div>
        <div class='myBottom'>
           <p>
               <span>
                   <icon class="_icon data-v-636e9b19" size="18" type="waiting" role="img"></icon>
                    我的面试
               </span>
                <span>
                    >
                </span>
           </p> 
            <p>
               <span>
                    <icon class="_icon data-v-636e9b19" size="18" type="waiting" role="img"></icon>
                   客服中心
               </span>
                <span>
                    >
                </span>
           </p> 
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
    border-bottom: 1px solid #ccc;
    color:#999;
}
</style>