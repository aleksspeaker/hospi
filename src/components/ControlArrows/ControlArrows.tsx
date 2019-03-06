import './ControlArrows.scss';

interface IControlArrowsProps {
  classes?: string;
  onPrev?: any;
  onNext?: any;
}

const ControlArrows = ({classes, onPrev, onNext}: IControlArrowsProps) => {
  return (
    <div className={"Control-arrows " + classes}>
      <button onClick={onPrev} className="Control-arrows__left" />
      <button onClick={onNext} className="Control-arrows__right" />
    </div>
  );
};

export default ControlArrows;
