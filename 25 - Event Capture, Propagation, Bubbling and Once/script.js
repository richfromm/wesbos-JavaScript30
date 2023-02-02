const divs = document.querySelectorAll('div');

function logText(event) {
    //console.log(event);
    //console.log(this);
    //console.log(typeof this)
    console.log(this.classList.value);
    //console.log("");

    // this only kind of makes sense with capture: false
    // with capture: true, it always stops at one
    event.stopPropagation();
}

// document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,  // default
    once: true  // same as calling removeEventListener() after firing once
}));
