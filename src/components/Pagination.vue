<template>
  <div class="pagination">
      <button @click="changeBtn">首页</button>
      <button @click="changeBtn">上一页</button>
      <button v-if="judge" class="pageBtn">......</button>
      <button v-for="btn in pagebtns"
      :class="[{currentPage: btn == currentPage},'pagebtn']"
      @click="changeBtn(btn)">
          {{btn}}
      </button>
      <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Pagination',
  data () {
    return {
        pagebtns:[1,2,3,4,5,'......'],
        currentPage:1,
        judge: false
    }
  },
  methods:{
      changeBtn(page){
          //点击上一页下一页首页时
          if(typeof page !='number'){
              switch(page.target.innerText){
                  case '上一页':
                      $('button.currentPage').prev().click();
                    break;
                  case '下一页':
                      $('button.currentPage').next().click();
                    break;
                  case '首页':
                      this.pagebtns = [1,2,3,4,5,'......'];
                      this.changeBtn(1);
                      break;
                 default :
                   break;
              }
              return
          }
          this.currentPage = page
          if(page>4){
              this.judge = true
          }else{
              this.judge = false
          }
          if(page== this.pagebtns[4]){
              this.pagebtns.shift()//移除第一个元素
              this.pagebtns.splice(4,0,this.pagebtns[3]+1)//添加后面一个
          }else if(page==this.pagebtns[0] && page != 1){
              //在第一个位置加一个
              this.pagebtns.unshift(this.pagebtns[0]-1)
              //移除最后一个数字
              this.pagebtns.splice(5,1)
          }
          //不管点击那个按钮都要触发
          this.$emit('handleList',this.currentPage)
      }
  }
}
</script>

<style scoped>
@media (max-width: 768px){
  .pagination{
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #888888;
    border-radius: 5px;
    padding: 0;
  }
  .pagination > button{
     background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }
}
.pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>