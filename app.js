const $catImgEl = $('#cat-img-js');
const $catSpanEl = $('#cat-click-js');

let numberClicks = 0;
$catSpanEl.text(numberClicks);

$catImgEl.on('click', () => {
    $catSpanEl.text(++numberClicks);
});