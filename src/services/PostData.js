export function PostData(type, userdata){
    let BaseUrl = 'https://blooming-cove-35281.herokuapp.com/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type,{
            method: 'POST',
            body: JSON.stringify(userdata)
        })
        .then((res) => {
            this.setToken(res.token);
            return Promise.resolve(res);
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}