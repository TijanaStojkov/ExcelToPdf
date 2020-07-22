import React, { Component } from 'react';
import Printer, { print } from 'react-pdf-print';
import Footer from '../Footer/Footer'

const ids = ['1']
class Dokument1 extends Component {
  
      render(props) {
        return (
          <div id='d1'>
            <p>Dodaj text: </p>
            <input type='text' name='text1' maxLength='386' onChange={(e)=>this.props.saveText(e.target.name,e.target.value)}/>
            <Printer >
              <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                <div style={{ padding:'5px 20px', width:'550px', height: '700px'}}>
                    <h6 className='center' style={{margin:'40px'}}>REŠENJE O IMENOVANJU VRŠIOCA TEHNIČKE KONTROLE</h6>

                    <p>Naosnovu člana 129. Zakonao planiranju i izgradnji (Sl. glasnik R.Srbije72/ 09, 81/09-
                    ispravka, 64/10-odluka US, 24/11 i 121/12, 42/13-odlukaUS, 50/2013-odluka US, 98/2013-
                    osluka US, 132/14, 145/14) i odredbi Pravilnika o sadržini, načinu i postupku izrade i način
                    vršenjakontrole tehničke dokumentacije prema klasi i nameni objekta (Sl. list R.Srbije,
                    23/2015) i uslova u pogledu stručne spremei radnog iskustvaradnikana izradi i kontroli
                    tehničke dokumentacije, donosi sesledeće:</p>

                    <h6>VRŠIOC TEHNIČKE KONTROLE</h6>
                    <p>ZA IDEJNI PROJEKAT:
                    REKONSTRUKCIJA CRPNE STANICE U RUSKOM SELU SA UGRADNJOM POSTROJENJA ZA
                    KONDICIONIRANJE PIJAĆE VODE, čiji je investitor "JPKIKINDA" JAVNOPREDUZEĆEZA
                    KOMUNALNU INFRASTRUKTURU I USLUGEIĐOŠKI PUT 4,KIKINDA
                    određuje se:</p>
                    <p><b>{this.props.imePrezimeOdgovornogProjektanta}</b>, br. licence: <b>{this.props.brojLicenceOdgovornogProjektanta}</b>
                    , za projekat električnih instalacija (sveska 4)
                    Tehnička kontrola mora biti urađena u svemu prema važećim standardima i propisima za
                    odgovarajuću oblast, anaročito u skladu sa odredbama Zakona o planiranju i izgradnji (Sl.
                    glasnik R.Srbije72/ 09, 81/2009, 64/2010, 24/2011, 121/2012, 42/2013, 50/2013, 98/2013,
                    132/2014 i 145/ 2014).</p>
                    <p >{this.props.text1}</p>
                </div>
                <Footer mesecGodina={this.props.mesecGodina}/>
              </div>
            </Printer>
            <div style={{display: 'flex', justifyContent: 'center', width: '500px', marginTop: '-270px'}}>
                  <div className = "btn waves-effect waves-light green darken-4" onClick={() => print(ids)} style={{width:"200px"}}>
                      Štampaj
                  </div>
            </div>
          </div>
        );
    }
}

export default  Dokument1;