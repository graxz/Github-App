'use strict'

import React from 'react'

export default function UserInfo ({ userinfo }) {
  return (
    <div className='user-info'>
      <img src={userinfo.avatar_url} />

      <div className='final-user'>
        <h1>
          <a target='_blank' rel='noreferrer' href={`https://github.com/${userinfo.login}`}>
            {userinfo.name}
          </a>
        </h1>

        <ul className='repos-info'>
          <li>Repositórios: {userinfo.public_repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
        </ul>
      </div>
    </div>
  )
}
