import React, { useState } from "react"

import { SearchResult } from '../../components'

import SvgWorld from '../../assets/img/connected-world.svg'
import MapImage from '../../assets/img/map.png'

import "./style.scss"

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">IpCats</div>
        <div className="ip">IP: 123.09.84.1</div>
      </div>
      <div className="mainSection">
        <div className="mainText">
          <div className="title">SITE PARA BUSCAR IP</div>
          <div className="description">Criado com o intuito de buscar por IP de maquinas e dominios de sites</div>
        </div>                
        <img src={SvgWorld} alt="Connected world"/>
      </div>
      <div className="ipSearch">
        <h2>DIGITE O IP/DOMINIO DESEJADO:</h2>
        <div>
          <input type="text" id="SearchIp" name="SearchIp" placeholder="IP/DOMAIN"/>
          <button>Search</button>
        </div>
      </div>
      <SearchResult/>
      <div className="map">
        <img src={MapImage} alt="Location map" width="" />
      </div>
      <div className="footer"/>
    </div>
  )
}

export default Home
