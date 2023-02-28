// маска для номера телефона
document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("#phone");
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  IMask(inputElement, maskOptions);
});
// Аккордеон
const questions = document.querySelectorAll('[data-name="question"]');

questions.forEach(function (item) {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");

    if (this.nextElementSibling.classList.value == "") {
      this.getElementsByTagName("img")[0].src = "./img/btn_up.png";
    } else {
      this.getElementsByTagName("img")[0].src = "./img/btn_up_.png";
    }
  });
});

// Меню
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/close_m.svg";
  } else {
    navBtnImg.src = "./img/icons/burger menu.svg";
  }
};

// Modal-1
const openModal1 = document.querySelector("#section8-btn");
const modal1 = document.querySelector("#modal-1");
const btnModal1 = document.querySelector("#modal-1-btn");
const closeModal1 = document.querySelector("#modal-1-close");

openModal1.onclick = () => {
  modal1.classList.toggle("hidden");
};

btnModal1.onclick = () => {
  modal1.classList.toggle("hidden");
};

closeModal1.onclick = () => {
  modal1.classList.toggle("hidden");
};
