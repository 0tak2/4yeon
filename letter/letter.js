// 예약된 DOM ID:
// key: 암호 키를 담는 input 요소 [index.html, encrypt.html]
// content: 복호화된 내용을 담는 div 요소 [index.html]
// original: 원본 텍스트를 입력하는 textarea 요소 [encrypt.html]
// cipher: 암호화된 내용을 담는 div 요소 [encrypt.html]

var orginal = '안녕하세요';
var cipher = 'U2FsdGVkX1+pOu3PUGlklQ4/jp3IqZvgx+Q1kcOTq24=';

function _encrypt(content, key) {
    var ciphertext = CryptoJS.AES.encrypt(content, key).toString();
    return ciphertext;
}

function _decrypt(ciphertext, key) {
    var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

function handleDecryptButton(letterName, key) {
    if (key === '0000') { // DEBUG CODE
        document.getElementById('content').innerHTML = "테스트 중입니다.";
        document.getElementById('content').style.display = 'block';
        document.getElementById('welcome_panel').style.display = 'none';
        return true;
    }

    var cipher = _letters[letterName];
    if (!cipher) {
        alert("암호문을 여는 중 오류가 발생했습니다. 편지의 이름이 잘못 입력되었을 수 있습니다.");
    }
    
    var decrypted = _decrypt(cipher, key);
    if (decrypted === '') {
        alert("잘못된 암호를 입력하셨습니다.")
        return false;
    }
    document.getElementById('content').innerHTML = decrypted;
    document.getElementById('content').style.display = 'block';
    document.getElementById('welcome_panel').style.display = 'none';
    return true;
}

function handleEncryptButton() {
    var key = document.getElementById('key').value;
    var originalText = document.getElementById('original').value;
    var cipherText = _encrypt(originalText, key);
    document.getElementById('cipher').innerHTML = cipherText;
    return true;
}