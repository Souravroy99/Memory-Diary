import axios from 'axios'
const url = 'http://localhost:5000/api/posts'

export const fetchPost = () => {
    axios.get(url)
}