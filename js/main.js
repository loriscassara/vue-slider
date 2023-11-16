/*************** 
    CODE VUE SLIDER
***************/

const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg',
                    title: 'Esperienza fantastica!',
                    text: 'Ho apprezzato molto il servizio e la qualità del prodotto. Sicuramente tornerò!',
                    userName: 'Marco',
                    userSurname: 'Rossi'
                },
                {
                    image: 'https://img.freepik.com/free-photo/close-up-friendly-looking-happy-positive-lucky-young-female-wearing-checked-shirt-t-shirt-smiling-broadly-delighted-feeling-awesome-joyful-day-enjoying-life-standing-white-background_176420-34722.jpg',
                    title: 'Prodotto eccezionale!',
                    text: 'Il prodotto supera le aspettative, funziona benissimo e ha un ottimo design.',
                    userName: 'Laura',
                    userSurname: 'Bianchi'
                },
                {
                    image: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg',
                    title: 'Servizio impeccabile!',
                    text: 'Il personale è cordiale e attento alle esigenze del cliente. Consigliato!',
                    userName: 'Giovanni',
                    userSurname: 'Verdi'
                }
            ],
            currentIndex: 0
        };
    },
    methods: {
        slidesChange(index) {
            if (index < 0) {
                index = this.slides.length - 1;
            } else if (index >= this.slides.length) {
                index = 0;
            }
            this.currentIndex = index;
        },
    },
}).mount('#app');