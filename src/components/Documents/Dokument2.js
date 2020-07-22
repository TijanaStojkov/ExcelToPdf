import React, { Component } from 'react';
import Printer, { print } from 'react-pdf-print';
import Footer from '../Footer/Footer'

const ids = ['2']
class Dokument2 extends Component {
  
      render(props) {
        return (
            <div>
                <div style={{padding: '10px'}}>
                <p>Unesi zatečeno stanje: </p>
                <input type='text' name='text2' onChange={(e)=>this.props.saveText(e.target.name,e.target.value)}/>
            </div>
            
            <Printer >
                <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                    <div style={{ padding:'5px 20px', width:'550px', height: '700px'}}>
                        <h6 className='center' style={{margin:'40px'}}>IZVEŠTAJ O ZATEČENOM STANJU OBJEKTA</h6>
                        <p>Odgovorni projektant: <b> {this.props.imePrezimeOdgovornogProjektanta}</b> </p>
                        <p>Broj licence: <b> {this.props.brojLicenceOdgovornogProjektanta}</b></p>
                        <p>Broj elaborata: <b> {this.props.brojDokumenta}</b></p>
                        <p>Naziv investitora: <b> {this.props.nazivInvestitora}</b></p>
                        <p>Lokacija: <b> {this.props.lokacijaInvestitoraUlica} {this.props.lokacijaInvestitoraBroj}, {this.props.lokacijaInvestitoraGrad}</b></p>
                        <p>Zatečeno stanje:</p>
                        <p><b>{this.props.text2}</b></p>
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

export default  Dokument2;