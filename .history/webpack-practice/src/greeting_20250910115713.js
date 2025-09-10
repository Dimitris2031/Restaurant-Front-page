// greeting.js


function home(){
    const menu = [
        { title: "Grilled Ribeye Steak – $24.99", text: '12oz ribeye, garlic butter, served with roasted potatoes and seasonal vegetables.' },
        { title: "Margherita Pizza – $13.50", text: 'Stone-baked with fresh mozzarella, basil, and San Marzano tomatoes.' },
        { title: "Pan-Seared Salmon – $19.75", text: 'Served with lemon dill sauce, wild rice, and sautéed spinach.' },
        { title: "Tiramisu – $7.50", text: 'Classic Italian dessert layered with espresso-soaked ladyfingers and mascarpone cream' }
        ];

    const homeContent = document.getElementById('content');
    const content = document.createElement('div');
    const h2 = document.createElement('h2');
    const paragraph = document.createElement('p')
    
    for(index in menu ){
        h2.textContent = menu[index].title;
        paragraph.textContent = menu[index].text;
        content.append(h2,paragraph);
        
        homeContent.appendChild(content);

    }

}



function menu(){
    
}

function contact(){
    
}
const navContainer = document.querySelector('.nav-container');
const navItems = navContainer.querySelectorAll('nav');


navItems.forEach((item) => {
    item.addEventListener('click',() =>{
        home()
    });
});