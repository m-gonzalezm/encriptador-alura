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

document.getElementById("decoder").onclick = function encodeText() {
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

function showOutputText(text) {
    document.getElementById("output-text").innerHTML = text;
}