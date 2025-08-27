const pic = document.getElementById('pic');
const pics = ['../img/hww.png'];
let picindex = 0;

function changePic() {
  pic.classList.remove('animate');
  void pic.offsetWidth;
  pic.src = pics[picindex];
  picindex = (picindex + 1) % pics.length;
  pic.classList.add('animate');
}
changePic();
setInterval(changePic, 5000);
const doc = document.getElementById('heading');
const texts = ['Empowering Your Wellness Journey', 'Discover Your Best Self', 'Join Our Wellness Community'];
let currentTextIndex = 0;
let currentLetterIndex = 0;

function typeText() {
const text = texts[currentTextIndex];
if (currentLetterIndex < text.length) {
const letter = text[currentLetterIndex];
heading.textContent += letter;
currentLetterIndex++;
setTimeout(typeText, 100);
} else {
setTimeout(() => {
  heading.textContent = '';
  currentLetterIndex = 0;
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  typeText();
}, 3000);
}
}

typeText();

