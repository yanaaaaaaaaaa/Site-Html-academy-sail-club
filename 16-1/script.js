let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function () {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
}
themeButtonLight.onclick = function () {
    document.body.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
};

let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');


sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
}
serifButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
}

let blogArticles = document.querySelectorAll('.blog-article.short')

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
        blogArticle.classList.remove('short')
    }
}

let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');
let cards =document.querySelector('.cards')

cardButtonList.onclick = function () {
    cards.classList.add('list');
    cardButtonGrid.classList.remove('active');
    cardButtonList.classList.add('active');
}
cardButtonGrid.onclick = function () {
    cards.classList.remove('list');
    cardButtonGrid.classList.add('active');
    cardButtonList.classList.remove('active');
}

let activePhoto = document.querySelector('.active-photo');
let prewiews = document.querySelectorAll('.preview-list a');

for (let preview of prewiews) {
    preview.onclick = function(evt) {
        evt.preventDefault();
        activePhoto.src = preview.href;

        let currentPhoto = document.querySelector('.preview-list .active-item');
        currentPhoto.classList.remove('active-item');
        preview.classList.add('active-item');
    }
}

