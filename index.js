const url = "https://www.course-api.com/javascript-store-products";
const productDOM = document.querySelector(".product-center");

const fetchProduct = async () => {
    productDOM.innerHTML = ` <div class="spinner"></div>`;
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        // return data from fetchProduct
        // return displayProduct(data)
        return data
    } catch (error) {
        // console.log(error)
        productDOM.innerHTML = `<p class="product-text">there was an error</p>`;
    };
}
fetchProduct()

const  displayProduct = (list) => {
    // console.log(list);
    const productList = list.map((products) => {
        const {id} = products
        const {name:title,price} = products.fields
        const {url: img} = products.fields.image[0]
        const priceFormat = price / 100
        // id, name, price, img
        return `<a href="./product.html?id=${id}&name=max&age=18" class="single-product">
                <img src="${img}" alt="${title}" class="single-product-img">
                <footer class="product-footer">
                    <h5 class="product-name">${title}</h5>
                    <span class="price">${priceFormat}</span>
                    
                </footer>
            </a>`;
    })
    .join('');
    productDOM.innerHTML = `<div class="product-container">
        ${productList}
    </div>`;
    
}

const start = async() => {
    const datas = await fetchProduct()
    displayProduct(datas)
    // displayProduct()
    // console.log(fetchProduct());
    
};
start()