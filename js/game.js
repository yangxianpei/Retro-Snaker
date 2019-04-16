//构造函数game
//属性
//food snake map

//方法
//start

;(function () {
  var that = ''
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  Game.prototype.start = function () {
    //渲染到地图上
    this.food.render(this.map);
    this.food.random();

 

    // 蛇走来
    runsnake.call(that);
  
    //通过键盘让蛇移动
    bindkey()


  }

  //蛇走起来
  function runsnake() {
    console.log(1)
    var timeId = setInterval(()=> {
      //1 让蛇走一格

      this.snake.move(this.food,this.map);
      this.snake.render(this.map);


      //2 蛇走出边界游戏结束
      var headX = this.snake.body[0].x;
      var headY = this.snake.body[0].y;
      var mapX = this.map.offsetWidth / this.snake.width;
      var mapY = this.map.offsetHeight / this.snake.height;
      if (headX < 0 || headX >= mapX) {
        alert('游戏结束');
        clearInterval(timeId);
      } else if (headY < 0 || headY >= mapY) {
        alert('游戏结束');
        clearInterval(timeId);
      }
    }, 150)

  }

//注册键盘事件 让蛇动起来
  function bindkey() {
    document.addEventListener('keydown', function (e) {
      // top 38
      // bottom 40
      //left 37 
      // right 39
      switch (e.keyCode) {
        case 38:
          that.snake.direction = 'top';
          break;
        case 40:
          that.snake.direction = 'bottom';
          break;
        case 37:
          that.snake.direction = 'left';
          break;
        case 39:
          that.snake.direction = 'right';
          break;
      }
    }.bind(that), false)
  }


  //暴露Game
  window.Game = Game
})()

