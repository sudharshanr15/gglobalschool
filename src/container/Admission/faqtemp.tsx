'use client'
import {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Faqtemp = ({data}) => {
    const [opened,setopened]=useState(false)
  return (
    <div className='my-large'>
    <div className='bg-gray-100 p-md font-bold flex items-center justify-between'>
      <div>{data.qn}</div>
      <div onClick={()=>setopened(!opened)} className='w-fit p-2 bg-primary-maroon cursor-pointer text-gray-100'>
        {!opened && <KeyboardArrowDownIcon/>}
        {opened && <KeyboardArrowUpIcon/>}
      </div>
    </div>
    {opened && <div className='p-md'>
        {data.ans}
    </div>}
    </div>
  )
}

export default Faqtemp
