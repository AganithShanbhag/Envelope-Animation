setTimeout(() => {
  setTimeout(() => {
    const card = document.getElementById("flip-card-inner");
    card.style.transform = "rotateY(180deg)";
  }, 1500);
}, 1000);

setTimeout(() => {
  setTimeout(openEnvelope, 1000);
}, 2000);

function openEnvelope() {
  setInterval(() => {
    document.getElementById("one").style.transform = "rotate(180deg)";
    document.getElementById("companyName").style.display = "none";
  }, 2000);

  setTimeout(letterUp, 2000);
}

function letterUp() {
  const letter = document.getElementById("letter");
  const one = document.getElementById("one");
  // const envelope = document.getElementById("envelope");

  one.style.zIndex = 1;
  //envelop
  letter.style.zIndex = 2;
  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 500) {
      clearInterval(id);
    } else {
      letter.style.top = -i + "px";
      i++;
    }
  }, 5);

  setTimeout(letterDown, 3000);
}

function letterDown() {
  const letter = document.getElementById("letter");
  const card = document.getElementById("flip-card");

  letter.style.top = -500 + "px";
  letter.style.zIndex = 4;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 100) {
      // lastPos = -i;
      clearInterval(id);
    } else {
      letter.style.top = -400 + i * 5 + "px";
      letter.style.transform = "rotate(" + -i / 18 + "deg)";

      card.style.transform = "rotate(" + i / 18 + "deg)";

      i++;
    }
  }, 10);

  setTimeout(() => {
    const popUp = document.getElementById("popUp");
    popUp.style.display = "block";
    popUp.style.zIndex = 5;
  }, 2000);
}
