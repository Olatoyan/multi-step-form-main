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
const radios = document.getElementsByName("plan");
// const plant = document.querySelectorAll('input[name="plan"]');
const checkPlan = document.querySelector(".check");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const monthBoxes = document.querySelector(".boxes-month");
const yearBoxes = document.querySelector(".boxes-year");
const picks = document.querySelectorAll(".pick");
const pickBox = document.querySelectorAll(".pick__box");
const monthSelected = document.querySelector(".selected__box-month");
const yearSelected = document.querySelector(".selected__box-year");
const addOnHeadings = document.querySelectorAll(".add-on__heading");
const addOnPrices = document.querySelectorAll(".add-on__price");
const chosenPlan = document.querySelector(".chosen__plan");
const nextBtn = document.querySelectorAll(".next__btn");
const backBtn = document.querySelectorAll(".back__btn");
const nextBtn2 = document.getElementById("next__btn-2");
const backBtn2 = document.getElementById("back__btn-2");
const nextBtn3 = document.getElementById("next__btn-3");
const backBtn3 = document.getElementById("back__btn-3");
const nextBtn4 = document.getElementById("next__btn-4");
const backBtn4 = document.getElementById("back__btn-4");

let currentPage = 1;
const MAX_PAGE = 4;

///////////////////////////////////////////////
// PAGE 1
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

  // update current page
  if (currentPage < MAX_PAGE) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage++;

    if (currentPage <= MAX_PAGE) {
      document.querySelector(`.container-${currentPage}`).style.display =
        "grid";
    }
  }
};

/////////////////////////////////////////////////////////////////
// PAGE 2
const validateForm2 = function (e) {
  e.preventDefault();

  // validate selected plan
  const selectedPlan = document.querySelector('input[name="plan"]:checked');
  const planText = document.querySelector(".checked__text");

  if (!selectedPlan) {
    planText.style.display = "block";
    return;
  } else {
    planText.style.display = "none";
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
  if (yearly.classList.contains("active-span")) {
    monthBoxes.style.display = "none";
    monthSelected.style.display = "none";
    yearSelected.style.display = "block";
    yearBoxes.style.display = "flex";
  } else {
    monthBoxes.style.display = "flex";
    yearBoxes.style.display = "none";
    monthSelected.style.display = "block";
    yearSelected.style.display = "none";
  }
};

//////////////////////////////////////////////////////////
// PAGE 3
const validateForm3 = function (e) {
  e.preventDefault();
  // update current page
  if (currentPage < MAX_PAGE) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage++;

    if (currentPage <= MAX_PAGE) {
      document.querySelector(`.container-${currentPage}`).style.display =
        "grid";
    }
  }
};

//////////////////////////////////////////////////////////
// PAGE 4
const validateForm4 = function (e) {
  e.preventDefault();

  // update current page
  if (currentPage < MAX_PAGE) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage++;

    if (currentPage <= MAX_PAGE) {
      document.querySelector(`.container-${currentPage}`).style.display =
        "grid";
    }
  }
};

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
let selectedPlan = null;

plans.forEach((plan) => {
  plan.addEventListener("click", function () {
    plans.forEach((otherPlan) => otherPlan.classList.remove("active__plan"));
    plan.classList.add("active__plan");

    chosenPlan.textContent = plan.dataset.plan;
    // chosenPlan.forEach((plan) => (plan.textContent = plan.dataset.plan));

    console.log(plan.dataset.plan);
  });
});

// picks.forEach((pick) => {
//   pick.addEventListener("click", function (e) {
//     // e.preventDefault();

//     pick.classList.toggle("active__pick");
//   });
// });

/////////////////////////////////////////////////////

// PAGE 1 BUTTONS
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

// PAGE 2 BUTTONS
nextBtn2.addEventListener("click", validateForm2);
backBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentPage > 1) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage--;
    document.querySelector(`.container-${currentPage}`).style.display = "grid";
    return;
  }
});

// PAGE 3 BUTTONS
nextBtn3.addEventListener("click", validateForm3);
backBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentPage > 1) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage--;
    document.querySelector(`.container-${currentPage}`).style.display = "grid";
    return;
  }
});

// PAGE 4 BUTTONS
nextBtn4.addEventListener("click", validateForm3);
backBtn4.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentPage > 1) {
    document.querySelector(`.container-${currentPage}`).style.display = "none";
    currentPage--;
    document.querySelector(`.container-${currentPage}`).style.display = "grid";
    return;
  }
});
