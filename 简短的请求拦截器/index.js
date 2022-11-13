class Request {
  constructor() {
    this.config = {
      url: "test",
    };
  }

  setConfig(fn) {
    this.config = fn(this.config);
  }

  interceptor = {
    request: cb => {
      // 这个地方是把 innerRequest 赋值给  this.requestBeforeFun
      this.requestBeforeFun = cb;
    },
  };
  // 如果咩有调用 request 的话不至于 报错
  requestBeforeFun(config) {
    return config;
  }

  doRequest() {
    let baseConfig = { ...this.requestBeforeFun(this.config) };
    console.log(
      "🚀 ~ file: 6.html ~ line 155 ~ Request ~ doRequest ~ baseConfig",
      baseConfig
    );

    return baseConfig;
  }
}
// 在这个地方可以传入 config
let http = new Request();

http.setConfig(config => {
  config.age = 20;
  return config;
});

http.interceptor.request(function innerRequest(config) {
  config.name = "zs";
  return config;
});

console.log(http.doRequest());
