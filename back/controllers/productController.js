const updateProductPrice = (productCode, newSalesPrice) => {
    const currentCostPrice = "SELECT " // Substitua com a consulta SQL apropriada
  
    if (newSalesPrice >= currentCostPrice) {
      // Atualize o preço de venda do produto no banco de dados
      // Use uma consulta SQL UPDATE para isso
      const updateQuery = 'UPDATE products SET sales_price = ? WHERE code = ?';
      const values = [newSalesPrice, productCode];
  
      // Execute a consulta SQL de atualização
      connection.query(updateQuery, values, (error, results) => {
        if (error) {
          console.error('Erro ao atualizar o preço de venda:', error);
        } else {
          console.log('Preço de venda atualizado com sucesso');
        }
      });
    } else {
      console.error('O preço de venda não pode ser inferior ao preço de custo.');
    }
  };