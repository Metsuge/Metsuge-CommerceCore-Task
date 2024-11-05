
import EndText from "./EndText";
import Form from "./Form";

interface Props {
  isMobile: boolean
  onFormDivPositionChange: (position: number) => void;
}

export default function LeftSide({ isMobile, onFormDivPositionChange }: Props) {

  return (
    <div className="">

      <Form onFormDivPositionChange={onFormDivPositionChange} />
      {isMobile && <EndText />}

    </div>
  );
}
