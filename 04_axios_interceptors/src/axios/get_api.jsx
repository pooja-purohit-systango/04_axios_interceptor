import axios_instance from "./axios_instance";
export const get_user = async () => {
    try {
        const response = await axios_instance.get('/users');
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log("error occured after the api call")
        return error;
    }
};
