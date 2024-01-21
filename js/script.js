const headerBtnImg = document.getElementById("header-btn-img");

const onHover = (e) => (headerBtnImg.src = "./assets/logoutImg.svg");
const onLeave = (e) => (headerBtnImg.src = "./assets/loginImg.svg");


// carausal
const carausal = document.querySelector(".section-14-child-right");
const leftBtn = document.querySelector(".section-14-controls.left");
const rightBtn = document.querySelector(".section-14-controls.right");
const list = document.querySelector(".section-14-child-right-cards");

const onClickRight = () => {
    console.log(carausal)
  carausal.scrollTo(list.scrollWidth, 0);
  rightBtn.style.opacity = 0;
  leftBtn.style.opacity = 1;
};
const onClickLeft = () => {
  carausal.scrollTo(-list.scrollWidth, 0);
  rightBtn.style.opacity = 1;
  leftBtn.style.opacity = 0;
};
// carausal-2
const carausal2 = document.getElementById("part-2");
const leftBtn2 = document.getElementById("left-btn2");
const rightBtn2 = document.getElementById("right-btn2");
const list2 = document.getElementById("cards");

const onClickRight2 = () => {
    console.log(carausal2)
  carausal2.scrollTo(list2.scrollWidth, 0);
  rightBtn2.style.opacity = 0;
  leftBtn2.style.opacity = 1;
};
const onClickLeft2 = () => {
  carausal2.scrollTo(-list2.scrollWidth, 0);
  rightBtn2.style.opacity = 1;
  leftBtn2.style.opacity = 0;
};
