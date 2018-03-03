import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../../utils/style/media'

// Icons
import { downArrow } from './icons'

// Styles
const borders = css`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
`

// Components
export const TableScrollWrapper = styled.div`
  width: 100%;
  overflow: auto;

  ${mobile(css`
    height: 400px;
    overflow: scroll;
  `)};
`

export const Table = styled.table`
  position: relative;
  min-width: 1400px;
  table-layout: fixed;
  border-collapse: collapse;

  tbody tr:nth-child(2n + 1) td,
  tbody tr:nth-child(2n + 1) th {
    background: ${p => p.theme.rowBg};
  }

  tbody tr:nth-child(2n) td,
  tbody tr:nth-child(2n) th {
    background: white;
  }
`

// Wide Group Heads (Text-only)
export const GroupHeadCell = styled.th`
  height: ${p => p.theme.groupHeadHeight}px;
  font-size: 13px;
  line-height: 1.3;
  vertical-align: middle;
  text-align: center;
  color: white;
  background: ${p => p.bg || `white`};
  border-right: 1px solid white;
  border-bottom: none;
  z-index: ${p => p.theme.topHeadersZIndex};

  ${mobile(css`
    position: sticky;
    top: 0;

    ${p =>
      p.topLeftCorner
        ? css`
            width: 180px;
            left: 0;
            z-index: ${p => p.theme.topLeftCornerZIndex};
            background: white;
          `
        : null};
  `)};
`

// Number
export const NumberColumn = styled.col`
  width: ${p => p.theme.numberWidth}px;
`
export const NumberCell = styled.td`
  text-align: center;
  vertical-align: bottom;
  padding-right: 0;
  padding-left: 0;

  ${borders};

  ${mobile(css`
    position: sticky;
    left: 0;
    z-index: ${p => p.theme.leftHeadersZIndex};
  `)};
`
export const NumberHeadCell = NumberCell.withComponent('th').extend`
  ${mobile(css`
    top: ${p => p.theme.groupHeadHeight}px;
    z-index: ${p => p.theme.topLeftCornerZIndex};
    background: white;
  `)};
`

// Country
export const CountryColumn = styled.col`
  width: ${p => p.theme.countryWidth}px;
`
export const CountryCell = styled.td`
  text-align: left;
  vertical-align: bottom;

  ${borders};

  ${mobile(css`
    position: sticky;
    left: ${p => p.theme.numberWidth}px;
    z-index: ${p => p.theme.leftHeadersZIndex};
  `)};
`
export const CountryHeadCell = CountryCell.withComponent('th').extend`
  ${mobile(css`
    top: ${p => p.theme.groupHeadHeight}px;
    z-index: ${p => p.theme.topLeftCornerZIndex};
    background: white;
  `)};
`

// Icon Head Cell
export const IconHeadCell = styled.th`
  width: auto;
  height: ${p => p.theme.iconHeadHeight}px;
  padding: 0 5px 20px 5px; /* padding for bottom arrow */
  position: relative;
  vertical-align: middle;
  text-align: center;
  background: ${p => p.bg || `white`};

  ${borders};

  &:after {
    --width: 14px;
    content: '';
    width: var(--width);
    height: 7px;
    position: absolute;
    bottom: 11px;
    left: 50%;
    margin-left: calc(-1 * var(--width) / 2);
    background: url(${downArrow}) center no-repeat;
  }

  img {
    vertical-align: middle;
    margin: 0;
  }

  ${p =>
    p.light
      ? css`
          svg {
            fill: white;
            stroke: white;
          }
          &:after {
            filter: brightness(1) invert(1);
          }
        `
      : null};

  ${mobile(css`
    position: sticky;
    top: ${p => p.theme.groupHeadHeight}px;
  `)};
`

export const BodyCell = styled.td`
  width: auto;
  text-align: center;
  padding: 0 5px;
  letter-spacing: -0.5px;
  word-break: keep-all;
  white-space: nowrap;

  ${borders};
`
