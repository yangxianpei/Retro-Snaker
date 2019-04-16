// 构造函数 snake
// 属性
// width 蛇节的宽度
// height 
// body 数组 蛇头 和 蛇身 数组中第一项是蛇头
// direction 方向 默认right 
//方法
//render 渲染
// move

//自调用函数 避免全局变量匿名冲突; 开启一个新的局部作用域,防止命名冲突
;(function () {
  //构造函数 snake
  var _position = 'absolute'
  var element =[];
  function Snake(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = options.direction || 'right';

    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' }
    ]


  }

  Snake.prototype.render = function (map) {
    remove();
    this.body.forEach(item => {
      var div = document.createElement('div');
      map.appendChild(div);
      //把蛇添加到数组中
      element.push(div);

      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';

      div.style.backgroundColor = item.color;
      div.style.position = _position;
      div.style.left = item.x * this.width + 'px';
      div.style.top = item.y * this.height + 'px';

    })
  }

  function remove(){
    for(var i = element.length-1 ;i>=0;i--){
        //删除页面div
        element[i].parentNode.removeChild(element[i])
        //删除数组里的蛇
        element.splice(i,1)
    }
  }

  Snake.prototype.move = function (food,map) {
    //蛇身

    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    var head =this.body[0];
    //蛇头
    switch (this.direction) {
      case 'right':
        this.body[0].x += 1;
        break;
      case 'left':
        this.body[0].x -= 1;
        break;
      case 'top':
        this.body[0].y -= 1;
        break;
      case 'bottom':
        this.body[0].y += 1;
        break;
    }

    //蛇吃到食物后的操作
    //蛇头坐标
    var headX = head.x *this.width;
    var headY = head.y *this.height;
    
    if(headX === food.x && headY === food.y){

      //让蛇多一节 ,先获取最后一节的蛇身 然后把最后一节的蛇身的X Y加到新蛇身然后放到food body里;
      var last =this.body[this.body.length-1];
      this.body.push({
          x:last.x,
          y:last.y,
          color:last.color
      })

      //食物重新渲染
      food.render(map);
      food.random()
    }
    
 
  
  }
  //暴露构造函数

  window.Snake=Snake
})()

