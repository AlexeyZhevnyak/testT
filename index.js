document.onanimationend = function (){
    const form = document.getElementById('form-wrapper');
    form.style.visibility = 'visible';
    form.classList.add('fade-in');

    const logo = document.getElementById('logo');
    logo.style.visibility = 'visible';
    logo.classList.add('fade-in')
}
