import * as token from '../helpers/local-storage';
import request from './request';


const { NODE_ENV } = process.env
const BASE_URL = NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'tbd' // Once we deploy, we need to change this


export const getAssignments = () => request('/api');