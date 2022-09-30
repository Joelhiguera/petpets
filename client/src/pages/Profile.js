import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { QUERY_USER, LOGGED_IN_USER } from '../utils/queries'



const Profile = () => {
 const { loading, data }=useQuery(LOGGED_IN_USER)
 if (loading) {
  console.log(loading)
 } else {
  console.log(data)
 }
  return(
    <>
      hello
    </>
  )
}

export default Profile