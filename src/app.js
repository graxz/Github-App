'use strict'

import React, { useState } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'

export default function App () {
  const [userinfo, setUserInfo] = useState(null)
  const [repos, setRepos] = useState([])
  const [starred] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  function getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  function handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      setIsFetching(!isFetching)

      axios.get(getGitHubApiUrl(value))
        .then(result => {
          setUserInfo(result.data)
        })

      setIsFetching(!isFetching)
    }
  }

  function getRepos (type) {
    const username = userinfo.login
    axios.get(getGitHubApiUrl(username, type))
      .then(result => {
        setRepos(result.data)
      })
  }

  return (
    <AppContent
      userinfo={userinfo}
      repos={repos}
      starred={starred}
      handleSearch={(e) => { handleSearch(e) }}
      getRepos={() => { getRepos('repos') }}
      getStarred={() => { getRepos('starred') }}
    />
  )
}
