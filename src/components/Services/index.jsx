import React from 'react'
import Icon1 from '../../images/projnewsletter.png'
import Icon2 from '../../images/projtodolist.png'
import Icon3 from '../../images/projsurveyform.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Newsletter</ServicesH2>
          <ServicesP>MongoDB and Node.js deployed on heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ToDoList</ServicesH2>
          <ServicesP>Mongoose and Express.js Deployed on Heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Survey Form</ServicesH2>
          <ServicesP>Html and CSS. pen on Codepen</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
