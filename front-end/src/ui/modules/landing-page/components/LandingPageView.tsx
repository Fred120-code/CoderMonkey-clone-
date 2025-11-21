import React from 'react'
import HeroTopview from './heroTop/HeroTopview'
import Featured from './featured/Featured'
import CodeurSlack from './CodeurSlack/CodeurSlack'
import CurrentCourse from './CurrentCourse/CurrentCourse'
import HighLightList from './HighLightList/HighLightList'

const LandingPageView = () => {
  return (
    <>
        <HeroTopview/>
        <Featured/>
        <CodeurSlack/>
        <CurrentCourse/>
        <HighLightList/>
    </>
  )
}

export default LandingPageView