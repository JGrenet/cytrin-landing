import React from "react";

type FooterItem = {
  label: string;
  link: string;
};

interface FooterColProps {
  title: string;
  items: FooterItem[];
}

const FooterCol = ({ title, items }: FooterColProps) => {
  return (
    <div className="mt-8 first:mt-0 lg:mt-0">
      <h6 className="text-center lg:text-left text-sm lg:text-base title mt-2.5 lg:mt-0">
        {title}
      </h6>
      <div>
        {items.map((item) => (
          <a
            className="text-center lg:text-left block text-sm lg:text-base font-normal text-darkblue mt-3 first:mt-5 lg:mt-5 lg:first:mt-7"
            href={item.link}
            target="_blank"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterCol;
