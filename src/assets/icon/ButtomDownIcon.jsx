import React from 'react';

function ButtomDownIcon(props) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={60} height={60} fill="url(#pattern0_325_293)" />
      <defs>
        <pattern
          id="pattern0_325_293"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_325_293" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_325_293"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default ButtomDownIcon;