// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

import React from "react"
import Form from './FormContainer'
import Footer from './Footer'
import Header from './Header'

function App () {
  return(
    <div className="Site">
      <Header />
      <Form />
      <Footer />
    </div>
  )
}


export default App
