type TableProps = {
  header: string[];
 FMs:{
    mean:number[]
    median:number[]
    mode:number[]
 }
 GMs:{
    mean:number[]
    median:number[]
    mode:number[]
 }
  isGamma:boolean
};

const Table = ({ header, FMs, GMs, isGamma }: TableProps) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            {header.map((head,idx) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{isGamma?"Gamma":"Flavonoids"} Mean</th>
            {!isGamma && FMs.mean && FMs.mean.length > 0 && FMs.mean.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
            {isGamma && GMs.mean && GMs.mean.length > 0 && GMs.mean.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
          </tr>
          <tr>
            <th>{isGamma?"Gamma":"Flavonoids"} Median</th>
            {!isGamma && FMs.median && FMs.median.length > 0 && FMs.median.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
            {isGamma && GMs.median && GMs.median.length > 0 && GMs.median.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
          </tr>
          <tr>
            <th>{isGamma?"Gamma":"Flavonoids"} Mode</th>
            {!isGamma && FMs.mode && FMs.mode.length > 0 && FMs.mode.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
            { isGamma && GMs.mode && GMs.mode.length > 0 && GMs.mode.map((item)=><td key={item}>{item.toFixed(3)}</td>) }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
