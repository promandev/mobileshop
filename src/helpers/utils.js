import api from '../api/createAxiosResponseInterceptor';

export const apiRequestHandler = async (endpoint, method = "get", body = undefined, token = null, signout = null) => {
    return new Promise((resolve, reject) => {
        try {
            const HEADERS = { Authorization: null, Accept: "application/json" };
            api({
                method: method,
                url: endpoint,
                data: body,
                headers: HEADERS,
            }).then(response => {
                if (response) {
                    if (response && response.status) {
                        switch (response.status) {
                            case 200:
                            case 201:
                                return resolve(response.data);
                            case 401:
                            case 500:
                                try {
                                    if (signout) signout();
                                } catch(e){}                                    
                            default:
                                return reject({ status: response.status, data: response.data });
                        }
                    } else reject({ status: 404, message: "No data found" });
                } else reject({ status: 400, message: 'error' });
            }).catch(error => {
                console.log("error1::", error);
                try {
                    if (signout && error && error.response && error.response.status && error.response.status === 401) {
                        signout();
                    }
                } catch(e) {}
                reject({status: 500, message: error });
            });        
        } catch (error) {
            console.log("error2::", error, Object.keys(error));
            reject({ status: 400, message: error });
        }
    });
};