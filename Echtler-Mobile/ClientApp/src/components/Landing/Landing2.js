import React from 'react';
import './landing.css';
import './agency.css';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
function Landing2() {
    return (
        <div>
        <header className="masthead">
        <div className= "logo1"> </div>
                <div className="intro-text container">
                {/*<div className="intro-heading text-uppercase">Mit dem Wohnmobil auf neuen Wegen!</div>*/}
                <div className="intro-heading text-uppercase">Ihr Partner für Wohnmobile im Allgäu</div>
                <div className="intro-lead-in">Urlaub auf die schönste Art und Weise!</div>
    
                <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="tel:+4983419969535">
                    <PhoneIcon/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:info@Echtler-Mobile.de?Subject=Echtler-Mobile Kontakt">
                  
                <MailIcon/>
                </a>
              </li>
            </ul>
                </div>
               
        </header>
      </div>
    );
}
export default Landing2;