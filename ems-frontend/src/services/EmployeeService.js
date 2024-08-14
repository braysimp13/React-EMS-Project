import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/employees/api/employees';

export const listEmployees = () =>
{
    return axios.get(REST_API_BASE_URL)
}

export const createEmployee = (e) =>
{
    var addApi = REST_API_BASE_URL + "/create"
    return axios.post(addApi,e)
}

export const updateEmployee = (e, id) =>
{
    var updateApi = REST_API_BASE_URL + "/update/" + id
    return axios.put(updateApi,e)
}

