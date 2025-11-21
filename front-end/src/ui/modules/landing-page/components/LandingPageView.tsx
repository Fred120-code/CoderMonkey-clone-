import React from 'react'
import HeroTopview from './heroTop/HeroTopview'
import Featured from './featured/Featured'
import CodeurSlack from './CodeurSlack/CodeurSlack'
import CurrentCourse from './CurrentCourse/CurrentCourse'
import HighLightList from './HighLightList/HighLightList'
import CallToAction from '@/ui/design-system/cta/CallToAction'

const LandingPageView = () => {
  return (
    <>
        <HeroTopview/>
        <Featured/>
        <CodeurSlack/>
        <CurrentCourse/>
        <HighLightList/>
        <CallToAction/>
    </>
  )
}

export default LandingPageView