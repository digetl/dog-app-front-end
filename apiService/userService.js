let base64 = require('base-64');

export default{
    
    postUserLogin(payload){
        console.log(payload);
        
        return fetch("http://127.0.0.1:8080/login/", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Authorization": `Basic ${base64.encode(`${payload.username}:${payload.password}`)}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())

    },
    // updateTreasure(payload){
    //     return fetch(baseURL + payload._id, {
    //         method: 'PUT',
    //         body: JSON.stringify(payload),
    //         headers: { 'Content-Type': 'application/json'}
    //     })
    //     .then(res => res.json())
    // },
    // deleteTreasure(id){
    //     return fetch(baseURL + id, {
    //         method: 'DELETE'
    //     })
    // }
}