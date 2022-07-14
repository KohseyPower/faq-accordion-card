function showUp(event) {
    /* Initialization*/
    /* enable hidden to every paragraph */
    let parent = document.querySelector('main .faq');
    let slctAll = parent.querySelectorAll('p');

    let slctAllArrows = parent.querySelectorAll('img');

    let slctAllBorder = parent.querySelectorAll('section div');

    for (let i = 0; i < slctAll.length; i++) {
        slctAll[i].hidden = true;
        slctAllArrows[i].style.transform = "rotate(0)";
        slctAllBorder[i].style.borderBottom = "1px solid var(--Light-grayish-blue)";
    };

    /* selected para can be hiden or "unhidden" */
    let div = event.target.parentNode;
    let para = next(div);
    let arrow = next(event.target);
    let border = event.target.parentNode;

    if (para.hidden === true) {
        para.hidden = false;
        arrow.style.transform = "rotate(180deg)";
        border.style.borderBottom = "none";
    };

};

/* function to get the hidden nextSibling*/
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}