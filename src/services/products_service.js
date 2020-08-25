import axios from 'axios'

const baseURL = 'http://localhost:3000/product'

const service = axios.create({
    baseURL,
    withCredentials: true
})

export const ALL_HDTVS = baseURL + '/hdtvs'
export const ALL_COMPUTERS = baseURL + '/computers'
export const ALL_ACCESORIES = baseURL + '/accesories'
export const ALL_AUDIO = baseURL + '/audio'

export const ALL_FETCHER = async url => {
    const response = await fetch(url)
    return await response.json()
}

export const CREATE_HEADER = data => service.post('/create', data)

export const DELETE_HEADER = id => service.delete(`/delete/${id}`)