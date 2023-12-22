import { MdEmail, MdWorkOutline } from 'react-icons/md'


const topNav = () => {
  return (
    <div className='flex justify-between py-8 px-8 items-center'>
      <h1>
        Ugo Ogadi
      </h1>
      <ul className='flex gap-10 px-12'>
        <li className=' flex flex-col items-center justify-center'>
          <MdEmail/>
          <span className='text-[0.6rem]'>email</span>
        </li>
        <li className=' flex flex-col items-center justify-center '>
          <MdWorkOutline/>
          <span className='text-[0.6rem]'>email</span>
        </li>
      </ul>
    </div>
  )
}

export default topNav