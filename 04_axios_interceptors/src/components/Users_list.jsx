import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { get_user } from '../axios/get_api'


const Users_list = () => {
    const {data, isLoading} = useQuery({
        queryKey : ['users'], 
        queryFn : get_user
    }
    )
  return (
    <div>
    {isLoading ? <p>Loading....</p> : 
    data.map((user) => {
       return <li key={user.id}> {user.name}</li>
    })}

      
    </div>
  )
}

export default Users_list
