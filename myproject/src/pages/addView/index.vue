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
                <picker
                    mode="multiSelector"
                    :range="dateRange"
                    :value="info.date"
                    @columnchange="columnChange"
                >
                    <view class="date">{{dateShow}}</view>
                </picker>
                <icon class="icon" size="18" type="info" role="img" @click="showTime"></icon>
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
        <form @submit="subBtn" report-submit>
            <button class="btn" form-type="submit">确认 </button>  
        </form>     
    </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from "vuex"
const moment = require('moment');
const range = [
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    ['00分', '10分', '20分', '30分', '40分', '50分']
];
export default {
    props:{

    },
    components:{
       
    },
    data(){
        return {
            company:"",
            phone:"",
            form_id:'9',
            description:"",
            info: {
                date: [0,0,0],
            }
        }
    },
    computed:{
        ...mapState({
            current:state=>state.addView.current
        }),
        //处理面试
        dateRange(){
            let dateRange = [...range];
            // 如果时间是今天，过滤掉现在之前的小时
            if (!this.info.date[0]){
                dateRange[1] = dateRange[1].filter(item=>{
                return item>moment().hour();
                })
            }else{
                dateRange[1] = range[1]
            }
            // 格式化小时
            dateRange[1] = dateRange[1].map(item=>{
                return item+'点'
            })
            // 计算当前日期之后的十天
            dateRange[0] = dateRange[0].map(item=>{
                return moment().add(item, 'days').date()+'号'
            })
            return dateRange;
        },
        dateShow(){
            return moment()
            .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
            .add(this.info.date[1]+1, 'h')
            .minute(this.info.date[2]*10)
            .format('YYYY-MM-DD HH:mm')
        }
    },
    methods:{
        gotoMatchAdress(){
            wx.navigateTo({
                url:'../matchAddress/main'
            })
        },
        ...mapActions({
            addViewActions:"addView/addViewActions"
        }),
        columnChange(e){
            let {column, value} = e.target;
            let date = [...this.info.date];
            date[column] = value;
            this.info.date = date;
        },
        showTime(){
            wx.showToast({
                title: '在面试前一个小时我们会通知你哦',
                icon: 'none',
            });
        },
        async subBtn(e){
            if(this.company==""){
                wx.showToast({
                    title:'公司名称不能为空',
                    icon: 'none',
                })
            }
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone)){
                wx.showToast({
                    title: '请输入面试联系人的手机或座机', 
                    icon: 'none',
                });
            }
            if (!this.current.address){
                wx.showToast({
                    title: '请选择公司地址', 
                    icon: 'none',
                });
                return false;
            }
            let data=await this.addViewActions({
                    company:this.company,
                    phone:this.phone,
                    address:this.current.address,
                    form_id:e.target.formId,
                    longitude:this.current.lng,
                    latitude:this.current.lat,
                    start_time:new Date(this.dateShow)*1,
                    description:this.description
            })
            if(data.code==0){
                wx.navigateTo({
                    url:'/pages/viewList/main'
                })
            }
        }
    },
    created(){
        if (moment().hour() == 23){
            this.info.date = [1, 0, 0];
        }
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
.icon{
   margin-left: 15px;
}
</style>