function showSideBar(){
    //alert("you clicked sidebar!");
    const sidebar = document.getElementById("mobile-navbar-list");

    sidebar.style.display = 'block';
    const menuIcon = document.getElementById("menu-bar");
    menuIcon.style.display ='none';
    const xBar = document.getElementById("x-bar");
    xBar.style.display ='block';
}

function closeSideBar(){

    const closeBar = document.getElementById("mobile-navbar-list");

    closeBar.style.display = "none";
    const menuIcon = document.getElementById("menu-bar");
    menuIcon.style.display ='block';
    const xBar = document.getElementById("x-bar");
    xBar.style.display ='none';
    

}

function showDetails(){
    const infoLogo = document.getElementById("project1");
    infoLogo.style.display = "block";
}

function hideDetails(){
    const xLogo = document.getElementById("project1");
    xLogo.style.display = "none";
}

function showDetailsP2(){
    const infoLogo = document.getElementById("project2");
    infoLogo.style.display = "block";
}

function hideDetailsP2(){
    const xLogo = document.getElementById("project2");
    xLogo.style.display = "none";
}





const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showLeft');
        }
        /*else {
            entry.target.classList.remove('showLeft');
        }*/
        

    });
});

const hiddenElementsLeft = document.querySelectorAll(".left-content");
hiddenElementsLeft.forEach((el)=> observerLeft.observe(el));


const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showRight');
        }
        /*else {
            entry.target.classList.remove('showRight');
        }*/
        

    });
});

const hiddenElementsRight = document.querySelectorAll(".right-content");
hiddenElementsRight.forEach((el)=> observerRight.observe(el));

//upAnimation
const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showUp');
        }
        /*else {
            entry.target.classList.remove('showRight');
        }*/
        

    });
});

const hiddenElementsUp = document.querySelectorAll(".up-animation");
hiddenElementsUp.forEach((el)=> observerUp.observe(el));
