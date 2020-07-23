import React, { Component } from 'react';
import './App.css';
import { ExcelRenderer} from 'react-excel-renderer';
import { Link, Route } from 'react-router-dom';
import Document1 from './components/Documents/Dokument1';
import Document2 from './components/Documents/Dokument2';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { Icon, Collapsible } from 'react-materialize';
import Nav from './components/Nav/Nav';
import CollapsibleItemComponent from './components/CollapsibleItems/CollapsibleItem';
import ExcelFile from './excelFiles/REAHEM.xlsx';

class App extends Component {
    state={
        cols:[],
        rows:[],
        errorMessage:'',
        mesecGodina: '',

        //Dokument
        brojDokumenta:'',
        vrstaDokumenta:'',
        datumDokumentaGodina:'',
        datumDokumentaMesec:'',
        datumDokumentaDan:'',

        //Objekat
        naziv0bjekta:'',
        spratnost0bjekta:'',
        lokacija0bjektaUlica:'',
        lokacijaObjektaBroj:'',
        lokacijaObjektaGrad:'',
        katastarskaParcela:'',
        katastarskaOpština:'',
        tipObjekta:'',
        kategorijaObjekta:'',
        klasifikacijonaOznakaObjekta:'',

        //Priključci
        kpPriklucakInfrastruktura:'',
        kpPriklucakSaobracajnica:'',
        priklucakInfrastrukturaVik:'',
        priklucakInfrastrukturaElektro:'',
        priklucakInfrastrukturaGrejanje:'',
        priklucakInfrastrukturaSaobraćajnice:'',
      
        //Urbanistički plan
        nazivPlana:'',

        //Investitor
        nazivInvestitora:'',
        lokacijaInvestitoraUlica:'',
        lokacijaInvestitoraBroj:'',
        lokacijaInvestitoraGrad:'',

        //Projektant
        nazivProjektanta: '',
        odgovornoLiceProjektanta: '',
        lokacijaProjektantaBroj: '',
        lokacijaProjektantaGrad: '',

        //Odgovorni projektant
        imePrezimeOdgovornogProjektanta: '',
        titulaOdgovornogProjektanta: '',
        brojLicenceOdgovornogProjektanta: '',

        text1: '',
        text2: ''
    }    
    componentDidMount () {
      var month = [];
        month[0] = "Januar";
        month[1] = "Februar";
        month[2] = "Mart";
        month[3] = "April";
        month[4] = "Maj";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "August";
        month[8] = "Septembar";
        month[9] = "Ocktobar";
        month[10] = "Novembar";
        month[11] = "Decembar";
      let date = new Date();
      let mounth = month[date.getMonth()];
      let year = date.getFullYear()
      let mesecGodina = mounth + ' ' + year + '.godine';
      this.setState({
        mesecGodina: mesecGodina
      })
    }
    fileHandler = (event) => {
     // console.log(event.target.files[0]);
        let fileObj = event.target.files[0];
    
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                //console.log(err)
              } else {
                  //console.log(resp.rows)
                let newRows = []
                resp.rows.slice(1).forEach((row, index) => {
                  if (row && row !== "undefined") {

                    newRows.push({
                      key: index,
                      name: row[0],
                      value: row[1],
                      gender: row[2],
                    })
                  }
                })
                if (newRows.length === 0) {
                  this.setState({
                    errorMessage: "No data found in file!",
                  })
                  return false
                } else {
                  this.setState({
                    cols: resp.cols,
                    rows: newRows,
                    errorMessage: null,
                  })
                }
              }
        });               
    
      };
      SkrollD = () => {
        window.scroll({
          top: 600,
          behavior: 'smooth'
        });
      }
      Prikazi=()=>{
        window.scroll({
          top: 100,
          behavior: 'smooth'
        });
        this.state.rows.forEach(item=>{
          //Dokument
            if(item.name){
              let string = item.name.split('_').map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join('')
              let formatString = string.charAt(0).toLowerCase()+string.slice(1)
              //console.log(formatString)
              this.setState({
                [formatString]:item.value
              })
            }
        })
      }
      saveText=(name, value)=>{
        this.setState({
          [name]:value
        })
      }
      render() {
        return (
          <div style={{minWidth: '500px'}}>
           <Nav/>
            <div >
                  <div>
                    <a href={ExcelFile} download>
                     Preuzmi excel fajl
                     </a>
                  </div>
               <div className = "file-field input-field" >
                  <div className = "btn waves-effect waves-light red darken-4" >
                     <span>Izaberi fajl</span>
                     <input type="file" onChange={this.fileHandler.bind(this)} />
                  </div>
                  <div className = "file-path-wrapper">
                     <input className = "file-path validate file-input-style " type = "text" />
                  </div>
               </div>
            </div >
            <div  >
                 <div className = "btn waves-effect waves-light red darken-4" onClick={this.Prikazi} >
                     Prikaži podatke iz izabranog fajla
                  </div>
            </div>
            <div style={{marginTop: '30px'}}>
            <Collapsible accordion>
              <CollapsibleItemComponent
                header = {this.state.brojDokumenta?'Dokument - '+this.state.brojDokumenta: 'Dokument '}
                icon = {<Icon>library_books</Icon>}
                variables = {['brojDokumenta','vrstaDokumenta','datumDokumentaGodina','datumDokumentaMesec','datumDokumentaDan']}
                states = {this.state}
              />

              <CollapsibleItemComponent
              className="blue-grey lighten-4"
                header={this.state.nazivObjekta?'Objekat - '+this.state.nazivObjekta: 'Objekat '}
                icon = {<Icon>home</Icon>}
                variables = {['nazivObjekta','spratnostObjekta','lokacijaObjektaUlica','lokacijaObjektaBroj','lokacijaObjektaGrad','katastarskaParcela','katastarskaOpština','tipObjekta','kategorijaObjekta','klasifikacijonaOznakaObjekta']}
                states = {this.state}
              />

              <CollapsibleItemComponent
                header="Priključci"
                variables = {['kpPriklucakInfrastruktura','kpPriklucakSaobracajnica','priklucakInfrastrukturaVik','priklucakInfrastrukturaElektro','priklucakInfrastrukturaGrejanje','priklucakInfrastrukturaSaobraćajnice']}
                states = {this.state}
              />
             
              <CollapsibleItemComponent
                header={this.state.nazivInvestitora?"Investitor - "+this.state.nazivInvestitora:"Investitor"}
                variables = {['nazivInvestitora','lokacijaInvestitoraUlica','lokacijaInvestitoraBroj','lokacijaInvestitoraGrad']}
                states = {this.state}
              />

              <CollapsibleItemComponent
                header={this.state.nazivProjektanta?"Projektant - "+this.state.nazivProjektanta:"Projektant"}
                variables = {['nazivProjektanta','lokacijaProjektantaUlica','lokacijaProjektantaBroj','lokacijaProjektantaGrad']}
                states = {this.state}
              />

              <CollapsibleItemComponent
                expanded={false}
                variables = {['imePrezimeOdgovornogProjektanta','titulaOdgovornogProjektanta','brojLicenceOdgovornogProjektanta']}
                states = {this.state}
              />
            </Collapsible>
              
          </div>
            <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'black', padding: '30px 0'}}>
                <Link to="/Dokument1" onClick={this.SkrollD}>Dokument 1</Link>
                <Link to="/Dokument2" onClick={this.SkrollD}>Dokument 2</Link>
            </div>
                
              <Route path={"/Dokument1"} render={(props) => 
                <Document1 {...props} 
                    text1={this.state.text1}
                    saveText={this.saveText}
                    mesecGodina={this.state.mesecGodina}
                    brojDokumenta={this.state.brojDokumenta}
                    nazivInvestitora={this.state.nazivInvestitora}
                    lokacijaInvestitoraBroj={this.state.lokacijaInvestitoraBroj}
                    lokacijaInvestitoraUlica={this.state.lokacijaInvestitoraUlica}
                    lokacijaInvestitoraGrad={this.state.lokacijaInvestitoraGrad}
                    imePrezimeOdgovornogProjektanta={this.state.imePrezimeOdgovornogProjektanta}
                    brojLicenceOdgovornogProjektanta={this.state.brojLicenceOdgovornogProjektanta}
                     />
              }></Route>

              
              <Route path={"/Dokument2"} render={(props) => 
                <Document2 {...props} 
                    text2={this.state.text2}
                    saveText={this.saveText}
                    mesecGodina={this.state.mesecGodina}
                    brojDokumenta={this.state.brojDokumenta}
                    nazivInvestitora={this.state.nazivInvestitora}
                    lokacijaInvestitoraBroj={this.state.lokacijaInvestitoraBroj}
                    lokacijaInvestitoraUlica={this.state.lokacijaInvestitoraUlica}
                    lokacijaInvestitoraGrad={this.state.lokacijaInvestitoraGrad}
                    imePrezimeOdgovornogProjektanta={this.state.imePrezimeOdgovornogProjektanta}
                    brojLicenceOdgovornogProjektanta={this.state.brojLicenceOdgovornogProjektanta}
                     />
              }></Route>

            </div>
        );
      }
}

export default App;