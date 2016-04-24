import axios from 'axios';

const id = 'CLIENT_ID';
const secret = 'SECRET_ID';
const params = `?client_id=${id}&client_secret=${secret}`;

export default class GithubHelpers {

  constructor({userNames=[]}) {
    this.userNames = userNames
  }

  getUserInfo(userName) {
    return axios.get(`https://api.github.com/users/${userName}${params}`)
  }

  getUsersInfo() {
    return axios.all(this.userNames.map(userName => {
      return this.getUserInfo(userName)
    })).then((responses) => {
      return responses.map(response => { return response.data })
    }).catch(error => {
      console.warn(`Error in getUsersInfo ${error}`)
    })
  }
};
