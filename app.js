const $catUlListEl = $('.cat-ul-list');
const $catDisplayEl = $('.cat-display-area');

const cats = [
    {name: 'Thomas', img: 'https://purr.objects-us-west-1.dream.io/i/PtRBa.jpg', clicksNum: 0},
    {name: 'Jefferson', img: 'https://purr.objects-us-west-1.dream.io/i/s6LNd.jpg', clicksNum: 0},
    {name: 'Donald Trump', img: 'https://purr.objects-us-west-1.dream.io/i/xrM9q.jpg', clicksNum: 0},
    {name: 'Cristiano Ronaldo', img: 'https://purr.objects-us-west-1.dream.io/i/BaO8d.jpg', clicksNum: 0},
    {name: 'Mia', img: 'https://purr.objects-us-west-1.dream.io/i/x6SRI.jpg', clicksNum: 0},
];

cats.forEach((cat, index) => {
    $('<li/>', {
        text: cat.name,
        "data-cat-id": `${index}`,
    }).appendTo($catUlListEl);
});


$catUlListEl.on('click', 'li', event => {
    const $currentCat = $(event.currentTarget);
    const catId = $currentCat.data('catId');
    const catObj = cats[catId];

    $catDisplayEl.html(
        `<h2>${catObj.name}</h2>
        <img data-cat-id="${catId}" width="400px" src="${ catObj.img}"><br>
        <span class="cat-counter">${catObj.clicksNum}</span> Meows!`
    );
});

$catDisplayEl.on('click', 'img', (event) => {
    const $currentCat = $(event.currentTarget);
    const catId = $currentCat.data('catId');
    const catObj = cats[catId];

    catObj.clicksNum++;

    $catDisplayEl.find('.cat-counter').text(catObj.clicksNum);
});