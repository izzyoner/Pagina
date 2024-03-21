const showmenu = ( Idtoggle, Idnavbar)=>{
    const toggle = document.getElementById(Idtoggle),
         navbar = document.getElementById(Idnavbar)

    toggle.addEventListener('click', ()=>{

        navbar.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')

    })

}

showmenu('nav_toggle','nav_primary')