<template>
    <div class="map">
        <map id="map" 
            :longitude="location.longitude"
            :latitude="location.latitude"
            scale="14"
            show-location
            :circles="circle"
            :include-points="points"
            :markers="markers"
            @markertap="markertap"
            @regionchange="regionChange"
            style="width: 100%; height: 300px;">
        </map>
        
    </div>    
</template>
<script>
import {getLocation, getAuth} from '@/utils/index.js'
import {mapMutations,mapState} from "vuex"
import QQMapWX from "@/utils/qqMap"
import getDistance from '@/utils/distance'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            distance:0,
            location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
        }
    },
    computed:{
        ...mapState({
            //lngitude:state=>state.addView.longitude,
            //latitude:state=>state.addView.latitude
        }),
        points(){
            return [this.location, ...this.markers]
        },
    circle(){
      if (!this.markers.length){
        return []
      }else{
        return [{
          ...this.markers[0],
          color:  this.distance>100?'#C9394A': '#197DBF',
          fillColor: 'rgba(0,0,0, .3)',
          radius: 10,
          strokeWidth: 2
        }]
      }
    }
    },
    methods:{
        ...mapMutations({
            chengeLoaction:"addView/chengeLoaction"
        }),
        goClock(){
            getAuth('scope.userLocation', async ()=>{
                let location = await getLocation();
                this.location = location;
                // 重新计算距离
                if (this.updateDistance){
                    this.distance = getDistance(this.location.latitude, this.location.longitude, this.markers[0].latitude, this.markers[0].longitude)
                    this.updateDistance(this.distance)
                }
            })
        }
    },
    created(){
        let qqmapsdk = new QQMapWX({
            key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
        });
        let that = this;
        wx.getLocation({
            type: 'wgs84',
            altitude:true,
            success (res) {
                that.chengeLoaction(res)
            }
        }) 
    },
    watch: {
        reLocation(){
        // 检测重新定位当前位置
        this.goClock();
        }
    },
    props: {
    markers: {
      type: Array,
      default: []
    },
    markertap: {
      type: Function,
      default: ()=>{}
    }, 
     regionChange: {
      type: Function,
      default: ()=>{}
    },
    reLocation: {
      type: Boolean,
      default: false
    },
    updateDistance: {
      typef: Function,
      default: ()=>{}
    }
  },
    mounted(){
        this.goClock()
    }
}
</script>
<style>
.map{
    width: 100%;
    height: 100% !important;
}
    #map{
        width: 100%;
        height: 100% !important;
    }
</style>