class PubSub {
  topics = {};
  subUid = -1;

  // 发布
  publish(topic, args) {
    if (!this.topics[topic]) {
      return false;
    }
    const subscribers = this.topics[topic];
    subscribers.forEach(({func}) => {
      func(topic, args);
    });
  }

  // 添加订阅
  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    const token = (++this.subUid).toString();
    this.topics[topic].push({
      token,
      func,
    });
    return token;
  }

  // 取消订阅
  unsubscribe(token) {
    for (let m in this.topics) {
      let subIndex = this.topics[m].findIndex(sub => sub.token === token);
      if (subIndex > -1) {
        this.topics[m].splice(subIndex, 1);
      }
    }
    return this;
  }
}


// 下面是使用 /////////////////////////////////////

const pubSub = new PubSub();

// 添加订阅
const subscription1 = pubSub.subscribe('newMessage', (topic, data) => {
  console.log(`Here is a new message(1): ${topic}: ${data}`);
});
const subscription2 = pubSub.subscribe('newMessage', (topic, data) => {
  console.log(`Here is a new message(2): ${topic}: ${data}`);
});

// 发布通知
pubSub.publish('newMessage', 'hello');

// 取消订阅
pubSub.unsubscribe(subscription1);

pubSub.publish('newMessage', 'hi');



