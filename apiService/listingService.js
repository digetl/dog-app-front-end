const baseURL = "http://127.0.0.1:8080/listings"
export default{

    getListings(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postListing(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    updateListing(payload){
        return fetch(baseURL + payload._id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },
    deleteListing(id){
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}