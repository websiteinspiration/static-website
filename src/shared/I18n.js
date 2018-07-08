import React from 'react'
import { I18n as I18next } from 'react-i18next'

// Utils
import i18n from '../utils/i18n'

const I18n = ({ ns, ...props }) => <I18next i18n={i18n} ns={ns} {...props} />

export default I18n
