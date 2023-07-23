import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { getAlcoholTypes, getHeaderData, getMeanList } from "./utils/utils";
import wineData from "./Wine-Data.json";

// type Obvj = {
//   mean: number;
//   median: number;
//   mode: number;
// };

function App() {
  const [data] = useState([...wineData]);
  const [header, setHeader] = useState([]);
  const [mean, setMean] = useState([]);
  const [median, setMedian] = useState([]);
  const [mode, setMode] = useState([]);
  const [alcType, setAlcType] = useState([]);
  const key = "Alcohol";

  useEffect(() => {
    const temp = getHeaderData(alcType, key);
    setHeader([...temp]);
  }, [alcType && alcType.length]);

  useEffect(() => {
    getMeanList(data, alcType);
  }, [header && header.length]);

  useEffect(() => {
    const tp = getAlcoholTypes(data, key);
    setAlcType([...tp]);
  }, [data]);

  console.log(header);
  return (
    <div className="App">
      <h2>
        <strong>
          <u>Data Visualization</u>
        </strong>
      </h2>
      <Table header={header} classType={alcType} />
    </div>
  );
}

export default App;
