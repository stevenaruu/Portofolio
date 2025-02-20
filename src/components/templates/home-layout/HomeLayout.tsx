import AboutSection from "../../organisms/about-section/AboutSection"
import ContactSection from "../../organisms/contact-section/ContactSection"
import EducationSection from "../../organisms/education-section/EducationSection"
import ExperienceSection from "../../organisms/experience-section/ExperienceSection"
import ProfileSection from "../../organisms/profile-section/ProfileSection"
import ProjectSection from "../../organisms/project-section/ProjectSection"
import SkillSection from "../../organisms/skill-section/SkillSection"

const HomeLayout = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default HomeLayout