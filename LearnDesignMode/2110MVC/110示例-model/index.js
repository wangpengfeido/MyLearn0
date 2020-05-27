// Model。照片。
var Photo = Backbone.Model.extend({
  // 默认照片属性
  defaults: {
    src: 'placeholder.jpg',
    caption: 'A default image',
    viewed: false,
  },

  // 保证每个photo都有src
  initialize: function () {
    this.set({ src: this.defaults.src });
  },
});

// Model 集合
var PhotoGallery = Backbone.Collection.extend({
  // 引用 Model
  model: Photo,

  // 过滤已经看过的photo
  viewed: function () {
    return this.filter(function (photo) {
      return photo.get('viewed');
    });
  },

  // 过滤没看过的photo
  unviewed: function () {
    return this.without.apply(this, this.viewed());
  },
});
