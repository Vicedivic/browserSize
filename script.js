let h1 = document.querySelector('h1');
let width = window.innerWidth;
let height = window.innerHeight;
const button = document.querySelector('button');

function updateValues() {
  width = window.innerWidth;
  height = window.innerHeight;
  h1.innerHTML = `${width} x ${height}`;
}

function copy() {
  $('div').addClass('copied');
  $('span').addClass('copied');
  const values = document.getElementById('h1');
  values.select();
  document.execCommand('copy');
}

window.addEventListener('resize', updateValues);

h1.innerHTML = `${width} x ${height}`;



function copy(inElement) {
  if (inElement.createTextRange) {
    var range = inElement.createTextRange();
    if (range && BodyLoaded==1)
      range.execCommand('Copy');
  } else {
    var flashcopier = 'flashcopier';
    if(!document.getElementById(flashcopier)) {
      var divholder = document.createElement('div');
      divholder.id = flashcopier;
      document.body.appendChild(divholder);
    }
    document.getElementById(flashcopier).innerHTML = '';
    var divinfo = `<embed src="_clipboard.swf" FlashVars="clipboard='+escape(inElement.value)+" width="0" height="0" type="application/x-shockwave-flash"></embed>`;
    document.getElementById(flashcopier).innerHTML = divinfo;
  }
}



