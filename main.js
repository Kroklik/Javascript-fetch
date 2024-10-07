// CRUD операции - create, read, update, delete

// fetch() - встроенная функция для выполнения сетевых запросов

// GET запросы - запрс для получения каких либо данных


// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Ошибка при получеии пользователей'))
// }
// getUsers()

let users = document.querySelector('.users')

async function getUsers() {
    try {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        data['products'].forEach((el) => {
            let item = document.createElement('div')
            item.classList.add('item')

            let name = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let image = document.createElement('img')
            name.textContent = `Название: ${el.title}`
            description.textContent = `Описание: ${el.description}`
            price.textContent = `Цена: ${el.price}$`
            image.src = el.thumbnail

            item.append(name, description, price, image)
            users.append(item)
        })
    } catch (error) {
        console.log('Ошибка при получении данных');
    }
}


window.addEventListener('DOMContentLoaded', () => getUsers())
