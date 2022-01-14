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
