import React, { useEffect, useMemo } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import icon from "./icon"

export default function Markerposition({ address }) {
  const position = useMemo(() => {
    return [address.location.lat, address.location.lng]
  }, [address.location.lat, address.location.lng])
  const map = useMap()

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    })
  }, [map, position])

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  )
}
