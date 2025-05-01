let btnsA = document.getElementById("btn-a");
let btnsB = document.getElementById("btn-b");
let btnsC = document.getElementById("btn-c");
let btnsD = document.getElementById("btn-d");
let btnsE = document.getElementById("btn-e");
let BG = document.getElementById("bg");
let FINISH = document.getElementById('finish');

  let num = 20;
  let numb = 20;
  let numc = 20;
  let numd = 20;
  let nume = 20;

  let success = "btn btn-lg btn-success";
  let danger = "btn btn-lg btn-danger";
  let warning = "btn btn-lg btn-warning";
  let black = "bg-black";

// btnA
btnsA.addEventListener('click', function() {
  num--;
  btnsA.textContent = num;

if (num <= 15) {
  btnsA.className = warning;
};

if (num <= 10) {
  btnsA.className = success;
};

if (num <= 5) {
  btnsA.className = danger;
};


  if (num <= 0) {
    btnsA.remove();
  };

});


// btnB
btnsB.addEventListener('click', function() {
  numb--;
  btnsB.textContent = numb;

if (numb <= 15) {
  btnsB.className = warning;
};

if (numb <= 10) {
  btnsB.className = success;
};

if (numb <= 5) {
  btnsB.className = danger;
};


  if (numb <= 0) {
    btnsB.remove();
  };

});


// btnC
btnsC.addEventListener('click', function() {
  numc--;
  btnsC.textContent = numc;

if (numc <= 15) {
  btnsC.className = warning;
};

if (numc <= 10) {
  btnsC.className = success;
};

if (numc <= 5) {
  btnsC.className = danger;
};


  if (numc <= 0) {
    btnsC.remove();
  };

});

// btnD
btnsD.addEventListener('click', function() {
  numd--;
  btnsD.textContent = numd;

if (numd <= 15) {
  btnsD.className = warning;
};

if (numd <= 10) {
  btnsD.className = success;
};

if (numd <= 5) {
  btnsD.className = danger;
};


  if (numd <= 0) {
    btnsD.remove();
  };

});

// btnE
btnsE.addEventListener('click', function() {
  nume--;
  btnsE.textContent = nume;

if (nume <= 15) {
  btnsE.className = warning;
};

if (nume <= 10) {
  btnsE.className = success;
};

if (nume <= 5) {
  btnsE.className = danger;
};


  if (nume <= 0) {
    btnsE.remove();
    BG.className = black;
    FINISH.innerHTML = "<h1>FINISH</h1>";
  };

});