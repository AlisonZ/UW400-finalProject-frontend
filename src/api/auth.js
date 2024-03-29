import * as token from '../helpers/local-storage';
import request from './request';

//const { NODE_ENV } = process.env
//const BASE_URL = NODE_ENV === 'development'
//  ? 'http://localhost:5000'
//  : 'tbd' // Once we deploy, we need to change this

const { REACT_APP_API_DOMAIN } = process.env;
const BASE_URL = REACT_APP_API_DOMAIN;


export const login = async (user) => {
//    console.log('login userrrrr', user)
  const response = await fetch(`${BASE_URL}/api/login`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()

  await token.setToken(json.token);


  return json;
}

export const signup = async (user) => {
  const response = await fetch(`${BASE_URL}/api/signup`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()
  await token.setToken(json.token);

  return json
}

export const profile = () => request('/api/profile');