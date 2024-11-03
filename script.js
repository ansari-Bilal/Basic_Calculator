document.addEventListener('keydown', function(event) {
   const key = event.key;
   if (key >= '0' && key <= '9') {
       insert(key);
   } else if (key === 'Enter' || key === '=') {
       calculate();
   } else if (key === 'Backspace') {
       deleteLast();
   } else if (key === 'Escape') {
       clearDisplay();
   } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '(' || key === ')') {
       insert(key);
   } else if (key === 's') {
       insert('sin(');
   } else if (key === 'c') {
       insert('cos(');
   } else if (key === 't') {
       insert('tan(');
   } else if (key === 'l') {
       insert('log(');
   } else if (key === 'e') {
       insert('exp(');
   } else if (key === 'r') {
       insert('sqrt(');
   } else if (key === '^') {
       insert('pow(');
   }
});

function clearDisplay() {
   document.getElementById('result').value = '';
}

function deleteLast() {
   var value = document.getElementById('result').value;
   document.getElementById('result').value = value.substr(0, value.length - 1);
}

function insert(value) {
   document.getElementById('result').value += value;
}

function calculate() {
   var expression = document.getElementById('result').value;
   try {
       // Replace mathematical functions with JavaScript equivalents
       expression = expression.replace(/sqrt\(/g, 'Math.sqrt(')
                              .replace(/pow\(/g, 'Math.pow(')
                              .replace(/sin\(/g, 'Math.sin(')
                              .replace(/cos\(/g, 'Math.cos(')
                              .replace(/tan\(/g, 'Math.tan(')
                              .replace(/log\(/g, 'Math.log10(')
                              .replace(/exp\(/g, 'Math.exp(');
       document.getElementById('result').value = eval(expression);
   } catch (error) {
       document.getElementById('result').value = 'Error';
   }
}

function setTheme(theme) {
   document.body.className = theme;
}

function togglePalette() {
   const palette = document.getElementById('color-palette');
   palette.style.display = palette.style.display === 'block' ? 'none' : 'block';
}
