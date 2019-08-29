import * as token from '../helpers/local-storage';
import request from './request';

const { REACT_APP_API_DOMAIN } = process.env;
const BASE_URL = REACT_APP_API_DOMAIN;



//
//const { NODE_ENV } = process.env
//const BASE_URL = NODE_ENV === 'development'
//  ? 'http://localhost:5000'
//  : 'tbd' // Once we deploy, we need to change this


export const getAssignments = () => request('/api');


export const createAssignment = async (assignment) => {
  const response = await fetch(`${BASE_URL}/api/assignments/new`, {
    body: JSON.stringify(assignment),
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'POST'
  })
  const json = await response.json()

  return json;
}