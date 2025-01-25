import AboutSection from "../../organisms/about-section/AboutSection"
import EducationSection from "../../organisms/education-section/EducationSection"
import ExperienceSection from "../../organisms/experience-section/ExperienceSection"
import ProfileSection from "../../organisms/profile-section/ProfileSection"
import SkillSection from "../../organisms/skill-section/SkillSection"

const HomeLayout = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
    </>
  )
}

export default HomeLayout