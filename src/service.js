import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5123"

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
   const result = await axios.post(`/items`,{name:name,isComplete:false})   
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setTask', id)
    await axios.put(`/items/${id}?isComplete=${isComplete}`)
  }, 

  deleteTask:async(id)=>{
    const result = await axios.delete(`/items/${id}`)
    return result.data;
  }
};

axios.interceptors.response.use(function (response) {  
  console.log("exelent");
  return response;
}, function (error) {  
  return Promise.reject(error);
});