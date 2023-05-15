
const urlLogin_WebPage = '/web_pages/login.html';

const appContent = document.getElementById('mainAppContent');


// Pagina Login al iniciar la app

let firstPageLogin = async function(req, res) {
    req = await fetch(urlLogin_WebPage);
    res = await req.text();

    appContent.innerHTML = res;
}


window.onload = () => {
    setTimeout(() => { 
        document.getElementById('loader').style.display = "none";
    }, 1000)

    setTimeout(firstPageLogin, 1000);
    
}




