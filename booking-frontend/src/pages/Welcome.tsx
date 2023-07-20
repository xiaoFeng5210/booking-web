import type { FC } from 'react'
import WelcomeTemplate from '~/components/ui/WelcomeTemplate'
import '~/styles/home.scss'

const Welcome: FC = () => {
  return (
    <>
      <WelcomeTemplate img='/img/studying.png' />
    </>
  )
}
export default Welcome
