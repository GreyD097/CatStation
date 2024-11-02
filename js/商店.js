const cart = [];
const totalPriceElement = document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.parentElement;
        const productName = productItem.querySelector('h2').textContent;
        const productPrice = parseFloat(productItem.querySelector('p').textContent.replace('价格：￥', ''));

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ￥${item.price}`;
        cartItemsElement.appendChild(itemDiv);
        total += item.price;
    });

    totalPriceElement.textContent = `总价：￥${total}`;
}

const checkoutButton = document.getElementById('checkout');

checkoutButton.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('购物车为空！请添加商品。');
    } else {
        alert(`您购买的商品总价为：￥${totalPriceElement.textContent.replace('总价：￥', '')}`);
        cart.length = 0;
        updateCart();
    }
});


