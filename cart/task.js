const quantityValues = Array.from(document.getElementsByClassName('product__quantity-value'))



quantityValues.forEach(element => {
    element.nextElementSibling.addEventListener('click', (event) => {
        event.target.previousElementSibling.innerText = Number(event.target.previousElementSibling.innerText) + 1
    })

    element.previousElementSibling.addEventListener('click', (event) => {
        if (event.target.nextElementSibling.innerText == 1) {
            console.log('This can not be less than 1!')
        } else{ 
            event.target.nextElementSibling.innerText = Number(event.target.nextElementSibling.innerText) - 1
        }
    })

    element.closest('.product__quantity').querySelector('.product__add').addEventListener('click', (event) => {
        // Variables for product cart
        productArticle = event.target.closest('.product').getAttribute('data-id')
        productImagePath = event.target.closest('.product').querySelector('img').src
        productValue = event.target.closest('.product').querySelector('.product__quantity-value').innerText
    
        // Product in cart list
        articleInCart = Array.from(document.getElementsByClassName('cart__products')[0].children).map(x => x.getAttribute('data-id'))

        // Cart adder
        if (document.getElementsByClassName('cart__products')[0].children.length == 0 || !articleInCart.includes(productArticle)) {
            document.getElementsByClassName('cart__products')[0].innerHTML += `
                <div class="cart__product" data-id="${productArticle}">
                    <img class="cart__product-image" src="${productImagePath}">
                    <div class="cart__product-count">${productValue}</div>
                </div>
            `
        } else {
            currentCartCard = Array.from(document.getElementsByClassName('cart__products')[0].children).find(el => el.getAttribute('data-id') == productArticle)
            console.log(currentCartCard)
            currentCartCard.querySelector('div.cart__product-count').innerText = Number(currentCartCard.querySelector('div.cart__product-count').innerText) + Number(productValue)
        }
    })

})