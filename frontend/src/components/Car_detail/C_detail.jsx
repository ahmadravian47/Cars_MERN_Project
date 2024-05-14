import React from 'react'
import { useParams } from 'react-router-dom'

export default function C_detail() {
  const {id}=useParams();
  return (
    <div>
      <h1>{id} In car_detail page</h1>
    </div>
  )
}
