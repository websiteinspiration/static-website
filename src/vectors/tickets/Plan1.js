import React from 'react'

const Plan1 = props => (
  <svg
    width={231}
    height={247}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient x1="50%" y1="100%" x2="50%" y2="4.657%" id="c">
        <stop stopColor="#0C6AC9" offset="0%" />
        <stop stopColor="#4EA3FB" offset="100%" />
      </linearGradient>
      <path
        d="M900 287.015V328a2 2 0 0 1-2 2H687a2 2 0 0 1-2-2v-41.43a7.39 7.39 0 0 0 3.5.877c4.142 0 7.5-3.402 7.5-7.598 0-4.197-3.358-7.599-7.5-7.599a7.39 7.39 0 0 0-3.5.876V101a2 2 0 0 1 2-2h21c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h10c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h10c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h10c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h10c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h10c0 5.596 4.477 10.132 10 10.132s10-4.536 10-10.132h20a2 2 0 0 1 2 2v171.682a7.4 7.4 0 0 0-2.5-.432c-4.142 0-7.5 3.402-7.5 7.599 0 4.196 3.358 7.598 7.5 7.598a7.4 7.4 0 0 0 2.5-.432z"
        id="b"
      />
      <filter
        x="-6%"
        y="-4.8%"
        width="112.1%"
        height="111.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={4}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204993207 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(-677 -93)" fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#a)" xlinkHref="#b" />
      <use fill="url(#c)" xlinkHref="#b" />
    </g>
  </svg>
)

export default Plan1
