import type { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import WelcomeTemplate from '~/components/ui/WelcomeTemplate'
import { welcomePages } from '~/constants/data';
import '~/styles/home.scss'

const Welcome: FC = () => {
  // 我想获取路由参数
  const { id } = useParams()
  const navigate = useNavigate()
  const current = welcomePages.find((item) => item.id === Number(id))!
  function next() {
    if (current!.id < 3)
      navigate(`/welcome/${current!.id + 1}`)
  }
  return (
    <WelcomeTemplate  {...current} next={next} />
  )
}
export default Welcome
