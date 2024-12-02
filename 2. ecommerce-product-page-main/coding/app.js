let productPictures = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

let thumbToProduct = new Map();
thumbToProduct.set("http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg", "images/image-product-1.jpg");
thumbToProduct.set("http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg", "images/image-product-2.jpg");
thumbToProduct.set("http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg", "images/image-product-3.jpg");
thumbToProduct.set("http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg", "images/image-product-4.jpg");


/*
 * implementing thumbnail to image viewer for large screen sizes
 */

function thumbnailToMainImage() {
    let mainImg = document.querySelector(".main-img");
    let thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(element => element.addEventListener('click', (e) => {
        let img = e.srcElement.src;
        for(let key of thumbToProduct.keys()) {
            if(key == img) {
                mainImg.src = thumbToProduct.get(key);
            }
        }
    }));
}
thumbnailToMainImage();


/*
 * implementing image slider for smaller screen sizes (mobile phones)
 */

let picNo = 0;
function imageSliderForSmallScreen() {
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    prev.addEventListener('click', (e) => {
        picNo = picNo == 0 ? 3 : picNo-1;
        mainImg.src = productPictures[picNo];
        
    });

    next.addEventListener('click', (e) => {
        picNo = (picNo + 1) % 4;
        mainImg.src = productPictures[picNo];
    });
}
imageSliderForSmallScreen();


/*
 * implementing increase and decrease count value of the product to add to the cart
 */

let cnt = 0;
function numberOfCount() {
    let increase = document.querySelector(".increase");
    let decrease = document.querySelector(".decrease");
    let val = document.querySelector(".value");

    decrease.addEventListener("click", (e) => {
        if(cnt > 0)
            cnt--;
        
        val.innerHTML = cnt;
    });
    increase.addEventListener("click", (e) => {
        if(cnt < 100)
            cnt++;

        val.innerHTML = cnt;
    });
}
numberOfCount();


/*
 * showing item is added to cart successfully
 */

document.querySelector(".add-to-cart").addEventListener("click", (e) => {
    alert(`${cnt} items added to card`);
});





