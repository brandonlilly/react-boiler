import React from 'react'
import ReactDOM from 'react-dom'

if (process.env.NODE_ENV !== 'production') {
  console.log('bundle loaded')
}

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
)
