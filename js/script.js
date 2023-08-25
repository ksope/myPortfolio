//get the nav menu button
const menuBtn = document.querySelector("#menu-btn");
//get the nav close button
const closeBtn = document.querySelector("#close-btn");

//get the menu item
const menu = document.querySelector("nav .container ul");

//show menu
menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

//hide menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});

//get the nav items
const navItems = menu.querySelectorAll("li");

//remove active class from all nav items
const changeActiveItems = () => {
    navItems.forEach((item) => {
        const link = item.querySelector("a");
        link.classList.remove("active");
    });
};

//add active class to clicked nav item
navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
        //remove active class from all nav items
        changeActiveItems();
        //add active class to clicked nav item
        link.classList.add("active");
    });
});

//read more button
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

//show more pararaphs on clicking read more link
readMoreBtn.addEventListener('click',()=>{
    readMoreContent.classList.toggle(".show-content");
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = 'Show less';
    }
    else{
        readMoreBtn.textContent = "Show more";
    }
})
