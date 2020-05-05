var buildPhotoView = function (photoModel, photoController) {
  var base = document.createElement('div'),
    photoEl = document.createElement('div');

  base.appendChild(photoEl);

  // 渲染 DOM
  var render = function () {
    // 使用了 underscore 的模版引擎
    photoEl.innerHTML = _.template('#photoTemplate', {
      src: photoModel.getSrc(),
    });
  };

  // 当 model 改变时更新 view
  photoModel.addSubscriber(render);

  // 当用户对 view 操作时，将逻辑委托给 controller
  photoEl.addEventListener('click', function () {
    photoController.handleEvent('click', photoModel);
  });

  var show = function () {
    photoEl.style.display = '';
  };

  var hide = function () {
    photoEl.style.display = 'none';
  };

  return {
    showView: show,
    hideView: hide,
  };
};
