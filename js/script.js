consolw.log('Hello, world!');

window.onload = function() {
    const fullNameInput = document.getElementById('full-name');
    const userNameInput = document.getElementById('username');
    const checkbox = document.getElementById('checkbox');
    const modal = document.querySelector('.modal');
    const formButton = document.getElementById('button');
    const modalButton = document.getElementById('modal-button');
    const replaceButton = document.getElementById('replace');
    const inputsArray = document.querySelectorAll('.input-text');

    //?
    fullNameInput.addEventListener("keydown", stopEnterNumbers);
    userNameInput.addEventListener("keydown", stopEnterDotsAndCommas);


    formButton.addEventListener("click", validateForm);
    checkbox.addEventListener("click", checkCheckbox);
    modalButton.addEventListener("click", toSignInPage);
    replaceButton.addEventListener("click", () => replacePage());

    //?
    function stopEnterNumbers(e) {
        let number = parseInt(e.key);
        if(!isNaN(number)) {
            return false;
        }
    }
    function stopEnterDotsAndCommas(e) {
        let symbol = parseInt(e.key);
            if(e.key === '.' || e.key === ',') {
                return false;
            }
    }

    fullNameInput.onkeydown = (e) => {
        let number = parseInt(e.key);
        if(!isNaN(number)) {
            return false;
        }
    }
    // userNameInput.onkeydown = (e) => {
    //     let symbol = parseInt(e.key);
    //     if(e.key === '.' || e.key === ',') {
    //         return false;
    //     }
    // }

    function checkCheckbox() {
        if(checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Несогласен");
        }
    }

    function validateForm () {
        let emailInput = document.getElementById('email');
        let passwordInput = document.getElementById('password');
        let repeatPasswordInput = document.getElementById('repeat-password');

        inputsArray.forEach((input) => {
            if(!input.value) {
                alert(`Заполните поле ${input.dataset.value}`);
            }
        });
        if(passwordInput.value.length < 8) {
            alert("Длина пароля должна быть больше 8 символов");
            return;
        }
        if(repeatPasswordInput.value !== passwordInput.value) {
            alert("Пароли не совпадают!")
            return;
        }
        if(!checkbox.checked) {
            alert("Необходимо ваше согласие");
            return;
        }
        modal.style.display = 'block';
    }

    function toSignInPage() {
        document.getElementById('form').reset();
        modal.style.display = 'none';
        replacePage();
    }

    function replacePage() {
        let title = document.getElementsByClassName('wrapper-form__title')[0];
        title.textContent = 'Log in to the system';

        let fullName = document.getElementsByClassName('wrapper-form__input')[0];
        let email = document.getElementsByClassName('wrapper-form__input')[2];
        let repeatPassword = document.getElementsByClassName('wrapper-form__input')[4];
        let formAgreement = document.getElementsByClassName('wrapper-form__agreement')[0];
        let formQuestion = document.getElementsByClassName('wrapper-form__question')[0];
        fullName.remove();
        email.remove();
        repeatPassword.remove();
        formAgreement.remove();
        formQuestion.remove();
        formButton.textContent = 'Sign In';

        formButton.removeEventListener("click", validateForm);
        formButton.addEventListener("click", signIn)

    }

    function signIn () {
        let emailInput = document.getElementById('email');
        let passwordInput = document.getElementById('password');

        if(!userNameInput.value) {
            alert("Заполните поле User Name");
            return;
        }
        if(!passwordInput.value) {
            alert("Заполните поле Password");
            return;
        }

        alert(`Добро пожаловать, ${userNameInput.value}!`);
        document.getElementById('form').reset();
    }
}
