import React from 'react';

export const BulletProgress = () => {
  return (
    <svg className="Control-bullet__progress"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         width="38"
         height="38"
         viewBox="0 0 38 38">
      <defs>
        <path
          id="nlqea"
          // tslint:disable-next-line:max-line-length
          d="M625.999 4251.998c10.493 0 19 8.508 19 19 0 10.494-8.507 19-19 19-10.494 0-19-8.506-19-19 0-10.492 8.506-19 19-19z"/>
        <clipPath id="nlqeb">
          <use fill="#fff" xlinkHref="#nlqea"/>
        </clipPath>
      </defs>
      <g><g transform="translate(-607 -4252)">
        <use fill="transparent" xlinkHref="#nlqea"/>
        <use fill="#fff"
             fillOpacity="0" stroke="#ff6735"
             strokeMiterlimit="50"
             strokeWidth="4"
             clipPath="url(&quot;#nlqeb&quot;)"
             xlinkHref="#nlqea"/>
      </g></g>
    </svg>
  );
};
