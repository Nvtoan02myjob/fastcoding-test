const ModelNav = document.querySelector('.mobile_menu_list');
const Menu_icon = document.querySelector('.nav_menu_icon');
Menu_icon.addEventListener('click', () => {
    ModelNav.classList.toggle('on');
});
