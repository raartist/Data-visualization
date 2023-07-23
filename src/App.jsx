import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { getAlcoholTypes, getHeaderData, getTripleMs } from "./utils/utils";
import wineData from "./Wine-Data.json";

// type Obvj = {
//   mean: number;
//   median: number;
//   mode: number;
// };

function App() {
  const [data] = useState([...wineData]);
  const [header, setHeader] = useState([]);
  const [flavanoidsMs, setFlavanoidsMs] = useState({});
  const [gammaMs, setGammaMs] = useState({});
  const [alcType, setAlcType] = useState([]);
  const key = "Alcohol";

  useEffect(() => {
    const temp = getHeaderData(alcType, key);
    setHeader([...temp]);
  }, [alcType && alcType.length]);

  useEffect(() => {
    setStates(key);
  }, [header && header.length]);

  useEffect(() => {
    setStates("Gamma");
  }, [setFlavanoidsMs,header]);

  const setStates = (key) => {
    const temp = getTripleMs(data, alcType, key);
    let mean2 = [];
    let median2 = [];
    let mode2 = [];
    temp.forEach((item) => {
      mean2.push(item.mean);
      median2.push(item.median);
      mode2.push(item.mode);
    });
    if (key === "Gamma") {
      setGammaMs({ mean: mean2, median: median2, mode: mode2 });
    } else {
      setFlavanoidsMs({ mean: mean2, median: median2, mode: mode2 });
    }
  };

  useEffect(() => {
    const tp = getAlcoholTypes(data, key);
    setAlcType([...tp]);
  }, [data]);

  return (
    <div className="App">
      <h2>
        <strong>
          <u>Data Visualization</u>
        </strong>
      </h2>
      {flavanoidsMs && <Table header={header} FMs={flavanoidsMs} GMs={gammaMs} />}
      {gammaMs && gammaMs.mean && gammaMs.mean.length > 0 && <Table header={header} FMs={flavanoidsMs} GMs={gammaMs} isGamma={true} />}
    </div>
  );
}

export default App;
