import axios from 'axios'

//const baseURL = 'http://localhost:3000/banner'
// const baseURL = 'https://bestdealtest.herokuapp.com/banner'
//const baseURL = 'https://bestdealapp.herokuapp.com/banner'
const baseURL = 'https://bditapp.herokuapp.com/banner'

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

export const CREATE_BANNER = data => service.post('/create', data)

export const DELETE_BANNER = id => service.delete(`/delete/${id}`)