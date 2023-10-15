import React from 'react'
import LeftCnt from './LeftCnt'
import RightCnt from './RightCnt/index'

const Container = () => {
  return (
    <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
        <LeftCnt/>
        <RightCnt/>
    </div>
  )
}

export default Container