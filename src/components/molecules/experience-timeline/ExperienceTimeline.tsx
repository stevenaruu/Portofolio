import Title from '../../atoms/title/Title'
import Container from '../../container/Container'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import itDivision from '../../../assets/images/it-division.jpg'
import Icon from '../../atoms/icon/Icon';

const ExperienceTimeline = () => {
  return (
    <Container>
      <Title text='Experiences.' />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ffffff', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          date="March 2024 - Preset"
          iconStyle={{ background: '#ffffff', color: '#ffffff' }}

          icon={<Icon source={itDivision} />}
        >
          <h2 className="vertical-timeline-element-title font-bold">Junior Programmer</h2>
          <h4 className="vertical-timeline-element-subtitle text-primary">West Jakarta, Indonesia</h4>
          <p className='text-primary'>
            Assist in maintaining apps related to BINUSMAYA My Dashboard (Super-Application) and BINUSMAYA Learning Management System (Sub-Application)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ffffff', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          date="March 2023 - February 2024"
          iconStyle={{ background: '#ffffff', color: '#ffffff' }}

          icon={<Icon source={itDivision} />}
        >
          <h2 className="vertical-timeline-element-title font-bold">Associate Member</h2>
          <h4 className="vertical-timeline-element-subtitle text-primary">West Jakarta, Indonesia</h4>
          <p className='text-primary'>
            Assist in maintaining apps related to General Affairs, Legal, and Binus Square.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  )
}

export default ExperienceTimeline