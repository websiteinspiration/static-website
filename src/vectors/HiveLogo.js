import React from 'react'

const HiveLogo = ({ ...props }) => (
  <svg
    width={90}
    height={30}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>Group 12</title>
    <defs>
      <filter
        x="-20%"
        y="-17.2%"
        width="140%"
        height="148.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.00413259971 0 0 0 0 0.0928862293 0 0 0 0 0.451450893 0 0 0 0.217702672 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path id="b" d="M0 .061h34.938v28.61H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g filter="url(#a)" transform="translate(4 2)">
        <mask id="c" fill="#fff">
          <use xlinkHref="#b" />
        </mask>
        <path
          d="M20.71 25.128h-.263c-2.043 0-4.086.001-6.13-.003-.084 0-.201-.015-.247-.07-.276-.335-.58-.657-.794-1.03-1.978-3.457-3.93-6.93-5.913-10.383-.415-.722-.415-1.362.004-2.08 1.097-1.874 2.156-3.772 3.23-5.661.034-.061.065-.126.11-.213-.75 0-1.469.011-2.188-.005-.361-.008-.59.14-.768.455a2984.34 2984.34 0 0 1-5.405 9.561c-.18.317-.178.587.002.904 1.273 2.23 2.536 4.467 3.8 6.702.541.958 1.083 1.915 1.617 2.876.16.288.38.44.705.425.053-.003.106 0 .159 0l10.653.001c.086 0 .172-.008.258-.013a.583.583 0 0 0 .482-.28c.23-.376.443-.762.688-1.186m.254-2.063v-.016h1.23c1.368.005 2.737 0 4.105.022.436.006.71-.162.926-.547 1.76-3.133 3.53-6.26 5.31-9.382.218-.381.21-.696-.003-1.07a2084.32 2084.32 0 0 1-5.332-9.44c-.198-.352-.453-.5-.847-.5-3.584.007-7.167.007-10.751 0-.377 0-.63.136-.819.479-.593 1.082-1.205 2.152-1.812 3.226-1.192 2.107-2.382 4.215-3.581 6.317-.18.316-.18.586 0 .903 1.805 3.177 3.603 6.359 5.396 9.543.186.331.43.471.803.469 1.792-.01 3.583-.004 5.375-.004m-7.045 5.603c-2.209 0-4.417-.002-6.626.002a.438.438 0 0 1-.36-.157 6.608 6.608 0 0 1-.862-1.205A2869.169 2869.169 0 0 0 .28 17.11c-.375-.655-.374-1.263 0-1.92C2.297 11.647 4.305 8.1 6.302 4.544c.37-.658.877-.976 1.626-.962 1.25.023 2.5.006 3.75.013.156.001.247-.042.327-.187.456-.828.925-1.65 1.387-2.474.239-.428.551-.758 1.049-.848.103-.019.21-.022.315-.022 4.16-.001 8.32 0 12.479-.003.545 0 .962.23 1.235.701.567.981 1.117 1.972 1.676 2.958 1.504 2.654 3.003 5.312 4.52 7.96.364.637.361 1.221-.004 1.86-2.016 3.526-4.013 7.065-6.032 10.592-.197.343-.49.63-.751.93-.045.052-.154.063-.233.064-1.462.003-2.923.006-4.385-.002-.17-.001-.256.057-.337.203-.446.803-.888 1.61-1.364 2.394-.196.322-.468.598-.72.88-.05.055-.168.064-.255.064-2.222.003-4.444.003-6.666.003"
          fill="#FFF"
          mask="url(#c)"
        />
        <path
          d="M14.359 5.7c.032-.073.052-.127.078-.178.3-.575.605-1.148.901-1.725.062-.122.135-.168.273-.168 1.46.005 2.921.009 4.382-.004.679-.006 1.16.275 1.496.873.933 1.663 1.88 3.318 2.826 4.973 1.07 1.873 2.137 3.749 3.227 5.611.367.628.374 1.2.004 1.828-.906 1.54-1.785 3.096-2.67 4.65-.078.138-.163.192-.323.19-.632-.01-1.263-.004-1.895-.004h-.23c.053-.095.088-.164.126-.23.962-1.677 1.92-3.356 2.89-5.027.195-.335.198-.628.005-.966a2783.68 2783.68 0 0 1-5.354-9.381c-.182-.32-.419-.454-.783-.451-1.573.013-3.145.007-4.717.008h-.236z"
          fill="#FFF"
        />
      </g>
      <text
        fontFamily="Proxima Nova"
        fontSize={22.275}
        letterSpacing={0.811}
        fill="#FFF"
        transform="translate(4 2)"
        className="nav-logo-text"
        fontWeight="bold"
      >
        <tspan x={39} y={24}>
          Hive
        </tspan>
      </text>
    </g>
  </svg>
)

export default HiveLogo
