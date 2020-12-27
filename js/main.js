const dice = document.querySelector('.dice');
const button = document.getElementById('roll');
const min = 1;
const max = 16;

function random(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}

button.onclick = function() {
    let xRand = random(max, min);
    let yRand = random(max, min);
        
    dice.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    dice.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}