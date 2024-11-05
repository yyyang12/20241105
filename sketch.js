function setup() {  //設定初始質內容,只會執行一次
  createCanvas(windowWidth, windowHeight);  //產生一個畫布
  background("#fdfcdc")  
}

function draw() { //畫圖每秒繪畫60次
  //background(220); //灰白s
  background("#fdfcdc")
  noFill()
  stroke("#fed9b7")
  strokeWeight(3)
  var rect_width=50 +mouseX/10
  var bc_width=50  +mouseY/10
  var sc_width=25+mouseX/10

  //FOR迴圈
  // I=0:i為變數
  //第一排
  for(let j=0;j<20;j=j+1){
   for(let i=0;i<40;i=i+1){
    //if(j<10&i<10){
      //stroke("#00afb9") 
    //}else if (j<15&i<15){
    //  stroke("#0081a7") 
    //}else  {
     // stroke("#012a4a") 
    //}
   ellipse(25+50*i,25+50*j,bc_width) 
   rect(0+50*i,0+50*j,rect_width)
   ellipse(50+50*i,50+50*j,sc_width)
}
  }

  }
  