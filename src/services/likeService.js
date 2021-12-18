
const baseUrl = 'http://localhost:3030/data';

export const like = (userId, BookId, token) => fetch(`${baseUrl}/likes`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'X-Authorization': token
    },
    body: JSON.stringify({ userId, BookId })
});
export const getLikes = (BookId) => {
    return fetch(`${baseUrl}/likes?select=userId&where=BookId%3D%22${BookId}%22`)
    .then(res => {
        return res
    })
    .then(res => res.json())
    .then(x => x.map(a => Object.values(a)[0]))
}
