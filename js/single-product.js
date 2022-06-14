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
        showInfo(data);
        displayAuthor(data);
        // showReview(data);
        // showAuthor(data);
        bookinBag(data);

    })



function showProduct(product) {

    const productTemplate = document.querySelector("#product-template").content;
    productClone = productTemplate.cloneNode(true);

    productClone.querySelector(".book-image").src = product.book_picture;
    productClone.querySelector(".genre").textContent = product.genre;
    productClone.querySelector(".name-of-book").textContent = product.title.rendered;
    productClone.querySelector(".author-of-book").textContent = product.book_author + " " + product.book_author2 + " " + product.book_author3;
    productClone.querySelector(".price-for-book").textContent = product.price + ",- DKK";
    productClone.querySelector("p.book-about-text").textContent = product.book_info_short;
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

}

// about the book

function showInfo(more_books) {

    const infoTemplate = document.querySelector("#about-book-template").content;
    infoClone = infoTemplate.cloneNode(true);

    infoClone.querySelector(".about-book-pic").src = more_books.book_picture;
    infoClone.querySelector(".genre-about-card").textContent = more_books.genre;
    infoClone.querySelector(".name-about-card").textContent = more_books.title.rendered;
    infoClone.querySelector(".author-about-card").textContent = more_books.book_author + " " + more_books.book_author2 + " " + more_books.book_author3;
    infoClone.querySelector("p.text-about").textContent = more_books.book_info;

    document.querySelector("#more-info").appendChild(infoClone);
}

// about the author

function displayAuthor(product) {

    if (product.book_author !== "") {

        const authorTemplate = document.querySelector("#author-template").content;
        authorClone = authorTemplate.cloneNode(true);

        if (product.author_picture !== "") {
            authorClone.querySelector(".image-for-author").src = product.author_picture;
        } else {
            authorClone.querySelector(".image-for-author").src = "http://mnowak.dk/forlagetmindspace-after-handin/assets/authors/Avatar-1.svg";
        }
        authorClone.querySelector(".meettheauthor-name").textContent = product.book_author;
        authorClone.querySelector(".author-genre").textContent = product.genre;
        authorClone.querySelector(".abouttheauthor-text p").textContent = product.author_info;

        document.querySelector("#authors-list").appendChild(authorClone);

    }

    if (product.book_author2 !== "") {

        const authorTemplate = document.querySelector("#author-template").content;
        authorClone = authorTemplate.cloneNode(true);

        if (product.author_picture !== "") {
            authorClone.querySelector(".image-for-author").src = product.author_picture2;
        } else {
            authorClone.querySelector(".image-for-author").src = "http://mnowak.dk/forlagetmindspace-after-handin/assets/authors/Avatar-1.svg";
        }
        authorClone.querySelector(".meettheauthor-name").textContent = product.book_author2;
        authorClone.querySelector(".author-genre").textContent = product.genre;
        authorClone.querySelector(".abouttheauthor-text p").textContent = product.author_info2;

        document.querySelector("#authors-list").appendChild(authorClone);

    }

    if (product.book_author3 !== "") {

        const authorTemplate = document.querySelector("#author-template").content;
        authorClone = authorTemplate.cloneNode(true);

        if (product.author_picture !== "") {
            authorClone.querySelector(".image-for-author").src = product.author_picture3;
        } else {
            authorClone.querySelector(".image-for-author").src = "http://mnowak.dk/forlagetmindspace-after-handin/assets/authors/Avatar-1.svg";
        }
        authorClone.querySelector(".meettheauthor-name").textContent = product.book_author3;
        authorClone.querySelector(".author-genre").textContent = product.genre;
        authorClone.querySelector(".abouttheauthor-text p").textContent = product.author_info3;

        document.querySelector("#authors-list").appendChild(authorClone);

    }

}






function bookinBag(book) {

    const bagTemplate = document.querySelector(".template-bag").content;
    bagClone = bagTemplate.cloneNode(true);

    bagClone.querySelector(".content img").src = book.book_picture;
    bagClone.querySelector(".genre-bag").src = book.genre;
    bagClone.querySelector(".name-bag").src = book.title.rendered;
    bagClone.querySelector(".author-bag").src = book.product.book_author;
    bagClone.querySelector(".price-bag").src = book.product.price + ",- DKK";


    document.querySelector(".bag-container").appendChild(bagClone);

}