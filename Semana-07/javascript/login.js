window.onload = function () {
    //Values from document
    var email = document.getElementById('email');
    var span = document.getElementsByClassName('error');
    var password = document.getElementById('password');
    var button = document.getElementById('login');
    var modal = document.getElementById("sing-up-modal");
    var modalTitle = document.getElementById('modal-title');
    var close = document.getElementsByClassName("close")[0];
    var modalSpan = document.getElementsByClassName("modal-text-span");
    
    var emailValidated = false; //Se usa para la alerta final
    var passwordValidated = false; //Se usa para la alerta final

    //Email validation
    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur(){
        var validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(email.value === ''){
            span[0].textContent = 'Please enter a email';
            emailValidated = false;
        } else if(!validEmail.test(email.value)){
            span[0].textContent = 'Please enter a valid email';
            emailValidated = false;
        } else{
            emailValidated = true;
        }
    }

    function emailFocus(){
        span[0].textContent = '';
    }

    //Password Validation
    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if(password.value.length == 0){
            span[1].textContent = 'Please enter a password';
            passwordValidated = false;
        } else if(password.value.length < 8){
            span[1].textContent = 'Password is too short'; //si son menos de 8 tira error
            passwordValidated = false;
        } else{
            var contLetters = 0;
            var contNumbers = 0;
            for(var i = 0; i < password.value.length; i++){
                for(var j = 0; j < alphabet.length; j++){
                    if(password.value.charAt(i) == alphabet[j] || password.value.charAt(i) == alphabetUpper[j]){
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
                passwordValidated = false;
            } else if(contLetters + contNumbers !== password.value.length){
                span[1].textContent = 'Password only accept numbers and letters';
                passwordValidated = false;
            } else{
                passwordValidated = true;
            }
        }
    }

    function passwordFocus(){
        span[1].textContent = '';
    }

    //Alert sing and API validation
    button.addEventListener('click', submitClick);

    function submitClick(e){
        e.preventDefault(e);
        if(emailValidated && passwordValidated){
            const dataSend = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}`;
            fetch(dataSend)
                .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(responseJson) {
                    if(responseJson.success){
                        modal.style.display = "block";
                        modalTitle.textContent = 'Login successfull';
                        modalSpan[0].textContent = '\nEmail: ' + email.value;
                        modalSpan[1].textContent = '\nPassword: ' + password.value;
                        modalSpan[2].textContent = '';
                    } else{
                        throw new Error('salio mal');
                    }
                })
                .catch(function(error) {
                    modal.style.display = "block";
                    modalTitle.textContent = 'Error';
                    modalSpan[0].textContent = '\nEmail: ' + email.value;
                    modalSpan[1].textContent = '\nPassword: ' + password.value;
                    modalSpan[2].textContent = '\nIncorrect email or password';
                });
        } else if(!emailValidated && !passwordValidated){
            modal.style.display = "block";
            modalTitle.textContent = 'Error';
            modalSpan[0].textContent = '\nEmail: ' + email.value;
            modalSpan[1].textContent = '\nPassword: ' + password.value;
            modalSpan[2].textContent = '\nEmail and password incorrect';
        } else if(!emailValidated){
            modal.style.display = "block";
            modalTitle.textContent = 'Error';
            modalSpan[0].textContent = '\nEmail: ' + email.value;
            modalSpan[1].textContent = '\nPassword: ' + password.value;
            modalSpan[2].textContent = '\nInvalid Email';
        } else{
            modal.style.display = "block";
            modalTitle.textContent = 'Error';
            modalSpan[0].textContent = '\nEmail: ' + email.value;
            modalSpan[1].textContent = '\nPassword: ' + password.value;
            modalSpan[2].textContent = '\nInvalid Password';
        }
    }

    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    }
    
    close.onclick = function(){
        modal.style.display = "none";
    }
}
