const baseUrl = "http://127.0.0.1:8080/dogs"

export default {

    getDogs(){
        return fetch(baseUrl)
        .then(res => res.json())
    }

}