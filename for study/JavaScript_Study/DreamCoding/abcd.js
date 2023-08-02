const example = document.querySelector('#example');

example.classList.add('red');
example.classList.remove('box');
console.log(example.classList); // DOMTokenList ["red"]
console.log(example.className); // "red"