import React, { useState } from "react"
import "./style.scss"

const SearchResult = ({locationData}) => {

  return (
    <div className="content">
      <div className="item">
        <p>Cidade, Estado:</p>
        <h2>
          {!locationData.region_code ? (
            locationData.city
          ) : (
            locationData.city+"-"+locationData.region_code
          )}
        </h2>
      </div>
      <div className="item">
        <p>Ip/Domain:</p>
        <h2>{locationData.ip}</h2>
      </div>
      <div className="item">
        <p>Continente:</p>
        <h2>{locationData.continent_code}</h2>
      </div>
      <div className="item">
        <p>País:</p>
        <h2>{locationData.country_name}</h2>
      </div>
    </div>
  )
}

export default SearchResult