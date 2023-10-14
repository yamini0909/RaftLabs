import React from 'react'
import LeftCnt from './LeftCnt'
import RightCnt from './RightCnt/index'

const Container = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <LeftCnt/>
        <RightCnt/>
    </div>
  )
}

export default Container