window.onload = function () {
    //Values from document
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var dni = document.getElementById('dni');
    var birth = document.getElementById('birth');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postal = document.getElementById('postal');
    var email = document.getElementById('email');
    var email2 = document.getElementById('email2');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var button = document.getElementsByClassName('btn');
    var span = document.getElementsByClassName('error');

    //Validation confirm variables (si se validan true, si no false)
    var firstNameValid = false;
    var lastNameValid = false;
    var dniValid = false;
    var birthValid = false;
    var phoneValid = false;
    var addressValid = false;
    var locationValid = false;
    var postalValid = false;
    var emailValid = false;
    var email2Valid = false;
    var passwordValid = false;
    var password2Valid = false;

    //First name validation
    firstName.addEventListener('blur', firstNameBlur);
    firstName.addEventListener('focus', firstNameFocus);

    function firstNameBlur(){
        if(firstName.value === ''){
            span[0].textContent = 'Please enter a Name';
            firstNameValid = false;
        } else if(firstName.value.length < 3){
            span[0].textContent = 'Need at least 3 letters';
            firstNameValid = false;
        } else if(!/^[A-Z]+$/i.test(firstName.value)){
            span[0].textContent = 'It cant have numbers';
            firstNameValid = false;
        }
    }

    function firstNameFocus(){
        span[0].textContent = '';
        firstNameValid = true;
    }

    //Last name validation
    lastName.addEventListener('blur', lastNameBlur);
    lastName.addEventListener('focus', lastNameFocus);

    function lastNameBlur(){
        if(lastName.value === ''){
            span[1].textContent = 'Please enter a Last name';
            lastNameValid = false;
        } else if(lastName.value.length < 3){
            span[1].textContent = 'Need at least 3 letters';
            lastNameValid = false;
        } else if(!/^[A-Z]+$/i.test(lastName.value)){
            span[1].textContent = 'It cant have numbers';
            lastNameValid = false;
        }
    }

    function lastNameFocus(){
        span[1].textContent = '';
        lastNameValid = true;
    }

    //DNI validation
    dni.addEventListener('blur', dniBlur);
    dni.addEventListener('focus', dniFocus);

    function dniBlur(){
        if(dni.value === ''){
            span[2].textContent = 'Please enter a DNI';
            dniValid = false;
        } else if(dni.value.length < 7){
            span[2].textContent = 'Need at least 7 numbers';
            dniValid = false;
        } else if(isNaN(dni.value)){
            span[2].textContent = 'It cant have letters';
            dniValid = false;
        }
    }

    function dniFocus(){
        span[2].textContent = '';
        dniValid = true;
    }

    //Birth validation
    birth.addEventListener('blur', birthBlur);
    birth.addEventListener('focus', birthFocus);

    function birthBlur(){
        if(birth.value === '' || birth.value.substring(2,3) !== '/' || birth.value.substring(5,6) !== '/'){
            span[3].textContent = 'Please enter a valid Date';
            birthValid = false;
        } else{
            var dd = birth.value.substring(0,2);
            var mm = birth.value.substring(3,5);
            var yyyy = birth.value.substring(6,10);
            if(isNaN(dd) || dd > 31){
                span[3].textContent = 'Please enter a valid day (dd)';
                birthValid = false;
            } else if(isNaN(mm) || mm > 12){
                span[3].textContent = 'Please enter a valid month (mm)';
                birthValid = false;
            } else if(isNaN(yyyy)){
                span[3].textContent = 'Please enter a valid year (yyyy)';
                birthValid = false;
            } else if(yyyy > 2004){
                span[3].textContent = 'You has to be adult';
                birthValid = false;
            } else if(yyyy < 1922){
                span[3].textContent = 'You has to be alive';
                birthValid = false;
            }
        }
    }

    function birthFocus(){
        span[3].textContent = '';
        birthValid = true;
    }

    //Phone validation
    phone.addEventListener('blur', phoneBlur);
    phone.addEventListener('focus', phoneFocus);

    function phoneBlur(){
        if(phone.value == ''){
            span[4].textContent = 'Please enter a number';
            phoneValid = false;
        } else if(isNaN(phone.value)){
            span[4].textContent = 'Please just enter numbers';
            phoneValid = false;
        } else if(phone.value.length !== 10){
            span[4].textContent = 'It has to be 10 numbers';
            phoneValid = false;
        }
    }

    function phoneFocus(){
        span[4].textContent = '';
        phoneValid = true;
    }

    //Address validation
    address.addEventListener('blur', addressBlur);
    address.addEventListener('focus', addressFocus);

    function addressBlur(){
        if(address.value == '' || address.value.length < 5){
            span[5].textContent = 'Please enter a valid Address';
            addressValid = false;
        } else{
            var blank = address.value.indexOf(' ');
            if(!isNaN(address.value.substring(0, blank))){
                span[5].textContent = 'Addres start with a word';
                addressValid = false;
            } else if(isNaN(address.value.substring(blank+1))){
                span[5].textContent = 'Addres ends with a number';
                addressValid = false;
            }
        }
    }

    function addressFocus(){
        span[5].textContent = '';
        addressValid = true;
    }

    //Location validation
    location.addEventListener('blur', locationBlur);
    location.addEventListener('focus', locationFocus);

    function locationBlur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var contLetters = 0;
        var location2 = location.value.toLowerCase();
        if(location2.length == 0){
            span[6].textContent = 'Please enter a Location';
        }else{
            for (var i = 0; i < location2.length; i++) {
                for (var j = 0; j < alphabet.length; j++) {
                    if (location2[i] == alphabet[j]) {
                        contLetters += 1;
                    }
                }
            }
            if (contLetters < 3){
                span[6].textContent = 'Invalid Location';
                locationValid = false;
            }
        }
    }

    function locationFocus(){
        span[6].textContent = '';
        locationValid = true;
    }

    //Postal validation
    postal.addEventListener('blur', postalBlur);
    postal.addEventListener('focus', postalFocus);

    function postalBlur(){
        if(postal.value == '' || isNaN(postal.value)){
            span[7].textContent = 'Enter a valid postal code';
            postalValid = false;
        } else if(postal.value.length < 4 || postal.value.length > 5){
            span[7].textContent = 'Postal code have 4-5 numbers';
            postalValid = false;
        }
    }

    function postalFocus(){
        span[7].textContent = '';
        postalValid = true;
    }

    //Email validation
    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur(){
        var validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(email.value === ''){
            span[8].textContent = 'Please enter a email';
            emailValid = false;
        } else if(!validEmail.test(email.value)){
            span[8].textContent = 'Please enter a valid email';
            emailValid = false;
        }
    }

    function emailFocus(){
        span[8].textContent = '';
        emailValid = true;
    }

    //Email2 validation
    email2.addEventListener('blur', email2Blur);
    email2.addEventListener('focus', email2Focus);

    function email2Blur(){
        var validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(email2.value === ''){
            span[9].textContent = 'Please enter a email';
            email2Valid = false;
        } else if(!validEmail.test(email2.value)){
            span[9].textContent = 'Please enter a valid email';
            email2Valid = false;
        }
    }

    function email2Focus(){
        span[9].textContent = '';
        email2Valid = true;
    }

    //Password validation
    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if(password.value.length == 0){
            span[10].textContent = 'Please enter a password';
            passwordValid = false;
        } else if(password.value.length < 8){
            span[10].textContent = 'Password is too short'; //si son menos de 8 tira error
            passwordValid = false;
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
                span[10].textContent = 'Password needs numbers and letters';
                passwordValid = false;
            } else if(contLetters + contNumbers !== password.value.length){
                span[10].textContent = 'Password only accept numbers and letters';
                passwordValid = false;
            }
        }
    }

    function passwordFocus(){
        span[10].textContent = '';
        passwordValid = true;
    }

    //Password2 validation
    password2.addEventListener('blur', password2Blur);
    password2.addEventListener('focus', password2Focus);

    function password2Blur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if(password2.value.length == 0){
            span[11].textContent = 'Please enter a password';
            password2Valid = false;
        } else if(password2.value.length < 8){
            span[11].textContent = 'Password is too short'; //si son menos de 8 tira error
            password2Valid = false;
        } else{
            var contLetters = 0;
            var contNumbers = 0;
            for(var i = 0; i < password2.value.length; i++){
                for(var j = 0; j < alphabet.length; j++){
                    if(password2.value.charAt(i) == alphabet[j]){
                        contLetters += 1;
                    }
                }
                for(var j = 0; j < numbers.length; j++){
                    if(password2.value.charAt(i) == numbers[j]){
                        contNumbers += 1;
                    }
                }
            }
            if(contLetters == 0 || contNumbers == 0){
                span[11].textContent = 'Password needs numbers and letters';
                password2Valid = false;
            } else if(contLetters + contNumbers !== password2.value.length){
                span[11].textContent = 'Password only accept numbers and letters';
                password2Valid = false;
            }
        }
    }

    function password2Focus(){
        span[11].textContent = '';
        password2Valid = true;
    }

    // //Alert sing
    button[0].addEventListener('click', submitClick);

    function submitClick(){
        if(firstNameValid && lastNameValid && dniValid && birthValid && phoneValid && addressValid && locationValid && postalValid && emailValid && email2Valid && passwordValid && password2Valid){
            alert('Login Successfull \nFirstName:' + firstName.value + '\nLastName:' + lastName.value + '\nDNI:' + dni.value + '\nBirth:' + birth.value + '\nPhone:' + phone.value + '\nAddress:' + address.value + '\nLocation:' + location.value + '\nPostal Code:' + postal.value + '\nEmail:' + email.value + '\nEmail2:' + email2.value + '\nPassword:' + password.value + '\nPassword2:' + password2.value);
        } else if(!firstNameValid){
            alert('Error: First Name incorrect \nFirst Name:' + firstName.value);
        } else if(!lastNameValid){
            alert('Error: Last Name incorrect \nLast Name:' + lastName.value);
        } else if(!dniValid){
            alert('Error: DNI incorrect \nDNI:' + dni.value);
        } else if(!birthValid){
            alert('Error: Date of Birth incorrect \nDate of birth:' + birth.value);
        } else if(!phoneValid){
            alert('Error: Phone incorrect \nPhone:' + phone.value);
        } else if(!addressValid){
            alert('Error: Address incorrect \nAddress:' + address.value);
        } else if(!locationValid){
            alert('Error: Location incorrect \nLocation:' + location.value);
        } else if(!postalValid){
            alert('Error: Postal Code incorrect \nPostal Code:' + postal.value);
        } else if(!emailValid){
            alert('Error: Email incorrect \nEmail:' + email.value);
        } else if(!email2Valid){
            alert('Error: Email 2 incorrect \nEmail2:' + email2.value);
        } else if(!passwordValid){
            alert('Error: Password incorrect \nPassword:' + password.value);
        } else if(!password2Valid){
            alert('Error: Password2 incorrect \nPassword2:' + password2.value);
        }
    }
}
