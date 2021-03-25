import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://daa5ac8ef4c4.ngrok.io"
})

instance.interceptors.request.use(
  async function(config){
    const token  = await AsyncStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  function(err){
    return Promise.reject(err)
  }
)


export default instance;
