
const productDOM = document.querySelector(".products");
const url = "https://www.course-api.com/javascript-store-single-product";

// console.log(products);
const fetchProduct = async () => {
    try {
        productDOM.innerHTML = `<h4 class="product-loading">loading...</h4>`;
        
        // the window.location.search property returns the query string part of a URL, including the question mark (?). 
        // The query string is the part of a URL that contains data to be passed to web applications such as parameters and values. 
        // It is typically used to send information to the server or to specify certain actions or filters for the requested resource.
        // console.log(window.location.search)

        // get the id from the api url
        const paramas = new  URLSearchParams(window.location.search);
        const id = paramas.get ("id");
        console.log(id);

        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        // console.error("Error fetching products:", error);
        productDOM.innerHTML = ` <p class="product-error">There was a problem loading the product. Please try again later</p>`;
    }
};

const displayProduct = (product) => {
    // company, colors, description, name:title, price, image(url:img)
    const {
        company,
        colors,
        description,
        name:title,
        price,
        image
    } = product.fields;                       
    const {url: img} = image[0]
    document.title = title.toUpperCase();
    const priceFormat = price / 100;

    const colorList = colors.map((color) => {
        return ` <span class="product-color" style="background-color: ${color};"></span>`;
    })
    // .join('');
    

    productDOM.innerHTML = `
          <div class="product-wrapper">
            <img src="${img}" alt="" ">
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <h5 class="company">${company}</h5>
                <span class="product-price">$${priceFormat.toFixed(2)}</span>
                <div class="color">
                    
                    ${colorList.join("")}
                </div>
                <p class="productP">${description} </p>
                <button  class="btns">add to cart</button>
            </div>
      </div>
    `;
};

const start = async () => {
    const datas = await fetchProduct()
    displayProduct(datas)
};
start();


// style="width: 500px; height: 25rem;