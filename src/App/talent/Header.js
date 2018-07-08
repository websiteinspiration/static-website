import React from 'react'

// Utilities
import theme from '../../utils/style/theme'

// Local
import I18n from '../../shared/I18n'
import MainHeader from '../../shared/MainHeader'
import Button from '../../shared/Button'

class Header extends React.Component {
  state = { primaryHovered: false }

  render() {
    const { primaryHovered } = this.state

    return (
      <I18n ns="talent">
        {(t, { i18n }) => (
          <MainHeader
            bg="linear-gradient(-158deg, #5dc0f9 0%, #418fd9 75%)"
            navTextColor={theme.blue}
            title={t('headline')}
            desc={t('description')}
            mascotProps={{ happy: primaryHovered }}
            renderButtons={() => [
              <Button
                key={1}
                white={true}
                href="https://www.honeypot.io/users/sign_up"
                onMouseOver={this.mouseEntered}
                onMouseOut={this.mouseLeaved}
              >
                {t('Find-Me-a-Job')}
              </Button>,
              <Button
                key={2}
                white={true}
                linkStyle={true}
                to={`/${i18n.language}/tech-hiring`}
              >
                {t('Im-Hiring')}
              </Button>,
            ]}
          />
        )}
      </I18n>
    )
  }

  mouseEntered = () => this.setState({ primaryHovered: true })
  mouseLeaved = () => this.setState({ primaryHovered: false })
}

export default Header
