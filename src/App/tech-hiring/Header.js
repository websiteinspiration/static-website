import React from 'react'

// Local
import MainHeader from '../../shared/MainHeader'
import Button from '../../shared/Button'
import I18n from '../../shared/I18n'

const Header = () => (
  <I18n ns="employer">
    {t => (
      <MainHeader
        bg="linear-gradient(-170deg, #FF5A91 0%, #DB0F53 62%)"
        navTextColor="#EE1B6F"
        title={t('headline')}
        desc={t('description')}
        renderButtons={() => [
          <Button key={1} white={true} href="#plans" textColor="#EE1B6F">
            {t('Start-Hiring')}
          </Button>,
          <Button key={2} white={true} linkStyle={true} to="/">
            {t('Im-Looking-for-a-Job')}
          </Button>,
        ]}
      />
    )}
  </I18n>
)

export default Header
