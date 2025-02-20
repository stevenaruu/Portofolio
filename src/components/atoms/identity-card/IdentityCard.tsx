import styled from 'styled-components';
import profile from '../../../assets/images/profile.jpg'
import Github from '../../../assets/icon/github';
import LinkedIn from '../../../assets/icon/linkedin';
import Email from '../../../assets/icon/email';
import Instagram from '../../../assets/icon/instagram';
import { openInNewTab } from '../../../lib/utils';

const IdentityCard = () => {
  return (
    <StyledWrapper>
      <div className="input__container">
        <div className="shadow__input" />
        <div className='flex flex-col gap-5 w-full'>
          <button className="input__button__shadow">
            <img src={profile} alt="" />
          </button>
          <p className='text-[#000] text-center text-xl'>SOFTWARE ENGINEER</p>
          <div className='flex gap-4 justify-center items-center'>
            <button onClick={() => openInNewTab('https://github.com/stevenaruu')} className="input__button__shadow p-1">
              <Github height={25} width={25} fill='#000' />
            </button>
            <button onClick={() => openInNewTab('https://www.linkedin.com/in/stevenaruu/')} className="input__button__shadow p-1">
              <LinkedIn height={25} width={25} fill='#000' />
            </button>
            <button onClick={() => openInNewTab('mailto:stvnhd164@gmail.com')} className="input__button__shadow p-1">
              <Email height={25} width={25} fill='#000' />
            </button>
            <button onClick={() => openInNewTab('https://www.instagram.com/stvnism/')} className="input__button__shadow p-1">
              <Instagram height={25} width={25} fill='#000' />
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
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

  .input__button__shadow {
    cursor: pointer;
    border: 3px solid #000;
    background: #7dd3fc;
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(20px);
    position: relative;
    z-index: 20;
    font-weight: bold;
    text-transform: uppercase;
  }

  .input__button__shadow:hover {
    background: #7dd3fc;
    transform: translateZ(10px) translateX(-5px) translateY(-5px);
    box-shadow: 5px 5px 0 0 #000;
  }

  .input__container::before {
    content: "STEVEN";
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

export default IdentityCard;
