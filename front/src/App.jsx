import Upload from "./Components/UploadCsv";
import ListAllProducts from "./Components/ListAllProducts";
import { useState } from "react";

function App() {
  const [isUpdated, setIsUpdated] = useState(false)
  const [isValue, setValues] = useState()

  return (
    <>
      <Upload setIsUpdated={setIsUpdated} isValue={isValue}/>
      <ListAllProducts isUpdated={isUpdated} setValues={setValues} />
    </>
  );
}
  
export default App