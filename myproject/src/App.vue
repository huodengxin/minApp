<script>
import {login} from "./request"
export default {
    created () {
        //登录
        wx.login({
            success:async (res)=>{
                let data= await login(res.code)
                console.log("data....",data)
                try {
                    wx.setStorageSync('openid',data.data.openid)
                } catch(e){
                
                } 
            }
        })
    }
}
</script>

<style>
page{
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
