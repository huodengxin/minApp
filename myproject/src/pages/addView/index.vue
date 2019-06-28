<template>
    <div class="addviewBox">
        <div class="section">
            <h4>面试信息</h4>
            <p>
                <span>公司名称</span>
                <input type="text" placeholder="请选择公司名称">
            </p>
            <p>
                <span>公司电话</span>
                <input type="text" placeholder="请输入面试联系人电话">
            </p>
            <p>
                <span>面试时间</span>
                <input type="text">
            </p>
            <p>
                 <span>面试地址</span>
                <input type="text" placeholder="请选择面试地址">
            </p>
        </div>
        <div class="section">
          <h4>备注信息</h4>
          <textarea placeholder="备注信息(可选，100个字以内)" />
        </div>
         <button class="btn" form-type="submit"> 确认 </button>       
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