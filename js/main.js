const ex_img = $(".ex__img img");
const ex_text = $(".ex__text");

const btn_left1 = $(".timer__buttons__left");
const btn_right1 = $(".timer__buttons__right");

const btn_left2 = $(".count__buttons__left");
const btn_right2 = $(".count__buttons__right");

const timer = $(".timer");
const timer_text = $(".timer__text");

const start_btn = $(".start_button");

const count = $(".count");
const count_text = $(".count__text");

var currentEx = 1;
var pressCount = 8;
var superCount = 3;

var json = "";
var startFlag = false;

fetch("../inf.json")
  .then((response) => response.json())
  .then((data) => {
    json = data;
  })
  .catch((error) => console.error("Error fetching data:", error));

var index = 1;
const intervalID = setInterval(() => {
  if (currentEx == -1) {
    ex_img.attr("src", `../images/src/sleep.png`);
  } else {
    ex_img.attr("src", `../images/ex${currentEx}/ex${currentEx}.${index}.png`);
    index = (index % Number(json[`ex${currentEx}`]["slides"])) + 1;

    ex_text.text(json[`ex${currentEx}`]["title"]);

    if (json[`ex${currentEx}`]["time"] == "0") {
      $(".timer").css("display", "none");
      $(".count").css("display", "flex");

      count_text.text(json[`ex${currentEx}`]["count"]);
    } else {
      $(".count").css("display", "none");
      $(".timer").css("display", "flex");

      if (startFlag == false) {
        timer_text.text(json[`ex${currentEx}`]["count"]);
      }
    }
  }
}, 1000);

start_btn.click(() => {
  startFlag = true;
  var startId = setInterval(() => {
    if (timer_text.text() == "00") {
      startFlag = false;
      clearInterval(startId);
    } else {
      text = "" + (Number(timer_text.text()) - 1);
      if (text == "0") {
        startFlag = false;
        clearInterval(startId);
      }
      if (text.length == 1) {
        text = "0" + text;
      }
      timer_text.text(text);
    }
  }, 1000);
});

btn_left1.click(() => {
  LeftFunc();
});

btn_left2.click(() => {
  LeftFunc();
});

btn_right1.click(() => {
  RightFunc();
});

btn_right2.click(() => {
  RightFunc();
});

function LeftFunc() {
  if (startFlag == false) {
    if (currentEx > 1) {
      currentEx--;
    }
  }
}

function RightFunc() {
  if (startFlag == false) {
    var preEx = currentEx;
    if (currentEx != -1 && currentEx >= 15) {
      currentEx = -1;
      $(".timer").css("display", "none");
      $(".count").css("display", "none");
      ex_text.text("Отдых :3");

      setTimeout(() => {
        if (
          (preEx == 15 && pressCount > 0) ||
          (preEx == 29 && superCount > 0)
        ) {
          currentEx = preEx;
          if (pressCount > 0) {
            pressCount--;
          } else {
            superCount--;
          }
        } else {
          currentEx = preEx + 1;
          if (currentEx > 29) {
            ex_img.attr("src", `../images/src/end.png`);
            clearInterval(intervalID);
            ex_text.text("Всё) Ты молодец :3");
          }
        }
      }, 3000);
    } else {
      if ((preEx == 15 && pressCount > 0) || (preEx == 29 && superCount > 0)) {
        currentEx = preEx;
        if (pressCount > 0) {
          pressCount--;
        } else {
          superCount--;
        }
      } else {
        currentEx = preEx + 1;
        if (currentEx > 29) {
          ex_img.attr("src", `../images/src/end.png`);
          clearInterval(intervalID);
          ex_text.text("Всё) Ты молодец :3");
        }
      }
    }
  }
}
