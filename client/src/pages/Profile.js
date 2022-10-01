// import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
// import { QUERY_USER, LOGGED_IN_USER } from '../utils/queries'
// import Auth from '../utils/auth'





const Profile = () => {
//   const { loading, data }=useQuery(LOGGED_IN_USER)
//   const [userName, setUserName] = useState('')

//   function addloggedInName() {
//     if (Auth.loggedIn()) {
//       setUserName('Welcome ' + data.loggedInUser.firstName + '!')
//   }
// }

  return(
    <>
      <h1 style={{textAlign: 'center'}}>Profile page</h1>
      <h2 style={{textAlign: 'center'}}>Saved Pets</h2>

    </>  
  )
}



export default Profile


// const Profile = () => {
//  const { loading, data }=useQuery(LOGGED_IN_USER)
 
//  if (loading) {
//   console.log(loading)
//  } else {
//   console.log(data)
//   console.log(data.loggedInUser.firstName)
//  }

//   const userName = data.loggedInUser.firstName

//   return(
//     <>
//       <p>
//         hello {userName}
//       </p>
//     </>
//   )
// }

// export default Profile