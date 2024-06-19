import React from 'react';

function DotsIcon() {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 30 30"
      fill="ture"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={30} height={30} fill="url(#pattern0_400_622)" />
      <defs>
        <pattern
          id="pattern0_400_622"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_400_622" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_400_622"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default DotsIcon;
