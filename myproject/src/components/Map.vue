<template>
       <map id="map" 
         :longitude="longitude" 
         :latitude="latitude" 
         scale="14"
         show-location 
         style="width: 100%; height: 300px;">
       </map> 
</template>
<script>
import QQMapWX from "@/utils/qqMap"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
        longitude:"113.324520", 
         latitude:"23.099994" 
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let qqmapsdk = new QQMapWX({
           key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
        });
        let that = this;
        wx.getLocation({
        type: 'wgs84',
        success (res) {
            console.log('res...', res);
            that.latitude = res.latitude
            that.longitude = res.longitude
            const speed = res.speed
            const accuracy = res.accuracy
        }
        }) 
    },
    mounted(){

    }
}
</script>
<style>
#map{
  width: 100%;
  height: 100% !important;
}
</style>