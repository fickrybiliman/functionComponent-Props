import React, { Component } from 'react';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

// axios for handling api
import axios from 'axios';

// LIST RENDERING DENGAN DATA DARI API
class App extends Component {
  constructor() {
    super()
    this.state = {
      planets : []
    }
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value })
  }

  _handleClick = () => {
    axios.get("https://swapi.co/api/planets/")
      .then((res) => {
        this.setState({ planets : res.data.results })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <button onClick = {this._handleClick}>GET PLANETS</button>
        <h1>List Data Planet From Starwars API (swapi.co)</h1>
        
        <table>
          <thead>
            <th>Nama Planet</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
          </thead>
          <tbody>
            {
              this.state.planets.map((data, index) => {
                return (
                  <tr key = {index}>
                    <td>{ data.name }</td>
                    <td>{ data.rotation_period }</td>
                    <td>{ data.orbital_period }</td>
                    <td>{ data.diameter }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}

export default App;


// ==================================
// // LIST RENDERING DENGAN DATA SENDIRI
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       siswa : [
//         {id: 1, nama: 'Fickry Bil Iman', kelas: '7A'},
//         {id: 2, nama: 'Keanu Reeves', kelas: '8B'},
//         {id: 3, nama: 'Dian Sastro', kelas: '3C'},
//       ]
//     }
//   }

//   _handleChange = (element) => {
//     this.setState({[element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>List Data Siswa</h1>
        
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Nama</th>
//             <th>Kelas</th>
//           </thead>
//           <tbody>
//             {
//               this.state.siswa.map((data, index) => {
//                 return (
//                   <tr key = {index}>
//                     <td>{ data.id }</td>
//                     <td>{ data.nama }</td>
//                     <td>{ data.kelas }</td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>

//       </div>
//     )
//   }
// }

// export default App;

// =====================
// CONDITIONAL RENDERING
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tinggiBadan : 0,
//     }
//   }

//   _handleChange = (element) => {
//     this.setState({[element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Test Tinggi Badan</h1>
//         <p>Masukkan Tinggi Badan</p>
//         <input 
//           onChange = { this._handleChange }
//           name = "tinggiBadan"
//           value = { this.state.tinggiBadan }
//         />
//         {/* Conditional Rendering */}
//         {
//           Number(this.state.tinggiBadan) > 170 ? 
//           (
//             <h1 style ={{ color : "blue" }} >Anda Boleh Naik Permainan Ini</h1>
//           ) :
//           (
//             <h1 style ={{ color : "red" }}>Anda Tidak Diizinkan Bermain Permainan Ini</h1>
//           )
//         }
//       </div>
//     )
//   }
// }

// export default App;


// =====================
// PENJUMLAHAN
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       angka1: 0,
//       angka2: 0,
//       hasil: 0
//     }
//   }

//   _handleClick = () => {
//     const perhitungan = Number(this.state.angka1) + Number(this.state.angka2)
//     this.setState({hasil: perhitungan})
//   }

//   _handleChangeAngka1 = (element) => {
//     this.setState({ angka1: element.target.value })
//   }

//   _handleChangeAngka2 = (element) => {
//     this.setState({ angka2: element.target.value })
//   }

//   _handleChange = (element) => {
//     this.setState({ [element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <Title/>
//         <Paragraph></Paragraph>
//         <input 
//           name = 'angka1'
//           onChange = {this._handleChange}
//           value = { this.state.angka1 } 
//         />
//         <input 
//           name = 'angka2'
//           onChange = { this._handleChange}
//           value = { this.state.angka2 }
//         />
//         <button onClick = {this._handleClick } >HITUNG</button>
//         <h1>Hasil : { this.state.hasil }</h1>
//       </div>
//     );
//   }
// }

// export default App;
