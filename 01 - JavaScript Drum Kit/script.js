function playSound(event) {
    // note that event.keyCode is deprecated
    // it is recommended to use .key or .code instead
    // e.g. event.keyCode == 65; event.key == "a"; event.code == "KeyA";
    // console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;  // rewind to start
    audio.play();

    console.log(`Add playing to ${event.keyCode}`);
    key.classList.add('playing');
}

function removeTransition(event) {
    // console.log(event);
    // there are a bunch (6) of properties transitioning
    // we just need to pick one as our trigger
    if (event.propertyName != 'transform') return;
    console.log(`Remove playing from ${this.dataset['key']}`);
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
