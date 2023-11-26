import axios from 'axios'
const base_url ='https://notes-api-backend-git-master-aldorodriguez28.vercel.app/api/notes/'

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

const getAllNotes = async ()=>{
    const response = await axios.get(base_url,config)
    const {data} = response
    return data
}

const createNote =async (object_note)=>{
    const response = await axios.post(base_url, object_note, config)
    return response.data
}
export default {getAllNotes, createNote}