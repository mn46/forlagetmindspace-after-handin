const browserUrl = window.location.search;
const urlParams = new URLSearchParams(browserUrl);
const id = urlParams.get("id");

// fetching the data

const urlBooks = 'http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book/' + id + "?_embed";

fetch(urlBooks)

    .then(function(res) {
        return res.json();
    })
    
    .then(function(data) {
        showProduct(data);
        // showReview(data);
        // showAuthor(data);
    })


function showProduct(product) {

    const productTemplate = document.querySelector("#product-template").content;
    productClone = productTemplate.cloneNode(true);

    productClone.querySelector(".book-image").src = product.book_picture;
    productClone.querySelector(".genre").textContent = product.genre;
    productClone.querySelector(".name-of-book").textContent = product.title.rendered;
    productClone.querySelector(".author-of-book").textContent = product.book_author + " " + product.book_author2 + " " + product.book_author3;
    productClone.querySelector(".price-for-book").textContent = product.price + ",- DKK";
    productClone.querySelector("p.book-about-text").textContent = product.book_info;
    productClone.querySelector(".isbn-printed").textContent = "ISBN (printed): " + product.isbn;
    productClone.querySelector(".isbn-ebook").textContent = "ISBN (e-book): " + product.ebook_isbn;
    productClone.querySelector("li.pages").textContent = "Pages: " + product.pages;
    productClone.querySelector("li.publishing-date").textContent = "Published: " + product.release_date;
    productClone.querySelector("li.translation").textContent = "Translation: " + product.translator;

    // reviews

    productClone.querySelector("p.person1").textContent = product.review_author1;
    productClone.querySelector("p.person2").textContent = product.review_author2;

    productClone.querySelector("p.reviewtext1").textContent = product.review1;
    productClone.querySelector("p.reviewtext2").textContent = product.review2;

    document.querySelector("main").appendChild(productClone);

    // about the book

    productClone.querySelector(".about-book-pic").src = product.book_picture;
    productClone.querySelector(".genre-about-card").textContent = product.genre;
    productClone.querySelector(".name-about-card").textContent = product.title.rendered;
    productClone.querySelector(".author-about-card").textContent = product.book_author + " " + product.book_author2 + " " + product.book_author3;
    productClone.querySelector(".price").textContent = product.price + ",- DKK";
    productClone.querySelector("p.text-about").textContent = product.book_info;

    // authors

}

// function showReview(review) {

    

// }

