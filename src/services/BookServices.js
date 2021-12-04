const baseUrl = "http://localhost:3030";

export const getAll = () => {
 return fetch(`${baseUrl}/data/books/`)
 .then(res => res.json())
 
}
export const getOne = (id) => {
    return fetch(`${baseUrl}/data/books/${id}`)
 .then(res => res.json())
}