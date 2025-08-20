var myModule = (function() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  let indexColor = 0;

  function changeColorH2() {
    document.getElementById("h2-btn").addEventListener("click", () => {
      const h2 = document.getElementById("site-new-forum-h2");
      if (indexColor === 5) {
        indexColor = 0;
        h2.style.color = colors[indexColor];
        indexColor++;
      }
      else {
        h2.style.color = colors[indexColor];
        indexColor++;
      }
    });
  }

  function clickDisplayOrNone(idName) {
    const contentBox = document.getElementById(idName);
    const btn = document.getElementById("toggle-about-btn");
    contentBox.classList.toggle('abcd');
    const check = contentBox.classList.contains('abcd');
    if (check) {
      btn.textContent = "Hiện giới thiệu";
      contentBox.textContent = "";
    }
    else {
      btn.textContent = "Ẩn giới thiệu";
      contentBox.textContent = "Xin chào mọi người. Đây là trường Đại học Bách khoa TPHCM.";
    }
  }

  function moreDetail() {
    const btn = document.getElementById("toggle-about-btn");
    btn.addEventListener("click", () => clickDisplayOrNone("toggle-about-content"));
  }

  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const contentBox = document.getElementById("content-box");
    contentBox.textContent = "Loading...";
    await new Promise(resolve => {
      setTimeout(resolve,2000);
    });
    const header = await fetch(url);
    const data = await header.json();
    contentBox.innerHTML = `${data.title} <br> ${data.body}`;
  }

  function changeMode() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      window.localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀️";
    } else {
      window.localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    }
  }

  function clickChangeMode() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    themeBtn.addEventListener("click", changeMode);
  }

  function initTheme() {
    const theme = window.localStorage.getItem("theme");
    const themeBtn = document.getElementById("theme-toggle-btn");

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }
  }

  function onClickDropOut() {
    const item = document.getElementById("nav-has-dropout");
    item.addEventListener("click", () => {
      const div = document.getElementById("dropout-div");
      div.classList.toggle('hidden');
    })
  }

  function onClickMiniNav() {
    const btn = document.getElementById("menu-toggle");
    btn.addEventListener("click", () => {
      const nav = document.getElementById("mini-nav");
      nav.classList.toggle("hidden");
    })
  }

  function onClickMiniDropOut() {
    const item = document.getElementById("mini-nav-has-dropout");
    item.addEventListener("click", () => {
      const div = document.getElementById("mini-dropout-div");
      div.classList.toggle("hidden");
    })
  }
  getData();

  function test() {
    console.dir(getData);
  }

  return {
    moreDetail: moreDetail(),
    getData: setInterval(getData, "5000"),
    clickChangeMode: clickChangeMode(),
    initTheme: initTheme(),
    onClickDropOut: onClickDropOut(),
    onClickMiniNav: onClickMiniNav(),
    onClickMiniDropOut: onClickMiniDropOut(),
    changeColorH2: changeColorH2(),
    test: test(),
  };
})();
