const $catImgEl = $('#cat-img-js');
const $catSpanEl = $('#cat-counter-js');
const $catImg2El = $('#cat2-img-js');
const $catSpan2El = $('#cat2-counter-js');

let numberClicks = 0;
$catSpanEl.text(numberClicks);

$catImgEl.on('click', () => {
    $catSpanEl.text(++numberClicks);
});

let numberClicks2 = 0;
$catSpan2El.text(numberClicks2);

$catImg2El.on('click', () => {
    $catSpan2El.text(++numberClicks2);
});