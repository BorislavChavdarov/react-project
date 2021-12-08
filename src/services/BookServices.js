const baseUrl = "http://localhost:3030";

export const getAll = () => {
 return fetch(`${baseUrl}/data/books/`)
 .then(res => res.json())
 
}
export const getOne = (id) => {
    return fetch(`${baseUrl}/data/books/${id}`)
 .then(res => res.json())
}
export const create = (data, token) => {
    return fetch(`${baseUrl}/data/books`, {
        method:"POST",
        headers: {
            'content-type': 'application/json',
            "X-Authorization": token
        },
     body: JSON.stringify(data)

    })
    .then(res => res.json())
}