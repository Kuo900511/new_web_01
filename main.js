document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "firstPage") {
    // 第一頁的邏輯
    console.log("正在執行第一頁的程式碼");
    const nextPageButton = document.getElementById("nextPageButton");
    nextPageButton.addEventListener("click", () => {
      window.location.href = "secondPage.html";
    });
  } else if (bodyId === "secondPage") {
    // 第二頁的邏輯
    console.log("正在執行第二頁的程式碼");
    const adBanner = document.getElementById("adBanner");
    const closeAdButton = document.getElementById("closeAd");

    // 廣告相關邏輯
    let isAdDisplayed = false;
    window.addEventListener("scroll", () => {
      if (isAdDisplayed) return;
      if (window.scrollY > 0) {
        adBanner.classList.add("active");
        isAdDisplayed = true;
      }
    });

    closeAdButton.addEventListener("click", () => {
      adBanner.classList.remove("active");
      setTimeout(() => {
        adBanner.style.display = "none";
      }, 800);
    });
    
    const nextPageButton = document.getElementById("lastPageButton");
    nextPageButton.addEventListener("click", () => {
     // 跳轉到上一個頁面
      window.location.href = "index.html";
    });
  }
});