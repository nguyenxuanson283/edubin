
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
function register() {
    var firstName = document.getElementById('firtname').value;
    var userName = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var passWord = document.getElementById('password').value;
    var lastName = document.getElementById('lastname').value;
    var repassWord = document.getElementById('passwordconfirm').value;
    const pattern_text = /^[a-zA-Z\s]+$/;
    var flag = true;
    if (firstName == '') {
        flag = false;
        showError('firtname', 'vui lòng nhập lại firtname');
        document.getElementById("firtname").focus();
        return;
    } if (firstName.length < 1) {
        flag = false;
        showError('firtname', 'vui lòng nhập lại firtname');
        document.getElementById("firtname").focus();
        return;
    } else {
        flag = true;
        showError('firtname', '')
    }
    if (userName == '') {
        flag = false;
        showError('username', 'vui lòng nhập lại username');
        document.getElementById("username").focus();
        return;
    } if (userName.length < 1) {
        flag = false;
        showError('username', 'vui lòng nhập lại username');
        document.getElementById("username").focus();
        return;
    } else {
        flag = true;
        showError('username', '')
    }
    if (lastName == '') {
        flag = false;
        showError('lastname', 'vui lòng nhập lại lastname');
        document.getElementById("lastname").focus();
        return;
    } if (lastName.length < 1) {
        flag = false;
        document.getElementById("lastname").focus();
        return;
    } else {
        flag = true;
        showError('lastname', '')
    }
    //pass

    if (passWord == '' || passWord.length < 8 || passWord != repassWord) {
        flag = false;
        showError('password', 'vui lòng nhập lại password');
        document.getElementById("password").focus();
        return;
    } else {
        flag = true;
        showError('password', '')
    }
    const pattern_email = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+.[a-z]{2,4}$/;
    if (!email.trim().match(pattern_email)) {
        if (email.trim().length > 0 || email == '') {
            flag = false;
            showError('email', 'nhập email theo mẫu xuanson@gmail.com');
            document.getElementById("email").focus();
            return;
        }
    } else {
        flag = true;
        showError('email', '')
    }
    //repas
    if (repassWord == '' || repassWord.length < 8 || repassWord != passWord) {
        flag = false;
        showError('repassword', 'vui lòng nhập lại repassword');
        document.getElementById("passwordconfirm").focus();
        return;
    } else {
        flag = true;
        showError('repassword', '')
    }

}
