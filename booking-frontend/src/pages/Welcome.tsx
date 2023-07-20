import type { FC } from 'react'
import '~/styles/home.scss'

const Welcome: FC = () => {
  return (
    <div className='w-[100vw] h-[100vh] home_box text-center'>
      <header className='w-full h-[26rem] box-border inline-flex justify-center items-center'>
        <img src="/img/studying.png" className='w-[80%] h-[70%]' alt="" />
      </header>
      <h2>每日提醒
      <br />
      不会遗漏每一笔账单</h2>
      <p className='text-[14px] text-[#808080] mt-[10px]'>每日提醒功能，助您分秒必争</p>
      
    </div>
  )
}
export default Welcome
