// document.querySelector : CSS 선택자, 하 이성의 선택자를 포함한 DOMstring.
const cardElement = document.querySelector('#product-card');
// JSON 데이터를 저장할 전역 변수를 선언
let data;  

function createProductCard(product) {
    var productDiv = document.createElement('div');
    productDiv.className = 'product-card';

    // 이미지 데이터 불러오기
    var img = document.createElement('img');
    img.src = product['img'];
    productDiv.appendChild(img);

    //신제품인지 아닌지
    var mainTag = document.createElement('h5');
    mainTag.textContent = product['main-tags'];
    productDiv.appendChild(mainTag);

    //상품명
    var productName = document.createElement('h4');
    productName.textContent = product['product-name'];
    productDiv.appendChild(productName);

    // 카테고리 태그
    var tag = document.createElement('p');
    tag.textContent = product['tags'];
    productDiv.appendChild(tag);

    //제품 색상
    var color = document.createElement('p');
    color.textContent = product['color'];
    productDiv.appendChild(color);

    // 가격
    var price = document.createElement('h4');
    price.textContent = product['price'];
    productDiv.appendChild(price);

    return productDiv;
}

function filterProducts(isChecked) {
    var filteredProducts = data.filter(function(product) {
        return isChecked ? product[0]['main-tags'] === '신제품' : true;
    });
    displayProducts(filteredProducts);
}

function displayProducts(filteredProducts) {
    var productCardElement = document.querySelector('#product-card');
    productCardElement.innerHTML = '';
    filteredProducts.forEach(function(product) {
        var productDiv = createProductCard(product[0]); // `product[0]`을 인자로 전달
        productCardElement.appendChild(productDiv);
    });
}

// JSON 데이터를 가져오는 함수
function loadData() {
    return fetch('new.json')
        .then(response => response.json())
        .then(jsonData => {
            data = Object.values(jsonData);  // JSON 데이터를 `data` 변수에 저장
            displayProducts(data);  // 디폴트 값으로는 모든 상품을 표시함
        })
        .catch(error => console.error('Error:', error));
}

// 이벤트 리스너 함수
function registerEventListener() {
    document.querySelector('.box').addEventListener('change', function() {
        var isChecked = this.checked;
        filterProducts(isChecked);
    });
}

// JSON 데이터를 가져오고 가져오면 이벤트 리스너를 부름..? 
loadData().then(registerEventListener);
