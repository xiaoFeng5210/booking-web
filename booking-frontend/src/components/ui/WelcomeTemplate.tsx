import { useState, type FC, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface Props {
  id: number
  img: string
  tip1?: string
  tip2?: string
  smalltip?: string
  next: () => void
}
const WelcomeTemplate: FC<Props> = ({ id, img, tip1, tip2, smalltip, next }) => {
  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 500)
    return () => {
      setStart(false)
    }
  }, [id])
  const [start, setStart] = useState(false)
  const springs = useSpring({
    opacity: start ? 1 : 0,
    transform: start ? 'translate3d(0, 0%, 0)' : 'translate3d(100%, 0, 0)',
  })
  return (
    <animated.div style={springs} className='w-[100vw] h-[100vh] home_box text-center inline-flex flex-col items-center overflow-hidden'>
      <header className='w-full h-[50vh] box-border inline-flex justify-center items-center'>
        <img src={img} className='h-[70%]' alt="" />
      </header>
      <h2 className='text-[black]'>
        { tip1 ?? '每日提醒' }
        <br />
        { tip2 ?? '不会遗漏每一笔账单' }</h2>
      <p className='text-[14px] text-[#808080] mt-[10px]'>{ smalltip ?? '每日提醒功能，助您分秒必争' }</p>
      <footer className='w-full flex-1 inline-flex items-center justify-evenly flex-col'>
        <button className="btn btn-accent text-[white] w-[15.625rem] text-[1.3rem] cursor-pointer" onClick={() => next()}>下 一 步</button>
        <span className='text-[1rem] text-[#808080] cursor-pointer'>跳过</span>
      </footer>
    </animated.div>
  )
}
export default WelcomeTemplate
