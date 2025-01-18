import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-8 sm:px-10 lg:px-12">
      {children}
    </div>
  )
}

export default Container