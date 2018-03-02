import React from 'react'

// Local
import Header from '../../App/women-in-tech/Header'
import Container from '../../App/women-in-tech/Container'
import LangSwitch, { Placeholder } from '../../App/women-in-tech/LangSwitch'
import TextContent, { FlexWrapper } from '../../App/women-in-tech/TextContent'
import DataTable from '../../App/women-in-tech/DataTable'
import Footer from '../../App/women-in-tech/Footer'

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

      <DataTable />

      <Container>
        <FlexWrapper>
          <Placeholder />
          <TextContent>
            <h2>METHODOLOGY</h2>
            <p>
              This study focuses on 41 countries which are part of the OECD and
              the EU, due to comparably collected data relating to the
              technology industry and the gender wage gap.
            </p>

            <h3>Criteria</h3>
            <ul>
              <li>
                <strong>Total Workforce (Millions):</strong> Annual labour
                force, Persons, in Millions. Source: OECD Statistics, Eurostat.
              </li>
              <li>
                <strong>Female Workforce (Millions):</strong> Annual labour
                force, Persons, in Millions, Women.{' '}
                <em>Source: OECD Statistics, Eurostat.</em>
              </li>
              <li>
                <strong>% Women:</strong> The number of women in the labour
                force, depicted as a percentage.
              </li>
              <li>
                <strong>
                  % Women Legislators, Senior Officials, and Managers:
                </strong>{' '}
                The percentage of women in senior or managerial positions, with
                a higher percentage indicating a higher level of parity in terms
                of career progression.{' '}
                <strong>
                  Taken from the World Economic Forum Report: Female, male
                  legislators, senior officials and managers (%): Major Group 1
                  of the International Standard Classification of Occupations
                  (ISCO-08).
                </strong>{' '}
                <em>
                  Source: ILO, ILOSTAT database, employment by occupation, 2016,
                  or latest available data.
                </em>
              </li>

              <li>
                <strong>% Women in Parliament:</strong> World Economic Forum
                Report: Percentage of women in the lower or single house.
                <strong>
                  Source: the Inter-Parliamentary Union, Women in National
                  Parliaments. Data reflects information provided by National
                  Parliaments by 1 September 2016.
                </strong>
              </li>

              <li>
                <strong>% Women in Ministerial Positions:</strong> World
                Economic Forum Report: Percentage of women holding ministerial
                portfolios, such as Prime Minister, and Minister of Finance.
                Some overlap between ministers and heads of state that also hold
                a ministerial portfolio may occur.{' '}
                <strong>
                  Source: The Inter-Parliamentary Union, Women in Politics 2015,
                  reflecting appointments up to 1 January 2015. Data is updated
                  every two years.
                </strong>
              </li>

              <li>
                <strong>
                  Overall Workforce Average Wage (US$), Women's Average Wage
                  (US$), Gender Pay Gap (%):
                </strong>{' '}
                The average wage, across all professions, for both men and women
                and the percentage difference between them, known as the Gender
                Pay Gap.{' '}
                <em>
                  Sources: OECD, Eurostat. Average of both sources. Eurostat:
                  difference between the average gross hourly earnings of men
                  and women expressed as a percentage of the average gross
                  hourly earnings of men. OECD: difference between median
                  earnings of men and women relative to median earnings of men.
                  Data refers to full-time employees and to self-employed
                  workers.
                </em>
              </li>

              <li>
                <strong> Tech Workforce (Thousands):</strong> ICT Persons,
                Thousands. Sub-major group 25 of the International Standard
                Classification of Occupations (ISCO-08). Professionals:
                Information and communications technology professionals. By
                definition, the information and communication sector has been
                created, combining activities involving production and
                distribution of information and cultural products, provision of
                the means to transmit or distribute these products, as well as
                data or communications, information technology activities and
                the processing of data and other information service activities.
                The main components of this section are publishing activities,
                including software publishing (division 58), motion picture and
                sound recording activities (division 59), radio and TV
                broadcasting and programming activities (division 60),
                telecommunications activities (division 61) and information
                technology activities (division 62) and other information
                service activities (division 63). <em>Source: Eurostat.</em>
              </li>

              <li>
                <strong>% Workforce in Tech:</strong> The percentage of people
                (of all genders) working in the information and communication
                technology sector out of the overall labour force.
              </li>

              <li>
                <strong>Female Tech Workforce (Thousands):</strong> Number of
                women in the information and communication technology sector out
                of the total labour force.
              </li>

              <li>
                <strong>% Women in Tech:</strong> The percentage of women
                working in the information and communication technology sector
                out of the total labour force working in ICT.
              </li>

              <li>
                <strong>Female STEM Graduates (%):</strong> The percentage of
                STEM graduates who are female, taken from the World Economic
                Forum Report.{' '}
                <em>
                  Source: UNESCO’s Institute for Statistics database (accessed
                  September 2016). Measures the percentage of female and male
                  graduates in ISCED 5-8 programmes from Science, Engineering,
                  Manufacturing and Construction (% of total number of
                  graduates).
                </em>
              </li>

              <li>
                <strong>Tech Average Wage (US$):</strong> Average annual wage in
                ICT (as defined above). Annual in USD PPP (Purchasing power
                parities), adjusted to OECD PPP wage level and EU PPP wage
                level. <em>Sources: OECD, Eurostat, local reports.</em>
              </li>

              <li>
                <strong>Tech Average Wage for Women (US$):</strong> Average
                annual wage in ICT (as defined above), women, in USD PPP
                (Purchasing power parities), taking into account the wage gap in
                ICT and average wage in ICT.{' '}
                <em> Sources: OECD, Eurostat, local reports.</em>
              </li>

              <li>
                <strong>Gender Pay Gap in Tech (%):</strong> Wage gap in the ICT
                sector (as defined above).{' '}
                <em>Sources: Eurostat, OECD, local reports.</em>
              </li>

              <li>
                <strong>Gender Inequality Index:</strong> A score of 0 =
                equality, the higher the score, the worse the inequality. The
                closer the score is to 0, the more equal a country is. Gender
                inequality Index (2015).{' '}
                <em>Source: Human Development Report.</em>
              </li>

              <li>
                <strong>Gender Pay Gap 5 Years Ago:</strong> Gender pay gap (as
                defined above), data from 2010. In the case of Chile: 2011 as
                2010 was not available.
              </li>

              <li>
                <strong>
                  Comparison of Gender Pay Gap From 5 Years Ago To Today:
                </strong>{' '}
                Difference between the current wage gap and the wage gap 5 years
                ago. A positive number implies a positive increase, I.E. the
                gender pay gap has increased. A negative number implies that the
                gender pay gap has decreased.
              </li>
            </ul>
          </TextContent>
        </FlexWrapper>
      </Container>
    </article>

    <Footer />
  </div>
)
