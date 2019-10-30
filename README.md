# cnode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

部署的时候需要添加vue.config.js文件并设置好路径，还有config文件中的index.js将assetsPublicPath: '/',　改为　assetsPublicPath: './', 再 build 、 部署到服务器
 ```
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/fcnode/dist/'
      : './'
  }
 ``` 
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# cnode
# cnode
# fcnode-demo
# fcnode-orign
# fcnode-orign
