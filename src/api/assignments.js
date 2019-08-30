import * as token from '../helpers/local-storage';
import request from './request';

const { REACT_APP_API_DOMAIN } = process.env;
const BASE_URL = REACT_APP_API_DOMAIN;


export const getAssignments = () => request('/api');

export const getAssignment = async(assignmentId) => {
  const response = await fetch(`${BASE_URL}/api/assignments/${assignmentId}/edit`, {
       headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.getToken()}`
        },
        method: 'GET'
      })
    const json = await response.json()
    return json;
  }


export const updateAssignment = async(assignment) => {
  const response = await fetch(`${BASE_URL}/api/assignments/${assignment.id}/edit`, {
    body: JSON.stringify(assignment),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'PUT'
    })
    const json = await response.json()

    return json;
}


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

export const getGradedAssignments = async() => {
  const response = await fetch(`${BASE_URL}/api/assignments/graded`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
  const json = await response.json()

  return json;
}

export const getUngradedAssignments = async() => {
  const response = await fetch(`${BASE_URL}/api/assignments/ungraded`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
  const json = await response.json()

  return json;
}