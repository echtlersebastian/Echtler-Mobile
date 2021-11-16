import React from 'react'
import TimeLinePannel from './TimeLinePannel';
import TimeLineInverted from './TimeLineInverted.js';
import './Timeline.css';
import TimeLine1Img from  '../../assets/TimeLine/1.png';
import TimeLine2Img from  '../../assets/TimeLine/2.png';
import TimeLine3Img from  '../../assets/TimeLine/3.png';
import TimeLine4Img from  '../../assets/TimeLine/4.png';
import TimeLine5Img from  '../../assets/TimeLine/5.png';
import TimeLine6Img from  '../../assets/TimeLine/6.png';
import TimeLine7Img from  '../../assets/TimeLine/7.png';
import TimeLine8Img from  '../../assets/TimeLine/8.png';

import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
// TODO: Bitte alles Umbauen... Keine Klassencomponente mehr, keine CSS file mehr, einfach Clean mit Material UI nachbauen. Ich habe nur leider keinen Bock.
class TimeLine extends React.Component {
  constructor() {
    super();
    this.state = {
      timeLineItems:[ 
      {
        title: 'Na, haben Sie nun Lust zu campen?',
        subheading: 'Freiheit – Unabhängigkeit - Abenteuer',
        caption: 'Mit Echtler Mobile in wenigen Schritten zum Traumurlaub!',
        imgUrl: TimeLine1Img
       },
       {
        title: 'Kontaktieren Sie uns!',
        subheading: 'Wir schicken Ihnen ein Angebot.',
        caption: 'Schicken Sie uns eine E-Mail, rufen Sie uns an oder füllen Sie unten das Anfrageformular aus!', 
        imgUrl: TimeLine2Img
       },
       {
        title: 'Komplettpaket bei Echtler-Mobile!',
        subheading: 'Großes Angebot an Ausstattung',
        caption: 'Fehlt Ihnen noch etwas? Sprechen Sie mit uns und Sie können gerne Extras dazubuchen. ',
        imgUrl:TimeLine3Img
       },
       {
        title: 'Fragen?',
        subheading: 'Wenden Sie sich gerne an uns!',
        caption: 'Durch jahrelange Campingerfahrung können wir Sie in allen Belangen unterstützen.',
        imgUrl: TimeLine4Img
       },
       {
        title: 'Abholung des Wohnmobils zum vereinbarten Termin',
        subheading: 'Detaillierte Einweisung in alle Bereiche',
        caption: 'Somit bekommen Sie Sicherheit für Ihre Reise.',
        imgUrl: TimeLine5Img
       },
       {
        title: 'Jetzt beginnt Ihre Reise!',
        subheading: 'Strand, Stadt oder Berge?',
        caption: 'Mit unseren Wohnmobilen stehen Ihnen alle Möglichkeiten offen. ',
        imgUrl: TimeLine6Img
       },
       {
        title: 'Rückgabe des Wohnmobils zum vereinbarten Termin',
        subheading: 'Die Abnahme erfolgt unkompliziert und professionell.',
        caption: 'Haben Sie keine Lust auf eine Endreinigung? - Wir übernehmen das gerne für Sie!',
        imgUrl: TimeLine7Img
       },
       {
        title: 'Hat Ihnen unser Service gefallen?',
        subheading: '',
        caption: 'Bitte hinterlassen Sie uns eine Bewertung bei Google.',
        imgUrl: TimeLine8Img
       }
    ],
    };
    this.renderTimeLine = this.renderTimeLine.bind(this);
  }
    
  

  renderTimeLine() {
    var counter = 0;
    const result = this.state.timeLineItems.map(({ title, subheading, caption, imgUrl }, index) => {
      if ((counter % 2) === 1) {
        this.counter = this.counter + 1;
        return <TimeLineInverted key={index} title={title} subheading={subheading} caption={caption} imgUrl={imgUrl}></TimeLineInverted>
      }
      else {
        this.counter = this.counter + 1;
        return <TimeLinePannel key={index} title={title} subheading={subheading} caption={caption} imgUrl={imgUrl}></TimeLinePannel>
      }
    });
    console.log(result);
    return result;
  };

  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
              
        <Grid item xs= {12}><Box paddingTop={4} /></Grid>
            <div className="col-lg-12 text-center">
            <Typography align="center" variant="h3">Losgelöst von Zeit und Raum ist Erholung sicher</Typography>
            <Typography align="center" variant="h6">Ihr persönlicher Weg zum Wohnmobil mit Echtler-Mobile</Typography>
            </div>
            
        <Grid item xs= {12}><Box paddingTop={6} /></Grid>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">            
                {
                  this.state.timeLineItems.map((item, index) =>
                    index % 2 === 0 ? <TimeLinePannel key={index} title={item.title} subheading={item.subheading} caption={item.caption} imgUrl={item.imgUrl} /> : <TimeLineInverted key={index} title={item.title} subheading={item.subheading} caption={item.caption} imgUrl={item.imgUrl} />                 )}

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Echtler-Mobile wünscht eine gute Reise! </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    )

  };
};

export default TimeLine;