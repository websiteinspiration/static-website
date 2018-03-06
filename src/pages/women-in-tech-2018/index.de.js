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

export default ({ location }) => (
  <Provider>
    <div>
      <Header title="Frauen in der IT-Branche 2018" />

      <article>
        <Container>
          <FlexWrapper>
            <LangSwitch location={location} />
            <TextContent>
              <p>
                Die Gleichberechtigung der Geschlechter hat die öffentliche
                Debatte der letzten Monate bestimmt und Veranstaltungen wie der
                Women’s March haben ungleiche Rechte zwischen Frauen und Männern
                auf der ganzen Welt deutlich gemacht. Wir von Honeypot sehen es
                als unsere Aufgabe an, Frauen in der IT-Branche zu unterstützen.
                In Anbetracht des weltweiten Lohngefälles zwischen Männern und
                Frauen haben wir uns dazu entschlossen, einen genaueren Blick
                auf die Gleichberechtigung der Geschlechter in der IT-Branche zu
                werfen und möchten mit dieser Studie die Hürden und Chancen für
                Frauen in IT-Berufen hervorheben.
              </p>

              <p>
                Die Studie umfasst 41 Länder der OECD und der EU und enthält
                vergleichbare Daten über die IT-Branche und das Lohngefälle. Die
                Daten umfassen folgende Bereiche: "
              </p>

              <ul>
                <li>
                  <strong>
                    Geschlechtergleichheit in der Gesamtwirtschaft:
                  </strong>{' '}
                  Faktoren wie der prozentuale Anteil der erwerbstätigen Frauen
                  und das allgemeine geschlechtsspezifische Lohngefälle.
                </li>
                <li>
                  <strong>Frauen in der IT-Branche:</strong> Prozentualer
                  Frauenanteil im IT-Sektor.
                </li>
                <li>
                  <strong>Chancen für Frauen in IT-Berufen:</strong> Dies
                  beschreibt den Unterschied zwischen dem prozentualen Anteil
                  der erwerbstätigen Frauen und dem Frauenanteil in der
                  IT-Branche. Zusätzlich wurde berücksichtigt, wie viel Prozent
                  der Absolventen von MINT-Fächern weiblich sind.
                </li>
                <li>
                  <strong>Lohngefälle in der IT-Branche:</strong> Der
                  Unterschied zwischen dem Lohngefälles zwischen Männern und
                  Frauen in der IT-Branche und dem allgemeinen Lohngefälle.
                </li>
                <li>
                  <strong>Karrierechancen für Frauen:</strong> Der Frauenanteil
                  in Führungspositionen und auf Ministerposten.
                </li>
              </ul>

              <p>
                Schlussendlich haben wir den Geschlechterungleichheits-Index
                unter die Lupe genommen, um potentielle Faktoren zu
                identifizieren, die Hürden für Frauen darstellen und um die
                vielversprechendsten Chancen für Frauen hervorzuheben. Der Index
                untersucht die reproduktive Gesundheit von Frauen sowie ihre
                wirtschaftliche Emanzipation und Teilnahme am Arbeitsmarkt und
                ermöglicht Schlussfolgerungen über die Gleichberechtigung
                allgemein. Um festzustellen, ob die Gleichberechtigung in der
                Vergangenheit zu- oder abgenommen hat, wurde zudem das
                geschlechtsspezifische Lohngefälle von vor fünf Jahren mit den
                aktuellen Daten der Studie verglichen.
              </p>

              <p>
                “Das geschlechtsspezifische Lohngefälle in der IT-Branche
                beträgt in Deutschland 25 %. Dies stellt den schlechtesten Wert
                in Westeuropa dar und ist doppelt so hoch wie in Belgien und
                Frankreich, wo die Lohnlücke zwischen Männern und Frauen 11,8 %
                beträgt. Dies deutet darauf hin, dass der IT-Sektor in
                Deutschland in Sachen Gleichberechtigung hinter anderen
                westlichen Ländern zurückliegt”, sagt Emma Tracey, Co-Founder
                von Honeypot. “Zwar unternimmt die deutsche Regierung Schritte,
                die sich positiv auf die Gleichberechtigung in der Wirtschaft
                auswirken sollen, wie das Lohntransparenzgesetz, das im Juli
                2017 in Kraft getreten ist, jedoch bleibt abzuwarten, ob dieses
                tatsächlich Wirkung zeigt oder lediglich zu mehr Bürokratie
                führt.“
              </p>

              <p>
                Die folgende Tabelle zeigt eine Rangliste der Länder, in denen
                die Chancen für Frauen in der IT-Branche am höchsten sind.
                Verglichen werden hierbei das allgemeine Lohngefälle und das
                Lohngefälle in der IT-Branche. Eine positive Zahl bedeutet, dass
                das Lohngefälle in der IT-Branche unter dem allgemeinen
                Lohngefälle des entsprechenden Landes liegt und Frauen in
                IT-Berufen fairer bezahlt werden.
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
              <h2>Methodik</h2>
              <p>
                Die Studie umfasst 41 Länder der OECD und der EU, da die
                Methoden zur Erhebung von Daten über die IT-Branche und das
                geschlechtsspezifische Lohngefälle in diesen Ländern
                vergleichbar sind.
              </p>

              <h3>Kriterien</h3>

              <ul>
                <li>
                  <strong>Erwerbstätige insgesamt (in Millionen):</strong>{' '}
                  Jährliche Arbeitskräfteerhebung, in Millionen Personen.
                  Quelle: Statistiken der OECD, Eurostat.
                </li>
                <li>
                  <strong>Erwerbstätige Frauen (in Millionen):</strong>{' '}
                  Jährliche Arbeitskräfteerhebung, in Millionen Personen.
                  Quelle: Statistiken der OECD, Eurostat.
                </li>
                <li>
                  <strong>Frauenanteil (in %):</strong> Prozentualer Anteil der
                  erwerbstätigen Frauen.
                </li>
                <li>
                  <strong>
                    Frauen in hochrangigen Beamtenstellen, gesetzgebenden und
                    geschäftsführenden Positionen (in %):
                  </strong>{' '}
                  Der prozentuale Frauenanteil in Führungspositionen; ein
                  höherer Wert bedeutet größere Gleichstellung in Bezug auf
                  Karrierechancen. Daten stammen vom Bericht des
                  Weltwirtschaftsforums: Frauen und Männer in hochrangigen
                  Beamtenstellen, gesetzgebenden und geschäftsführenden
                  Positionen (%): Berufshauptgruppe 1 der Internationalen
                  Standardklassifikation der Berufe (ISCO-08). Quellen: ILO,
                  ILOSTAT Datenbank, Beschäftigung nach Beruf, 2016 oder die
                  aktuellsten Daten, die verfügbar waren.
                </li>
                <li>
                  <strong>Frauen im Parlament (in %):</strong> Report des
                  Weltwirtschaftsforums: Prozentualer Frauenanteil im Parlament,
                  bzw. im Unterhaus. Die Daten stammen von der
                  Interparlamentarischen Union, „Women in National Parliaments”.
                  Die Daten beziehen sich auf Informationen, die am 1. September
                  2016 von den Parlamenten der verschiedenen Länder
                  bereitgestellt wurden.
                </li>
                <li>
                  <strong>Frauen in Ministerämtern (in %):</strong> Report des
                  Weltwirtschaftsforums: Prozentualer Frauentanteil in
                  Ministerämtern, wie Premierminister oder Finanzminister. In
                  einigen Fällen können Überschneidungen vorkommen, falls ein
                  Ministeramt vom Staatsoberhaupt besetzt wird. Quelle:
                  Interparlamentarische Union, „Women in Politics 2015”,
                  berücksichtigt wurden Benennungen bis zum 1. Januar 2015. Die
                  Daten werden alle zwei Jahre aktualisiert.
                </li>
                <li>
                  <strong>
                    Durchschnittsgehalt (in €), Durchschnittsgehalt von Frauen
                    (in €), geschlechtsspezifisches Lohngefälle (in €):
                  </strong>{' '}
                  Das Durchschnittsgehalt von Männern und Frauen für alle Berufe
                  und der prozentuale Unterschied zwischen beiden Geschlechtern
                  wird als geschlechtsspezifisches Lohngefälle bezeichnet.
                  Quellen: OECD, Eurostat. Der Durchschnitt beider Quellen.
                  Eurostat: Der Unterschied zwischen den durchschnittlichen
                  Bruttostundenlöhnen von Männern und Frauen, dargestellt als
                  prozentuale Abweichung vom durchschnittlichen
                  Bruttostundenlohn von Männern. OECD: Unterschied zwischen den
                  Medianeinkommen von Männern und Frauen, dargestellt relativ
                  zum Medianeinkommen von Männern. Daten beziehen sich auf
                  Vollzeitbeschäftigte und selbstständige Erwerbstätige.
                </li>
                <li>
                  <strong>Erwerbstätige in der IT-Branche (in Tausend):</strong>{' '}
                  Personen in Berufen der Informations- und
                  Kommunikationstechnik in Tausend. Berufsuntergruppe 25 der
                  Internationalen Standardklassifikation der Berufe (ISCO-08).
                  Akademische und vergleichbare Fachkräfte in der Informations-
                  und Kommunikationstechnologie. Der Informations- und
                  Kommunikationssektor wurde per Definition ins Leben gerufen,
                  indem Aktivitäten zur Produktion und Distribution von
                  Informationen und kulturellen Produkten, die Bereitstellung
                  von Mitteln zur Übertragung und Verteilung von solchen
                  Produkten sowie von Daten und Nachrichten, IT-Aktivitäten,
                  Datenverarbeitung und andere Informationsdienstleistungen
                  miteinander kombiniert wurden. Die Hauptbestandteile dieses
                  Abschnitts sind verlegerische Tätigkeiten, wie das
                  Veröffentlichen von Software (division 58), das Aufzeichnen
                  von Film und Ton (division 59), die Planung und Ausstrahlung
                  von Radio und Fernsehen (division 59), Aktivitäten der
                  Telekommunikation (division 61), informationstechnologische
                  Aktivitäten (division 62) und andere
                  Informationsdienstleistungen (division 63). Quelle: Eurostat.
                </li>
                <li>
                  <strong>Erwerbstätige in der IT-Branche (in %):</strong> Der
                  prozentuale Anteil der Erwerbstätigen (aller Geschlechter),
                  die in der IT-Branche tätig sind.
                </li>
                <li>
                  <strong>Frauen in der IT-Branche (in Tausend):</strong> Anzahl
                  der Frauen in der IT-Branche.
                </li>
                <li>
                  <strong>Frauen in der IT-Branche (in %):</strong> Der
                  prozentuale Frauenanteil aller Erwerbstätigen im IT-Sektor.
                </li>
                <li>
                  <strong>Frauenanteil der MINT-Absolventen (in %):</strong>{' '}
                  Prozentualer Frauenanteil der MINT-Fächer-Absolventen, Daten
                  stammen vom Bericht des Weltwirtschaftsforums. Quelle: UNESCO
                  Institute for Statistics (aufgerufen: September 2016).
                  Untersucht wird der prozentuale Anteil von Frauen und Männern
                  unter Absolventen von ISCED-5-8-Studiengängen der Mathematik,
                  Informatik, Naturwissenschaft und Technik (prozentualer Anteil
                  aller Absolventen).
                </li>
                <li>
                  <strong>Durchschnittsgehalt in der IT-Branche (in €):</strong>{' '}
                  Durchschnittliches Jahresgehalt in der IT-Branche (wie oben
                  definiert). Jahresgehalt in EUR KKP (Kaufkraftparität),
                  bereinigt nach Lohnniveau (KKP) der OECD und Lohnniveau (KKP)
                  der EU. Quellen: OECD, Eurostat, örtliche Berichte.
                </li>
                <li>
                  <strong>
                    Durchschnittliches Gehalt für Frauen in der IT-Branche (in
                    €):
                  </strong>{' '}
                  Durchschnittliches Gehalt für Frauen in der IT-Branche (wie
                  oben definiert), in EUR KKP (Kaufkraftparität), unter
                  Berücksichtigung des Lohngefälles in der IT-Branche und des
                  durchschnittlichen Gehalts in der IT-Branche. Quellen: OECD,
                  Eurostat, örtliche Berichte.
                </li>
                <li>
                  <strong>
                    Geschlechtsspezifisches Lohngefälle in der IT-Branche (in
                    %):
                  </strong>{' '}
                  Lohngefälle im IT-Sektor (wie oben definiert). Quellen:
                  Eurostat, OECD, örtliche Berichte.
                </li>
                <li>
                  <strong>
                    Differenz zwischen dem allgemeinen geschlechtsspezifischen
                    Lohngefälle und dem geschlechtsspezifischen Lohngefälle im
                    IT-Sektor (in %):
                  </strong>{' '}
                  Der Prozentuale Unterschied zwischen dem
                  geschlechtsspezifischen Lohngefälle im IT-Sektor und dem
                  allgemeinen geschlechtsspezifischen Lohngefälle. Ein positiver
                  Wert bedeutet, dass Frauen im IT-Sektor im Vergleich zu
                  anderen Berufen fairer bezahlt werden.
                </li>
                <li>
                  <strong>Geschlechterungleichheits-Index:</strong> Die
                  Punktzahl 0 steht für Gleichberechtigung der Geschlechter. Je
                  höher der Wert, desto ausgeprägter die Ungleichheit. Je näher
                  die Punktzahl am Wert 0 liegt, desto geringer ist die
                  Ungleichheit in einem Land. Gender Inequality Index (2015).
                  Quelle: Human Development Report.
                </li>
                <li>
                  <strong>
                    Geschlechtsspezifisches Lohngefälle fünf Jahren vor
                    aktuellen Daten:
                  </strong>{' '}
                  Geschlechtsspezifisches Lohngefälle (wie oben definiert),
                  Daten von 2010 (Daten über das aktuelle Lohngefälle sind von
                  2015). Im Fall von Chile von 2011, da keine Daten für 2010
                  verfügbar waren.
                </li>
                <li>
                  <strong>
                    Vergleich des geschlechtsspezifischen Lohngefälles vor fünf
                    Jahren mit den aktuellen Daten:
                  </strong>{' '}
                  Differenz zwischen dem aktuellen Lohngefälle der Studie und
                  der Lohnlücke fünf Jahre früher. Ein positiver Wert steht für
                  einen positiven Anstieg, d. h. das geschlechtsspezifische
                  Lohngefälle hat sich vergrößert. Ein negativer Wert bedeutet,
                  dass sich die Lohnunterschiede verringert haben.
                </li>
                <li>
                  <em>
                    Wechselkurs vom 26.02.2018. 1 USD = 0,81 Euro = 0,71 GBP
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
