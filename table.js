window.addEventListener('load', () => {
    
    const name = localStorage.getItem('NAME');
    const email = localStorage.getItem('EMAIL');
    const message = localStorage.getItem('MESSAGE');

    document.getElementById('tname').innerHTML = name;
    document.getElementById('temail').innerHTML = email;
    document.getElementById('tmessage').innerHTML = message;
})