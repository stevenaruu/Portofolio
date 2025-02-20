import Container from '../../container/Container'
import Title from '../../atoms/title/Title'
import { PulsatingButton } from '../../atoms/pulsing-button/PulsingButton'
import { openInNewTab } from '../../../lib/utils'
import Tag from '../../atoms/tag/Tag'
import ProjectCard from '../../atoms/project-card/ProjectCard'

import ceritaNikahMobile from '../../../assets/images/cerita-nikah-mobile.png'
import ceritaNikahDekstop from '../../../assets/images/cerita-nikah-dekstop.png'
import jucetipMobile from '../../../assets/images/juicetip-mobile.png'
import juicetipDekstop from '../../../assets/images/juicetip-dekstop.png'

const ProjectGroup = () => {
  return (
    <Container>
      <Title text='Projects.' />
      <ProjectCard
        title='Cerita Nikah'
        description='Cerita Nikah is a platform that provides digital wedding invitation creation services. Users can choose from various packages and invitation templates that can be freely customized, giving them greater access and flexibility in the creation process. 💌'
        link='https://github.com/stevenaruu/Cerita-Nikah'
        mobile={ceritaNikahMobile}
        dekstop={ceritaNikahDekstop}
      >
        <Tag>React</Tag>
        <Tag>Typescript</Tag>
        <Tag>Tailwind</Tag>
        <Tag>Firebase</Tag>
      </ProjectCard>
      <ProjectCard
        title='JuiceTip'
        description='JuiceTip is a user-friendly web-based platform to facilitate international entrustment services. The platform aims to simplify the process of entrusting goods by providing a secure and efficient environment for users to search, order, and send items from various locations around the world. 🌏'
        link='https://github.com/stevenaruu/JuiceTip-FE'
        mobile={jucetipMobile}
        dekstop={juicetipDekstop}
      >
        <Tag>React</Tag>
        <Tag>Typescript</Tag>
        <Tag>Tailwind</Tag>
        <Tag>Firebase</Tag>
        <Tag>.NET Core</Tag>
        <Tag>.C#</Tag>
        <Tag>Microsoft SQL Server</Tag>
      </ProjectCard>
      <div className='flex gap-10 mt-10 justify-center items-center flex-col'>
        <p className='text-center text-3xl md:text-5xl font-extrabold'>See other project</p>
        <PulsatingButton onClick={() => openInNewTab('https://github.com/stevenaruu?tab=repositories')}>
          Load more
        </PulsatingButton>
      </div>
    </Container>
  )
}

export default ProjectGroup 