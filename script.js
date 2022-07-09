function showUp(event) {
    let para = event.target.parentNode.nextSibling;
    console.log(para.hidden === true);
    if (para.hidden === true) {
        para.setAttribute("hidden", "false");
    } else {
        para.hidden = true;
    };