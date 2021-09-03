const totalPrice = document.getElementById('total-price');
const afterDiscountInput = document.getElementById('after-discount-price');

// option for memory/storage/delivary
function option(priceField, price) {
    const priceInput = document.getElementById(priceField);
    priceInput.innerText = price;
}

// calculate total price
function TotalPrice() {
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-price');
    const storagePrice = document.getElementById('storage-price');
    const deliveryPrice = document.getElementById('delivery-price');

    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryPrice.innerText);

    afterDiscountInput.innerText = totalPrice.innerText;
    discount20Percent(parseInt(totalPrice.innerText), afterDiscountInput);
}

// configaration function
function configaration(btnName, priceField, price) {
    document.getElementById(btnName).addEventListener('click', function () {
        option(priceField, price);
        TotalPrice()
    })
}

// calculate total price after discount
function discount20Percent(totalPrice, afterDiscountInput) {
    const invalidCode = document.getElementById('invalid-code')
    const pomoCode = document.getElementById('pomo-code');
    if (pomoCode.value === 'stevekaku') {
        let afterDiscount = totalPrice - (totalPrice * (20 / 100));
        afterDiscountInput.innerText = afterDiscount;
        pomoCode.value = '';
        pomoCode.placeholder = ''
    }
    else {
        pomoCode.placeholder = 'if You have pomo code, use it'
    }
}

// apply pomo code listener
document.getElementById('apply').addEventListener('click', function () {
    discount20Percent(parseInt(totalPrice.innerText), afterDiscountInput)
})

// calling configaration function of iMAC
configaration('memory-8GB', 'memory-price', 0)
configaration('memory-16GB', 'memory-price', 180)
configaration('storage-256GB', 'storage-price', 0)
configaration('storage-512GB', 'storage-price', 100)
configaration('storage-1TB', 'storage-price', 180)
configaration('delivery-0', 'delivery-price', 0)
configaration('delivery-20', 'delivery-price', 20)


