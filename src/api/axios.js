import axios from "axios"
import { getTokenAuthorizationFromLS } from "../helpers/storagePersist"

axios.defaults.baseURL = ""

axios.interceptors.request.use((config) => {
  config.headers.Authorization = getTokenAuthorizationFromLS()
  config.headers.Accept = "application/json"

  return config
})

export default axios
