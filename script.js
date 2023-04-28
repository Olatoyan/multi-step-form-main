"use strict";

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const form = document.querySelector(".form");
const form1 = document.querySelector(".form-1");
const inputField = document.querySelector(".input");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameError = document.querySelector(".name__error");
const nameLengthError = document.querySelector(".name-length__error");
const emailError = document.querySelector(".email__error");
const phoneError = document.querySelector(".phone__error");
const monthlyPlan = document.querySelector(".choice__box-1");
const yearlyPlan = document.querySelector(".choice__box-2");
const plans = document.querySelectorAll(".plan");
const checkPlan = document.querySelector(".check");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const monthBoxes = document.querySelector(".boxes-month");
const yearBoxes = document.querySelector(".boxes-year");
const picks = document.querySelectorAll(".pick");
const pickBox = document.querySelectorAll(".pick__box");
const nextBtn = document.querySelectorAll(".next__btn");
const backBtn = document.querySelectorAll(".back__btn");

let currentPage = 1;
const MAX_PAGE = 3;

const validateForm = function (e) {
  e.preventDefault();

  // name input
  const name = nameInput.value.trim();
  const regexName = /^[a-zA-z\s]*$/;
  if (!regexName.test(name) || name === "") {
    nameInput.style.border = "1px solid #d61b1b";
    nameError.style.display = "block";
    return false;
  } else if (name.length < 7) {
    nameInput.style.border = "1px solid #d61b1b";
    nameError.style.display = "none";
    nameLengthError.style.display = "block";
    return false;
  } else {
    nameInput.style.border = "1px solid #022a5a46";
    nameError.style.display = "none";
  }

  // email input
  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    emailInput.style.border = "1px solid #d61b1b";
    emailError.style.display = "block";
    return false;
  } else {
    emailInput.style.border = "1px solid #022a5a46";
    emailError.style.display = "none";
  }

  // phone number input
  const phone = phoneInput.value.trim();
  const regexNum = /^\d+$/;
  if (!regexNum.test(phone)) {
    phoneInput.style.border = "1px solid #d61b1b";
    phoneError.style.display = "block";
    return false;
  } else {
    phoneInput.style.border = "1px solid #022a5a46";
    phoneError.style.display = "none";
  }

  if (yearly.classList.contains("active-span")) {
    monthBoxes.style.display = "none";
    yearBoxes.style.display = "flex";
  } else {
    monthBoxes.style.display = "flex";
    yearBoxes.style.display = "none";
  }
  // update current page
  if (currentPage < MAX_PAGE) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage++;

    if (currentPage <= MAX_PAGE) {
      document.querySelector(`.container-${currentPage}`).style.display =
        "grid";
    }
  }

  // update current page for previous container
  // if ( currentPage > 1) {
  //   document.querySelector(`.container-${currentPage}`).style.display = "none";
  //   currentPage--;
  //   document.querySelector(`.container-${currentPage}`).style.display = "grid";
  //   return;
  // }

  // if (currentPage < 4) {
  //   document.querySelector(`.container-${currentPage}`).style.display = "none";
  //   currentPage++;
  //   console.log(currentPage);
  //   document.querySelector(`.container-${currentPage}`).style.display = "grid";
  //   console.log(currentPage);
  // }
};

nextBtn.forEach((btn) => btn.addEventListener("click", validateForm));
backBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      document.querySelector(`.container-${currentPage}`).style.display =
        "none";
      currentPage--;
      document.querySelector(`.container-${currentPage}`).style.display =
        "grid";
      return;
    }
  })
);

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    plans.forEach((b) => b.classList.remove("active"));
    plan.classList.add("active");
  });
});

checkPlan.addEventListener("click", function () {
  monthly.classList.toggle("active-span");
  yearly.classList.toggle("active-span");
  if (yearly.classList.contains("active-span")) {
    monthlyPlan.style.display = "none";
    yearlyPlan.style.display = "grid";
  } else {
    monthlyPlan.style.display = "grid";
    yearlyPlan.style.display = "none";
  }
});

// nextBtn.addEventListener("click", contt);

picks.forEach((pick) => {
  pick.addEventListener("click", function (e) {
    // e.preventDefault();

    pickBox.forEach((box) => {
      box.addEventListener("click", function (e) {
        e.target.closest("pick__box").classList.toggle("active__pick");
      });
    });

    // pick.closest(pickBox).classList.toggle("active__pick");
    // pick.style.border = "1px solid #999";
    console.log(pick.textContent);
  });
});
