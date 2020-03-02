// 订阅者类
class Subscriber {
  constructor(fn, options, context) {
    this.id = Subscriber.guidGenerator();
    this.fn = fn; // 回调函数
    this.options = options; // 配置
    this.context = context; // 函数调用上下文
    this.topic = null; // 订阅的主题
  }

  static guidGenerator() {
    // 生成 guid 的方式按下不表
    return Math.random().toString();
  }
}

// 主题类
class Topic {
  constructor(namespace = "") {
    this.namespace = namespace;
    this._callbacks = []; // 订阅者列表
    this._topics = {}; // 子主题列表
    this.stopped = false; // 是否禁止传播
  }

  // 添加订阅者
  addSubscriber(fn, options, context) {
    const callback = new Subscriber(fn, options, context);
    this._callbacks.push(callback);
    callback.topic = this;
    return callback;
  }

  // 禁止传播
  stopPropagation() {
    this.stopped = true;
  }

  // 获取订阅者。可以传入订阅者id或订阅者对应回调函数。会在本主题及子主题中查找。
  getSubscriber(identifier) {
    let callback = this._callbacks.find(item => item.id === identifier || item.fn === identifier);
    if (callback) {
      return callback;
    }

    // 如果没有在本主题找到订阅者，继续查找子主题列表
    for (let k in this._topics) {
      let callback = this._topics[k].getSubscriber(identifier);
      if (callback) {
        return callback;
      }
    }
  }

  // 添加子主题
  addTopic(topic) {
    this._topics[topic] = new Topic(`${this.namespace ? `${this.namespace}:` : ""}${topic}`);
  }

  // 查询是否有该子主题
  hasTopic(topic) {
    return this._topics.hasOwnProperty(topic);
  }

  // 查找子主题
  returnTopic(topic) {
    return this._topics[topic];
  }

  // 移除订阅者。如果不传参，则移除本主题及子主题所有订阅者。如果传identifier只在本主题中查找。
  removeSubscriber(identifier) {
    if (!identifier) {
      this._callbacks = [];
      for (let k in this._topics) {
        this._topics[k].removeSubscriber(identifier);
      }
    }

    for (let i = 0, len = this._callbacks.length; i < len; i++) {
      if (this._callbacks[i].fn === identifier || this._callbacks[i].id === identifier) {
        this._callbacks[i].topic = null;
        this._callbacks.splice(i, 1);
        len--;
        i--;
      }
    }
  }

  // 发布
  publish(...args) {
    this._callbacks.forEach(callback => {
      callback.fn.call(callback.context, ...args)
    });

    // 如果本主题是可传播的，则将消息向子主题传播
    if (!this.stopped) {
      for (let k in this._topics) {
        this._topics[k].publish(...args);
      }
    }

    // 发布后将可传播置为true
    this.stopped = false;
  }

}

// 中介者类
class Mediator {
  constructor() {
    this._topics = new Topic(); // 根主题
  }

  // 按命名空间查找主题，支持形如"xxx:xxx:xxx"的命名空间。如果不存在主题则将添加。
  getTopic(namespace) {
    if (namespace === "") {
      return this._topics;
    }

    let topic = this._topics,
      namespaceHierarchy = namespace.split(":");
    for (let i = 0, len = namespaceHierarchy.length; i < len; i++) {
      if (!topic.hasTopic(namespaceHierarchy[i])) {
        topic.addTopic(namespaceHierarchy[i]);
      }
      topic = topic.returnTopic(namespaceHierarchy[i]);
    }
    return topic;
  }

  // 添加订阅。topicName是支持命名空间的。
  subscribe(topicName, fn, options = {}, context = {}) {
    let topic = this.getTopic(topicName),
      sub = topic.addSubscriber(fn, options, context);

    return sub;
  }

  // 获取订阅
  getSubscriber(identifier, topic = "") {
    return this.getTopic(topic).getSubscriber(identifier);
  }

  // 删除订阅
  remove(topicName, identifier) {
    this.getTopic(topicName).removeSubscriber(identifier);
  }

  // 发布消息
  publish(topicName, ...args) {
    var topic = this.getTopic(topicName);
    this.getTopic(topicName).publish(...args);
  }
}

// 使用 //////////////////////////////////////
const mediator = new Mediator();

mediator.subscribe('hello', (param1) => {
  console.log('some body say hello', param1);
});

mediator.subscribe('hello:dog', (param1) => {
  console.log('some dog say hello', param1);
});

// 子命名空间"hello:dog"也会被通知
mediator.publish('hello', 'tom');
// 父命名空间"hello"不会被通知
mediator.publish('hello:dog', 'jerry');

