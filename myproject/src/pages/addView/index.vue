<template>
    <div class="addviewBox">
        <div class="section">
            <h4>面试信息</h4>
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="请选择公司名称" v-model="company">
            </p>
            <p>
                <span>公司电话</span>
                <input type="text" placeholder="请输入面试联系人电话" v-model="phone">
            </p>
            <p>
                <span>面试时间</span>
                 <picker mode="multiSelector" @change="bindMultiPickerChange"  v-model="multiIndex" :range="multiArray">
                    <view class="picker">
                        2019年-{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}}:{{multiArray[2][multiIndex[2]]}}
                    </view>
                </picker>
            </p>
            <p>
                <span>面试地址</span>
                <input placeholder="请选择面试地址" @tap="gotoMatchAdress" disabled v-model="current.address"/>
            </p>
        </div>
        <div class="section">
          <h4>备注信息</h4>
          <textarea placeholder="备注信息(可选，100个字以内)" v-model="description"/>
        </div>
         <button class="btn" form-type="submit" 
         @click="addViewActions({
             company:company,
             phone:phone,
             address:current.address,
             form_id:form_id,
             longitude:113.324520,
             latitude:23.099994,
             start_time:1562073021032,
             description:description
            })"> {{getNum}}确认 </button>       
    </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from "vuex"
export default {
    props:{

    },
    components:{
       
    },
    data(){
        return {
            multiArray: [['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号'], ['0点', '1点', '2点', '3点', '4点','5点', '6点', '7点', '8点', '9点','10点', '11点', '12点', '13点', '14点','15点', '16点', '17点', '18点', '19点','20点', '21点', '22点', '23点'], ['0分', '10分','20分','30分','40分','50分']],
            multiIndex: [0, 0, 0],
            company:"",
            phone:"",
            form_id:'9',
            description:""
            }
    },
    computed:{
      ...mapGetters({
          getNum:"addView/getNum"
      }),
      ...mapState({
            current:state=>state.addView.current
        }),
      getDate(){
          for(var i=1;i<31;i++){
              return i+"号"
          }
      }
    },
    methods:{
        bindMultiPickerChange: function (e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.multiIndex=e.target.value;
         },
         gotoMatchAdress(){
            wx.navigateTo({
                url:'../matchAddress/main'
            })
         },
         ...mapActions({
            addViewActions:"addView/addViewActions"
         })
    },
    created(){

    },
    mounted(){
    }
}
</script>
<style>
h4{
background: #f6f6f6;
padding: 12px;
font-size: 17px;
}
p{
    height: 35px;
    border-bottom: 1px solid #ccc;
    display: flex;
    margin: 12px;
    font-size: 16px;
}
p span{
 width: 100px;
 color:#666;
}
b{
   color:#666; 
}
textarea{
    height: 100px;
    border:1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
    margin: 12px;
    padding: 5px;
}
.btn{
    background:#999;
    color:#fff; 
    margin-top: 30px;
    border-radius: 0;
}
</style>