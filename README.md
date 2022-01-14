# 課程:網站設計進階 -- 習題與報告

欄位 | 內容
-----|--------
學期 | 110 學年度上學期
學生 | 張芷榕
學號末兩碼 | 10827
教師 | [陳鍾誠](https://www.nqu.edu.tw/educsie/index.php?act=blog&code=list&ids=4)
學校科系 | [金門大學資訊工程系](https://www.nqu.edu.tw/educsie/index.php)
課程內容 | https://gitlab.com/ccc110/ws

<<<<<<< HEAD

=======
>>>>>>> a40636616282787bad424a8f5d0d5c2b3b1845c0
## css

### 2D Transform
函數  | 說明
------|-----------
translate(mx,my)| 位移，元素以參考點為中心，X軸位移mx距離，Y軸位移my距離，如果只寫一個參數，省略的第 2個參數會視為0，也就是只有X軸的mx距離
translateX(m)|	元素以參考點為中心，X軸位移m距離
translateY(m)|	元素以參考點為中心，Y軸位移m距離
scale(sx,sy)| 縮放，元素以參考點為中心，X軸縮放s倍，Y軸縮放s倍，如果只寫一個參數，就是X、Y軸以同樣倍率縮放
scaleX(s)|	元素以參考點為中心，X軸縮放s倍
scaleY(s)|	元素以參考點為中心，Y軸縮放s倍
rotate(θ)|	從參考點為中心軸旋轉θ度，正值=順時針旋轉，負值=逆時針旋轉
skew(θx,θy)|	元素以參考點為中心，X軸傾斜θx度，Y軸傾斜θy度，如只寫一個，就只有X軸的傾斜。
skewX(θ)|	元素以參考點為中心，X軸的傾斜θ度
skewY(θ)| 元素以參考點為中心，Y軸的傾斜θ度
matrix(n,n,n,n,n,n)| 元素以參考點為中心，依變形矩陣的6個參數值產生2D變形，matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())，可參考https://www.jianshu.com/p/52e0018e6ce2
<<<<<<< HEAD
=======

```css
.flipx {
    transform: scaleX(-1);
}
```

***

## javascript

### AJAX

> 把 # 作為傳遞切換路徑的方式，無需重新加載頁面即可更新網頁。
> 
> [AJAX](https://www.w3schools.com/js/js_ajax_intro.asp)
> 
> [Use puppeteer Test your AJAX](https://gitlab.com/ccc110/sa/-/tree/master/se/08-verify/02-ajax/02-blogAjax)


### Constructor

> 建構式是特別的物件方法，它必會在物件建立時被呼叫一次，通常用於建構新物件中的屬性，以及呼叫上層父母類別(如果有繼承的話)之用。
> 用類別(class)的定義時，**物件的屬性都只能在建構式中定義**，這與用物件字面的定義方式不同，這一點是要特別注意的。
> > 如果物件在初始化時不需要任何語句，那麼就不要寫出這個建構式，實際上類別自己有預設的建構式，它會自動幫你作建構的工作。

> 關於建構式或物件方法的 _多形(polymorphism)_ 或 _覆蓋(Overriding)_ ，在**JavaScript中沒有這種特性**。
> 建構式是會被限制只能有一個，而在原本在物件中的方法也沒這個特性，在物件中定義同識別名稱的方法只會有一個定義被使用，這與傳入參數有或沒有，或是有幾個無關。
```js
class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
```


### Web Animations API

> Web Animations API是一種新的驅動網頁元素動畫的JavaScript API，它為瀏覽器和開發人員提供了一種用於描述DOM元素動畫的通用方法。
> 有了Web Animations API，我們可以不依賴於CSS3或js插件，就可以製作出炫酷的網頁動畫效果。

> 目前，Web Animations API只在Firefox 48+和Chrome 36+瀏覽器中有效。對於其它瀏覽器，可以通過一個補丁文件來實現Web Animations API。

* 安裝
> 可以通过bower或npm来安装animatelo.js动画库插件。
```js
$ bower install animatelo --save

$ npm install animatelo --save
```
* 初始化
```js
window.animatelo.flip('#hello');
```
* [animatelo.js](https://github.com/gibbok/animatelo)

```js
flash() {
   return window.animatelo.flash(this.element, {
     duration: 500
   });
 }
```
***
## Tetris

### Make Tetris Shape

#### Squere
```js
class Square extends Shape {
    constructor(x, y) {
      let blocks = [];
      blocks.push(new Block(x, y));
      blocks.push(new Block(x, y + 1));
      blocks.push(new Block(x + 1, y));
      blocks.push(new Block(x + 1, y + 1));
      super(blocks);
    }
  }
```

### L-Shape
```js
class LShape extends Shape {
    constructor(x, y) {
      let blocks = [];
      blocks.push(new Block(x, y));
      blocks.push(new Block(x - 1, y));
      blocks.push(new Block(x + 1, y));
      blocks.push(new Block(x + 1, y + 1));
      super(blocks);
      this.position = 0;
    }
  
    rotate() {
      let blocks = this.rotatePositions().map(p => new Block(p.x, p.y));
      this.clear();
      this.addBlocks(blocks);
      this.position = this.getNextPosition();
    }
  
    rotatePositions() {
      let pos = this.getBlocks()
        .shift()
        .getPosition();
      let x = pos.x;
      let y = pos.y;
      let positions = [];
      switch (this.getNextPosition()) {
        case 0:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x + 1, y));
            positions.push(new Position(x + 1, y + 1));
          }
          break;
        case 1:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x, y + 1));
            positions.push(new Position(x + 1, y - 1));
          }
          break;
        case 2:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y - 1));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x + 1, y));
          }
          break;
        case 3:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x, y + 1));
            positions.push(new Position(x - 1, y + 1));
          }
          break;
      }
      return positions;
    }
  
    getNextPosition() {
      return (this.position + 1) % 4;
    }
  }
  
```

### T-Shape
```js
class TShape extends Shape {
    constructor(x, y) {
      let blocks = [];
      blocks.push(new Block(x, y));
      blocks.push(new Block(x, y - 1));
      blocks.push(new Block(x + 1, y));
      blocks.push(new Block(x, y + 1));
      super(blocks);
      this.position = 0;
    }
  
    rotate() {
      let blocks = this.rotatePositions().map(p => new Block(p.x, p.y));
      this.clear();
      this.addBlocks(blocks);
      this.position = this.getNextPosition();
    }
  
    rotatePositions() {
      let pos = this.getBlocks()
        .shift()
        .getPosition();
      let x = pos.x;
      let y = pos.y;
      let positions = [];
      switch (this.getNextPosition()) {
        case 0:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x + 1, y));
            positions.push(new Position(x, y + 1));
          }
          break;
        case 1:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x + 1, y));
          }
          break;
        case 2:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x, y + 1));
          }
          break;
        case 3:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x, y + 1));
            positions.push(new Position(x + 1, y));
          }
          break;
      }
      return positions;
    }
  
    getNextPosition() {
      return (this.position + 1) % 4;
    }
  }
  
```

### Z-Shape
```js
class ZShape extends Shape {
    constructor(x, y) {
      let blocks = [];
      blocks.push(new Block(x, y));
      blocks.push(new Block(x, y - 1));
      blocks.push(new Block(x + 1, y));
      blocks.push(new Block(x + 1, y + 1));
      super(blocks);
      this.position = 0;
    }
  
    rotate() {
      let blocks = this.rotatePositions().map(p => new Block(p.x, p.y));
      this.clear();
      this.addBlocks(blocks);
      this.position = this.getNextPosition();
    }
  
    rotatePositions() {
      let pos = this.getBlocks()
        .shift()
        .getPosition();
      let x = pos.x;
      let y = pos.y;
      let positions = [];
      switch (this.getNextPosition()) {
        case 0:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x + 1, y));
            positions.push(new Position(x + 1, y + 1));
          }
          break;
        case 1:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x + 1, y - 1));
          }
          break;
      }
      return positions;
    }
  
    getNextPosition() {
      return (this.position + 1) % 2;
    }
  }
```

### Line
```js
class Line extends Shape {
    constructor(x, y) {
      let blocks = [];
      blocks.push(new Block(x, y));
      blocks.push(new Block(x - 1, y));
      blocks.push(new Block(x + 1, y));
      blocks.push(new Block(x + 2, y));
      super(blocks);
      this.position = 0;
    }
  
    rotate() {
      let blocks = this.rotatePositions().map(p => new Block(p.x, p.y));
      this.clear();
      this.addBlocks(blocks);
      this.position = this.getNextPosition();
    }
  
    rotatePositions() {
      let pos = this.getBlocks()
        .shift()
        .getPosition();
      let x = pos.x;
      let y = pos.y;
      let positions = [];
      switch (this.getNextPosition()) {
        case 0:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x - 1, y));
            positions.push(new Position(x + 1, y));
            positions.push(new Position(x + 2, y));
          }
          break;
        case 1:
          {
            positions.push(new Position(x, y));
            positions.push(new Position(x, y - 1));
            positions.push(new Position(x, y + 1));
            positions.push(new Position(x, y + 2));
          }
          break;
      }
      return positions;
    }
  
    getNextPosition() {
      return (this.position + 1) % 2;
    }
  }
```

### Board
* Constructor
```js
  class Board {
    constructor() {
      this.blocks = [];
      this.shapes = [];
      this.interval = undefined;
      this.loopInterval = 1000;
      this.gameOver = true;
      this.loopIntervalFast = parseInt(1000 / 27);
      this.init();
      this.score = 0;
    }
  
    setScore(value) {
      this.score = value;
      $("#score").text(this.score);
    }
  
    getScore() {
      return this.score;
    }
  ```
  * New game
  ```js
    init() {
      $(".empty").each(function(index, ele) {
        let x = parseInt(index / 10);
        let y = index % 10;
        $(ele).css({
          left: y * $(ele).innerWidth() + "px",
          top: x * $(ele).innerHeight() + "px"
        });
      });
      $("#message").text("Tetris");
      window.animatelo.flash("#new-game", {
        duration: 2500,
        iterations: Infinity
      });
    }
  
    newGame() {
      for (let shape of this.shapes) {
        this.removeShape(shape);
        this.addBlocks(shape.getBlocks());
      }
      for (let block of this.blocks) {
        block.destroy();
      }
      this.blocks = [];
      this.gameOver = false;
      this.initGameLoop(this.loopInterval);
      this.setScore(0);
      $("#banner").hide();
    }
  
    initGameLoop(value) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      let ref = this;
      this.interval = setInterval(function() {
        ref.gameLoop();
      }, value);
    }
  
    gameLoop() {
      this.renderShapes();
      this.renderBlocks();
      this.spawnShapes();
      this.gameUpdate();
      console.log("Shapes Length:" + this.shapes.length);
      console.log("Blocks Length:" + this.blocks.length);
    }
  
    gameUpdate() {
      if (this.isGameOver()) {
        this.gameOver = true;
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = undefined;
        }
        $("#banner").show();
        $("#message").text("Game Over!");
        $("#new-game").text("Tap here to start again!");
      }
    }
  
    isGameOver() {
      for (let block of this.blocks) {
        let pos = block.getPosition();
        if (pos.x === 0 && pos.y === 4) {
          return true;
        }
      }
      return false;
    }
  ```
  * Tetris Motion
  ```js
    renderShapes() {
      for (let shape of this.getShapes()) {
        if (
          this.arePositonsWithinBoard(shape.fallingPositions()) &&
          this.areBlocksEmpty(shape.fallingPositions())
        ) {
          shape.fall();
          shape.render();
        } else {
          this.removeShape(shape);
          this.addBlocks(shape.getBlocks());
          if (this.moveFast) {
            this.initGameLoop(this.loopInterval);
            this.moveFast = false;
          }
        }
      }
    }
  
    dropShape() {
      if (!this.gameOver) {
        this.initGameLoop(this.loopIntervalFast);
        this.moveFast = true;
      }
    }
  
    renderBlocks() {
      for (let x = 0; x < 16; x++) {
        let blocks = [];
        for (let y = 0; y < 10; y++) {
          let block = this.getBlock(x, y);
          if (!block) {
            break;
          }
          blocks.push(block);
        }
        if (blocks.length == 10) {
          let ref = this;
          this.removeBlocks(blocks);
          this.flashBlocks(blocks, function() {
            ref.destroyBlocks(blocks);
            ref.fallBlocks(x);
            ref.setScore(ref.getScore() + 10);
          });
        }
      }
    }
  
    flashBlocks(blocks, callback) {
      let anim = null;
      for (let block of blocks) {
        anim = block.flash();
      }
      anim[0].onfinish = callback;
    }
  
    fallBlocks(i) {
      for (let x = 0; x < i; x++) {
        for (let y = 0; y < 10; y++) {
          let block = this.getBlock(x, y);
          if (block) {
            block.fall();
            block.render();
          }
        }
      }
    }
  
    removeBlocks(blocks) {
      for (let block of blocks) {
        this.blocks.splice(this.blocks.indexOf(block), 1);
      }
    }
  
    destroyBlocks(blocks) {
      for (let block of blocks) {
        block.destroy();
      }
    }
  
    getBlock(x, y) {
      for (let block of this.blocks) {
        if (block.x == x && block.y == y) {
          return block;
        }
      }
      return undefined;
    }
  ```
  * New shape of block
  ```js
    spawnShapes() {
      if (this.shapes.length == 0) {
        let shape = null;
  
        switch (this.getRandomRange(0, 4)) {
          case 0:
            {
              shape = new Line(0, 4);
            }
            break;
          case 1:
            {
              shape = new Square(0, 4);
            }
            break;
          case 2:
            {
              shape = new LShape(0, 4);
            }
            break;
          case 3:
            {
              shape = new ZShape(0, 4);
            }
            break;
          case 4:
            {
              shape = new TShape(0, 4);
            }
            break;
        }
  
        shape.init();
        shape.render();
        this.shapes.push(shape);
      }
    }
  
    getShapes() {
      return Array.from(this.shapes);
    }
  
    removeShape(shape) {
      this.shapes.splice(this.shapes.indexOf(shape), 1);
    }
  
    addBlocks(blocks) {
      for (let block of blocks) {
        this.blocks.push(block);
      }
    }
  
    arePositonsWithinBoard(positions) {
      for (let position of positions) {
        if (position.x >= 16 || position.y < 0 || position.y >= 10) {
          return false;
        }
      }
      return true;
    }
  
    areBlocksEmpty(positions) {
      for (let position of positions) {
        for (let block of this.blocks) {
          let pos = block.getPosition();
          if (pos.x == position.x && pos.y == position.y) {
            return false;
          }
        }
      }
      return true;
    }
  ```
  
  * Key control
  ```js
    leftKeyPress() {
      for (let shape of this.shapes) {
        if (
          this.arePositonsWithinBoard(shape.leftPositions()) &&
          this.areBlocksEmpty(shape.leftPositions())
        ) {
          shape.moveLeft();
          shape.render();
        }
      }
    }
  
    rotate() {
      for (let shape of this.shapes) {
        if (
          this.arePositonsWithinBoard(shape.rotatePositions()) &&
          this.areBlocksEmpty(shape.rotatePositions())
        )
          shape.rotate();
        shape.init();
        shape.render();
      }
    }
  
    rightKeyPress() {
      for (let shape of this.shapes) {
        if (
          this.arePositonsWithinBoard(shape.rightPositions()) &&
          this.areBlocksEmpty(shape.rightPositions())
        ) {
          shape.moveRight();
          shape.render();
        }
      }
    }
  
    upKeyPress() {
      this.rotate();
    }
  
    downKeyPress() {
      this.dropShape();
    }
  
    getRandomRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  ```
