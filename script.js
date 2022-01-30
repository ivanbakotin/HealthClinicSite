const slides = document.getElementsByClassName("slide");

let counter =  1;

slides[0].style.display = "block";

setInterval(() => {

    for (i = 0; i < slides.length; i++) {
        if (counter === i) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }

    if (counter > 1) {
        counter  = 0;
    } else {
        counter++;
    }

}, 3000)
