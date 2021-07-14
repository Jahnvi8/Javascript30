function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;

    audio.play();

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const k = document.querySelectorAll('.key');
k.forEach(k1 => k1.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);