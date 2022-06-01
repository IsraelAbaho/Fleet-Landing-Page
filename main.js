
const navBar = document.querySelector('.navBar')
const navBarBtn = document.querySelector('.navBarBtn')


navBarBtn.addEventListener('click', function(){
    navBar.classList.toggle('show');
    if(navBar.classList.contains('show')){
        document.querySelector('.toggleNavBar').innerHTML = ` <i class='bx bxs-x-circle icon'></i>`
        

    }else{
        document.querySelector('.toggleNavBar').innerHTML = 
        `<i class='bx bx-grid-alt icon' ></i>`
    }
  
    
}) 

const navLinks = document.querySelectorAll('.navLink')
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', function(){
        navBar.classList.remove('show');
        document.querySelector('.navBarBtn').innerHTML = ' <i class="uil uil-bars icon"></i>'
    })

})