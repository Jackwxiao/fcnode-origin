<template>
  <div class="PostList">
      <!-- 数据未返回时显示正在加载图片 -->
    <div class="loading" v-if="isLoading">
        <img src="../assets/loading.gif">
    </div>
    <!-- 主题帖子列表 -->
    <div class="posts" v-else>
        <ul>
            <li>
                <div class="toobar">
                    <router-link :to="{name:'root'}">
                      <span>全部</span>
                    </router-link>
                    <span><a href="https://cnodejs.org/?tab=good">精华</a></span>
                    <span><a href="https://cnodejs.org/?tab=share">分享</a></span>
                    <span><a href="https://cnodejs.org/?tab=ask">问答</a></span>
                    <span><a href="https://cnodejs.org/?tab=job">招聘</a></span>
                    <span><a href="https://cnodejs.org/?tab=dev">客户端测试</a></span>
                </div>
            </li>
            <li v-for="post in posts">
                <!-- 用户头像 -->
                <img :src="post.author.avatar_url" alt="">
                <!-- 回复与浏览量 -->
                <span class="allcount">
                    <span class="reply_count">{{post.reply_count}}</span>
                    /{{post.visit_count}}
                </span>
                <!-- 帖子分类 -->
                <span :class="[{put_good:(post.good==true),put_top:(post.top==true),
                'topiclist-tab':(post.good != true && post.top!=true)}]">
                    {{post | tabFormatter}}
                </span>
                <!-- 标题 -->
                <router-link :to="{
                  name:'post_content',
                  params:{
                    id:post.id,
                    name:post.author.loginname
                  }
                  }">
                  <span>{{post.title}}</span>
                </router-link >
                <!-- 最终回复时间 -->
                <span class="last_reply">
                    {{post.last_reply_at | formatDate}}
                </span>
            </li>
            <li class="pageLi">
              <!-- 分页栏 -->
            <pagination @handleList="renderList"></pagination>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import pagination from './Pagination'
export default {
  name: 'PostList',
  data () {
    return {
        isLoading:false,
        posts:[],//代表页面的列表数据
        postpage:1
    }
  },
  components:{
    pagination
  },
  methods:{
      getData(){
          this.$http.get('https://cnodejs.org/api/v1/topics',{
              params:{
                page:this.postpage,
                limit:20
              } 
          })
          .then(res=>{
              this.isLoading = false
              console.log(res)
              this.posts = res.data.data
          })
          .catch(err=>{
              console.log(err)
          })
      },
      renderList(value){
        this.postpage = value
        this.getData()
      }
  },
  beforeMount(){
      this.isLoading = true//加载成功之前加载动画
      this.getData()//在页面加载之前获取数据
  }
}
</script>

<style scoped>
*{
  margin: 0;padding: 0;box-sizing: border-box;
}

.PostList{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }
  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }
  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    background-color: #f5f5f5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
  .pageLi{
    border-bottom:5px solid #E1E1E1;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
</style>