import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    Promise.all([
      fetch('http://localhost:4000/popularinwomen').then(res => res.json()),
      fetch('http://localhost:4000/newcollections').then(res => res.json())
    ])
    .then(([popularData, newCollectionData]) => {
      // console.log(popularData)
      setPopular(popularData);
      setNewCollection(newCollectionData);
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
    });
  };

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
