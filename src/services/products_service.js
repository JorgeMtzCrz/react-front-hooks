import axios from 'axios'

//const baseURL = 'http://localhost:3000/product'
//const baseURL = 'https://bestdealtest.herokuapp.com/product'
const baseURL = 'https://bestdealapp.herokuapp.com/product'


const service = axios.create({
    baseURL,
    withCredentials: true
})

export const ALL_HDTVS = baseURL + '/hdtvs'
export const ALL_COMPUTERS = baseURL + '/computers'
export const ALL_ACCESSORIES = baseURL + '/accessories'
export const ALL_AUDIO = baseURL + '/audio'


export const ALL_FETCHER = async url => {
    const response = await fetch(url)
    return await response.json()
}
export const SEND_EMAIL = data => service.post('/email', data)


export const CREATE_PRODUCT = data => service.post('/create', data)

export const DELETE_PRODUCT = id => service.delete(`/delete/${id}`)