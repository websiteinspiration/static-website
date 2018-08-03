import React from 'react'

const MapPin = props => (
  <svg width={14} height={17} {...props}>
    <path
      d="M7 7.316a1.58 1.58 0 1 1 0-3.158 1.58 1.58 0 0 1 0 3.158zm0-3.79a2.211 2.211 0 1 0 .002 4.42A2.211 2.211 0 0 0 7 3.526zM1.632 6.918C1.632 4.006 4.04 1.632 7 1.632c2.96 0 5.368 2.374 5.368 5.286 0 2.274-3.524 6.796-5.368 8.918-1.844-2.122-5.368-6.644-5.368-8.918zM7 1C3.686 1 1 3.653 1 6.918c0 3.271 6 9.871 6 9.871s6-6.6 6-9.871C13 3.653 10.314 1 7 1z"
      fill="#FFF"
      stroke="#FFF"
      strokeWidth={0.4}
      fillRule="evenodd"
    />
  </svg>
)

export default MapPin
