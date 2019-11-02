function isUsernameValid(username){
    const regExp = /^[a-z]{5,}$/;
    return regExp.test(username)
}
function isEmailValid(email){
    const regExp = /(^[0-9]{2})(@|&)([A-Z]{4}$)/;
    return regExp.test(email)
}
console.log(isUsernameValid('febria'));
console.log(isEmailValid('29@PASS'));
console.log(isEmailValid('234&agan'));
