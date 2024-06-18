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

var startFlag = false;


var json = {
  "ex1": {
    "count": "10",
    "time": "0",
    "title": "Движение головой вперёд-назад",
    "descr": "",
    "slides": 2
  },
  "ex2": {
    "count": "10",
    "time": "0",
    "title": "Движение головой вправо-влево",
    "descr": "",
    "slides": 2
  },
  "ex3": {
    "count": "5",
    "time": "0",
    "title": "Круговые движения головой вправо. Столько же влево",
    "descr": "",
    "slides": 2
  },
  "ex4": {
    "count": "5",
    "time": "0",
    "title": "Вращение лапок вперёд. Столько же назад",
    "descr": "",
    "slides": 1
  },
  "ex5": {
    "count": "5",
    "time": "0",
    "title": "Вращение лапок в локтевом суставе (Назад и вперёд)",
    "descr": "",
    "slides": 1
  },
  "ex6": {
    "count": "8",
    "time": "0",
    "title": "Попеременные махи лапками",
    "descr": "",
    "slides": 2
  },
  "ex7": {
    "count": "10",
    "time": "0",
    "title": "Вращение туловища с согнутыми в локтях лапках",
    "descr": "",
    "slides": 2
  },
  "ex8": {
    "count": "5",
    "time": "0",
    "title": "Вращение туловища вокруг таза по часовой стерлке (потом против)",
    "descr": "",
    "slides": 2
  },
  "ex9": {
    "count": "4",
    "time": "0",
    "title": "Наклоны вправо-вперёд-влево-назад",
    "descr": "",
    "slides": 2
  },
  "ex10": {
    "count": "10",
    "time": "0",
    "title": "Вращение правой лапки в тазобедренном суставе (потом левой)",
    "descr": "",
    "slides": 2
  },
  "ex11": {
    "count": "15",
    "time": "0",
    "title": "Вращение правой лапки в коленном суставе (потом левой)",
    "descr": "",
    "slides": 2
  },
  "ex12": {
    "count": "10",
    "time": "0",
    "title": "Вращение правой лапки в голеностопном суставе (потом левой)",
    "descr": "",
    "slides": 2
  },
  "ex13": {
    "count": "6",
    "time": "0",
    "title": "Наклоны к стопам лапок",
    "descr": "",
    "slides": 2
  },
  "ex14": {
    "count": "30",
    "time": "1",
    "title": "Возьмите ножки в лапки так низко, как сможете, и задержитесь так",
    "descr": "",
    "slides": 1
  },
  "ex15": {
    "count": "5",
    "time": "0",
    "title": "Пресс (упритесь ножками во что-то, держите лапки за головой)",
    "descr": "",
    "slides": 2
  },
  "ex16": {
    "count": "30",
    "time": "1",
    "title": "Прыжки с разведением лапок ног и рук",
    "descr": "",
    "slides": 2
  },
  "ex17": {
    "count": "10",
    "time": "0",
    "title": "Круговые движения лапками в плечевом суставе",
    "descr": "",
    "slides": 1
  },
  "ex18": {
    "count": "10",
    "time": "1",
    "title": "Растягиваем плечевые мышцы",
    "descr": "",
    "slides": 2
  },
  "ex19": {
    "count": "4",
    "time": "0",
    "title": "Отжимания с широко расставленными лапками",
    "descr": "",
    "slides": 2
  },
  "ex20": {
    "count": "2",
    "time": "0",
    "title": "Отжимания индийских котиков",
    "descr": "",
    "slides": 3
  },
  "ex21": {
    "count": "4",
    "time": "0",
    "title": "Алмазные отжимания (со сведенными лапками)",
    "descr": "",
    "slides": 2
  },
  "ex22": {
    "count": "3",
    "time": "0",
    "title": "Классические отжимания",
    "descr": "",
    "slides": 2
  },
  "ex23": {
    "count": "15",
    "time": "1",
    "title": "Махи лапками  в планке на прямых лапках",
    "descr": "",
    "slides": 4
  },
  "ex24": {
    "count": "15",
    "time": "1",
    "title": "Попеременная планка на локтях и на прямых лапках",
    "descr": "",
    "slides": 2
  },
  "ex25": {
    "count": "20",
    "time": "0",
    "title": "Ягодичный мостик",
    "descr": "",
    "slides": 2
  },
  "ex26": {
    "count": "10",
    "time": "0",
    "title": "Махи ножкой на 30° с опорой на стенку",
    "descr": "",
    "slides": 2
  },
  "ex27": {
    "count": "10",
    "time": "0",
    "title": "Махи ножкой вбок. Лапки на талии",
    "descr": "",
    "slides": 2
  },
  "ex28": {
    "count": "20",
    "time": "1",
    "title": "Подъём на цыпочках",
    "descr": "",
    "slides": 2
  },
  "ex29": {
    "count": "3",
    "time": "0",
    "title": "Котик-супермен",
    "descr": "",
    "slides": 2
  }
}

var index = 1;
const intervalID = setInterval(() => {
  if (currentEx == -1) {
    ex_img.attr("src", `https://github.com/Shutcing/Meow-tivation/blob/main/images/src/sleep.png`);
  } else {
    ex_img.attr("src", `https://github.com/Shutcing/Meow-tivation/blob/main/images/ex${currentEx}/ex${currentEx}.${index}.png`);
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
            ex_img.attr("src", `https://github.com/Shutcing/Meow-tivation/blob/main/images/src/end.png`);
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
          ex_img.attr("src", `https://github.com/Shutcing/Meow-tivation/blob/main/images/src/end.png`);
          clearInterval(intervalID);
          ex_text.text("Всё) Ты молодец :3");
        }
      }
    }
  }
}
