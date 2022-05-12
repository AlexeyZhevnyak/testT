window.onload = function (){
    const logo = document.getElementById('logo');
    logo.style.visibility = 'visible';
    logo.classList.add('fade-in')

    const html = document.querySelector('html');
    html.style.display = 'inherit';
    html.classList.add('fade-in');
}
document.onanimationend = function () {
    const form = document.getElementById('form-wrapper');
    form.style.visibility = 'visible';
    form.classList.add('fade-in');
}
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('focusout', function () {
    passwordInput.reportValidity();
})
passwordInput.addEventListener('focusin', function () {
    passwordInput.reportValidity();
})
emailInput.addEventListener('focusout', function () {
    emailInput.reportValidity();
})
emailInput.addEventListener('focusin', function () {
    emailInput.reportValidity();
})
