/*
    Just for the sake of the challenge requirements the elements' styles was set using JS
    but it could be done by setting a class and styling it with CSS.

    Since there's no requirement for the image width, I decided to
    set it to half its parent element so that it looks like the picture in the given requirement sheet.

    The carousel change timing was set to 2 seconds as required, though it was already set as 5 seconds.
*/

//Array storage class
let carouselArr = [];
const carouselChangeTiming = 2000;

//class Carousel
class Carousel {

    static _sequence;
    static _size;
    static _interval;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, carouselChangeTiming);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        if(this._sequence >= this._size){
            this._sequence = 0;
        }

        this.setCarouselTitle();
        this.setCarouselImage();
        this._sequence += 1;
    }
    
    static setCarouselImage(){
        this.setCarouselImageLink();
        const carouselImage = document.getElementById("carousel-image");
        carouselImage.src = "../img/" + carouselArr[this._sequence].image;
        carouselImage.style.height = "inherit";
        carouselImage.style.width = "100%";
    }

    static setCarouselImageLink(){
        let imageLink = document.getElementById("carousel-image-link");
        imageLink.href = carouselArr[this._sequence].url;
        imageLink.style.width = "50%";
        imageLink.style.display = "block";
        imageLink.style.margin = "auto";
        imageLink.style.height = "100%";
    }

    static setCarouselTitle(){
        let titleElement = document.getElementById("carousel-title-link");
        let content = carouselArr[this._sequence];
        titleElement.textContent = content.title;
        titleElement.href = content.url;
    }
};
