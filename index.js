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