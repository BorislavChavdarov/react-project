const baseUrl = "http://localhost:3030"



export const register = (email, password) => {
   return fetch(`${baseUrl}/users/register`,{
       method: 'POST',
       headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({ email, password })
   })
   .then(res => res.json())
}

export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`,{
        method: 'POST',
        headers: {
         'content-type': 'application/json'
     },
     body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    
 }
 export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`,{
        method: 'GET',
        headers: {
         'content-type': 'application/json',
         "X-Authorization": token
     },
    })
    .then(res => res.json())
 }