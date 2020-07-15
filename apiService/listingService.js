export default{

    getTreasures(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postTreasure(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    updateTreasure(payload){
        return fetch(baseURL + payload._id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    deleteTreasure(id){
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}