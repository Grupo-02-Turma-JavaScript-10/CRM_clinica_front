import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crmed.onrender.com'
});

export const cadastrarUsuario = async(url:string, dados: object, setDados:Function) =>{
   const resposta = await api.post(url,dados)
   setDados(resposta.data)
}

export const login = async(url:string, dados: object, setDados:Function) =>{
    try {
        const resposta = await api.post(url,dados)
        setDados(resposta.data)
        return resposta.data.token
   }
   catch(error: any) {
        console.error(error);
        throw error;
   }
}

export const buscar = async (url: string, setDados: Function, header?: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}   

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}

