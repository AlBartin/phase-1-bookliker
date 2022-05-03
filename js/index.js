document.addEventListener("DOMContentLoaded", function() {
    listBooks()
});

function listBooks(){
    fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(inventory => {
            inventory.forEach(item => {
                let listItem = document.createElement('li')
                listItem.textContent = item.title
                document.querySelector('#list').appendChild(listItem)

                listItem.addEventListener('click', function(){
                    let itemImage = document.createElement('img')
                    let itemDescr = document.createElement('p')
                    let itemUsers = document.createElement('ul')
                    let likeButton = document.createElement('button')

                    itemImage.src = item['img_url']
                    itemDescr.textContent = item.description
                    const userList = item.users
                    userList.forEach(user => {
                        let username = document.createElement('li')
                        username.textContent = user.username
                        itemUsers.appendChild(username)
                    })

                    // document.querySelector('#show-panel').removeChild('img')
                    // document.querySelector('#show-panel').removeChild('p')
                    // document.querySelector('#show-panel').removeChild('ul')
                    document.querySelector('#show-panel').appendChild(itemImage)
                    document.querySelector('#show-panel').appendChild(itemDescr)
                    document.querySelector('#show-panel').appendChild(itemUsers)
                    document.querySelector('#show-panel').appendChild(likeButton)
                })
            }
        )}

    )
}