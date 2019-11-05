let input = document.querySelector("input");
let plus = document.querySelector('.plus button');
let subtract = document.querySelector('.subtract button');
let multiply = document.querySelector('.multiply button');
let divide = document.querySelector('.divide button');
let equal = document.querySelector('.equal button');

equalHandleClick = () => {
    equal.onclick = function(value) {
        input.value = value;
        input.focus();
        input.selectionStart = input.value.length;
    }
}

plus.onclick = function() {
    let a = +input.value;
    let first = a;
    let second = 0;
    let b = 0;
    input.value = "";
    input.onchange = function() {
        let plusValue = document.querySelector("input");
        second = +plusValue.value;
        enterClicked = true;
        b = first + second;
        input.value = b;
    }
    input.focus();
    input.selectionStart = input.value.length;
    equalHandleClick(b);
}

subtract.onclick = function() {
    let a = +input.value;
    let first = a;
    let second = 0;
    let b = 0;
    input.value = "";
    input.onchange = function() {
        let plusValue = document.querySelector("input");
        second = +plusValue.value;
        enterClicked = true;
        b = first - second;
        input.value = b;
    }
    input.focus();
    input.selectionStart = input.value.length;
    equalHandleClick(b);
}

multiply.onclick = function() {
    let a = +input.value;
    let first = a;
    let second = 0;
    let b = 0;
    input.value = "";
    input.onchange = function() {
        let plusValue = document.querySelector("input");
        second = +plusValue.value;
        enterClicked = true;
        b = first * second;
        input.value = b;
    }
    input.focus();
    input.selectionStart = input.value.length;
    equalHandleClick(b);
}

divide.onclick = function() {
    let a = +input.value;
    let first = a;
    let second = 0;
    let b = 0;
    input.value = "";
    input.onchange = function() {
        let plusValue = document.querySelector("input");
        second = +plusValue.value;
        enterClicked = true;
        b = first / second;
        input.value = b;
    }
    input.focus();
    input.selectionStart = input.value.length;
    equalHandleClick(b);
}

