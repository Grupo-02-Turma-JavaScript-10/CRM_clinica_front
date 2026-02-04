import axios from "axios";

const cloudApi = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dfmf9spvx/'
})

export const enviarFotoPerfil = async (foto: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', foto);
    formData.append('upload_preset', 'crmed_avatars_unsigned');

    try {
        const response = await cloudApi.post('image/upload', formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data.secure_url;
    } catch (error) {
        console.error('Erro ao enviar foto:', error);
        throw error;
    }
}