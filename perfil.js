const emailButton = document.getElementById('copy')
emailButton.addEventListener('click',()=>{
    const emailAddress='molinawilson189@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML='Copied!'
})