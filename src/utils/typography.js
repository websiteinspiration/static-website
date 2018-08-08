import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Proxima Nova',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Proxima Nova',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'serif',
  ],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700'],
    },
  ],
})

export default typography
