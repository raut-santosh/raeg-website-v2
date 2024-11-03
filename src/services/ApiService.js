// ApiService.js
import axiosInstance from "./AxiosInstance";
import axios from "axios";


class ApiService {
    constructor() {
        this.apiUrl = process.env.apiUrl; // Set the base API URL from .env
    }


    async get(collectionOrEndpoint, params = {}) {
        let urlEndpoint = collectionOrEndpoint;

        if (collectionOrEndpoint.startsWith('/')) {
            urlEndpoint = collectionOrEndpoint; // Use the endpoint as is
        } else {
            urlEndpoint = '/items/' + collectionOrEndpoint; // Adjust the endpoint
        }

        // Check if 'filter' parameter exists and if it's an object
        if (params?.filter !== undefined && params?.filter !== null) {
            params.filter = JSON.stringify(params.filter);
        }

        if (params?.aggregate !== undefined && params?.aggregate !== null) {
            params.aggregate = JSON.stringify(params.aggregate);
        }

        try {
            const response = await axiosInstance.get(urlEndpoint, {
                params: this.removeUndefinedParams(params),
            });
            return response.data;
        } catch (error) {
            console.error('API fetch error:', error);
            throw error;
        }
    }

    async save(collection, payload) {
        // Determine if the operation is an edit
        const isEdit = payload && payload['id']; // Check if it's an edit (has an 'id')

        // Construct the base URL depending on whether collection starts with '/'
        const url = collection.startsWith('/')
            ? `${process.env.apiUrl}${collection}`
            : `${process.env.apiUrl}/items/${collection}`;

        // Append the ID to the URL if it's an edit and the collection doesn't start with '/'
        const finalUrl = isEdit && !collection.startsWith('/') ? `${url}/${payload['id']}` : url;

        try {
            console.log(finalUrl)
            // Use HTTP methods based on isEdit condition
            const response = isEdit
                ? await axiosInstance.patch(finalUrl, payload) // PATCH for editing
                : await axiosInstance.post(finalUrl, payload); // POST for creating

            // Handle specific condition for users/me collection
            if (collection.includes('/users/me')) {
                console.log('calling getSetUser');
                this.getSetCurrentUser(this.currentUserValue.session); // Call your method here
            }

            return response.data; // Return the response data
        } catch (error) {
            console.error('Error saving data:', error);
            throw error; // Rethrow the error for further handling
        }
    }

    removeUndefinedParams(params) {
        return Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
    }

    // Authentication method
    async auth(action = 'login', payload = {}, provider = '') {
        let url = `${this.apiUrl}/auth`;

        // Define URL based on action
        switch (action) {
            case 'login':
                url += '/login';
                break;
            case 'refresh':
                url += '/refresh';
                const refresh_token = this.getCurrentUserRefreshToken(); // Retrieve refresh token from context
                if (!refresh_token) {
                    throw new Error('refresh_token not found');
                }
                payload = { refresh_token }; // Use the refresh token
                break;
            case 'logout':
                // not working
                payload = { refresh_token: this.getCurrentUserRefreshToken() }; // Use refresh token for logout
                break;
            case 'register':
                url = `${this.apiUrl}/player/register?access_token=${process.env.access_token}`;
                break;
            case 'sendotp':
                url = `${this.apiUrl}/player/sendotp`;
                break;
            case 'verifyotp':
                url = `${this.apiUrl}/player/verifyotp`;
                break;
            default:
                throw new Error('Invalid action');
        }

        // Send POST request to the server
        return axios.post(url, payload)
            .then(res => {
                // if (res.data.data?.access_token) {
                //     // If there's an access token, update the user in context
                //     this.setUser({ session: res.data });
                // }
                return res.data; // Return the response data
            })
            .catch(error => {
                console.error('Authentication error:', error);
                throw error; // Rethrow error for handling in components
            });
    }


}

export default ApiService;
