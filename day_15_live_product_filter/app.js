const filter = document.getElementById('filter');
const products = document.querySelector('.products');
const listItems = [];

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    
    products.innerHTML = '';
    console.log(listItems);
    json.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${product.image}"></img>
            <div>
                <h4>${product.title.slice(0, 30)}</h4>
                <p>$${product.price}</p>
            </div>
        `;
        
        listItems.push(div);
        products.append(div);
    });
}

getData();

function filterData(input) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

filter.addEventListener('input', (e) => {
    filterData(e.target.value); 
});