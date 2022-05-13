import React from 'react'

const withSuspens = (Component) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}><Component /></React.Suspense>
  )
}

export default withSuspens