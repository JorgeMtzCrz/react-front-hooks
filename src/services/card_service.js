import axios from 'axios'

//const baseURL = 'http://localhost:3000/card'
// const baseURL = 'https://bestdealtest.herokuapp.com/card'
//const baseURL = 'https://bestdealapp.herokuapp.com/card'
const baseURL = 'https://bditapp.herokuapp.com/card'

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

export const CREATE_CARD = data => service.post('/create', data)

export const DELETE_CARD = id => service.delete(`/delete/${id}`)