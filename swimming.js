/*
Data input form and data validation using JavaScript – 10% of the final grade
• Validation of mandatory fields – a warning should be shown if some of the fields are not
filled.
• Data type validation (for instance, if the value entered in date field is actually a date; or if a
numeric field contains a number).
• Data range validation (for instance, if the number entered in ”month” field is between 1 and
12; or if the value in the salary field is positive).
• In case of validation errors, a message explaining the problem and naming the field/fields
with incorrect values has to be presented to the user. The form must not be submitted in this
case. If the form is filled correctly, it should be submitted to
https://www.w3schools.com/action_page.php

Use of JavaScript for DOM manipulations – 10% of the final grade
• Changing visibility of some part of the document as a response to user interaction with some
part of the document (for instance, user clicks a button “more information” and an explanation
block is shown).
• Creation of new DOM elements from code (using DOM methods rather than assigning a
string containing HTML code to innerHTML).
• Some DOM manipulations have to be demonstrated without using any external libraries,
only by using plain document object model.
• Some other manipulations have to be implemented using a helper library (such as jQuery,
Prototype, MooTools, ExtJS).
• Usage of JS frameworks is considered an advantage
*/

class style_description {
    constructor(li, text) {
        this.li = li; // the <li> element, to which the text will be appended
        this.text = text; // the text itself
        this.is_shown = false; // boolean, that indicates if text is already shown or not (initially false)
    }

    show_text() {
        if (!this.is_shown) this.li.append(this.text); // if text is not shown, show it
        else this.text.remove(); // if text is already shown, remove it
        this.is_shown = !this.is_shown;
    }
}

const styles = ["butterfly", "backstroke", "breaststroke", "freestyle"];
const style_texts = ["The butterfly (colloquially shortened to fly) is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick (also known as the 'dolphin kick'). While other styles like the breaststroke, front crawl, or backstroke can be swum adequately by beginners, the butterfly is a more difficult stroke that requires good technique as well as strong muscles. It is the newest swimming style swum in competition, first swum in 1933 and originating out of the breaststroke.",

"Backstroke or back crawl is one of the four swimming styles used in competitive events regulated by FINA, and the only one of these styles swum on the back. This swimming style has the advantage of easy breathing, but the disadvantage of swimmers not being able to see where they are going. It also has a different start from the other three competition swimming styles. The swimming style is similar to an upside down front crawl or freestyle. Both backstroke and front crawl are long-axis strokes. In individual medley backstroke is the second style swum; in the medley relay it is the first style swum.",

"Breaststroke is a swimming style in which the swimmer is on their chest and the torso does not rotate. It is the most popular recreational style due to the swimmer's head being out of the water a large portion of the time, and that it can be swum comfortably at slow speeds. In most swimming classes, beginners learn either the breaststroke or the freestyle (front crawl) first. However, at the competitive level, swimming breaststroke at speed requires endurance and strength comparable to other strokes. Some people refer to breaststroke as the 'frog' stroke, as the arms and legs move somewhat like a frog swimming in the water. The stroke itself is the slowest of any competitive strokes and is thought to be the oldest of all swimming strokes.",

"Freestyle is a category of swimming competition, defined by the rules of the International Swimming Federation (FINA), in which competitors are subject to a few limited restrictions on their swimming stroke. Freestyle races are the most common of all swimming competitions, with distances beginning with 50 meters (50 yards) and reaching 1500 meters (1650 yards), also known as the mile. The term 'freestyle stroke' is sometimes used as a synonym for 'front crawl', as front crawl is the fastest surface swimming stroke. It is now the most common stroke used in freestyle competitions."
];

let style_descriptions = []; // array, that will contain all of the styles descriptions (initialized empty)

// "for" loop to create all of styles descriptions as objects, and add an event listener for that object
for (let i = 0; i < styles.length; i++) {
    const style_li = document.getElementById(styles[i]);
    const style_text = document.createElement("p");
    style_text.innerText = style_texts[i];
    style_descriptions[i] = new style_description(style_li, style_text);

    const style_link = document.getElementById(styles[i] + "-link");
    style_link.addEventListener("click", function() {style_descriptions[i].show_text()});
}

// Function to zoom or unzoom pool picture (is executed when the picture is clicked)
function zoom_pool_pic() { 
    if (!pool_pic_zoomed_in) {
        pool_pic.style.width = "90%";
        pool_pic.style.cursor = "zoom-out";
    } else {
        pool_pic.style.width = "40%";
        pool_pic.style.cursor = "zoom-in";
    }
    pool_pic_zoomed_in = !pool_pic_zoomed_in;
}

const pool_pic = document.getElementById("pool-pic");
let pool_pic_zoomed_in = false;
pool_pic.addEventListener("click", zoom_pool_pic);

//Form validation (might delete later)

const form = document.getElementById("form");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const submit_button = document.getElementById("form-submit");
form.addEventListener("submit", validate_form);

const letters_regexp = /^[a-z]+$/i; // regular expression to check if string contains only letters and no numbers or other symbols
                                    // ^ - the string should begin with a letter
                                    // [a-z]+ - every next character should also be a letter
                                    // $ - the string should end with a letter as well
                                    // i - make the check case insensitive

function validate_form(event) {
    let error_text = "";
    
    if (first_name.value === "" || !letters_regexp.test(first_name.value)) {
        if (first_name.value === "") error_text += "Warning! Please enter a name!\n";
        else error_text += "Warning! The name should contain only letters!\n";
    }

    if (last_name.value === "" || !letters_regexp.test(last_name.value)) {
        if (last_name.value === "") error_text += "Warning! Please enter a last name!\n";
        else error_text += "Warning! The last name should contain only letters!\n";
    }

    if (email.value === "") error_text += "Warning! Please enter an email!\n"

    if (age.value === "" || isNaN(age.value) || age.value <= 0 || age.value > 150) {
        if (age.value === "") error_text += "Warning! Please enter an age!\n";
        else if (isNaN(age.value)) error_text += "Warning! The age should be a number!\n";
        else if (age.value <= 0) error_text += "Warning! The age cannot be less than or equal to 0!\n";
        else error_text += "Warning! The age cannot be greater than 150!\n"
    }

    if (error_text !== "") {
        alert(error_text);
        event.preventDefault();
    }
}

// JQuery 
$(function() {
    const questions = 4;
    
    // When button is clicked, check the user's answers and show result
    $("#check-answers").click(function() {
        show_result();
    });

    function show_result() {
        $("#check-answers").css({"margin-bottom": "0"});
        $("#result-text").remove(); // Clear the result text
        let checked = 0;
        let correct = 0;

        $("#quiz input").each(function() { // Count how many questions user has answered
            if ($(this).is(":checked")) checked++;
        });

        if (checked < questions) $("#quiz-section").append("<div id='result-text'>Please answer all of the questions!</div>");
        else {
            $("#quiz input:checked").each(function() { // Count how many questions user has answered correctly
                if ($(this).val() == 1) correct++;
            });

            if (correct === questions) $("#quiz-section").append("<div id='result-text'>You answered all of the questions correctly! Good job!</div");
            else if (correct === 0) $("#quiz-section").append("<div id='result-text'>You didn't answer any of the questions correctly! Why won't you try again?</div>");
            else $("#quiz-section").append("<div id='result-text'>You answered " + correct + " out of " + questions + " questions correctly! Not bad!</div>");
        }
        document.getElementById("quiz-section").scrollIntoView(); // scroll a little bit
    }


    let images = [];
    $("#img-gallery img").each(function(index, object) { // fill array with images
        images[index] = object;
    })

    $("#scroll-left").click(function() {
        scroll_left();
    });

    function scroll_left() {
        $.each(images, function(index) {
            if ($(this).css("display") == "block") {
                $(this).css({"display": "none"});
                if (index > 0) $(images[index-1]).css({"display": "block"}); // if current image isn't the first image, show the previous image
                else {
                    $(images[images.length-1]).css({"display": "block"}); // if current image is the first image, show the last image
                    return false;
                }
            }
        })
    }

    $("#scroll-right").click(function() {
        scroll_right();
    })

    function scroll_right() {
        $.each(images, function(index) {
            if ($(this).css("display") == "block") {
                $(this).css({"display": "none"});
                if (index < images.length-1) { // if current image isn't the last , show the next image
                    $(images[index+1]).css({"display": "block"});
                    return false;
                }
                else $(images[0]).css({"display": "block"}); // if current image is the last image, show the first image
            }
        })
    }

});





