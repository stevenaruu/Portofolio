import React from 'react'

const Icon = ({source}: {source: string}) => {
  return (
    <img className='h-full w-full rounded-full' src={source} />
  )
}

export default Icon