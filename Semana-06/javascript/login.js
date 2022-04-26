window.onload = function () {
    //Values from document
    var email = document.getElementById('email');
    var span = document.getElementsByClassName('error');
    var password = document.getElementById('password');
    var button = document.getElementsByClassName('btn-send');

    //Email validation
    var emailValidated = false;

    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur(){
        var validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(email.value === ''){
            span[0].textContent = 'Please enter a email';
        } else if(!validEmail.test(email.value)){
            span[0].textContent = 'Please enter a valid email';
        } else{
            emailValidated = true;
        }
    }

    function emailFocus(){
        span[0].textContent = '';
    }

    //Password Validation
    var passwordValidated = false;

    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if(password.value.length == 0){
            span[1].textContent = 'Please enter a password';
        } else if(password.value.length < 6){
            span[1].textContent = 'Password is too short'; //si son menos de 6 tira error
        } else{
            var contLetters = 0;
            var contNumbers = 0;
            for(var i = 0; i < password.value.length; i++){
                for(var j = 0; j < alphabet.length; j++){
                    if(password.value.charAt(i) == alphabet[j]){
                        contLetters += 1;
                    }
                }
                for(var j = 0; j < numbers.length; j++){
                    if(password.value.charAt(i) == numbers[j]){
                        contNumbers += 1;
                    }
                }
            }
            if(contLetters == 0 || contNumbers == 0){
                span[1].textContent = 'Password needs numbers and letters';
            } else if(contLetters + contNumbers !== password.value.length){
                span[1].textContent = 'Password only accept numbers and letters';
            } else{
                passwordValidated = true;
            }
        }
    }

    function passwordFocus(){
        span[1].textContent = '';
    }

    //Cartel emergente
    button[0].addEventListener('click', submitClick);

    function submitClick(){
        if(emailValidated && passwordValidated){
            alert('Login Successfull \nEmail:' + email.value + '\nPassword:' + password.value);
        } else if(!emailValidated && !passwordValidated){
            alert('Error: Email and password incorrect \nEmail:' + email.value + '\nPassword:' + password.value);
        } else if(!emailValidated){
            alert('Error: Email incorrect \nEmail:' + email.value + '\nPassword:' + password.value);
        } else{
            alert('Error: Password incorrect \nEmail:' + email.value + '\nPassword:' + password.value);
        }
    }
}
