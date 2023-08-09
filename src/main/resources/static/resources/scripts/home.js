const bannerContainer = document.getElementById("bannerContainer");
let bannerCount = 2;
let slideInterval;

function changeBanner() {
    bannerContainer.style.backgroundImage = `url("/resources/images/home/banner0${bannerCount}.jpg")`;
    bannerCount += 1;
    if (bannerCount > 5) {
        bannerCount = 1;
    }
}

function startSlideShow() {
    slideInterval = setInterval(changeBanner, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
    slideInterval = null;
}

bannerContainer.addEventListener("mouseover", () => {
    stopSlideShow();
    bannerContainer.classList.add('hidden');
});

bannerContainer.addEventListener("mouseout", () => {
    if (bannerContainer.classList.contains('hidden')) {
        startSlideShow();
        bannerContainer.classList.remove('hidden');
    }
});

// 초기 슬라이드 시작
window.onload = () => {
    startSlideShow();
};
