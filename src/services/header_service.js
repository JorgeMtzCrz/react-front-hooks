import axios from 'axios'

const baseURL = 'http://localhost:3000/header'
    //const baseURL = 'https://bestdealtest.herokuapp.com/header'


const service = axios.create({
    baseURL,
    withCredentials: true
})

export const ALL_URL = baseURL + '/all'
export const ACTIVE_URL = baseURL + '/active'

export const ALL_FETCHER = async url => {
    const response = await fetch(url)
    return await response.json()
}

export const CREATE_HEADER = data => service.post('/create', data)

export const DELETE_HEADER = id => service.delete(`/delete/${id}`)