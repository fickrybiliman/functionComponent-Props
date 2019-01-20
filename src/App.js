import React, { Component } from 'react';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super()
    this.state = {
      siswa : [
        {id: 1, nama: 'Fickry Bil Iman', kelas: '7A'},
        {id: 2, nama: 'Keanu Reeves', kelas: '8B'},
        {id: 3, nama: 'Dian Sastro', kelas: '3C'},
      ],
      judul : 'Hello World!!'
    }
  }

  render() {
    return (
      <div>
        <h1>List Data Siswa</h1>
        <Table 
          siswa = { this.state.siswa } 
          judulBaru = {this.state.judul }
        />
      </div>
    )
  }
}

export default App;
