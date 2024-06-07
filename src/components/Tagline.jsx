import brackets from "../assets/svg/Brackets";

const Tagline = ({ ClassName, children }) => {
  return (
    <div
      className={`tagline flex items-center md:justify-center ${
        ClassName || ""
      }}`}
    >
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
