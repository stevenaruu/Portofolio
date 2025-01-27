import { CentralizedSkills } from '../../molecules/centralized-skills/CentralizedSkills'
import Skills from '../../molecules/skills/Skills'

const SkillSection = () => {
  return (
    <section id='skill' className='mt-20'>
      <Skills />
      <CentralizedSkills />
    </section>
  )
}

export default SkillSection