import './Styles/App.css';
import './Styles/map.css';
import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Polyline } from 'react-leaflet'
import dataHandler from "./jsonParser";

/*
  *Class Based Component Handles the State by fetching data locally from local GEOJSON*
  *Render the GEOJSON using Leaflet Components.*
*/ 
class MapComp extends Component{
  componentDidMount(){
    dataHandler().then(
      (data) => {
        this.setState(
          {
            gJson : data
          }
        )
      }
    )
  }
  state = {
    gJson:null
  }

  coordinates =[
    [33.6844, 73.0479],
    [25.3960, 68.3578]
  ]
  render(){
    return (
    <MapContainer center={[33.6844, 73.0479]} zoom={5} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      this.state.gJson && (
        <GeoJSON
          attribution="GeoJSON DATA of PK"
          data={this.state.gJson}
        />
      )
    }
    {/* <Marker position={ [33.6844, 73.0479] }>
      <Popup>
        Islamabad. <br /> Capital of Pakistan.
      </Popup>
    </Marker> */}

    <Polyline pathOptions = { {color: "red"} } positions={this.coordinates}   eventHandlers={{
        click: () => {
          alert("Line Connecting Islamabad to Hyderabad!")
        },
      }}>
    </Polyline>
    </MapContainer>
    
    )
  }
}

export default MapComp;
