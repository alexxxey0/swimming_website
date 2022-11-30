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
    constructor(li, text, is_shown) {
        this.li = li; // the <li> element, to which the text will be appended
        this.text = text; // the text itself
        this.is_shown = is_shown; // boolean, that indicates if text is already shown or not
    }

    show_text() {
        if (!this.is_shown) { // if text is not shown, show it
            this.li.append(this.text);
        } else this.text.remove(); // if text is already shown, remove it
        this.is_shown = !this.is_shown;
    }
}

const styles = ["butterfly", "backstroke", "breaststroke", "freestyle"];
const style_texts = ["The butterfly (colloquially shortened to fly) is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick (also known as the 'dolphin kick'). While other styles like the breaststroke, front crawl, or backstroke can be swum adequately by beginners, the butterfly is a more difficult stroke that requires good technique as well as strong muscles. It is the newest swimming style swum in competition, first swum in 1933 and originating out of the breaststroke.",

"Backstroke or back crawl is one of the four swimming styles used in competitive events regulated by FINA, and the only one of these styles swum on the back. This swimming style has the advantage of easy breathing, but the disadvantage of swimmers not being able to see where they are going. It also has a different start from the other three competition swimming styles. The swimming style is similar to an upside down front crawl or freestyle. Both backstroke and front crawl are long-axis strokes. In individual medley backstroke is the second style swum; in the medley relay it is the first style swum.",

"Breaststroke is a swimming style in which the swimmer is on their chest and the torso does not rotate. It is the most popular recreational style due to the swimmer's head being out of the water a large portion of the time, and that it can be swum comfortably at slow speeds. In most swimming classes, beginners learn either the breaststroke or the freestyle (front crawl) first. However, at the competitive level, swimming breaststroke at speed requires endurance and strength comparable to other strokes. Some people refer to breaststroke as the 'frog' stroke, as the arms and legs move somewhat like a frog swimming in the water. The stroke itself is the slowest of any competitive strokes and is thought to be the oldest of all swimming strokes.",

"Freestyle is a category of swimming competition, defined by the rules of the International Swimming Federation (FINA), in which competitors are subject to a few limited restrictions on their swimming stroke. Freestyle races are the most common of all swimming competitions, with distances beginning with 50 meters (50 yards) and reaching 1500 meters (1650 yards), also known as the mile. The term 'freestyle stroke' is sometimes used as a synonym for 'front crawl', as front crawl is the fastest surface swimming stroke. It is now the most common stroke used in freestyle competitions."
];

const style_descriptions = Array(4).fill(null); // array, that will contain all of the styles descriptions (initialized empty)

// "for" loop to create all of styles descriptions as objects, and add an event listener for that object
for (let i = 0; i < styles.length; i++) {
    const style_li = document.getElementById(styles[i]);
    const style_text = document.createElement("p");
    style_text.innerText = style_texts[i];
    style_descriptions[i] = new style_description(style_li, style_text, false);

    const style_link = document.getElementById(styles[i] + "-link");
    style_link.addEventListener("click", function() {style_descriptions[i].show_text()});
}


function zoom_pool_pic() {
    if (!pool_pic_zoomed_in) {
        pool_pic.style.width = "100%";
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




