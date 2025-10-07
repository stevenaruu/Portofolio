import Title from '../../atoms/title/Title'
import Container from '../../container/Container'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import itDivision from '../../../assets/images/it-division.jpg'
import undip from '../../../assets/images/undip-logo.png'
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
          date="May 2025 - Present"
          iconStyle={{ background: '#ffffff', color: '#ffffff' }}
          icon={<Icon source={itDivision} />}
        >
          <h2 className="vertical-timeline-element-title font-bold">Programmer</h2>
          <h4 className="vertical-timeline-element-subtitle text-primary">West Jakarta, Indonesia</h4>
          <p className='text-primary'>
            As a Programmer, I contributed to the development and maintenance of BINUSMAYA’s ecosystem, including the My Dashboard super-app and the Learning Management System sub-app. My role focused on building scalable, user-friendly, and cloud-integrated solutions to enhance the academic and administrative experience across the university.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ffffff', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          date="March 2025 - June 2025"
          iconStyle={{ background: '#ffffff', color: '#ffffff' }}

          icon={<Icon source={undip} />}
        >
          <h2 className="vertical-timeline-element-title font-bold">Software Engineer (Vendor Project for Diponegoro University)</h2>
          <h4 className="vertical-timeline-element-subtitle text-primary">Semarang, Indonesia</h4>
          <p className='text-primary'>
            As a Contract Software Engineer, I developed the Chemical Engineering Operational and Monitoring Hub (CEOMH) a web-based academic platform designed to streamline research, internship, and capstone project management within the Faculty of Chemical Engineering at Diponegoro University.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ffffff', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
          date="March 2024 - April 2025"
          iconStyle={{ background: '#ffffff', color: '#ffffff' }}

          icon={<Icon source={itDivision} />}
        >
          <h2 className="vertical-timeline-element-title font-bold">Junior Programmer</h2>
          <h4 className="vertical-timeline-element-subtitle text-primary">West Jakarta, Indonesia</h4>
          <p className='text-primary'>
            As a Junior Programmer, I contributed to the development and maintenance of BINUSMAYA’s ecosystem, including the My Dashboard super-app and the Learning Management System sub-app. My role focused on building scalable, user-friendly, and cloud-integrated solutions to enhance the academic and administrative experience across the university.
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
            As an Associate Member, I contributed to the development and maintenance of several internal applications supporting General Affairs, Legal, and Binus Square operations. My work focused on improving system performance, modernizing legacy logic, and enhancing internal efficiency.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  )
}

export default ExperienceTimeline