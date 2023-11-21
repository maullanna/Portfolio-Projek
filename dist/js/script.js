// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// ini untuk bagian humberger
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove("humberger-active");
    navMenu.classList.add("hidden");
  }
});

//darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
//pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Dapatkan elemen yang ingin Anda atur warnanya
const textElement = document.getElementById("input");

// Fungsi untuk mengubah warna teks sesuai mode
function setTextColor(darkMode) {
  if (darkMode) {
    textElement.style.color = "lightgray"; // Ubah ke warna light saat mode dark aktif
  } else {
    textElement.style.color = "black"; // Ubah ke warna dark saat mode light aktif
  }
}

// Contoh penggunaan: saat mode dark aktif
setTextColor(true); // Panggil fungsi dengan parameter true jika mode dark aktif

// Contoh penggunaan: saat mode light aktif
setTextColor(false); // Panggil fungsi dengan parameter false jika mode light aktif
