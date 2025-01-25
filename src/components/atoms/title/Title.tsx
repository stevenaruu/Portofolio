import React from 'react'

const Title = ({text}: {text: string}) => {
  return (
    <p className="font-extrabold text-6xl md:text-7xl">{text}</p>
  )
}

export default Title