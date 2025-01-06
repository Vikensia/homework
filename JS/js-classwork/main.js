//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
//Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const CART = [
    {
        title: 'Milk',
        price: 32.5,
        qty: 2,
        isBuy: true
    },
    {
        title: 'Bread',
        price: 21.2,
        qty: 1,
        isBuy: false
    }
]

function addToCart(newTitle, newPrice, newQty) {
    const ind = CART.findIndex(el => el.title === newTitle)
    let action = 'added'

    if (ind === -1) {
        CART.push({
            title: newTitle, 
            price: newPrice,
            qty: newQty,
            isBuy: false
        })
    } else {
        CART[ind].qty += newQty
        action = 'updated'
        CART[ind].isBuy = false

    }
    return action
}

function checkAndAddToCart() {
    const title = document.getElementById('prodTitle').value;
    const price = document.getElementById('prodPrice').valueAsNumber;
    const qty = document.getElementById('prodQty').valueAsNumber;

    if (title === '') {
        toast.error("Enter product title, please")
        return
    }

    if (isNaN(price)) {
        toast.error("Enter product price, please")
        return
    } else {
        if (price <= 0) {
            toast.error("Invalid price")
            return
        }
    }

        if (isNaN(qty)) {
        toast.error("Enter product quantity, please")
        return
    } else {
        if (qty <= 0) {
            toast.error("Invalid quantity")
            return
        }
    }

    const msg = addToCart(title, price, qty) === 'added'
        ? 'Product added successfully'
        : 'Product updated successfully'
    toast.success(msg)

    document.getElementById('prodTitle').value = '';
    document.getElementById('prodPrice').value = '';
    document.getElementById('prodQty').valueAsNumber = 1;
    showProductList()
}

function showProductList() {
    const cartTotal = CART.reduce((acc, el) => acc + el.price * el.qty, 0)

    let list = '';
    CART.forEach((prod, index) => {
        list += `<tr>
        <td>${index + 1}</td>
        <td>${prod.title}</td>
        <td>${prod.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${prod.qty}</td>
        <td>${(prod.price * prod.qty).toFixed(2)}</td>
        <td class="text-end">
            ${prod.isBuy ? '' : `<button type="button" class="btn btn-success" onclick="buyProduct(${index})">Buy</button>
                <button type="button" class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>`}          
        </td>
        </tr>`
    })

    document.getElementById('product_list').innerHTML = list;
    document.getElementById('cartTotal').innerText = cartTotal.toFixed(2);

}

function buyProduct(index) {
    CART[index].isBuy = true;
    showProductList()
}

function deleteProduct(index) {
    if (confirm(`Do you want to delete ${CART[index].title}?`)) {
        CART.splice(index, 1)
        showProductList()
    }
}

showProductList()