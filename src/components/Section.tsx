import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <div className="mt-16 flex items-center h-7">
        <div className="bg-[#8A33FD] w-1 h-full rounded-full"></div>
        <h1 className="text-2xl pl-2 font-semibold">{title}</h1>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Section;
