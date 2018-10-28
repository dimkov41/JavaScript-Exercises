function validate() {
    $("#submit").click((event) => {
        let usernameValidator = /\b[A-Za-z\d]{3,20}\b/gm;
        let passwordValidator = /\b[\w]{5,15}\b/gm;
        let emailValidator = /(.)*@(.)*\.(.)*/gm;

        let isValid = true;
        //by default submit button reloads page
        event.preventDefault();

        let username = $("#username");
        //if username is incorrect
        if (!usernameValidator.test(username.val())) {
            invalid(username);
        } else {
            valid(username);
        }

        let password = $("#password");
        if (!passwordValidator.test(password.val())) {
            invalid(password);
        } else {
            valid(password);
        }

        let confirmPassword = $('#confirm-password');
        passwordValidator.lastIndex = 0;
        if (!passwordValidator.test(confirmPassword.val()) || password.val() !== confirmPassword.val()) {
            invalid(confirmPassword);
            invalid(password);
        } else {
            valid(confirmPassword);
        }

        let email = $("#email");
        if (!emailValidator.test(email.val())) {
            invalid(email);
        } else {
            valid(email);
        }


        if ($("#company").is(":checked")) {
            let companyNum = $("#companyNumber");
            if (companyNum.val() >= 1000 && companyNum.val() <= 9999) {
                valid(companyNum);
            } else {
                invalid(companyNum);
            }
        }

        function invalid(element) {
            isValid = false;
            element.css("border", "");
            element.css("border-color", "red");
        }

        function valid(element) {
            element.css("border", "none");
        }


        if(isValid){
            $("#valid").css("display","block");
        } else{
            $("#valid").css("display","none");
        }

    });

    $("#company").on("change",function () {
        //if is cheched
        if ($(this).is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    })
}
