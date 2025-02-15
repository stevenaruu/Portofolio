interface LabelProps {
  text: string;
  onClick?: () => void;
}

const Label = ({ text, onClick }: LabelProps) => {
  return (
    <div onClick={onClick} className='text-white text-lg cursor-pointer hover:text-secondary transition duration-300 ease-in-out transform hover:scale-105'>
      {text}
    </div>
  )
}

export default Label