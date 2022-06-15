// fetching the data - books

const urlCatParams = new URLSearchParams(window.location.search);
const cat = urlCatParams.get("category");

const books_url = 'http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book?per_page=100';

const cat_url = books_url + "&categories=" + cat;

function catProducts() {

    if (cat === null) {

        fetch(books_url)
        .then(function(res) {
            return res.json();
        })
        
        .then(function(data) {
            data.forEach(showBook);
        })

    } else {

        fetch(cat_url)
        .then(function(res) {
            return res.json();
        })
        
        .then(function(data) {
            data.forEach(showBook);
        })

    }

    

}

catProducts()

function showBook(books) {

    if (cat === null) {
        document.querySelector("#product-list h1").textContent = "All books";
    } else {
        document.querySelector("#product-list h1").textContent = books.genre;
    }

    const bookTemplate = document.querySelector("#book-card-template").content;

    bookClone = bookTemplate.cloneNode(true);

    // adding data

    bookClone.querySelector("img.book-image").src = books.book_picture;

    bookClone.querySelector(".book-genre").textContent = books.genre;

    bookClone.querySelector("h3.title").textContent = books.title.rendered;

    // linking to product page of specific products

    productLink = bookClone.querySelectorAll(".product-link");
    productLink[0].href = 'product-page.html?id=' + books.id;
    productLink[1].href = 'product-page.html?id=' + books.id;

    bookClone.querySelector(".book-genre").href = 'product-list.html?categories=' + books.categories;    
    bookClone.querySelector(".author").textContent = books.book_author;


    if (books.printed == 1) {
        bookClone.querySelector(".book-icon").src = 'assets/icons/book-active.svg';
        bookClone.querySelector(".ebook-icon").src = 'assets/icons/ebook.svg';
        bookClone.querySelector(".product-price").textContent = "DKK " + books.price;
    } else {
        bookClone.querySelector(".ebook-icon").src = 'assets/icons/ebook-active.svg';
        bookClone.querySelector(".book-icon").src = 'assets/icons/book.svg';
        bookClone.querySelector(".product-price").textContent = "DKK " + books.ebook_price;
    }

    document.querySelector(".all-products").appendChild(bookClone);

}



// document.querySelector(".book-ebook").addEventListener("click", ebookActive);

//     function ebookActive() {
//         this.src = "http://mnowak.dk/forlagetmindspace/assets/icons/ebook-active.svg";
//         document.querySelector("img.book-icon").src = "http://mnowak.dk/forlagetmindspace/assets/icons/book.svg";
//         document.querySelector(".price").textContent = "DKK " + books.ebook_price;
//     }

//     document.querySelector(".book-icon").addEventListener("click", bookActive);

//     function bookActive() {
//         document.querySelector("img.book-icon").src = 'http://mnowak.dk/forlagetmindspace/assets/icons/book-active.svg';
//         document.querySelector("img.ebook-icon").src = "http://mnowak.dk/forlagetmindspace/assets/icons/ebook.svg";
//         document.querySelector(".price").textContent = "DKK " + books.price;
//     }


// fetching the data - authors


let authors_url = 'http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book_author?per_page=100'

fetch(authors_url)
    .then(function(res) {
        return res.json();
    })
    
    .then(function(data) {
        authordataReceived(data);
        console.log(data)
})


function authordataReceived(data) {
    data.forEach(showAuthor);
}

function showAuthor(authors) {

    const authorTemplate = document.querySelector("#author-name").content

    authorClone = authorTemplate.cloneNode(true);

    authorClone.querySelector("option").value = authors.book_author;

    authorClone.querySelector("option").textContent = authors.book_author;

    document.querySelector("select#authors").appendChild(authorClone);

}

// dropdown filters on mobile

function showFilters() {
    document.querySelector(".filters").classList.toggle("show-filters");
    document.querySelector(".filters-dropdown").classList.toggle("dropdown-active");
    document.querySelector(".dropdown-tag").classList.toggle("adjust-filters-tag");
    // document.querySelector(".dropdown-tag h2").classList.toggle("adjust-filters-h2");
}

document.querySelector(".filters-dropdown").addEventListener("click", showFilters);


// displaying products from certain category

// const urlCatParams = new URLSearchParams(window.location.search);
// const cat = urlCatParams.get("category");

// function catProducts() {

//     if (cat !== "") {
//         fetch('http://mnowak.dk/wp-mindspace/wp-json/wp/v2/book' + cat)
//         .then (function(res) {
//             return res.json();
//         })
        
//         .then(function(data) {
//             forEach.showBook(data);
//         })
//     }

// }