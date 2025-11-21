import React from 'react'
import HeroTopview from './heroTop/HeroTopview'
import Featured from './featured/Featured'
import CodeurSlack from './CodeurSlack/CodeurSlack'
import CurrentCourse from './CurrentCourse/CurrentCourse'

const LandingPageView = () => {
  return (
    <>
        <HeroTopview/>
        <Featured/>
        <CodeurSlack/>
        <CurrentCourse/>
    </>
  )
}

export default LandingPageView