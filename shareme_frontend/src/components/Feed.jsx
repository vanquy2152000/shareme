import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../ultis/data';
import Spinner from './Spinner';
import MasonryLayout from './MasonryLayout';

const Feed = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setLoading(false);
        setPins(data);
      })
    }
    else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setLoading(false);
        setPins(data);
        console.log("data : ", data)

      })
    }

  }, [categoryId]);


  if (loading) return <Spinner message="We are adding new idea to your feed!" />
  return (
    <div>
      {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  )
}

export default Feed