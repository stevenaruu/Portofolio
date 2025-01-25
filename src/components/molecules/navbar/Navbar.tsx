import Label from '../../atoms/label/Label';
import Container from '../../container/Container';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <div className="font-bold py-5 flex justify-between w-full">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <Label text="STVN." />
          </motion.div>
          <motion.div
            className="flex gap-5"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <Label text="ABOUT ME" />
            <Label text="EDUCATIONS" />
            <Label text="EXPERIENCES" />
            <Label text="SKILLS" />
            <Label text="PROJECTS" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
