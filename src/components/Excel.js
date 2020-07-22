import React, { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Document1 from './Dokument1'

class Excel extends Component {
    state={
        cols:[],
        rows:[],
        errorMessage:'',
        brojDokumenta:'',
        nazivInvestitora:'',
        lokacijaInvestitoraUlica:'',
        lokacijaInvestitoraBroj:'',
        lokacijaInvestitoraGrad:'',
    }
    fileHandler = (event) => {
        let fileObj = event.target.files[0];
    
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err)
              } else {
                  console.log(resp.rows)
                let newRows = []
                resp.rows.slice(1).map((row, index) => {
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
      Prikazi=()=>{
        this.state.rows.forEach(item=>{
            if(item.name==="broj_dokumenta"){
                this.setState({
                    brojDokumenta:item.value
                })
            }
            if(item.name==="naziv_investitora"){
                this.setState({
                    nazivInvestitora:item.value
                })
            }
            if(item.name==="lokacija_investitora_ulica"){
                this.setState({
                    lokacijaInvestitoraUlica:item.value
                })
            }
            if(item.name==="lokacija_investitora_broj"){
                this.setState({
                    lokacijaInvestitoraBroj:item.value
                })
            }
            if(item.name==="lokacija_investitora_grad"){
                this.setState({
                    lokacijaInvestitoraGrad:item.value
                })
            }
            
        })
      }
      render() {
    return (
        <div>
          <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />    
          <button onClick={this.Prikazi}>Prikazi</button>
          <Link to="/Dokument1" >Click to login</Link>

            <p>Broj dokumenta: {this.state.brojDokumenta}</p>
            <p>Naziv investitora: {this.state.nazivInvestitora}</p>
            <p>Lokacija: {this.state.lokacijaInvestitoraUlica} {this.state.lokacijaInvestitoraBroj}, {this.state.lokacijaInvestitoraGrad}</p>
       
       
        <Route path={"/"} exact component={Excel}></Route>
        <Route path={"Dokument1"}render={(props) => 
          <Document1 {...props} 
               brojDokumenta={this.state.brojDokumenta}
               nazivInvestitora={this.state.nazivInvestitora}
               lokacijaInvestitoraBroj={this.state.lokacijaInvestitoraBroj}
               lokacijaInvestitoraUlica={this.state.lokacijaInvestitoraUlica}
               lokacijaInvestitoraGrad={this.state.lokacijaInvestitoraGrad} />
        }></Route>

        </div>
 );
}
}

export default Excel;