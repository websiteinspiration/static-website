import React from 'react'
import { Provider } from 'unstated'

// Local
import Header from '../../App/women-in-tech/Header'
import Container from '../../App/women-in-tech/Container'
import LangSwitch, { Placeholder } from '../../App/women-in-tech/LangSwitch'
import TextContent, { FlexWrapper } from '../../App/women-in-tech/TextContent'
import DataTable from '../../App/women-in-tech/DataTable'
import Footer from '../../App/women-in-tech/Footer'
import LittleRectRow from '../../App/women-in-tech/LittleRectRow'

export default () => (
  <Provider>
    <div>
      <Header title="2018 Vrouwen in Tech Index" />

      <article>
        <Container>
          <FlexWrapper>
            <LangSwitch />
            <TextContent>
              <p>
                Gendergelijkheid heeft de afgelopen maanden het publieke,
                persoonlijke en professionele debat gedomineerd. Evenementen
                zoals de Women’s March hebben de wereldwijde schending van
                gelijke rechten onder de aandacht gebracht. Bij Honeypot streven
                we ernaar een belangrijke bijdrage te leveren aan de actieve
                promotie van vrouwen in de techwereld. Met de beschikbare kennis
                over inkomensongelijkheid en de invloed daarvan op vrouwen
                overal ter wereld in ons achterhoofd, hebben we de specifieke
                rol die gendergelijkheid binnen de techwereld speelt,
                onderzocht. We hopen daarmee inzicht te krijgen in de obstakels
                en mogelijkheden voor vrouwen in de IT-industrie.
              </p>

              <p>
                De studie neemt 41 OECD- en EU-landen als uitgangspunt en
                presenteert vergelijkbare data die betrekking hebben op zowel de
                techindustrie als de inkomensongelijkheid. Factoren die zijn
                meegenomen in de studie zijn onder andere:
              </p>

              <ul>
                <li>
                  <strong>Gender in de Totale Economie:</strong> factoren zoals
                  het percentage vrouwen dat werkt en de overall
                  inkomensgelijkheid tussen mannen en vrouwen.
                </li>
                <li>
                  <strong>Vrouwen in Tech:</strong> het aantal vrouwen met een
                  techfunctie vergeleken met het totale aantal mensen met een
                  techfunctie.
                </li>
                <li>
                  <strong>Kansen voor Vrouwen in Tech:</strong> het verschil
                  tussen het procentuele aandeel aan vrouwen in de algemene
                  beroepsbevolking en het percentage vrouwen in de techsector.
                  De studie houdt bovendien rekening met het percentage
                  vrouwelijke STEM-afgestudeerden.
                </li>
                <li>
                  <strong>Tech Inkomensongelijkheid:</strong> het verschil in
                  inkomensongelijkheid tussen vrouwen in de techindustrie en de
                  algemene beroepsbevolking.
                </li>
                <li>
                  <strong>Carrièreontwikkeling Vrouwen:</strong> het percentage
                  vrouwen met een management of ministeriële positie.
                </li>
              </ul>

              <p>
                Om obstakels te herkennen die de carrièreontwikkeling van
                vrouwen negatief kunnen beïnvloeden en om de beste kansen voor
                vrouwen te identificeren, hebben we bovendien de Gender
                Inequality Index meegenomen. Deze index analyseert de
                reproductieve gezondheid, empowerment en
                arbeidsmarktparticipatie van vrouwen om te komen tot een overall
                gelijkheidsscore. Om te bepalen of de gelijkheid de afgelopen
                tijd is toe- of afgenomen, hebben we de meest recente
                beschikbare gegevens over inkomensongelijkheid vergeleken met de
                inkomensongelijkheid van vijf jaar geleden.
              </p>

              <p>
                “Met een overall inkomensverschil tussen mannen en vrouwen van
                16,1% is het in Nederland beter gesteld met de economische
                gelijkheid dan in Duitsland, het VK en de VS”, zegt Emma Tracey,
                medeoprichtster van Honeypot. “Daar staat tegenover dat binnen
                de techindustrie maar 15,56% vrouw is. Nederland heeft met 18,7
                % het op zes na laagste percentage vrouwelijke
                STEM-afstudeerders, wat aangeeft dat de ongelijkheid binnen de
                techindustrie op onderwijsniveau aangepakt moet worden om de
                gelijkheid voor de volgende generaties te verbeteren. De
                regering kan daarbij een voorbeeld nemen aan Amerikaanse
                programma’s zoals ‘Girls Who Code’, die vrouwen al op jonge
                leeftijd inspireren en leren programmeren.”
              </p>

              <p>
                Onderstaande tabel laat zien welke landen de beste mogelijkheden
                bieden voor vrouwen in tech. De overall inkomensongelijkheid
                tussen mannen en vrouwen is daarvoor vergeleken met de
                inkomensongelijkheid tussen mannen en vrouwen in de
                techindustrie. Een positieve waarde geeft aan dat de
                inkomensongelijkheid in de techindustrie kleiner is dan het
                overall gemiddelde in het betreffende land. Oftewel: vrouwen in
                tech krijgen er beter betaald.
              </p>
            </TextContent>
          </FlexWrapper>
          <LittleRectRow style={{ paddingTop: 20 }} />
        </Container>

        <div style={{ marginTop: 30 }}>
          <DataTable currency="€" />
        </div>

        <Container>
          <LittleRectRow style={{ paddingBottom: 20 }} />
          <FlexWrapper>
            <Placeholder />
            <TextContent>
              <h2>METHODE</h2>
              <p>
                Deze studie neemt 41 landen in beschouwing die onderdeel
                uitmaken van de OECD en de EU. De data zijn vergelijkbaar tussen
                de landen en hebben betrekking op de techindustrie en de
                inkomensverschillen tussen mannen en vrouwen.
              </p>

              <h3>Criteria</h3>
              <ul>
                <li>
                  <strong>Totale Beroepsbevolking (Miljoenen):</strong>{' '}
                  Jaarlijkse beroepsbevolking, Personen, in Miljoenen. Bron:
                  OECD Statistics, Eurostat.
                </li>
                <li>
                  <strong>Vrouwelijke Beroepsbevolking (Miljoenen):</strong>{' '}
                  Jaarlijkse beroepsbevolking, Personen, in Miljoenen, Vrouwen.
                  Bron: OECD Statistics, Eurostat.
                </li>
                <li>
                  <strong>% Vrouwen:</strong> Het aantal vrouwen binnen de
                  beroepsbevolking, procentueel weergegeven.
                </li>
                <li>
                  <strong>
                    % Vrouwelijke Wetgevers, Hoge Ambtenaren en Managers:
                  </strong>{' '}
                  Het percentage vrouwen met een senior of managementfunctie,
                  waarbij een hoger percentage staat voor een hogere mate van
                  gelijkheid wat betreft carrièreontwikkeling. Uit het World
                  Economic Forum Report: Vrouwelijke, mannelijke wetgevers, hoge
                  ambtenaren en managers (%): Hoofdgroep 1 van de International
                  Standard Classification of Occupations (ISCO-08). Bron: ILO,
                  ILOSTAT database, employment by occupation, 2016, of meest
                  recente data.
                </li>
                <li>
                  <strong>
                    % Vrouwen in het Parlement: World Economic Forum Report:
                  </strong>{' '}
                  Percentage vrouwen in de Tweede of Eerste Kamer. Bron:
                  Inter-Parliamentary Union, Women in National Parliaments. Data
                  geven de informatie weer zoals opgegeven door de nationale
                  parlementen voor 1 september 2016.
                </li>
                <li>
                  <strong>% Vrouwen met Ministeriële Posities:</strong> World
                  Economic Forum Report: Percentage vrouwen met een ministerieel
                  portfolio, zoals minister-president en minister van financiën.
                  In sommige gevallen kan er een overlap zijn tussen ministers
                  en staatshoofden die ook een ministerieel portfolio hebben.
                  Bron: The Inter-Parliamentary Union, Women in Politics 2015,
                  uitgaande van posities tot en met 1 januari 2015. Data worden
                  alle twee jaar geüpdatet.
                </li>
                <li>
                  <strong>
                    Totale Beroepsbevolking Gemiddeld Inkomen (€), Gemiddeld
                    Inkomen Vrouwen (€), Inkomensongelijkheid Mannen en Vrouwen
                    (%):
                  </strong>{' '}
                  De inkomensongelijkheid tussen mannen en vrouwen is het
                  verschil in gemiddeld inkomen over alle beroepen tussen mannen
                  en vrouwen, uitgedrukt in percentage(s). Bron: OECD, Eurostat.
                  Gemiddelde van beide bronnen. Eurostat: verschil tussen het
                  gemiddelde bruto-uurloon van mannen en vrouwen uitgedrukt als
                  percentage van het gemiddelde bruto-uurloon van mannen. OECD:
                  verschil tussen het mediane inkomen van mannen en vrouwen
                  vergeleken met het mediane inkomen van mannen. Data hebben
                  betrekking op werknemers die voltijd werken en op
                  zelfstandigen.
                </li>
                <li>
                  <strong>Tech Beroepsbevolking (x 1.000):</strong> IT Personen,
                  Duizenden. Sub-hoofdgroep 25 van de International Standard
                  Classification of Occupations (ISCO-08). Professionals:
                  Informatie- en communicatietechnologie professionals. De
                  informatie- en communicatiesector is samengesteld uit een
                  combinatie van activiteiten rondom de productie en distributie
                  van informatie en culturele producten, het verschaffen van de
                  middelen om deze producten door te geven of te distribueren;
                  evenals data of communicatie, informatietechnologie
                  activiteiten en de verwerking van data en andere
                  informatievoorziening activiteiten. De hoofdcomponenten van
                  deze sectie zijn uitgeefactiviteiten, waaronder de publicatie
                  van software (divisie 58), activiteiten op het gebied van
                  speelfilms en geluidsopnames (divisie 59), radio- en
                  televisie-uitzendingen en programmeer activiteiten (divisie
                  60), telecommunicatie activiteiten (divisie 61),
                  informatietechnologie activiteiten (divisie 62) en andere
                  informatievoorziening activiteiten (divisie 63). Bron:
                  Eurostat.
                </li>
                <li>
                  <strong>% Beroepsbevolking in Tech:</strong> Het aantal mensen
                  (mannen en vrouwen) dat werkt in de informatie- en
                  communicatietechnologie sector, als percentage van de totale
                  beroepsbevolking.
                </li>
                <li>
                  <strong>Vrouwelijke Tech Beroepsbevolking (x 1.000):</strong>{' '}
                  Het aantal vrouwen dat werkt in de informatie- en
                  communicatietechnologie sector, als percentage van de totale
                  beroepsbevolking.
                </li>
                <li>
                  <strong>% Vrouwen in Tech:</strong> Het aantal vrouwen dat
                  werkt in de informatie- en communicatietechnologie sector, als
                  percentage van de totale beroepsbevolking werkzaam binnen de
                  IT.
                </li>
                <li>
                  <strong>Vrouwelijke STEM-Afgestudeerden (%):</strong> Het
                  percentage vrouwelijke STEM-afgestudeerden, overgenomen uit
                  het World Economic Forum Report. Bron: UNESCO’s Institute for
                  Statistics database (bekeken in september 2016). Meet het
                  percentage mannelijke en vrouwelijke afgestudeerden in de
                  ISCED 5-8 programma’s die vallen onder Wetenschap,
                  Technologie, Ingenieurswetenschap en Wiskunde (% van totaal
                  aantal afgestudeerden).
                </li>
                <li>
                  <strong>Tech Gemiddeld Inkomen (€):</strong> Gemiddeld
                  jaarinkomen binnen de IT (zoals boven gedefinieerd). Jaarlijks
                  in EUR KKP (koopkrachtpariteiten), gecorrigeerd voor OECD KKP
                  inkomenspeil en EU KKP inkomenspeil. Bronnen: OECD, Eurostat,
                  lokale rapporten.
                </li>
                <li>
                  <strong>Tech Gemiddeld Inkomen voor Vrouwen (€):</strong>{' '}
                  Gemiddeld jaarinkomen binnen de IT (zoals boven gedefinieerd),
                  vrouwen, in EUR KKP (koopkrachtpariteiten), gecorrigeerd voor
                  de inkomensongelijkheid binnen de IT en het gemiddelde inkomen
                  binnen de IT. Bronnen: OECD, Eurostat, lokale rapporten.
                </li>
                <li>
                  <strong>
                    Inkomensongelijkheid tussen Mannen en Vrouwen in Tech (%):
                  </strong>{' '}
                  Inkomensongelijkheid in de IT-sector (zoals boven
                  gedefinieerd). Bronnen: OECD, Eurostat, lokale rapporten.
                </li>
                <li>
                  <strong>
                    % Verschil in Overall Inkomensongelijkheid en
                    Inkomensongelijkheid in Tech:
                  </strong>{' '}
                  Het percentage verschil tussen de inkomensongelijkheid binnen
                  de IT en de overall inkomensongelijkheid. Een positieve waarde
                  geeft aan dat vrouwen in tech, in vergelijking met andere
                  beroepen, eerlijker betaald worden.
                </li>
                <li>
                  <strong>Gender Inequality Index:</strong> Een score van 0 =
                  gelijkheid. Hoe hoger de score, hoe ongelijker. Hoe dichter de
                  waarde bij 0 ligt, hoe gelijker een land dus is. Gender
                  Inequality index (2015). Bron: Human Development Report.
                </li>
                <li>
                  <strong>
                    Inkomensongelijkheid tussen Mannen en Vrouwen 5 Jaar
                    Geleden:
                  </strong>{' '}
                  Inkomensongelijkheid tussen mannen en vrouwen (zoals boven
                  gedefinieerd), data uit 2010. In het geval van Chili: 2011,
                  omdat 2010 niet beschikbaar was.
                </li>
                <li>
                  <strong>
                    Vergelijking Inkomensongelijkheid 5 Jaar Geleden en Nu:
                  </strong>{' '}
                  Verschil tussen de huidige inkomensongelijkheid en de
                  inkomensongelijkheid 5 jaar geleden. Een positieve waarde
                  duidt op een positieve toename, dus, de inkomensongelijkheid
                  tussen mannen en vrouwen is toegenomen. Een negatieve waarde
                  geeft aan dat de inkomensongelijkheid tussen mannen en vrouwen
                  afgenomen is.
                </li>
                <li>
                  <em>
                    Uitgegaan van de wisselkoers op 26-02-2018. 1 USD = 0,81
                    euro, 0,71 Britse pond.
                  </em>
                </li>
              </ul>
            </TextContent>
          </FlexWrapper>
        </Container>
      </article>

      <Footer />
    </div>
  </Provider>
)
