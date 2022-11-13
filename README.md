# 一些前端比较有意思的效果图
  1. 图片预览  
  > 来源 [掘金](https://juejin.cn/post/7160894692593401893/)
  2. 添加简单的请求拦截器
  > 创建一个类 `Requset`,其中的方法 `interceptor`为核心方法，其实就是把`requestBeforeFun` 替换为 用户传进来的方法
  ```js
  //Request 类中
    interceptor = {
    request: cb => {
      // 这个地方是把 innerRequest 赋值给  this.requestBeforeFun
      this.requestBeforeFun = cb;
    },
    requestBeforeFun(config) {
      return config;
    }
    doRequest() {
      let baseConfig = { ...this.requestBeforeFun(this.config) };
      // 发送请求
      return baseConfig;
    }
  };
  // 使用
  http.interceptor.request(function innerRequest(config) {
    config.name = "zs";
    return config;
  });
  console.log(http.doRequest());
  ```
  1. 添加动态水壶
  2. 添加前进后退按钮
  > 这个思想 还是有点意思的，他是利用了 全局变量`currentActive` 来控制点击了几次,`prevBtn` 和 `nextBtn` 都执行了 一个同样的函数 `update` 方法
  ```js
   function update() {
      circleElements.forEach((item, index) => {
        if (index <= currentActive) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      progress.style.width = ((100 / max) * currentActive).toFixed(4) + "%";
    }
  ```
