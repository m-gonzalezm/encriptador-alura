function showOutputText(text) {
    if (text) {
        document.querySelector(".missing-text").style.display = "none";
        document.querySelector(".coded-text").style.display = "block";
        document.getElementById("output-text").value = text;
    } else {
        document.querySelector(".missing-text").style.display = "block";
        document.querySelector(".coded-text").style.display = "none";
    }
}

document.getElementById("input-text").addEventListener('input', function (event) {
    this.value = this.value.match(/^[A-Za-zñ¡!¿? ,.']+$/) ? this.value.toLowerCase() : this.value.slice(0, -1);
});

document.getElementById("encoder").onclick = function encodeText() {
    let text = document.getElementById("input-text").value;
    let encodedText = "";
    for (let letter = 0; letter < text.length; letter++) {
        switch (text[letter]) {
            case 'e':
                encodedText += 'enter';
                break;
            case 'i':
                encodedText += 'imes';
                break;
            case 'a':
                encodedText += 'ai';
                break;
            case 'o':
                encodedText += 'ober';
                break;
            case 'u':
                encodedText += 'ufat';
                break;
            default:
                encodedText += text[letter];
        }
    }
    showOutputText(encodedText);
}

document.getElementById("decoder").onclick = function decodeText() {
    text = document.getElementById("input-text").value;
    let decodedText = "";
    for (let letter = 0; letter < text.length; letter++) {
        let adder = 0;
        switch (text[letter]) {
            case 'e':
                if (text.slice(letter, letter + 5) === 'enter') adder = 4;
            case 'i':
                if (text.slice(letter, letter + 4) === 'imes') adder = 3;
            case 'a':
                if (text.slice(letter, letter + 2) === 'ai') adder = 1;
            case 'o':
                if (text.slice(letter, letter + 4) === 'ober') adder = 3;
            case 'u':
                if (text.slice(letter, letter + 4) === 'ufat') adder = 3;
            default:
                decodedText += text[letter];
                letter += adder;
        }
    }
    showOutputText(decodedText);
}

document.getElementById("copier").onclick = function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("output-text").value);
}