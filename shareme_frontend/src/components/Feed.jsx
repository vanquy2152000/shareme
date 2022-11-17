import React, { useState } from 'react'
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <Spinner message="We are adding new idea to your feed!" />
  return (
    <div>Feed</div>
  )
}

export default Feed