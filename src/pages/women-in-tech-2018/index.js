import React from 'react'

// Local
import Header from '../../App/women-in-tech/Header'
import Container from '../../App/women-in-tech/Container'
import LangSwitch from '../../App/women-in-tech/LangSwitch'
import TextContent, { FlexWrapper } from '../../App/women-in-tech/TextContent'

export default ({ location }) => (
  <div>
    <Header />

    <article>
      <Container>
        <FlexWrapper>
          <LangSwitch location={location} />
          <TextContent>
            <p>
              Gender parity has been at the forefront of public, private and
              professional debate in the past several months, with events such
              as The Women’s March highlighting equal rights’ injustices around
              the globe. At Honeypot, we are committed to actively promoting
              women in tech. With the gender wage gap widely reported as
              affecting women across the world, we decided to research the
              specific role that gender parity plays in the technology
              landscape. In sharing this study, we aim to highlight the barriers
              and opportunities for women in the IT industry.
            </p>

            <p>
              The study focuses on 41 countries in the OECD and EU, and offers
              comparable data relating to both the tech industry and the wage
              gap. The data covers areas such as:
            </p>

            <ul>
              <li>
                <strong>Gender in the Overall Economy:</strong> factors such as
                percentage of women in work and the overall gender income
                parity.
              </li>
              <li>
                <strong>Women in Tech:</strong> as measured by the number of
                women in IT positions compared to the overall numbers of people
                in tech.
              </li>
              <li>
                <strong>Opportunities for Women in Tech:</strong> calculated by
                comparing the difference between the percentage share of women
                in the general workforce, and the percentage of women in the
                technology sector. In addition, the study took into account the
                percentage of female STEM graduates.
              </li>
              <li>
                <strong>Tech Wage Gap:</strong> difference in gender wage gap
                between women working in the tech industry and the overall
                workforce at large.
              </li>
              <li>
                <strong>Female Career Progression:</strong> as judged by the
                percentage of women in managerial and ministerial positions.
              </li>
            </ul>

            <p>
              Finally, to pinpoint any potential barriers which might hinder a
              woman’s progression and to highlight the best opportunities for
              women, we looked at the Gender Inequality Index. This analyses
              women’s reproductive health, empowerment and labor market
              participation to conclude overall parity. To determine if equality
              has increased or decreased in recent history, we then calculated
              the difference between the gender pay gap five years ago, as
              compared to today’s wage gap.
            </p>

            <p>
              {' '}
              &nbsp;&nbsp;&nbsp;&nbsp; “Gender parity in the workplace is not
              just an ethical or moral issue, but also an economic one: McKinsey
              found that $12 trillion could be added to global GDP by 2025 by
              advancing women’s equality. As tech recruitment specialists, we
              are often confronted with the gender imbalances of the industry,
              which are fully exposed in this study.” says Emma Tracey,
              Co-Founder at Honeypot. “The results reveal the countries which
              have the most to offer women looking to progress in the tech
              industry, with Portugal, The United States and Latvia highlighted
              as the top three nations that have taken positive steps towards
              gender parity in the technology field in terms of fairer wages.
              However, with the proportion of female tech workers remaining
              under 30% across the board, we hope that this study will enrich
              the conversation concerning equality in this industry and inspire
              more women to seek out opportunities in tech.”
            </p>

            <p>
              The table below is ranked in order to show which countries offer
              the best opportunity for women in tech by comparing the difference
              between the overall gender pay gap and the pay gap in the
              technology industry. A positive number demonstrates that income
              disparity in tech is less than the overall average in that
              country, indicating that female tech workers have been afforded
              fairer wages.
            </p>
          </TextContent>
        </FlexWrapper>
      </Container>
    </article>
  </div>
)
