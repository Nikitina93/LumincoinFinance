export class Layout {
    constructor() {
        this.changeColor();
    }

    changeColor(){
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item=>{
            item.addEventListener('click', function (){
                item.classList.add('active');
            })
        })
    }
}