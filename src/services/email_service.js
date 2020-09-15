import axios from 'axios'

//const baseURL = 'http://localhost:3000/subscriber'
// const baseURL = 'https://bestdealtest.herokuapp.com/subscriber'
const baseURL = 'https://bestdealapp.herokuapp.com/subscriber'

const service = axios.create({
    baseURL,
    withCredentials: true
})

export const ALL_URL = baseURL + '/all'

export const ALL_FETCHER = async url => {
    const response = await fetch(url)
    return await response.json()
}

export const CREATE_SUBSCRIBER = data => service.post('/create', data)

export const DELETE_SUBSCRIBER = id => service.delete(`/delete/${id}`)