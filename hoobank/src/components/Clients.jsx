import React from 'react'
import { clients } from '../constants'

const Clients = () => (
  <div className='w-[90%] flex items-center justify-between mx-auto'>
    {clients.map((client) => (
      <img key={client.id} src={client.logo} alt="client logo" className={`max-w-[192.25px]`} />
    ))}
  </div>
)

export default Clients