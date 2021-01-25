'use strict'

import React from 'react'

export default function Search ({ isDisabled, handleSearch }) {
  return (
    <div className='search'>
      <footer>Designed and developed by Isaddora Freitas</footer>
      <input
        type='search'
        onfocus=''
        placeholder='Type your user'
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
  )
}
