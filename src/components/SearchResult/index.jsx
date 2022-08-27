import React from "react"
import "./style.scss"

const SearchResult = (props) => {
  return (
    <div className="content">
      <div className="item">
        <p>Cidade, Estado:</p>
        <h2>SALVADOR-BA</h2>
      </div>
      <div className="item">
        <p>Ip/Domain:</p>
        <h2>123.09.84.1</h2>
      </div>
      <div className="item">
        <p>Continente:</p>
        <h2>AMERICA DO SUL</h2>
      </div>
      <div className="item">
        <p>País:</p>
        <h2>BRASIL</h2>
      </div>
    </div>
  )
}

export default SearchResult