import axios from 'axios';

const setAuthToken = token => {

    if(token)
    {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else
    {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}
export default setAuthToken;

//it it used to check whether token is passed or not 
    // if yes then set them to main global header
    // if no then delete it from global header