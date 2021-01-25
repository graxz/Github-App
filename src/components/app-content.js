'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

export default function AppContent ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) {
  return (
    <div className='app'>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <div>Carregando...</div>}
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length &&
        <Repos
          className='repos'
          title='Repositórios:'
          repos={repos}
        />}

      {!!starred.length &&
        <Repos
          className='starred'
          title='Favoritos:'
          repos={starred}
        />}
    </div>
  )
}
