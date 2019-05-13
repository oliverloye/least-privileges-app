const URL = 'https://oloye.dk/ca3/';

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }   
    return res.json();
}

class ApiFacade {
    fetchData = () => {
        const options = this.makeOptions("GET", true); //True add's the token
        return fetch(URL + "/api/info/user", options)
            .then(handleHttpErrors);
    };


    fetchAllPersons = () => {
        const options = this.makeOptions("GET");
        return fetch(URL + "/api/swapi/person", options, true)
            .then(handleHttpErrors)
    }


    makeOptions(method, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            }
        };
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
}
const facade = new ApiFacade();
export default facade;
