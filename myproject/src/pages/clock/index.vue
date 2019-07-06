<template>
  <div  class="mapBox">
   <Map :markers="markers" :updateDistance="updateDistance"/>
    <p class="imgBox">
      <span>
        <img src="../../../static/images/location.png" alt="">
      </span>
    </p>
    <button class="addBtn" @tap="goSign">打卡</button>
  </div>
</template>
<script>
import Map from "@/components/Map.vue"
import {mapState,mapActions} from "vuex"
export default {
    props:{
      
    },
    components:{
      Map
    },
    data(){
      return {
        distance: 0
      }
    },
    computed:{
      ...mapState({
        info:state=>state.addView.current
      }),
      distance(){
        return getDistance(this.info.lat, this.info.lng, )
    },
    markers(){
      if (this.info && Object.keys(this.info)){
        return [{
          iconPath: '/static/images/swbl3.jpg',
          latitude: this.info.lat,
          longitude: this.info.lng,
          width: 20,
          height: 20
        }]
      }else{
        return []
      }
    }
    },
    methods:{
      ...mapActions({
        updateDetail: 'viewList/giveupView'
      }),
      updateDistance(distance){
      this.distance = distance;
    },
    async goSign(){
      let distance = this.distance;
      console.log("distance...",this.distance)
      if (this.distance < 100){
        let result = await this.updateDetail({
          id: this.info.id,
          params: {
            status: 0,
            sign_time: +new Date()
          }
        })
        console.log('result...', result);
        wx.showToast({
          title: '打卡成功', //提示的内容,
          icon: 'none' //图标,
        });
      }else{
          if (this.distance > 1000){
            distance = (this.distance/1000).toFixed(2)+'公里'
          }else{
            distance = this.distance+'米'
          }
          console.log('distance...', distance, this.distance);
          wx.showToast({
            title: `你距目的地还有${distance},暂时还不能打卡`, //提示的内容
            icon: 'none'
          });
      }
    }
    },
    created(){

    },
    mounted(){

    },
    onLoad(option){
      console.log(option)
      wx.setNavigationBarTitle({
        title:option.title+'-打卡'
      })
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