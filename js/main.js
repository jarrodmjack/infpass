// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABC8558DEFGHIJKLM123NOPQRST352UVXY30ZABCD85EF80GHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMN52OPQRSTUVXYZABCDEFGHIJKLMNOPQRSTU54524VXYZABCDEFGHIJKLMN24OPQRSTUVXYZABCDEFGHIJKLMNOPQR2442STUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);








// Password Generation *****
/* things I need: 
button to click and generate password /
function to encrypt the passcode
display that passcode on the screen in the box
*/


document.querySelector('#generate').addEventListener('click', generatePassword)

function generatePassword(){

    let passwordLength = Number(document.querySelector('#passwordLength').value);

    if(!passwordLength){
        alert('Must be a number between 8 - 30')
    }


    console.log(typeof passwordLength)
    console.log(passwordLength)

    if(passwordLength < 8 || passwordLength > 30){
        alert('Password must be between 8 - 30 characters');
        location.reload();
    }

    let possibilities = [...'.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()']
    let passwordString = [];

    for(let i = 0; i <= passwordLength - 1; i++){
        let randomNumber = Math.floor(Math.random() * 71 + 1)
        passwordString[i] = possibilities[randomNumber]
    }

    // console.log(passwordString.join(''))


        passwordString = passwordString.join('')
    // console.log(passwordString)

    
    document.querySelector('#generatedPasscode').innerText = passwordString



}
