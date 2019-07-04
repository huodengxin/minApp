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
import {mapMutations,mapState} from "vuex"
import QQMapWX from "@/utils/qqMap"
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
        ...mapState({
            longitude:state=>state.addView.longitude,
            latitude:state=>state.addView.latitude
        })
    },
    methods:{
        ...mapMutations({
            chengeLoaction:"addView/chengeLoaction"
        })
    },
    created(){
        let qqmapsdk = new QQMapWX({
            key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
        });
        let that = this;
        // wx.showLoading({
        //     title:'定位中',
        //     mask:true
        // })
        wx.getLocation({
            type: 'wgs84',
            altitude:true,
            success (res) {
                that.chengeLoaction(res)
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