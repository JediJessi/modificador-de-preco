import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import Modal from 'react-modal';
import './Upload.css'

const Upload = (props) => {
  const {setIsUpdated, isValue} = props

  const [csvData, setCsvData] = useState([]);
  const [, setFile] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isPush, setisPush] = useState(false);
  const [status] = useState([]);

  const handleValidValues = async (force = false) => {
    try {
      if (csvData.length > -1) {
        csvData?.map((el) => {
           const obj = {
            code: el.product_code,
            sales_price: el.new_price
           }

           isValue?.map((oldEl) => {
            if (oldEl.code === obj.code) {
              if (el.new_price > (Number(oldEl.sales_price) + (oldEl.sales_price * 0.10))) {
                status?.push('Maior Que 10%')
                setisPush(true)
              }

              else if (el.new_price < (Number(oldEl.sales_price) + (oldEl.sales_price * 0.10))) {
                status?.push('Menor Que 10%')
                setisPush(true)
              }

              else if (el.new_price === (Number(oldEl.sales_price) + (oldEl.sales_price * 0.10))) {
                status?.push('Esta Dentro Dos Padroes')
                setisPush(true)
              }

              if (force === true) {
                axios.patch(`http://localhost:8888/products/${el.product_code}`, obj).then(setIsUpdated(true))
                closeModal()
              }
            }
           })
        })
      }

      mergArray()

    } catch (error) {
      console.error('Erro:', error);
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      Papa.parse(selectedFile, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          setCsvData(results?.data);
        },
      });
    }
  };

const mergArray = () => {
  status?.map((values, key) => {
    csvData[key].status = values;
  })
} 

  return (
    <div className="Upload">
      <h1 className="page-title">Modificador de preço</h1>
      <input class="csv-input" type="file" accept=".csv" onChange={handleFileChange} />
      {csvData.length > 0 && (
        <>
        <button className="validate-button" onClick={() => openModal()}>Validar</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal to validate edit products"
        >

          <button className='on-close-modal' onClick={closeModal}>x</button>
          <button className="validate-button" onClick={() => handleValidValues(false)}>Validar Todos Os Campos</button>
          {!isPush || <button  className="validate-button variant" onClick={() => handleValidValues(true)}>Confirmo Que Desejo Alterar</button>}

          <table className="product-table">
              <thead>
                  <tr>
                  <th>Codigo Do Produto</th>
                  <th>Novo Preço</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
      
                  {
                  csvData.map((row, index) => (
                  <tr key={index}>
                      <td>{row.product_code}</td>
                      <td>{row.new_price}</td>
                      <td>{row.status}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
        </Modal>
        </>
      )}
    </div>
  );
};

export default Upload;