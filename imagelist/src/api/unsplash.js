import axios from 'axios'


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID OC6gfeQTpxHvsptPJhNL1Th5I89vYQOb0mC17intkAw'
    }
})