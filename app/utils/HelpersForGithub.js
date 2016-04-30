import axios from 'axios';
import _ from 'lodash';

export default class GithubHelpers {

  constructor({userNames=[],usersInfo=[]}) {
    this.userNames = userNames
    this.usersInfo = usersInfo
  }

  getUserInfo(userName) {
    return axios.get(`https://api.github.com/users/${userName}`)
  }

  getUsersInfo() {
    const firstUserInfo = this.getUserInfo(this.userNames[0])
    const secondUserInfo = this.getUserInfo(this.userNames[1])
    return axios.all([firstUserInfo, secondUserInfo])
      .then(responses => {
        return responses.map(response => {
          return response.data
        })
      }).catch(err => {
        console.warn(`Error in getUsersInfo ${err}`)
      })
  }

  battle() {
    const firstUserPoints = this.getUserPoints(this.usersInfo[0]);
    const secondUserPoints = this.getUserPoints(this.usersInfo[1]);

    return axios.all([firstUserPoints, secondUserPoints])
      .then(this.countScores.bind(this))
      .catch(err => {
        console.warn(`Error in battle ${err}`)
      })
  }

  getUserPoints(userData) {
    const userRepos = axios.get(userData.repos_url);
    const userOrgs = axios.get(userData.organizations_url);
    return axios.all([userRepos, userOrgs])
      .then(this.assignPoints)
      .catch(err => {
        console.warn(`Error in getUserPoints ${err}`)
      })
  }

  assignPoints(response) {
    const reposData = response[0].data;
    const orgsData = response[1].data;

    const points = reposData.reduce((accumulator, current) => {
        accumulator.forksCount += current.forks_count;
        accumulator.watchersCount += current.watchers_count;
        accumulator.starsCount += current.stargazers_count;
        return accumulator
      },
      {
        forksCount: 0,
        watchersCount: 0,
        starsCount: 0
      }
    )

    points.orgsCount = orgsData.length
    return points
  }

  countScores(usersPoints) {
    const firstUserScore = this.getScore(usersPoints[0], this.usersInfo[0])
    const secondUserScore = this.getScore(usersPoints[1], this.usersInfo[1])
    return [firstUserScore, secondUserScore]
  }

  getScore(points, userData) {
    const reposCount = userData.public_repos;

    const pointsChart = [
      points.orgsCount * 50,
      Math.round((points.forksCount / reposCount) * 40),
      Math.round((points.watchersCount / reposCount) * 15),
      Math.round((points.starsCount / reposCount) * 10),
      reposCount * 10,
      userData.followers * 5,
      userData.following,
      userData.public_gists,
      userData.blog ? 20 : 0,
      userData.bio ? 5 : 0
    ]

    return pointsChart.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
  }
};
