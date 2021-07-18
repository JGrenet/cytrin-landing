import React from "react";

interface TheProductGridItemProps {
  title: string;
  content: string;
}

const TheProductGridItem = ({ title, content }: TheProductGridItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-3xl bg-yellow-light"></div>
      <div className="text-center text-base lg:text-2xl title mt-4">
        {title}
      </div>
      <p className="text-center text mt-2">{content}</p>
    </div>
  );
};

export default TheProductGridItem;
