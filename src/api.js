import axios from 'axios'

const searchRobots = async(term) => {
    // Utilice en url https://jsonplaceholder.typicode.com/users
    const url = 'https://jsonplaceholder.typicode.com/users'

    // construya una constanterespuesta (response) con axios de tipo get que reciba en objeto params en llave query el term
    const response = await axios.get(url,{
       params: {
        query: term
       } 
    })
    console.log(response.data)
    // retorne response.data
    return response.data
}

export default searchRobots