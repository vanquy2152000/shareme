import React from 'react'
import Pin from './Pin'

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({ pins }) => {
  return (
    <div className="flex animate-slide-fwd" breakpointcols={breakpointColumnsObj}>
      {pins.map((pin) => (
        <Pin key={pin._id} pin={pin} className="w-max" />
      ))}
    </div>
  )
}

export default MasonryLayout