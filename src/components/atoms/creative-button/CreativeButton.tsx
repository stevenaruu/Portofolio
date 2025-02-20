import styled from 'styled-components';

const CreativeButton = ({ title, content, onClick }: { title: string, content: string, onClick?: () => void }) => {
  return (
    <StyledWrapper title={title}>
      <div onClick={onClick} className="input__container cursor-pointer">
        <div className="shadow__input" />
        <div className='flex flex-col gap-5 w-full'>
          <p className='text-[#000] text-center text-xl font-bold'>{content}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ title: string }>`
  .input__container {
    position: relative;
    background: #f0f0f0;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    border: 4px solid #000;
    width: 100%;
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-style: preserve-3d;
    transform: rotateX(10deg) rotateY(-10deg);
    perspective: 1000px;
    box-shadow: 10px 10px 0 #000;
  }

  .input__container:hover {
    transform: rotateX(5deg) rotateY(1deg) scale(1.05);
    box-shadow: 25px 25px 0 -5px #7dd3fc, 25px 25px 0 0 #000;
  }

  .shadow__input {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transform: translateZ(-50px);
    background: linear-gradient(
      45deg,
      rgba(255, 107, 107, 0.4) 0%,
      rgba(255, 107, 107, 0.1) 100%
    );
    filter: blur(20px);
  }

  .input__container::before {
    content: "${(props) => props.title.toUpperCase()}";
    position: absolute;
    top: -15px;
    left: 20px;
    background: #7dd3fc;
    color: #000;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 14px;
    transform: translateZ(50px);
    z-index: 4;
    border: 2px solid #000;
  }
`;

export default CreativeButton;
