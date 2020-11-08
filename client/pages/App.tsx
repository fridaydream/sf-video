import React from 'react'
import { hot } from 'react-hot-loader/root'
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from '@/config/router'

const App = () => {
  return (
    <>
      <Routes />
      <CssBaseline />
    </>
  )
}

export default hot(App)
