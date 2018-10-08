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
            adminView.init();
        },
        getAllCats() {
            return model.cats;
        },
        setCurrentCat(cat) {
            model.currentCat = cat;
        },
        editCurrentCat(name, imgUrl, countClick) {
            model.currentCat.name = name;
            model.currentCat.img = imgUrl;
            model.currentCat.countClick = countClick;
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
            this.$catUlListEl.html('');

            octopus.getAllCats().forEach(cat => {
                $('<li/>', {
                    text: cat.name
                })
                    .appendTo(this.$catUlListEl)
                    .click(() => {
                        octopus.setCurrentCat(cat);
                        catView.render();
                        adminView.render();
                    });
            });
        }
    };

    const catView = {
        init() {
            this.$catDisplayEl = $('.cat-display-area');
            this.$catNameEl = this.$catDisplayEl.find('#cat-name-js');
            this.$catImageEl = this.$catDisplayEl.find('#cat-img-js');
            this.$catCountEl = this.$catDisplayEl.find('#cat-counter-js');

            this.$catImageEl.click(() => octopus.incrementCounter());

            this.render();
        },
        render() {
            const {name, countClick, img} = octopus.getCurrentCat();
            this.$catNameEl.text(name);
            this.$catImageEl.attr('src', img);
            this.$catCountEl.text(countClick);
        }
    };

    const adminView = {
        init() {
            this.$adminBtnEl = $('#admin-js');
            this.$adminPanelEl = $('#admin-panel-js');
            this.$editNameEl = $('#edit-name-js');
            this.$editImgUrlEl = $('#edit-image-url-js');
            this.$editNumClicksEl = $('#edit-num-clicks-js');
            this.$submitBtnEl = $('#edit-cat-btn-js');

            this.$adminBtnEl.click(() => this.$adminPanelEl.toggle());

            this.$submitBtnEl.click(event => {
                event.preventDefault();

                octopus.editCurrentCat(
                    this.$editNameEl.val(),
                    this.$editImgUrlEl.val(),
                    this.$editNumClicksEl.val()
                );

                this.$adminPanelEl.hide();
                catView.render();
                catListView.render();
            });

            this.render();
        },
        render() {
            const {name, img, countClick} = octopus.getCurrentCat();
            this.$editNameEl.val(name);
            this.$editImgUrlEl.val(img);
            this.$editNumClicksEl.val(countClick);
        }
    };


    octopus.init();
});