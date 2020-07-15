import React, { useState, useEffect } from "react"
import {Text} from 'react-native'
import Listings from "../components/ListingsComponents/Listings"

import {useSelector} from 'react-redux'

import listingService from "../apiService/listingService"

const ListingScreen = () => {

    const selectedDog = useSelector(state => state.selectedDog)
    const [listings, setListings] = useState([])

    useEffect(() => {
        listingService.getListings()
        .then(res => setListings(res))
        .catch(err => console.log(err))
    }, [])
    
    const filteredListing = () => {
        return listings.filter(listing => listing.dog.breed === selectedDog.breed)
    }

    console.log(filteredListing());
    
    return (
        <>
          <Listings listings={filteredListing()}></Listings>
        </>
    )

}

export default ListingScreen;