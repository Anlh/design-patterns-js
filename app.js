$(function () {

    /*
    *
    * MODEL
    *
    * */
    const model = {
        currentCat: null,
        cats: [
            {name: 'Thomas', img: 'https://purr.objects-us-west-1.dream.io/i/PtRBa.jpg', countClick: 0},
            {name: 'Jefferson', img: 'https://purr.objects-us-west-1.dream.io/i/s6LNd.jpg', countClick: 0},
            {name: 'Donald Trump', img: 'https://purr.objects-us-west-1.dream.io/i/xrM9q.jpg', countClick: 0},
            {name: 'Cristiano Ronaldo', img: 'https://purr.objects-us-west-1.dream.io/i/BaO8d.jpg', countClick: 0},
            {name: 'Mia', img: 'https://purr.objects-us-west-1.dream.io/i/x6SRI.jpg', countClick: 0},
        ]
    };

    /*
    *
    * OCTOPUS
    *
    * */
    const octopus = {
        init() {
            model.currentCat = model.cats[0];

            // initialize views
            catListView.init();
            catView.init();
        },
        getAllCats() {
            return model.cats;
        },
        setCurrentCat(cat) {
            model.currentCat = cat;
        },
        getCurrentCat() {
            return model.currentCat;
        },
        incrementCounter() {
            model.currentCat.countClick++;
            catView.render();
        }
    };


    /*
    *
    * VIEWS
    *
    * */
    const catListView = {
        init() {
            this.$catUlListEl = $('.cat-ul-list');

            this.render();
        },
        render() {
            octopus.getAllCats().forEach(cat => {
                $('<li/>', {
                    text: cat.name
                })
                    .appendTo(this.$catUlListEl)
                    .click(() => {
                        octopus.setCurrentCat(cat);
                        catView.render();
                    });
            });
        }
    };

    const catView = {
        init() {
            this.$catDisplayEl = $('.cat-display-area');

            this.$catDisplayEl.on('click', 'img', () => octopus.incrementCounter());

            this.render();
        },
        render() {
            const {name, countClick, img} = octopus.getCurrentCat();
            this.$catDisplayEl.html(
                `<h2>${name}</h2>
                <img width="400px" src="${img}"><br>
                <span class="cat-counter">${countClick}</span> Meows!`
            );
        }
    };


    octopus.init();
});