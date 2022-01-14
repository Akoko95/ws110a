# 課程:網站設計進階 -- 習題與報告

欄位 | 內容
-----|--------
學期 | 110 學年度上學期
學生 | 張芷榕
學號末兩碼 | 10827
教師 | [陳鍾誠](https://www.nqu.edu.tw/educsie/index.php?act=blog&code=list&ids=4)
學校科系 | [金門大學資訊工程系](https://www.nqu.edu.tw/educsie/index.php)
課程內容 | https://gitlab.com/ccc110/ws

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
