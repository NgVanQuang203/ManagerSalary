const body = document.querySelector("body");
slidebar = document.querySelector(".slidebar");
toggle = document.querySelector(".toggle");
modeText = document.querySelectorAll(".mode-text");
hamburger = document.getElementById("main-menu-btn");
mainMenu = document.querySelector(".main-menu");
hamburgerBtn = document.querySelector(".hamburger-btn");
modeSwitch = document.querySelectorAll(".toggle-switch");
main_menu_overlay = document.querySelector(".main-menu-overlay");


// Đảm bảo trạng thái mặc định ban đầu khi tải trang
const savedTheme = localStorage.getItem("Mytheme");
if (savedTheme) {
  body.className = savedTheme;
  modeText.forEach(function(item) {
    if (body.classList.contains("dark")) {
      item.innerText = "Nền Sáng";
    } else {
      item.innerText = "Nền Tối";
    }
});
}

  modeSwitch.forEach((item) => {
    item.addEventListener("click", () => {
      body.classList.toggle("dark");
      modeText.forEach(function(item) {
        if (body.classList.contains("dark")) {
          item.innerText = "Nền Sáng";
        } else {
          item.innerText = "Nền Tối";
        }
    });
      // Lưu trạng thái theme vào Local Storage
      localStorage.setItem("Mytheme", body.className);
    });
  });

// When click search box open menu

  // Event click Arrow open Menu
toggle.addEventListener("click", () => {
  slidebar.classList.toggle("close");
});



// Click menu Mobile
hamburger.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
  if(mainMenu.classList.contains("active")){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "auto";
  }
 
});

main_menu_overlay.addEventListener("click", () =>{
  mainMenu.classList.remove("active");
  hamburgerBtn.classList.remove("active");
  if(mainMenu.classList.contains("active")){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "auto";
  }
});



