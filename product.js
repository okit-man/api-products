
const productDOM = document.querySelector(".products");
const url = "https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

// console.log(products);
const fetchProduct = async () => {
    return "products"
    // try {

    // }
    // catch (error) {
    //     // console.error("Error fetching products:", error);
    // }
};

const displayProduct = (listed) => {
    console.log(listed)
};

const start = async () => {
    const datas = await fetchProduct()
    displayProduct(datas)
};
start();