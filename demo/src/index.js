import 'react-hot-loader/patch'

import React from 'react' //eslint-disable-line
import { render } from 'react-dom'
// import { AppContainer } from 'react-hot-loader';

import { App } from './app'

console.log(App)

// let make = App =>
//   <AppContainer><App/></AppContainer>
//
render(<App/>,
  document.querySelector('#demo'))

// if (module.hot) {
//   module.hot.accept('./app', () => {
//     render(make(require('./app').App),
//       document.querySelector('#demo'))
//   })
// }
