const categoriesUrl = "http://mnowak.dk/wp-mindspace/wp-json/wp/v2/categories?per_page=100";

fetch (categoriesUrl)
    .then (function(res) {
        return res.json();
    })
    
    .then(function(data) {
        addCategory(data);
    })

// creating dynamic categories in nav bar



function addCategory(data) {
    data.forEach(makeCatTemplate);    
}

function makeCatTemplate(categories) {
    const catTemplate = document.querySelector("#categories-template").content;
    const catClone = catTemplate.cloneNode(true);

    catClone.querySelector("a").href = "product-list.html?category=" + categories.id;
    catClone.querySelector("a").textContent = categories.name;

    document.querySelector(".dropdown-content").appendChild(catClone);
}