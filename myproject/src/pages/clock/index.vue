<template>
    <div  class="mapBox">
          <Map/>  
          <p class="imgBox">
            <span>
              <img src="../../../static/images/location.png" alt="">
            </span>
          </p>
         <button class="addBtn">打卡</button>
    </div>
</template>
<script>
import Map from "@/components/Map.vue"
export default {
    props:{

    },
    components:{
        Map
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
.mapBox{
  width: 100%;
  height: 100%;
}
.imgBox{
  width: 100%;
  padding:20px;
  box-sizing: border-box;
  position: absolute;
  bottom:60px;
  display: flex;
  justify-content: space-between;
}
img{
  width: 34px;
  height: 34px;
}
.mine{
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius:50%; 
  background: #000;
}
.addBtn{
  width: 100%;
  position: fixed;
  width: 100%;
  height: 100rpx;
  background: #000;
  color: #fff;
  font-weight: 500;
  bottom: 0;
  left: 0;
  font-size: 40rpx;
  border-radius: 0;
}
</style>