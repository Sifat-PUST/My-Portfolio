const hamberger=document.querySelector('.hamberger')
const nav_links_div=document.querySelector('.nav-links-div')
console.log(nav_links_div)

hamberger.addEventListener('click',(event)=>{
    
    if(hamberger.getAttribute('class').includes('ri-menu-5-line')===true){
        // console.log('Hello')
        hamberger.classList.replace('ri-menu-5-line','ri-close-fill')
        nav_links_div.classList.replace('right-[-300px]','right-0')
        nav_links_div.classList.replace('hidden','block')
    }
    else{
        hamberger.classList.replace('ri-close-fill','ri-menu-5-line')
        nav_links_div.classList.replace('right-0','right-[-300px]')
        nav_links_div.classList.replace('block','hidden')
    }
    // nav_links_div.classList.toggle('right-0')
})
