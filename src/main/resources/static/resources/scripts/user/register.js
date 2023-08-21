const registerForm = document.getElementById('registerForm');

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
