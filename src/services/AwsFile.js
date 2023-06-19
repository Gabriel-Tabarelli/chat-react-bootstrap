import axios from "axios"

const url = "http://localhost:8081/api/usuario"

export const AwsFile = {

    create: async (user, image) => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('user-name', JSON.stringify(user.nome));
        formData.append('user-email', JSON.stringify(user.email));
        formData.append('user-password', JSON.stringify(user.password));
        console.log(formData)
        try {
            const response = await axios.post(url, formData);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}