'use strict'

import React from 'react'

export default function Actions ({ getRepos, getStarred }) {
  return (
    <div className='actions'>
      <button onClick={getRepos}>Ver repositórios</button>
      <button onClick={getStarred}>Ver favoritos</button>
    </div>
  )
}
