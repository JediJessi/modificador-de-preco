import axios from 'axios'
import { useEffect, useState } from 'react'
import './ListAllProducts.css'

const ListAllProducts = (props) => {
    const {isUpdated, setValues} = props

    const [ResponseData, setResponseData] = useState()
    
    const getAllProducts = () => {
        axios.get('http://localhost:8888/products')
        .then((data) => {
            setResponseData(data.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getAllProducts()
        setValues(ResponseData)
    }, [isUpdated])

    setValues(ResponseData)
  return (
    <>
    <table className="product-table"> 
          <thead>
            <tr>
              <th>Id</th>
              <th>Preço de custo</th>
              <th>Nome</th>
              <th>Preço de venda</th>
            </tr>
          </thead>
          <tbody>
            {
            ResponseData?.map((row, index) => (
              <tr key={index}>
                <td>{row.code}</td>
                <td>{row.cost_price}</td>
                <td>{row.name}</td>
                <td>{row.sales_price}</td>  
              </tr>
            ))
            }
          </tbody>
        </table>
    </>
  )
}

export default ListAllProducts