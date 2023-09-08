connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados');
    }
  });
  
connection.query('SELECT * FROM tabela', (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
    } else {
      console.log('Resultados da consulta:', results);
    }
});

connection.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão com o banco de dados:', err);
    } else {
      console.log('Conexão com o banco de dados fechada com sucesso');
    }
  });  
  