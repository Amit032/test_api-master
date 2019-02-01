export default class FetchUserData {
  
    signUp = (email, password,username,first_name,last_name) => {
      return this.fetch(`https://blooming-cove-35281.herokuapp.com/api/users`, {
        method: "POST",
        body: JSON.stringify({
            user: {
                email,
                password,
                username,
                first_name,
                last_name
            }
        })
      }).then(res => {
        this.setToken(res.access_token); 
        return Promise.resolve(res);
      });
    };

    fetch = (url, options) => {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json"
        };
        
        return fetch(url, {
          headers,
          ...options
        })
          .then(this._checkStatus)
          .then(response => response.json());
      };
}