import React from 'react';
import Footer from '../Footer';
import Table from 'react-bootstrap/Table'



export const Materiel = () => {
    return (
<div>
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Materiel </th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/tentes.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/sacdecouchage.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/couverture.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>4</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/matelas.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>5</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/hamac.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>6</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/kettle.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>7</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/setdiner.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>8</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/table.jpg"/></td>
      ))}
    </tr>
    <tr>
      <td>9</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}><img src="/Images/Materiel/blackpoolchaise.jpg"/></td>
      ))}
    </tr>
    
    
  </tbody>
</Table>


<Footer/>
</div>

    )
}
export default Materiel;
