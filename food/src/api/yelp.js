import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer Ca9OcZpyaEcCuEc3_9R9fKLQkh5wL_p20QlIKbR_h3xOfnBGXLEMVUUfVAs32Nyj3lB43-nCtA1d2RMEQn-_g_PrbP9Nlp2tpaMOpkpgbY8Tn7MnAe1yl_P2Z-BZYHYx",
  }
})
