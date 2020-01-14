/* istanbul ignore file */
import axios from 'axios'

export default axios.create({
    baseURL: process.env.LABS_API_URL || 'http://challenge-api.luizalabs.com',
    headers: {
        'Content-Type': 'application/json',
    },
})
