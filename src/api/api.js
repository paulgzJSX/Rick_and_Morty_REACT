import axios from 'axios'

export const fetchData = async page => {
    const { data: { results } } = await axios.request({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character?page=${page}`
    })
    return results
}