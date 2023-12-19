import axios from 'axios'

const BASE_URL = 'http://10.14.33.78:8080/'

export const signIn = async (credentials) => {
  const response = await axios.post(`${BASE_URL}api/auth/login`, credentials, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  })
  return response.data
}

export const verifyJwt = async (jwt) => {
  const response = await axios.post(
    `${BASE_URL}api/auth/verify`,
    { jwt },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  )
  return response.data
}

// export const getAllRanks = (jwtToken) => {
//   return axios.get(`${BASE_URL}/api/v1/ranks`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwtToken}`,
//     },
//     withCredentials: true,
//   })
// }
