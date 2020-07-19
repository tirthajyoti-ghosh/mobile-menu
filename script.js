const toggleMenu = () => {
  const menuList = document.getElementById('menu-list');  
  const menuOpen = document.getElementById('menu-open');  
  menuList.classList.toggle('active');
  menuOpen.classList.toggle('hidden');
}; 
