import Particles from "../../atoms/Particles/Particles"
import FormGroup from "../../molecules/form-group/FormGroup"

const ContactSection = () => {
  return (
    <section id='contact' className='relative mt-20 bg-secondary'>
      <FormGroup />
      <div className="absolute z-10 top-0 h-full w-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </section>
  )
}

export default ContactSection