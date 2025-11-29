import React from 'react'

type Props = {
type : string,
placeholder : string,
secure? : boolean
}

export const InputField = ({type , placeholder , secure = false} : Props) => {
  return (
<input type={type} placeholder={placeholder}  className="col-span-full resize-none"/>
  )
}
