const registerDiv = document.getElementById('registerDiv');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const agreeAllCheckbox = document.querySelector('.allAgreeBtn input');

// "전체 동의하기" 체크박스를 클릭했을 때 실행되는 함수.
function toggleCheckboxes() {
    const isChecked = this.checked;

    // 나머지 체크박스들을 선택 또는 해제합니다.
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;

        const noneBtn = checkbox.parentNode.querySelector('.noneBtn');
        const agreeBtn = checkbox.parentNode.querySelector('.agreeBtn');

        if (isChecked) {
            noneBtn.style.display = 'none';
            agreeBtn.style.display = 'inline';
        } else {
            noneBtn.style.display = 'inline';
            agreeBtn.style.display = 'none';
        }
    });
}

// "전체 동의하기" 체크박스에 클릭 이벤트를 추가.
if (agreeAllCheckbox) {
    agreeAllCheckbox.addEventListener('click', toggleCheckboxes);
}

// 각 체크박스 요소에 대해 이벤트 핸들러를 등록.
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const noneBtn = this.parentNode.querySelector('.noneBtn');
        const agreeBtn = this.parentNode.querySelector('.agreeBtn');

        if (this.checked) {
            noneBtn.style.display = 'none';
            agreeBtn.style.display = 'inline';
        } else {
            noneBtn.style.display = 'inline';
            agreeBtn.style.display = 'none';
        }

        // 선택사항 체크박스의 체크 여부를 확인하고 "전체 동의하기" 체크박스를 업데이트합니다.
        const optionalCheckbox = document.querySelector('[data-optional-checkbox]');
        if (optionalCheckbox) {
            const isOptionalChecked = optionalCheckbox.checked;

            if (!isOptionalChecked) {
                agreeAllCheckbox.checked = false;
            } else {
                let isAllChecked = true;
                checkboxes.forEach(function (checkbox) {
                    if (!checkbox.checked) {
                        isAllChecked = false;
                    }
                });

                agreeAllCheckbox.checked = isAllChecked;
            }
        }
    });
});

const backBtns = document.querySelectorAll('[name="back"]');

backBtns.forEach(backBtn => {
    backBtn.addEventListener('click', e => {
        e.preventDefault();
        window.history.back();
    });
});

registerDiv.termWarning = registerDiv.querySelector('.term-warning');

registerDiv.termWarning.show = (text) => {
    registerDiv.termWarning.innerText = text;
    registerDiv.termWarning.classList.add('visible');
};
registerDiv.termWarning.hide = () => {
    registerDiv.termWarning.classList.remove('visible');
};
registerDiv.idWarning = registerDiv.querySelector('[rel="idWarning"]');
registerDiv.idWarning.show = (text) => {
    registerDiv.idWarning.innerText = text;
    registerDiv.idWarning.classList.add('visible');
};
registerDiv.idWarning.hide = () => {
    registerDiv.idWarning.innerText = '';
    registerDiv.idWarning.classList.remove('visible');
}

registerDiv.passwordWarning = registerDiv.querySelector('[rel="passwordWarning"]');
registerDiv.passwordWarning.show = (text) => {
    registerDiv.passwordWarning.innerText = text;
    registerDiv.passwordWarning.classList.add('visible');
};
registerDiv.passwordWarning.hide = () => {
    registerDiv.passwordWarning.innerText = '';
    registerDiv.passwordWarning.classList.remove('visible');
}

registerDiv.emailWarning = registerDiv.querySelector('[rel="emailWarning"]');
registerDiv.emailWarning.show = (text) => {
    registerDiv.emailWarning.innerText = text;
    registerDiv.emailWarning.classList.add('visible');
};
registerDiv.emailWarning.hide = () => {
    registerDiv.emailWarning.innerText = '';
    registerDiv.emailWarning.classList.remove('visible');
}

registerDiv.nameWarning = registerDiv.querySelector('[rel="nameWarning"]');
registerDiv.nameWarning.show = (text) => {
    registerDiv.nameWarning.innerText = text;
    registerDiv.nameWarning.classList.add('visible');
};
registerDiv.nameWarning.hide = () => {
    registerDiv.nameWarning.innerText = '';
    registerDiv.nameWarning.classList.remove('visible');
}

registerDiv.nicknameWarning = registerDiv.querySelector('[rel="nicknameWarning"]');
registerDiv.nicknameWarning.show = (text) => {
    registerDiv.nicknameWarning.innerText = text;
    registerDiv.nicknameWarning.classList.add('visible');
};
registerDiv.nicknameWarning.hide = () => {
    registerDiv.nicknameWarning.innerText = '';
    registerDiv.nicknameWarning.classList.remove('visible');
}

registerDiv.contactWarning = registerDiv.querySelector('[rel="contactWarning"]');
registerDiv.contactWarning.show = (text) => {
    registerDiv.contactWarning.innerText = text;
    registerDiv.contactWarning.classList.add('visible');
};
registerDiv.contactWarning.hide = () => {
    registerDiv.contactWarning.innerText = '';
    registerDiv.contactWarning.classList.remove('visible');
}

registerDiv.show = () => {
    registerDiv['agreeServiceTerm'].checked = false;
    registerDiv['agreePrivacyTerm'].checked = false;
    registerDiv.termWarning.hide();

    registerDiv['userId'].value = '';
    registerDiv.idWarning.hide();

    registerDiv['email'].value = '';
    registerDiv.emailWarning.hide();

    registerDiv['password'].value = '';
    registerDiv['passwordCheck'].value = '';
    registerDiv.passwordWarning.hide();

    registerDiv['nickname'].value = '';
    registerDiv.nicknameWarning.hide();

    registerDiv['contact'].value = '';
    registerDiv['contact'].removeAttribute('disabled');
    registerDiv['contactSend'].removeAttribute('disabled');
    registerDiv['contactCode'].value = '';
    registerDiv['contactCode'].setAttribute('disabled', 'disabled');
    registerDiv['contactVerify'].setAttribute('disabled', 'disabled');
    registerDiv['contactSalt'].value = '';

    registerDiv.classList.remove('step-1', 'step-2', 'step-3');
    registerDiv.classList.add('step-1', 'visible');
};

const submitButtons = registerDiv.querySelectorAll('[type="submit"]');

submitButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (registerDiv.querySelector('.step-1').classList.contains('visible')) {
            if (!registerDiv.querySelector('[name="agreeServiceTerm"]').checked) {
                registerDiv.termWarning.show('서비스 이용약관을 읽고 동의해 주세요.');
                return false;
            }
            if (!registerDiv.querySelector('[name="agreePrivacyTerm"]').checked) {
                registerDiv.termWarning.show('개인정보 처리방침을 읽고 동의해 주세요.');
                return false;
            }
            registerDiv.querySelector('.step-1').classList.remove('visible');
            registerDiv.querySelector('.step-2').classList.add('visible');
        }
        if (registerDiv.querySelector('.step-2').classList.contains('visible')) {
            // 입력값 유효성 검사
            if (registerDiv.querySelector('[name="userId"]').value === '') {
                registerDiv.idWarning.show('아이디를 입력해 주세요.');
                registerDiv.querySelector('[name="userId"]').focus();
                return;
            }
            else {
                registerDiv.idWarning.hide('');
            }
            if (registerDiv.querySelector('[name="password"]').value === '') {
                registerDiv.passwordWarning.show('비밀번호를 입력해 주세요.');
                registerDiv.querySelector('[name="password"]').focus();
                return;
            }
            if (!new RegExp('^([\\da-zA-Z`~!@#$%^&*()\\-_=+\\[{\\]};:\'",<.>/?]{8,50})$').test(registerDiv.querySelector('[name="password"]').value)) {
                registerDiv.passwordWarning.show('올바른 비밀번호를 입력해 주세요.');
                registerDiv.querySelector('[name="password"]').focus();
                registerDiv.querySelector('[name="password"]').select();
                return;
            }
            if (registerDiv.querySelector('[name="passwordCheck"]').value === '') {
                registerDiv.passwordWarning.show('비밀번호를 다시 한번 더 입력해 주세요.');
                registerDiv.querySelector('[name="passwordCheck"]').focus();
                return;
            }
            if (registerDiv.querySelector('[name="password"]').value !== registerDiv.querySelector('[name="passwordCheck"]').value) {
                registerDiv.passwordWarning.show('비밀번호가 서로 일치하지 않습니다. 다시 한번 더 확인해 주세요.');
                registerDiv.querySelector('[name="passwordCheck"]').focus();
                registerDiv.querySelector('[name="passwordCheck"]').select();
                return;
            }
            if (registerDiv.querySelector('[name="password"]').value === registerDiv.querySelector('[name="passwordCheck"]').value) {
                registerDiv.passwordWarning.show('비밀번호가 서로 일치합니다.');
                registerDiv.passwordWarning.style.color = 'forestgreen';
            }
            if (registerDiv.querySelector('[name="email"]').value === '') {
                registerDiv.emailWarning.show('이메일을 입력해 주세요.');
                registerDiv.querySelector('[name="email"]').focus();
                return;
            }
            if (!new RegExp('^(?=.{10,50}$)([\\da-zA-Z\\-_]{5,25})@([\\da-z][\\da-z\\-]*[\\da-z]\\.)?([\\da-z][\\da-z\\-]*[\\da-z])\\.([a-z]{2,15})(\\.[a-z]{2})?$').test(registerDiv.querySelector('[name="email"]').value)) {
                registerDiv.emailWarning.show('올바른 이메일을 입력해 주세요.');
                registerDiv.querySelector('[name="email"]').focus();
                registerDiv.querySelector('[name="email"]').select();
                return;
            }
            else {
                registerDiv.emailWarning.hide('');
            }
            if (registerDiv.querySelector('[name="name"]').value === '') {
                registerDiv.nameWarning.show('이름을 입력해 주세요.');
                registerDiv.querySelector('[name="name"]').focus();
                return;
            }
            else {
                registerDiv.nameWarning.hide('');
            }
            if (registerDiv.querySelector('[name="nickname"]').value === '') {
                registerDiv.nicknameWarning.show('별명을 입력해 주세요.');
                registerDiv.querySelector('[name="nickname"]').focus();
                return;
            }
            if (!new RegExp('^([가-힣a-zA-Z0-9_-]{2,20})$').test(registerDiv.querySelector('[name="nickname"]').value)) {
                registerDiv.nicknameWarning.show('별명은 2~20자의 한글, 영문, 숫자, 특수문자(-, _)만 사용할 수 있습니다.');
                registerDiv.querySelector('[name="nickname"]').focus();
                registerDiv.querySelector('[name="nickname"]').select();
                return;
            }
            else {
                registerDiv.nicknameWarning.hide('');
            }
            if (registerDiv.querySelector('[name="contactCode"]').value === '') {
                registerDiv.contactWarning.show('연락처 인증을 완료해 주세요.');
                return;
            }
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            formData.append('authority', registerDiv['authority'].value);
            formData.append('userId', registerDiv['userId'].value);
            formData.append('password', registerDiv['password'].value);
            formData.append('email', registerDiv['email'].value);
            formData.append('name', registerDiv['name'].value);
            formData.append('nickname', registerDiv['nickname'].value);
            formData.append('contact', registerDiv['contact'].value);
            formData.append('code', registerDiv['contactCode'].value);
            formData.append('salt', registerDiv['contactSalt'].value);
            xhr.open('POST', '/user/register');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const responseObject = JSON.parse(xhr.responseText);
                        console.log(responseObject.result);
                        switch (responseObject.result) {
                            case 'failure':
                                registerDiv.contactWarning.show('알 수 없는 이유로 가입하지 못하였습니다. 잠시 후 다시 시도해 주세요.');
                                break;
                            case 'failure_duplicate_id':
                                registerDiv.idWarning.show('해당 아이디는 이미 사용 중입니다.');
                                registerDiv['userId'].focus();
                                registerDiv['userId'].select();
                                break;
                            case 'failure_duplicate_email':
                                registerDiv.emailWarning.show('해당 이메일은 이미 사용 중입니다.');
                                registerDiv['email'].focus();
                                registerDiv['email'].select();
                                break;
                            case 'failure_duplicate_nickname':
                                registerDiv.nicknameWarning.show('해당 별명은 이미 사용 중입니다.');
                                registerDiv['nickname'].focus();
                                registerDiv['nickname'].select();
                                break;
                            case 'failure_duplicate_contact':
                                registerDiv.contactWarning.show('해당 연락처는 이미 사용 중입니다.');
                                registerDiv['contact'].focus();
                                registerDiv['contact'].select();
                                break;
                            case 'success':
                                registerDiv.querySelector('.section.step-2').classList.remove('visible');
                                registerDiv.querySelector('.section.step-3').classList.add('visible');
                                break;
                            default:
                                registerDiv.contactWarning.show('서버가 알 수 없는 응답을 반환하였습니다. 잠시 후 다시 시도해 주세요.');
                        }
                    }
                }
            };
            xhr.send(formData);
        }
    });
});

// 아이디 중복확인
registerDiv.querySelector('[name="idCheck"]').addEventListener('click', () => {
    registerDiv.idWarning.hide();
    if (registerDiv.querySelector('[name="userId"]').value === '') {
        registerDiv.idWarning.show('아이디를 입력해 주세요.');
        registerDiv.querySelector('[name="userId"]').focus();
        return;
    }
    if(!new RegExp('^([\\da-zA-Z]{4,16})$').test(registerDiv.querySelector('[name="userId"]').value)){
        registerDiv.idWarning.style.color = '#ef5350';
        registerDiv.idWarning.show('올바른 아이디를 입력해 주세요.');
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/user/userIdCount?userId=${registerDiv.querySelector('[name="userId"]').value}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const responseObject = JSON.parse(xhr.responseText);
                switch (responseObject.result) {
                    case 'duplicate':
                        registerDiv.idWarning.show('해당 아이디는 이미 사용 중입니다.');
                        break;
                    case 'okay':
                        registerDiv.idWarning.show('해당 아이디는 사용할 수 있습니다.');
                        registerDiv.idWarning.style.color = 'forestgreen';
                        break;
                    default:
                        registerDiv.idWarning.show('서버가 알 수 없는 응답을 반환하였습니다. 잠시 후 다시 시도해 주세요.');
                }
            } else {
                registerDiv.idWarning.show('서버와 통신하지 못하였습니다. 잠시 후 다시 시도해 주세요.');
            }
        }
    };
    xhr.send();
});

// 아이디 변경시마다 정규식 확인
registerDiv.querySelector('[name="userId"]').oninput = () =>{
    if(registerDiv.querySelector('[name="userId"]').value === ''){
        registerDiv.idWarning.style.color = '#ef5350';
        registerDiv.idWarning.show('아이디를 입력해 주세요.');
    }
    else if(!new RegExp('^([\\da-zA-Z]{4,16})$').test(registerDiv.querySelector('[name="userId"]').value)){
        registerDiv.idWarning.style.color = '#ef5350';
        registerDiv.idWarning.show('올바른 아이디를 입력해 주세요.');
    }
    else {
        registerDiv.idWarning.hide();
    }
};

registerDiv.querySelector('[name="password"]', '[name="passwordCheck]').forEach(name => {
    registerDiv[name].addEventListener('focusout', () => {
        if (registerDiv['password'].value === '') {
            registerDiv.passwordWarning.show('비밀번호를 입력해 주세요.');
            registerDiv.passwordWarning.style.color = 'red';
            return;
        }
        if (!new RegExp('^([\\da-zA-Z`~!@#$%^&*()\\-_=+\\[{\\]};:\'",<.>/?]{8,50})$').test(registerDiv['password'].value)) {
            registerDiv.passwordWarning.show('올바른 비밀번호를 입력해 주세요.');
            registerDiv['password'].focus();
            registerDiv['password'].select();
            return;
        }
        if (registerDiv['passwordCheck'].value === '') {
            registerDiv.passwordWarning.show('비밀번호를 다시 한번 더 입력해 주세요.');
            registerDiv.passwordWarning.style.color = 'red';
            return;
        }
        if (registerDiv['password'].value !== registerDiv['passwordCheck'].value) {
            registerDiv.passwordWarning.show('비밀번호가 서로 일치하지 않습니다.');
            registerDiv.passwordWarning.style.color = 'red';
            return;
        }
        if (registerDiv['password'].value === registerDiv['passwordCheck'].value) {
            registerDiv.passwordWarning.show('비밀번호가 일치합니다.');
            registerDiv.passwordWarning.style.color = 'forestgreen';
        } else {
            registerDiv.passwordWarning.hide();
        }
    });
});

// 이메일 변경시마다 확인
['email'].forEach(email => {
    registerDiv[email].addEventListener('focusout', () => {
        if (registerDiv['email'].value === '') {
            registerDiv.emailWarning.show('이메일을 입력해 주세요.');
            registerDiv.emailWarning.style.color = 'red';
        } else if (!new RegExp('^(?=.{10,50}$)([\\da-zA-Z\\-_]{5,25})@([\\da-z][\\da-z\\-]*[\\da-z]\\.)?([\\da-z][\\da-z\\-]*[\\da-z])\\.([a-z]{2,15})(\\.[a-z]{2})?$').test(registerDiv['email'].value)) {
            registerDiv.emailWarning.show('올바른 이메일을 입력해 주세요.');
            registerDiv['email'].focus();
            registerDiv['email'].select();
        } else {
            registerDiv.emailWarning.hide();
        }
    });
});

// 이메일 변경시마다 확인
['name'].forEach(name => {
    registerDiv[name].addEventListener('focusout', () => {
        if (registerDiv['name'].value === '') {
            registerDiv.nameWarning.show('이름을 입력해 주세요.');
            registerDiv.nameWarning.style.color = 'red';
        } else {
            registerDiv.nameWarning.hide();
        }
    });
});

// 닉네임 확인
registerDiv['nicknameCheck'].addEventListener('click', () => {
    if (registerDiv['nickname'].value === '') {
        registerDiv.nicknameWarning.show('닉네임을 입력해 주세요.');
        registerDiv['nickname'].focus();
        return;
    }
    if (!new RegExp('^([가-힣a-zA-Z0-9_-]{2,20})$').test(registerDiv['nickname'].value)) {
        registerDiv.nicknameWarning.show('별명은 2~20자의 한글, 영문, 숫자, 특수문자(-, _)만 사용할 수 있습니다.');
        registerDiv['nickname'].focus();
        registerDiv['nickname'].select();
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/user/userNicknameCount?nickname=${registerDiv['nickname'].value}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const responseObject = JSON.parse(xhr.responseText);
                console.log(responseObject);
                switch (responseObject.result) {
                    case 'duplicate':
                        registerDiv.nicknameWarning.show('해당 닉네임은 이미 사용 중입니다.');
                        break;
                    case 'okay':
                        registerDiv.nicknameWarning.show('해당 닉네임은 사용할 수 있습니다.');
                        registerDiv.nicknameWarning.style.color = 'forestgreen';
                        break;
                    default:
                        registerDiv.nicknameWarning.show('서버가 알 수 없는 응답을 반환하였습니다. 잠시 후 다시 시도해 주세요.');
                }
            } else {
                registerDiv.nicknameWarning.show('서버와 통신하지 못하였습니다. 잠시 후 다시 시도해 주세요.');
            }
        }
    };
    xhr.send();
});

// 닉네임 변경시마다 확인
['nickname'].forEach(nickname => {
    registerDiv[nickname].addEventListener('focusout', () => {
        if (registerDiv['nickname'].value === '') {
            registerDiv.nicknameWarning.show('별명을 입력해 주세요.');
            registerDiv.nicknameWarning.style.color = 'red';
        } else if (!new RegExp('^([가-힣a-zA-Z0-9_-]{2,20})$').test(registerDiv['nickname'].value)) {
            registerDiv.nicknameWarning.show('별명은 2~20자의 한글, 영문, 숫자, 특수문자(-, _)만 사용할 수 있습니다.');
            registerDiv['nickname'].focus();
            registerDiv['nickname'].select();
        } else {
            registerDiv.nicknameWarning.hide();
        }
    });
});