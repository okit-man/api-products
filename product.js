
const productDOM = document.querySelector(".products");
const url = "https://www.course-api.com/javascript-store-single-product";

// console.log(products);
const fetchProduct = async () => {
    try {
        productDOM.innerHTML = `<h4 class="product-loading">loading...</h4>`;
        // return "products"

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
    // const priceFormat = price / 100;

    // .join('');

    productDOM.innerHTML = `
          <div class="product-wrapper">
            <img src="${img}" alt="" style="width: 550px; height: 22rem;">
            <div class="product-info">
                <h3 class="product-title">title</h3>
                <h5 class="company">company</h5>
                <span class="product-price">99</span>
                <div class="color">
                    <span class="product-color"></span>
                    <span class="product-color" style="background-color: red;"></span>
                </div>
                <p class="productP">This is my day,courage is going from failure to failure without losing enthusiasm. do not go where path may lead but go where there is no path and leave a trail </p>
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