import { useState } from 'react';
import Label from '../../atoms/label/Label';
import Container from '../../container/Container';
import { motion, AnimatePresence } from 'framer-motion';
import hamburger from '../../../assets/icon/hamburger.svg'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsDropdownOpen(false); // Close dropdown if in mobile view
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="font-bold py-5 flex justify-between items-center w-full">
          {/* Logo */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <Label text="STVN." onClick={() => handleScroll("home")} />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex gap-5"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <Label text="ABOUT ME" onClick={() => handleScroll("about-me")} />
            <Label text="EDUCATIONS" onClick={() => handleScroll("education")} />
            <Label text="EXPERIENCES" onClick={() => handleScroll("experience")} />
            <Label text="SKILLS" onClick={() => handleScroll("skill")} />
            <Label text="PROJECTS" onClick={() => handleScroll("project")} />
            <Label text="CONTACT" onClick={() => handleScroll("contact")} />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={toggleDropdown}
          >
            <img className='size-7' src={hamburger} alt="hamburger-button" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="md:hidden fixed top-0 right-0 h-full w-4/6 font-bold bg-zinc-900 p-4 space-y-5 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
              <motion.button
                className="absolute top-4 right-4 text-2xl font-bold"
                onClick={toggleDropdown}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              <Label text="ABOUT ME" onClick={() => handleScroll("about-me")} />
              <Label text="EDUCATIONS" onClick={() => handleScroll("education")} />
              <Label text="EXPERIENCES" onClick={() => handleScroll("experience")} />
              <Label text="SKILLS" onClick={() => handleScroll("skill")} />
              <Label text="PROJECTS" onClick={() => handleScroll("project")} />
              <Label text="CONTACT" onClick={() => handleScroll("contact")} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Navbar;