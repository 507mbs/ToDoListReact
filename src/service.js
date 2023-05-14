import axios from 'axios';

const apiClient=axios.create
({ baseURL:process.env.REACT_APP_API})

export default {
  getTasks: async () => {
    const result = await apiClient.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
        console.log('addTask', name)
   const result = await apiClient.post(`/items`,{name:name,isComplete:false})   
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setTask', id)
    await apiClient.put(`/items/${id}?isComplete=${isComplete}`)
  }, 

  deleteTask:async(id)=>{
    const result = await apiClient.delete(`/items/${id}`)
    return result.data;
  }
};

apiClient.interceptors.response.use(function (response) {  
  console.log("exelent");
  return response;
}, function (error) {  
  return Promise.reject(error);
});