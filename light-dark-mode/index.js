import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import './styles.css'
function LightDarkMode() {

  const [theme,setTheme] = useLocalStorage('theme','dark')

  function handleToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme)
  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>hello world</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
