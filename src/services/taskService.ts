import axios from 'axios';
import {Task, NewTask} from "../types";

const baseUrl = 'http://localhost:3001/tasks';

export const getAllTasks = () => {
    return axios
        .get<Task[]>(baseUrl)
        .then(response => response.data);
};

export const createTask = (object: NewTask) => {
    return axios
        .post<Task>(baseUrl, object)
        .then(response => response.data);
};