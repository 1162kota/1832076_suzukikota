"use strict";
window.addEventListener("load", () => {
 var mui = new nibun_ui(
 document.querySelector("#start"),
 document.querySelector("#clear"),
 document.querySelector("#graph1"),
 document.querySelector("#graph1b")
 );
 mui.setNumber_ui(document.querySelectorAll("#panel2 > button"));
 mui.setNumber_ui(document.querySelectorAll("#panel2 > text"));
 mui.setResult_ui(document.querySelector("#result"));
 mui.draw_axis();
});
class nibun_ui {
    constructor(start, clear, canvas, background) {
      this.start = start;
      this.clear = clear;
      this.canvas = canvas;
      this.nibun = new nibun(canvas);
      this.background = background;
  
      this.clear.addEventListener("click", () => {
        this.nibun.clearCanvas();
      });
      this.start.addEventListener("click", () => {
        let result = this.nibun.next();
        this.result.textContent =0 //未完成
      });
    }
    setNumber_ui(btnArray) {
      for (let btn of btnArray) {
        btn.addEventListener("click", () => {
          if (btn.getAttribute("number"))
            this.nibun.setTimes(btn.getAttribute("number"));
        });
      }
    }
    setResult_ui(result_element) {
      this.result = result_element;
      this.result.textContent = "計算値：";
    }
    draw_axis() {
    }
}
class nibun { 
  let a = 
  }
  next() {
    let a = 1.0;
    let b = 0.0;
    let x;
    let c;




  
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.inside_number = 0;
    this.all_number = 0;
  }
  setTimes(value) {
    this.times = value;
  }
}
