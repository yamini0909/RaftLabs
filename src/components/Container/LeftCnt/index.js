import React from 'react'
import BlueCnt from '../../Ui/BlueCnt'
import ChartCnt from '../../Ui/ChartCnt'
import Transaction from '../../Ui/Transaction'

const ContentMain = () => {
  return (
    <div className='text-black flex justify-start flex-col col-span-2'>
      <BlueCnt/>
      <ChartCnt/>
      <Transaction/>
    </div>
  )
}

export default ContentMain