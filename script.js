function showUp(event) {
    /* Initialization*/
    let parent = document.querySelector('main .faq');
    let slctAllPara = parent.querySelectorAll('p');

    let slctAllArrows = parent.querySelectorAll('img');

    let slctAllBorder = parent.querySelectorAll('section div');

    let slctAllLink = parent.querySelectorAll('a');
    for (let i = 0; i < slctAllPara.length; i++) {
        slctAllPara[i].hidden = true;
        slctAllArrows[i].style.transform = "rotate(0)";
        slctAllBorder[i].style.borderBottom = "1px solid var(--Light-grayish-blue)";
        slctAllLink[i].style.fontWeight = "normal";
    };

    /* Specification on the element selected */
    let div = event.target.parentNode;
    let para = next(div);
    let arrow = next(event.target);
    let border = event.target.parentNode;

    if (para.hidden === true) {
        para.hidden = false;
        arrow.style.transform = "rotate(180deg)";
        border.style.borderBottom = "none";
        event.target.style.fontWeight = "bold";
    };

};

/* function to get the hidden nextSibling*/
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}