import { ComponentProps, FC } from "react";
import styled from "styled-components";

interface ILineProps extends ComponentProps<"svg"> {}

const Line: FC<ILineProps> = (props) => (
  <svg
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
    width=""
    height=""
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Line_Xl">
        <path
          id="Vector"
          d="M12 21V3"
          stroke="#ffffff"
          strokeWidth="0.4800000000000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </g>
  </svg>
);

export const StyledLine = styled(Line)`
  width: 100%;
`;
