const baseUrl = "http://localhost:3030";

export const getAll = () => {
 return fetch(`${baseUrl}/data/books/`)
 .then(res => res.json())
 
}
export const getAllSortedByDate = () => {
    return fetch(`${baseUrl}/data/books?sortBy=%5FcreatedOn%20asc`)
    .then(res => res.json())
    
   }
export const getOne = (id) => {
    return fetch(`${baseUrl}/data/books/${id}`)
 .then(res => res.json())
}
export const create = ({name, year, imgUrl, description, author, language}, token) => {
   
    return fetch(`${baseUrl}/data/books/`, {
        method:"POST",
        headers: {
            'content-type': 'application/json',
            "X-Authorization": token
        },
     body: JSON.stringify({name, year, imgUrl, description, author, language, likes:[0, []]})

    })
    .then(res => res.json())
}
export const editBook = (bookId, {name, year, imgUrl, description, author, language}, token) => {
    
    return fetch(`${baseUrl}/data/books/${bookId}`, {
        method:"PUT",
        headers: {
            'content-type': 'application/json',
            "X-Authorization": token
        },
     body: JSON.stringify({name, year, imgUrl, description, author, language, likes:[0, []]})

    })
    .then(res => res.json())
}
export const deleteBook = (bookId, token) => {
    return fetch(`${baseUrl}/data/books/${bookId}`,{
        method:"DELETE",
        headers: {
            "X-Authorization": token
        }
    })
    .then(res => res.json())
}
export const getMyBooks = (userId) => {
    return fetch(`${baseUrl}/data/books?where=_ownerId%3D%22${userId}%22`)
    .then(res => res.json())
}

export const like = (bookId, token) => {

}
