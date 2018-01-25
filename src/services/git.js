import request from '../utils/request';



export function fetchUserRepository(username) {
  return request(`https://api.github.com/users/${username}/repos`);
}
