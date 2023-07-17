import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import { CgPin } from 'react-icons/Cg';
import { CgPinAlt } from 'react-icons/Cg';
import './Map.scss';


const Map = () => {
  return (
    <div className="map__wrapper">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -52.0, 0],
          center: [5, 8],
          scale: 2300
        }}
        style={{width:'100%', height:'100%'}}
      >
        <Geographies
          geography="/features.json"
          fill="#2c065d"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[ 25.0136, 59.3000]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPin style={{color: 'red', fontSize:'30px'}}/>
        </Annotation>
        <Annotation
          subject={[ 17.0686, 59.3293]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPinAlt style={{color: 'green', fontSize:'30px'}}/>
        </Annotation>
        <Annotation
          subject={[ 24.1056, 56.9677]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPinAlt style={{color: 'green', fontSize:'30px'}}/>
        </Annotation>
        <Annotation
          subject={[ 10.7522, 59.9139]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPinAlt style={{color: 'green', fontSize:'30px'}}/>
        </Annotation>
        <Annotation
          subject={[ 24.7482, 60.4000]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPinAlt style={{color: 'green', fontSize:'30px'}}/>
        </Annotation>
        <Annotation
          subject={[ 23.8813, 55.1694]}
          dx={-5}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 0,
            strokeLinecap: "round"
          }}
        >
          <CgPinAlt style={{color: 'green', fontSize:'30px'}}/>
        </Annotation>

      </ComposableMap>
    </div>
  );
};

export default Map;
