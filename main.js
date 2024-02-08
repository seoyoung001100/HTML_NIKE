// window.onload = function() {
//     loadHTML('./include/header.html', document.querySelector('header'));
//     loadHTML('./include/footer.html', document.querySelector('footer'));
// }

// function loadHTML(url, element) {
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             element.innerHTML = xhr.responseText;
//         }
//     };

//     xhr.open('GET', url, true);
//     xhr.send('');
//     //보안 정책??상 웹페이지서버에서만 작동이 되는 것 같다.
//     //CORS정책이라고 함
//     //Node.js를 사용하여 서버를 열면 제대로 hrader와 footer가 들어가는 걸 볼 수 있다.
//     //콘솔에서 네트워트>캐셔를 체크하면 실시간으로 바뀐다.
// }
// window.jQuery = window.$ = require('jquery');


// Header, Footer 컴포넌트
async function createHeader() {
    //fetch : 요청을 보냄 > 여기서는 내가 원하는 파일을 불러오겠다고 요청을 보냄
    //await : async 함수 안에서만 동작한다. 프라미스가 실행될 때까지 기다림
    const response = await fetch('./include/header.html');
    const text = await response.text();
    
    //createElement() : 요소를 생성함 <header></header>
    //innerHTML : HTML 요소의 내부 내용을 쉽게 읽거나 수정할 수 있음.
    const header = document.createElement('header');
    header.innerHTML = text;
    return header;
}

async function createFooter() {
    const response = await fetch('./include/footer.html');
    const text = await response.text();
    
    const footer = document.createElement('footer');
    footer.innerHTML = text;
    return footer;
}

async function appendElements() {
    const header = await createHeader();
    const footer = await createFooter();

    document.body.prepend(header); 
    document.body.appendChild(footer);
}

appendElements();
