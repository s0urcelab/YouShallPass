# YouShallPass
A delayed password masking (mobile style) Javascript library
support IE9+

## Usage
Including it on your page

```html
<script src="YouShallPass.js"></script>
```
initial
```javascript
// instantiate ysp with 2 params:  (pattern[String], delay[number])
let ysp = new YouShallPass("●", 800);

// if you are using IE9,call this function to fix a minor bug
ysp.fixIE9();

// bind your password input element such as <input type="text" id="passwd"/>
document.querySelector("#passwd").oninput = ysp.keyboardInputHandle.bind(ysp);
```
your real password value will be here

```javascript
ysp.realText
```
[Demo](http://blog.s0urce.tk/YouShallPass/demo/)


## Contributing


## License
Copyright &copy; 2018 s0urce - [MIT License](LICENSE)
