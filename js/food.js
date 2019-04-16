//构造函数food
//属性
// 颜色  width height  x y 

//方法

// render渲染 random 随便生成位置

//自调用函数 避免全局变量匿名冲突; 开启一个新的局部作用域,防止命名冲突
;(function () {
  //构造函数food
  var _position = 'absolute'
  var _div = null;
  var _map = null;
  var element = [];
  function Food(options) {
    options = options || {};
    this.color = options.color || 'red';
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
  }
  // render渲染
  Food.prototype.render = function (map) {
    remove();
    var div = document.createElement('div');
    _div = div;
    _map = map;
    element.push(div)
    map.appendChild(div);
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px'
    div.style.position = _position;

    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
  }

  //random 随便生成位置
  Food.prototype.random = function () {
    this.x = Tool.getRandom(0, _map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRandom(0, _map.offsetHeight / this.height - 1) * this.height;

    _div.style.left = this.x + 'px';
    _div.style.top = this.y + 'px';
  }


  //删除食物
  function remove() {
    for (var i = element.length - 1; i >= 0; i--) {
      //删除div
      _div.parentNode.removeChild(element[i])
      //删除数组中食物
      element.splice(i, 1)
    }

  }
//暴露构造函数给外部
  window.Food=Food;
})();


//  //测试
// var map = document.querySelector('.map')
// var food = new Food();
// food.render(map);

// food.random()