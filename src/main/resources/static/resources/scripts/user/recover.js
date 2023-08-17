const recoverDiv = document.getElementById('recoverDiv');

const phoneCert = document.querySelector('.phone-certification');
const emailCert = document.querySelector('.email-certification');
const phoneContainer = document.getElementById('phoneContainer');
const emailContainer = document.getElementById('emailContainer');

phoneCert.addEventListener('click', handlePhone);
emailCert.addEventListener('click', handleEmail);

// 휴대폰 인증 버튼 클릭
function handlePhone() {
    phoneContainer.classList.add('visible');
    emailContainer.classList.remove('visible');
}

// 이메일 인증 버튼 클릭
function handleEmail() {
    phoneContainer.classList.remove('visible');
    emailContainer.classList.add('visible');
}