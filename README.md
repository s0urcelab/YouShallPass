# YouShallPass
A delayed password masking Javascript library
+ Customize masking pattern and delay time
+ Support IE9+


## Usage
Including it on your page

```html
<script src="YouShallPass.js"></script>
```
Initial
```javascript
// instantiate ysp with 2 params:  (pattern[String], delay[number])
let ysp = new YouShallPass("●", 800);

// if you are using IE9,call this function to fix a minor bug
ysp.fixIE9();

// bind your password input element such as <input type="text" id="passwd"/>
document.querySelector("#passwd").oninput = ysp.keyboardInputHandle.bind(ysp);
```
Your real password value will be here

```javascript
ysp.realText
```

## Demo
[Demo](https://source2git.github.io/YouShallPass/demo/)

## License
Copyright &copy; 2018 s0urce - [MIT License](LICENSE)
