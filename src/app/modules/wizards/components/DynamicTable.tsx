import { FC, useState } from "react";
import { KTIcon } from "../../../../_metronic/helpers";

interface DynamicTableProps {
  data: {
    classified: string;
    code: string;
    description: string;
    input_type: string;
    column: string[]; 
  };
}

const DynamicTable: FC<{data:any}> = ({ data }) => {
  const [rows, setRows] = useState([
    { id: Date.now(), areaNo: "", areaName: "", areaSize: "", percentage: "", remark: "" },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      areaNo: "",
      areaName: "",
      areaSize: "",
      percentage: "",
      remark: "",
    };
    setRows([...rows, newRow]);
  };
  const handleRemoveRow = (id: any) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleInputChange = (id: any, field: any, value: any) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };
  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap", width:"50vw" }}> {/* Enable horizontal scrolling */}
      <table className="table table-row-bordered table-row-gray-500" style={{ minWidth: "1500px" }}> {/* Add a min-width */}
        <thead>
          <tr>
            {data.map((colHeader:any, index:any) => (
              <th key={index}>{colHeader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {data.map((colHeader:any, colIndex:any) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={row[colHeader as keyof typeof row] || ""}
                    onChange={(e) => handleInputChange(row.id, colHeader, e.target.value)}
                    className="form-control"
                  />
                </td>
              ))}
              <td>
                <div className="d-flex">
                <span
                    className="btn btn-sm btn-icon btn-bg-light btn-active-primary me-3"
                    onClick={handleAddRow}
                  >
                    <KTIcon iconName="plus" className="fs-5" />
                  </span>
                  {rows.length > 1 && (
                    <span
                      className="btn btn-sm btn-icon btn-bg-light btn-active-danger"
                      onClick={() => handleRemoveRow(row.id)}
                    >
                      <KTIcon iconName="minus" className="fs-5" />
                    </span>
                  )}
  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
