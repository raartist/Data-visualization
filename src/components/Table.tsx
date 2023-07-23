type TableProps = {
  header: string[];
  mean: number[];
  median: number[];
  mode: number[];
  classType:number[];
};

const Table = ({ header, mean, median, mode,classType }: TableProps) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            {header.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavonoids Mean</th>
          </tr>
          <tr>
            <th>Flavonoids Median</th>
          </tr>
          <tr>
            <th>Flavonoids Mode</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
