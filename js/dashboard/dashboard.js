const body = document.querySelector('body');

const sidebar = body.querySelector('nav');

const toggle = body.querySelector(".toggle");

const searchBtn = body.querySelector(".search-box");

const modeSwitch = body.querySelector(".toggle-switch");

const modeText = body.querySelector(".mode-text");

const dashboardContent = document.getElementById('dashboardApp');

const urlWebContentDash = '/web_pages/dashboardContent.html';




let loadContentTo  = async function(req, res){
  req = await fetch(urlWebContentDash);
  res = await req.text();

  dashboardContent.innerHTML = res;
  
  bottomControlConfig();

}


window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 500)

    setTimeout(() => {
        loadContentTo();
    }, 600)
}


toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    modeText.innerText = "Día";
  }else{
    modeText.innerText = "Noche";
  }
});








