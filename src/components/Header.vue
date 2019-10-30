<template>
    <div class="header">
        <router-link :to="{name:'root'}">
            <img src="../assets/cnodejs_light.svg">
        </router-link>
        <ul>
            <router-link :to="{name:'root'}">
                <li><a href="">首页</a></li>
            </router-link>
            <li><a href="https://cnodejs.org/getstart">新手入门</a></li>
                <li><a href="https://cnodejs.org/api">API</a></li>
                <li><a href="https://cnodejs.org/about">关于</a></li>
                <li><a href="https://cnodejs.org/signup">注册</a></li>
                <li><a href="https://cnodejs.org/signin">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
*{padding: 0;margin: 0;box-sizing: border-box;}
body{margin: 0;}
@media (max-width:768px){
    .header{
        background-color:#444444;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    ul{
        display: none;
    }
    a{
        display: flex;
        justify-content: center;
        align-content: center;
    }
    a >img{
        margin:0px;
    }
}
.header{
    background-color:#444444;
    height: 50px;
    margin:-8px;
    margin-bottom: 15px;
}
img{
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
}
ul{
    list-style: none;
    float: right;
    margin: 5px;
    padding-right: 18px;
}
li{
    display: inline-block;
    padding: 10px 10px;
}
a{
    text-decoration: none;
    color: #CCCCCC;
    font-size: 14px;
    text-shadow: none;
}
</style>
