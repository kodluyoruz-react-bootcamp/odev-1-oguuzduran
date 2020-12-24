import axios from 'axios';

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(id){
    try{

        const {data: users} = await axios.get(`${ENDPOINT}/users/${id}`);
        const {data: posts} = await axios.get(`${ENDPOINT}/posts?userId=${id}`);
        return {users : users, posts: posts};

    }catch(e){
        console.log(e);
    }
}

export default getData