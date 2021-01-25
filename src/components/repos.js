'use strict'

import React from 'react'

export default function Repos ({ className, title, repos }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Repos.defaultProps = {
  className: ''
}
