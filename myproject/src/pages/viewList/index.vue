<template>
    <div>
        <div class="top">
            <ul class="list">
                <li v-for="(item,index) in list" :key="index" :class="{active:index===ind}" 
                    @click="()=>{
                        page=1
                        if(index==3){
                            getList({
                                page:page,
                                pageSize:pagesize
                            })
                        }else{
                            getList({
                                status:list[index].id,
                                page:page,
                                pageSize:pagesize})
                        } 
                        listCheck(index)}">{{item.title}}</li>
            </ul>
        </div>
        <div v-if="!getListGetters.length" class="bot-top">
                <p>
                    当前分类还没有面试!
                </p>
        </div>   
        <div class="bottom">  
            <dl v-for="(item,index) in getListGetters" :key="index" @click="gotoDetail(item.id)">
                <dd>
                    <h3>{{item.company}}</h3>
                    <span>{{item.type}}</span>
                </dd>
                <p>{{item.address}}</p>
                <dt>
                    <span>面试时间 ：{{item.create_time}}</span>
                    <span class="remind">{{item.reminds}}</span>
                </dt>       
            </dl>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           page:1,
           pagesize:10
        }
    },
    computed:{
        ...mapState({
            ind:state=>state.viewList.ind,
            list:state=>state.viewList.list,
            newArr:state=>state.viewList.newArr,
        }),
        ...mapGetters({
            getListGetters:"viewList/getListGetters"
        })
    },
    methods:{
        ...mapMutations({
            listCheck:"viewList/listCheck",
            getListMutations:"viewList/getListMutations",
            gotoDetail:"viewList/gotoDetail"
        }),
        ...mapActions({
            getList:"viewList/getList"
        })
    },
    created(){
        this.getList({
            status:this.list[this.ind].id,
            page:this.page,
            pageSize:this.pagesize
        })
    },
    mounted(){

    },
    onReachBottom() {
        if(this.page>this.getListGetters.length/this.pagesize){
            console.log("没有了")
        }else{
            this.page=this.page+1;
            if(this.ind==3){
                this.getList({
                    page:this.page,
                    pageSize:this.pagesize
                })
            }else{
                this.getList({
                    status:this.list[this.ind].id,
                    page:this.page,
                    pageSize:this.pagesize
        })
            }
        }
    },
}
</script>
<style>
    .list{
        position: fixed;
        top:0;
        left:0;
        background: #fff;
        width: 100%;
        height:45px;
        display: flex;
        border-top: 1px solid #ccc;
        align-items: center;
        justify-content: space-around;
      
    }
    .list li{
        height:45px;
        line-height: 45px;
    }
    .bottom{
        margin-top: 50px;
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
    .active{
        color: rgb(57, 57, 240);
        border-bottom: 1px solid rgb(57, 57, 240);
    }
    .bot-top{
        text-align: center;
        font-size: 15px;
        color: #666;
        padding: 100px;
    }
</style>