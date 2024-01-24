let guessler = [
  "CEVİZ",
  "SEHPA",
  "KALEM",
  "SEHPA",
  "KAVUN",
  "KEKİK",
  "MERAK",
  "GAZAP",
  "RADYO",
  "ROMAN",
  "DOLAP",
  
];

Math.random();
let randomnumber = Math.floor(Math.random() * 11);
let guess = guessler[randomnumber];
console.log(guess);

let a1 = document.getElementById("wordbtn");
let a2 = document.querySelectorAll("#keyboard");
let a3 = document.querySelector("#wordinput");
let a4 = document.querySelectorAll("#card");
a2.forEach((element) => {
  element.addEventListener("click", function () {
    if (a3.value.length < 5) {
      a3.value += element.innerHTML;
    }
  });
});
a1.addEventListener("click", fonksiyon);
let cnter = 0;
function fonksiyon() {

  if (cnter == 0) {
    for (let i = 0; i < 5; i++) {
      a4[i].innerHTML = a3.value[i];
    }
  }
  //
  else if (cnter == 1) {
    for (let a = 5; a < 10; a++) {
      a4[a].innerHTML = a3.value[a - 5];
    }
  }
  //
  else if (cnter == 2) {
    for (let b = 10; b < 15; b++) {
      a4[b].innerHTML = a3.value[b - 10];
    }
  }
  //
  else if (cnter == 3) {
    for (let c = 15; c < 20; c++) {
      a4[c].innerHTML = a3.value[c - 15];
    }
  }
  //
  else if (cnter == 4) {
    for (let d = 20; d < 25; d++) {
      a4[d].innerHTML = a3.value[d - 20];
    }
  }
  else if (cnter == 5) {
    for (let d = 25; d < 30; d++) {
      a4[d].innerHTML = a3.value[d - 25];
    }
    alert(" Game over, you lost" )
  }

  if (cnter == 0) {
    for (let i = 0; i < 5; i++) {
      if (guess.includes(a3.value[i])) {
        if (guess[i] == a3.value[i]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  //
  else if (cnter == 1) {
    for (let i = 5; i < 10; i++) {
      if (guess.includes(a3.value[i - 5])) {
        if (guess[i - 5] == a3.value[i - 5]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  //
  else if (cnter == 2) {
    for (let i = 10; i < 15; i++) {
      if (guess.includes(a3.value[i - 10])) {
        if (guess[i - 10] == a3.value[i - 10]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  //
  else if (cnter == 3) {
    for (let i = 15; i < 20; i++) {
      if (guess.includes(a3.value[i - 15])) {
        if (guess[i - 15] == a3.value[i - 15]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  //
  else if (cnter == 4) {
    for (let i = 20; i < 25; i++) {
      if (guess.includes(a3.value[i - 20])) {
        if (guess[i - 20] == a3.value[i - 20]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  //
  else if (cnter == 5) {
    for (let i = 25; i < 30; i++) {
      if (guess.includes(a3.value[i - 25])) {
        if (guess[i - 25] == a3.value[i - 25]) {
          document.querySelectorAll("#card")[i].style.background = "green";
        }
        //
        else {
          document.querySelectorAll("#card")[i].style.background =
            "#FFBF00";
        }
      }
      //
      else {
        document.querySelectorAll("#card")[i].style.background = "black";
      }
      //
    }
  }
  

  for (let cnter3 = 0; cnter3 < 29; cnter3++) {
    for (let cnter2 = 0; cnter2 < 5; cnter2++) {
      if (a2[cnter3].innerHTML == a3.value[cnter2]) {
        if (guess.includes(a2[cnter3].innerHTML)) {
          if (guess[cnter2] == a3.value[cnter2]) {
            a2[cnter3].style.background = "green";
          }
          //
          else {
            a2[cnter3].style.background = "#FFBF00";
          }
        }
        //
        else {
          a2[cnter3].style.background = "black";
        }
      }
    }
  }
  cnter++;
  if (guess == a3.value) {
    alert("                     TEBRİKLER KAZANDINIZ  ");
  } else {
    alert("              TEKRAR DENEYİNİZ");
  }
  a3.value = "";
}