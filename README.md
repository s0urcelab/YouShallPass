# YouShallPass
A delayed password masking (mobile style)  Javascript library

## Usage

```javascript
let ysp = new YouShallPass(800);

// if you use IE9
ysp.init();

// bind your password input element such as <input type="text" id="passwd"/>
document.querySelector("#passwd").oninput = ysp.keyboardInputHandle.bind(ysp);
```

[Demo](http://github.hubspot.com/select/docs/welcome)


## Contributing


## License
Copyright &copy; 2018 s0urce - [MIT License](LICENSE)
