// greeting.js


function home(){
    const menu = [
        { title: "Grilled Ribeye Steak – $24.99", text: 24.99 },
        { title: "Margherita Pizza – $13.50", text: 13.50 },
        { title: "Pan-Seared Salmon – $19.75", text: 19.75 },
        { title: "Tiramisu – $7.50", text: 7.50 }
        ];

    const homeContent = document.getElementById('content');
    const content = document.createElement('div');
    const h2 = document.createElement('h2');
    const paragraph = document.createElement('p')
    
    for(index in menu ){
        
        homeContent.appendChild(content);

    }

}

function menu(){
    
}

function contact(){
    
}