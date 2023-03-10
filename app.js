let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let galleryPic = document.getElementsByClassName("galleryPic");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    galleryPic[i].style.opacity = "1";
    galleryPic[i].style.border = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  galleryPic[slideIndex - 1].style.opacity = "0.5";
  galleryPic[slideIndex - 1].style.border = "3px solid #cc5500";
}

//
let slideIndexInner = 1;
showSlidesInner(slideIndexInner);

function plusSlidesInner(n) {
  showSlidesInner((slideIndexInner += n));
}

function currentSlideInner(n) {
  showSlidesInner((slideIndexInner = n));
}

function showSlidesInner(n) {
  let i;
  let slidesInner = document.getElementsByClassName("slides");
  let galleryPicInner = document.getElementsByClassName("galleryPicInner");

  if (n > slidesInner.length) {
    slideIndexInner = 1;
  }
  if (n < 1) {
    slideIndexInner = slidesInner.length;
  }
  for (i = 0; i < slidesInner.length; i++) {
    slidesInner[i].style.display = "none";
    galleryPicInner[i].style.opacity = "1";
    galleryPicInner[i].style.border = "none";
  }

  slidesInner[slideIndexInner - 1].style.display = "block";
  galleryPicInner[slideIndexInner - 1].style.opacity = "0.5";
  galleryPicInner[slideIndexInner - 1].style.border = "3px solid #cc5500";
}

//

const openBtn = document.querySelector(".openBtn");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".closeBtn");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const cartPage = document.querySelector(".cart-page");
const pic = document.querySelectorAll(".slide img");
const innerPage = document.querySelector(".slideShowPage");

for (let i = 0; i < pic.length; i++) {
  pic[i].addEventListener("click", function () {
    innerPage.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

openBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
});

cart.addEventListener("click", function () {
  cartPage.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  cartPage.classList.add("hidden");
  overlay.classList.add("hidden");
  menu.classList.add("hidden");
  innerPage.classList.add("hidden");
  overlay.classList.add("hidden");
});

// cartPage.addEventListener("click", function () {
//   this.classList.add("hidden");
// });

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const qty = document.querySelector(".qty");
const cartQty = document.querySelector(".qty-cart");
const empty = document.querySelector(".empty");
const full = document.querySelector(".full");
const qtyCartPage = document.querySelector(".qtyincart");
const tPrice = document.querySelector(".totalPrice");
const deleteBtn = document.querySelector(".delete");
const addtoCart = document.querySelector(".addtoCart");

plus.addEventListener("click", function () {
  qty.textContent = Number(qty.textContent) + 1;
});

minus.addEventListener("click", function () {
  if (qty.textContent > 0) {
    qty.textContent = Number(qty.textContent) - 1;
  } else {
    qty.textContent = 0;
  }
});

addtoCart.addEventListener("click", function () {
  if (qty.textContent == 0) {
    cartQty.classList.add("hidden");
  } else {
    cartQty.classList.remove("hidden");
    cartQty.textContent = Number(qty.textContent) + Number(cartQty.textContent);
    qtyCartPage.textContent =
      Number(qty.textContent) + Number(qtyCartPage.textContent);
    tPrice.textContent = "$" + Number(qty.textContent) * 125;
    full.classList.remove("hidden");
    empty.classList.add("hidden");
    qty.textContent = 0;
  }
});

deleteBtn.addEventListener("click", function () {
  full.classList.add("hidden");
  empty.classList.remove("hidden");
  cartQty.classList.add("hidden");
  qty.textContent = 0;
  cartQty.textContent = 0;
  qtyCartPage.textContent = 0;
});
