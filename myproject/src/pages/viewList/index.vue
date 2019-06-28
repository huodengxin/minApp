<template>
    <div>
        <div class="top">
            <ul class="list">
              <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
            </ul>
        </div>
        <div class="bottom">
            <dl v-for="(item,index) in arr" :key="index">
                <dd>
                    <h3>{{item.title}}</h3>
                    <span>{{item.type}}</span>
                </dd>
                <p>{{item.address}}</p>
                <dt>
                    <span>面试时间：{{item.time}}</span>
                    <span class="remind">{{item.remind}}</span>
                </dt>       
            </dl>
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
            list:[
                {
                    "title":"未开始"
                },{
                    "title":"已打卡"
                },{
                    "title":"已放弃"
                },{
                  "title":"全部"
                }
            ],
            arr:[
                {
                    title:'百度',
                    address:'吉林市长春市朝阳区西港路767号',
                    time:'2019-06-29 16:00',
                    type:'未开始',
                    remind:'未提醒'
                },  {
                    title:'快手',
                    address:'吉林市长春市朝阳区西港路767号',
                    time:'2019-07-02 16:00',
                    type:'未开始',
                    remind:'未提醒'
                }
            ]
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
    .list{
        height:45px;
        display: flex;
        border-top: 1px solid #ccc;
        align-items: center;
    }
    .list li{
        flex: 1;
        text-align: center;
    }
    dl{
     height: 106px;
     border-top: 10px solid #eee;  
     padding: 10px; 
     font-size: 17px;
    }
    h3{
        font-size: 22px;
    }
    dl dd,dt{
        display: flex;
        justify-content: space-between;
    }
    dd span{
        padding: 5px;
        background: #eee;
         font-size: 16px;
         color:#999;
    }
    dl p{
        color: #999999;
        margin: 10px 0;
        font-size: 16px;
    }
    .remind{
        padding: 5px;
        background: hsla(0,87%,69%,.1);
        border-color: hsla(0,87%,69%,.2);
        font-size: 17px;
        color:#f56c6c; 
    }
</style>