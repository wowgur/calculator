var cal = "";
var har = "";
const screen = document.getElementById('screen');
const btns = document.getElementsByClassName('btn');
const AC = document.getElementById('AC');
const backspace = document.getElementById('back');
const equal = document.getElementById("=");
const lightDark = document.getElementById("lightDark");
const mycalculator = document.querySelector(".mycalculator");
const uBtn = document.getElementsByClassName("uBtn");
const body = document.getElementById("body");
const buttonText = document.getElementsByClassName("buttonText");
const scientific = document.getElementById("scientific");
const science = document.getElementsByClassName("science");
const power = document.getElementById("power");
const downImage = document.getElementById("downImage");
const history = document.getElementById("history");
const his = document.getElementById("his");
const historyText = document.getElementById("historyText");
const graphButton = document.getElementById("graphButton");
const graphing = document.getElementById("graphing");
const features = document.getElementById("features");
let rad = true;
let isHistory = false;

Array.from(btns).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let a = e.target.innerHTML;
    if (a == '^') {
      har = har + "**";
      cal = cal + "^";
      screen.innerHTML = cal;
    }
    else {
      har = har + a;
      cal = cal + a;
      screen.innerHTML = cal;
    }
  });
});

downImage.addEventListener("click", () => {
  history.style.height = "0vh";
  history.style.display = "none";
  isHistory = false;
  Array.from(btns).forEach((e) => {
    e.style.display = "block";
  });
  Array.from(uBtn).forEach((e) => {
    e.style.display = "block";
  });
  Array.from(science).forEach((e) => {
    e.style.display = "block";
  });
});

his.addEventListener("click", () => {
  Array.from(btns).forEach((e) => {
    e.style.display = "none";
  });
  Array.from(uBtn).forEach((e) => {
    e.style.display = "none";
  });
  Array.from(science).forEach((e) => {
    e.style.display = "none";
  });
  isHistory = true;

  history.style.display = "block";
  history.style.height = "60vh";
  historyText.style.height = "52.5vh";
  // history.style.transition = "all 5s";

});

document.onkeydown = function key(e) {
  console.log(e.keyCode);
  if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 187 || e.keyCode == 189 || e.keyCode == 191 || e.keyCode==190) {
    let a = e.key;
    cal = cal + a;
    har = har + a;
    screen.innerHTML = cal;
  }
  else if (e.keyCode == 8) {
    if (cal != "") {
      let a = cal.length - 1;
      if (cal[a] != "^") {
        cal = cal.substring(0, a);
        har = har.substring(0, a);
      }
      else {
        har = har.substring(0, a);
        cal = cal.substring(0, a);
      }
      screen.innerHTML = cal;
    }
  }
  else if (e.keyCode == 13) {
    try {
      har = eval(har);
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
    catch (error) {
      screen.innerHTML = "<marquee>ERROR!! Press Backspace</marquee>";
    }
  }
}


AC.addEventListener("click", () => {
  cal = "";
  har = "";
  screen.innerHTML = "";
});

backspace.addEventListener("click", () => {
  if (cal != "") {
    let a = cal.length - 1;
    if (cal[a] != "^") {
      cal = cal.substring(0, a);
      har = har.substring(0, a);
    }
    else {
      har = har.substring(0, a);
      cal = cal.substring(0, a);
    }
    screen.innerHTML = cal;
  }
});

for (i = 0; i < 2; i++) {
  science[i].addEventListener("click", (e) => {
    let a = e.target.innerHTML;
    cal = cal + a;
    har = har + a;
    screen.innerHTML = cal;
  });
}

equal.addEventListener("click", () => {

  try {
    har = eval(har);
    addHistory(har, cal);
    cal = har;
    screen.innerHTML = cal;
  }
  catch (error) {screen.innerHTML = "<marquee>ERROR!! Press Backspace</marquee>";
  }
});

lightDark.addEventListener("click", () => {
  if (lightDark.checked) {
    mycalculator.style.background = "linear-gradient(white,rgb(194, 253, 253))";
    screen.style.background = "radial-gradient(darkblue,darkgray)";
    screen.style.color = "white";
    features.style.color = "white";
    Array.from(btns).forEach((ele) => {
      ele.style.background = "radial-gradient(darkblue,darkgreen)";
      ele.style.color = "whitesmoke";
    });
    Array.from(uBtn).forEach((ele) => {
      ele.style.background = "radial-gradient(darkblue,darkgreen)";
      ele.style.color = "whitesmoke";
    });
    Array.from(science).forEach((ele) => {
      ele.style.background = "radial-gradient(darkblue,darkgreen)";
      ele.style.color = "whitesmoke";
    });
    Array.from(buttonText).forEach((ele) => {
      ele.style.color = "whitesmoke";
    });
    body.style.background = "rgb(39, 39, 67)";
  }
  else {
    screen.style.background = "radial-gradient(rgb(255, 240, 242),rgb(250, 198, 198))";
    mycalculator.style.background = "linear-gradient(rgb(25, 3, 85),rgb(0, 53, 0))";
    screen.style.color = "black";
    features.style.color = "black";
    Array.from(btns).forEach((ele) => {
      ele.style.background = "radial-gradient(rgb(180, 255, 130),rgb(191, 191, 252))";
      ele.style.color = "black";
    });
    Array.from(uBtn).forEach((ele) => {
      ele.style.background = "radial-gradient(rgb(180, 255, 130),rgb(191, 191, 252))";
      ele.style.color = "black";
    });
    Array.from(science).forEach((ele) => {
      ele.style.background = "radial-gradient(rgb(180, 255, 130),rgb(191, 191, 252))";
      ele.style.color = "black";
    });

    Array.from(buttonText).forEach((ele) => {
      ele.style.color = "black";
    });
    body.style.background = "white";
  }
});

scientific.addEventListener("click", () => {
  if (scientific.checked) {
    Array.from(science).forEach((element) => {
      element.style.display = "block";
    });
    mycalculator.style.width = 60 + "vw";
  }
  else {
    if (isHistory) {
      Array.from(btns).forEach((e) => {
        e.style.display = "block";
      });
      Array.from(uBtn).forEach((e) => {
        e.style.display = "block";
      });

      history.style.height = "0vh";
      history.style.display = "none";
    }
    Array.from(science).forEach((element) => {
      element.style.display = "none";
    });
    mycalculator.style.width = 35 + "vw";
  }
});

document.getElementById("sin").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      if (rad == false) {
        if (Number.isInteger(har / 180)) {
          har = "0";
        }
        har = Math.PI / 180 * har;
      }
      har = Math.sin(har);
      cal = "sin(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("cos").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      if (rad == false) {
        if (Number.isInteger(har / 90) && (har / 90) % 2 != 0) {
          har = "0";
        } else {
          har = Math.PI / 180 * har;
          har = Math.cos(har);
        }
      } else {
        har = Math.cos(har);
      }
      cal = "cos(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("tan").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      if (rad == false) {
        if (Number.isInteger(har / 90) && (har / 90) % 2 != 0) {
          har = "Not Defined";
        }
        else if (Number.isInteger(har / 180)) {
          har = "0";
        } else {
          har = Math.PI / 180 * har;
          har = Math.tan(har);
        }
      }
      else {
        har = Math.tan(har);
      }
      cal = "tan(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("asin").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      let a = parseFloat(har);
      if (a >= -1 && a <= 1) {
        har = Math.asin(har);
        if (rad == false) {
          har = 180 * har / Math.PI;
        }
        cal = "asin(" + cal + ")";
        addHistory(har, cal);
        cal = har;
        screen.innerHTML = cal;
      }
      else {
        screen.innerHTML = "GIVE VALUE B/W -1 & 1";
      }
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("acos").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      let a = parseFloat(har);
      if (a >= -1 && a <= 1) {
        har = Math.acos(har);
        if (rad == false) {
          har = 180 * har / Math.PI;
        }
        cal = "acos(" + cal + ")";
        addHistory(har, cal);
        cal = har;
        screen.innerHTML = cal;
      }
      else {
        screen.innerHTML = "GIVE VALUE B/W -1 & 1";
      }
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("atan").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      har = Math.atan(har);
      if (rad == false) {
        har = 180 * har / Math.PI;
      }
      cal = "atan(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
const abs = document.getElementById("abs");
abs.addEventListener("click", () => {
  if (abs.innerHTML == "Rad") {
    abs.innerHTML = "Deg";
    rad = true;
  }
  else if (abs.innerHTML == "Deg") {
    abs.innerHTML = "Rad";
    rad = false;
  }
});
document.getElementById("fact").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = parseFloat(eval(har));
      if (Number.isInteger(har)) {
        cal = har;
        let a = 1;
        for (i = 1; i <= har; i++) {
          a *= i;
        }
        har = a;
        cal = cal + "!";
        screen.innerHTML = cal;
      }
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("sqrt").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      har = Math.sqrt(har);
      cal = "√" + cal;
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("log").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      har = Math.log(har);
      cal = "log(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
document.getElementById("exp").addEventListener("click", () => {
  try {
    if (har == "") {
      screen.innerHTML = "Give an argument";
    } else {
      har = eval(har);
      har = Math.exp(har);
      cal = "exp(" + cal + ")";
      addHistory(har, cal);
      cal = har;
      screen.innerHTML = cal;
    }
  }
  catch (error) {
    screen.innerHTML = "ERROR!! Press Backspace";
  }
});
graphButton.addEventListener("click", () => {
  if (graphButton.checked) {
    mycalculator.style.display = "none";
    graphing.style.display = "inline-block";
  }
  else {
    mycalculator.style.display = "inline-block";
    graphing.style.display = "none";
  }
});

addHistory = (har, cal) => {
  let x = document.createElement("div");
  x.classList.add("historyItem");
  let z = " => " + cal + " = " + har;
  x.innerHTML = z;
  historyText.append(x);
  cal = har;
}