import axios from 'axios';
const URL='http://localhost:7000'

//addnote api

export const Addcont=async(data)=>{
try{
    return await axios.post(`${URL}`,data)
}catch(error){
    console.log('something went wrong ',error)
}
}

//allnote api

export const Getcont=async(data)=>{
    try{
        return await axios.get(`${URL}/all`,data)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }

//edit note api
export const Getonecont=async(id)=>{
        try{
            return await axios.get(`${URL}/edit/${id}`)
             
        }catch(error){
            console.log('something went wrong ',error)
        }
        }


export const Updatecont=async(note,id)=>{
    try{
        return await axios.post(`${URL}/edit/${id}`,note)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }
//Delete note api
export const Deletecont=async(id)=>{
    try{
        return await axios.post(`${URL}/all/${id}`)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }
    
