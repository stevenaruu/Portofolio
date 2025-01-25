import Container from '../../container/Container';
import Title from '../../atoms/title/Title';
import GitHubCalendar from 'react-github-calendar';

const Skills = () => {
  return (
    <Container>
      <Title text="Skills." />
      <div className='mt-5 justify-center flex h-44 gap-2 flex-wrap lg:flex-nowrap'>
        <img className='w-full lg:w-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=stevenaruu&layout=compact&langs_count=20&theme=dark" />
        <img className='w-full lg:w-auto' src="https://github-readme-stats.vercel.app/api?username=stevenaruu&rank_icon=github&theme=dark" />
        <GitHubCalendar blockSize={12} colorScheme='dark' username='stevenaruu' />
      </div>

    </Container>
  );
};

export default Skills;
