const page = document.querySelector('.page');

//Смена темы
const themeSwitcher = document.querySelector('.theme-switcher');
const darkThemeButton = themeSwitcher.querySelector('.theme-button-dark');
const lightThemeButton = themeSwitcher.querySelector('.theme-button-light');

darkThemeButton.onclick = () => {
    page.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = () => {
    page.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
};

//Смена шрифта
const fonts = document.querySelector('.fonts');
const serifFontButton = fonts.querySelector('.font-button-serif');
const sansSerifFontButton = fonts.querySelector('.font-button-sans-serif');

serifFontButton.onclick = () => {
    page.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
};

sansSerifFontButton.onclick = () => {
    page.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
};

//Раскрыть полный текст
const articles = document.querySelectorAll('.blog-article.short');

for (const article of articles) {
    const moreButton = article.querySelector('.more')
    moreButton.onclick = () => {
        article.classList.remove('short');
    };
}

//Переключение раскладки карточек
const cards = document.querySelector('.cards');
const cardViewSwitcher = document.querySelector('.card-view-buttons');
const gridViewButton = cardViewSwitcher.querySelector('.card-view-button-grid');
const listViewButton =  cardViewSwitcher.querySelector('.card-view-button-list');

gridViewButton.onclick = () => {
    cards.classList.remove('list');
    listViewButton.classList.remove('active');
    gridViewButton.classList.add('active');
};

listViewButton.onclick = () => {
    cards.classList.add('list');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
};

//Выбор картинок в галерее
const fullImage = document.querySelector('.active-photo');
const miniPhotos = document.querySelectorAll('.preview-list a');

for (const photo of miniPhotos) {
    photo.onclick = (evt) => {
        evt.preventDefault();
        fullImage.src = photo.href;
        const currentActive = document.querySelector('.preview-list a.active-item');
        currentActive.classList.remove('active-item');
        photo.classList.add('active-item');
    };
}
