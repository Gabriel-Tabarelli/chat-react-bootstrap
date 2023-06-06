import axios from "axios"

const url = "http://localhost:8081/arquivo"

export const AwsFile = {

    create: async (image) => {
        const formData = new FormData();
        formData.append('arquivo', image);
        console.log(formData)
        try {
            const response = await axios.post(url, formData);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}