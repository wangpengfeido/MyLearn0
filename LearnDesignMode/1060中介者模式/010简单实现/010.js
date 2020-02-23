class Mediator {
  topics = {};

  // 订阅
  subscribe(topic, fn) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push({callback: fn});
    return this;
  }

  // 发布
  publish(topic, ...args) {
    if (!this.topics[topic]) {
      return false;
    }
    this.topics[topic].forEach(sub => {
      sub.callback(...args);
    });
    return this;
  }
}


// 使用 //////////////////////////////////////
const mediator = new Mediator();
mediator.subscribe('newMessage', function () {
  console.log('hello');
});

mediator.publish('newMessage');


