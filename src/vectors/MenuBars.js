import React from 'react'

const MenuBars = props => (
  <svg viewBox="0 0 27 19" width={27} height={19} {...props}>
    <g fill="#FFF" fillRule="evenodd">
      <rect width={27} height={3} rx={1.5} />
      <rect y={8} width={27} height={3} rx={1.5} />
      <rect y={16} width={27} height={3} rx={1.5} />
    </g>
  </svg>
)

export default MenuBars
