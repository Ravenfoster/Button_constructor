import React from 'react'

export const Type = (props) => {

  const { setOpened, open } = props

  return (
    <>
      <div className='modifier__block type' onClick={() => setOpened(!open)}>Type &#8659;</div>
      {open && props.children}
    </>
  )
}