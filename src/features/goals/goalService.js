import axios from "axios";

const API_URL = "http://localhost:5000/api/goals"

/*
let userToken

if(localStorage.getItem('user')){
    userToken = localStorage.getItem('user').token
}


const config = {
    Authorization: `Bearer ${userToken}`
}

*/

// Set goal 
const setGoal = async(goalData, token) => {

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`${API_URL}`, goalData, config)
    return response.data
}

// Get goal 
const getGoal = async(goalID, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}/${goalID}`, config)
    return response.data
}
// Get goals 
const getGoals = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Update goal 
const updateGoal = async(goalData, goalID, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${API_URL}/${goalID}`, goalData, config)
    return response.data
}

// delete goal 
const deleteGoal = async(goalID, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}/${goalID}`, config)
    return response.data
}

const goalService = {
    setGoal,
    getGoal,
    getGoals,
    updateGoal,
    deleteGoal
}


export default goalService
