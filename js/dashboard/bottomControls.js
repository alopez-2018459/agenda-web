let bottomControlConfig = () => {
  const bottomControl = document.getElementById('bottomControls');
 
  let timeout;

  window.addEventListener('scroll', function(){

    let scrollY = window.scrollY;

    bottomControl.classList.toggle('bottom-hide', window.scrollY > 0);

    if (scrollY > 0) {
      bottomControl.classList.add('opacity-0');

      clearTimeout(timeout);
      timeout = setTimeout( function(){

        bottomControl.classList.add('display-none');
      
      }, 50); 
  
    } else{
      bottomControl.classList.remove('display-none');
      

      clearTimeout(timeout);
      timeout = setTimeout( function(){

        bottomControl.classList.add('opacity-1');
      
      }, 10); 
    } 

  })
}