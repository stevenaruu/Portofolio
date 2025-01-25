import { useRef } from "react";
import VariableProximity from "../variable-proximity/VariableProximity";

const Title = ({ text }: { text: string }) => {
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <VariableProximity
        label={text}
        className={'variable-proximity-demo text-6xl md:text-7xl'}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff='linear'
      />
    </div>
    // <p className="font-extrabold text-6xl md:text-7xl">{text}</p>
  )
}

export default Title