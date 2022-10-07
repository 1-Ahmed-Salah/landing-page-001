
// show and hide menu
const showMenu = (menuId, linksId) => {
    const menu  = document.getElementById(menuId)  ,
          links = document.getElementById(linksId) ;

    if( menu && links ) {
        menu.addEventListener('click', _ => {
            links.classList.toggle('active');
        });
    }
}

showMenu('menu', 'links');

// active links
const activeLinks = (linksId) => {
    const links = document.querySelectorAll(linksId);

    if(links) {
        links.forEach(link => {
            link.addEventListener('click', event => {
                links.forEach(link => {
                    link.classList.remove('active');
                })
                event.currentTarget.classList.add('active');
            })
        })
    }
}

activeLinks('header .links ul li')









