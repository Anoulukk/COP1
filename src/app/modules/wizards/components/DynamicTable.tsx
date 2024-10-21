import { useState } from "react";
import { KTIcon } from "../../../../_metronic/helpers";
const DynamicTable = () => {
  const [rows, setRows] = useState([
    { id: Date.now(), areaNo: "", areaName: "", areaSize: "", percentage: "", remark: "" },
  ]);

  const handleAddRow = () => {
    // Create a new empty row with unique id
    const newRow = {
      id: Date.now(), // New unique id
      areaNo: "",
      areaName: "",
      areaSize: "",
      percentage: "",
      remark: "",
    };
    setRows([...rows, newRow]);
  };
  const handleRemoveRow = (id: any) => {
    // Only remove the row if more than one row is present
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
    <div>
      <table className="table table-row-bordered table-row-gray-500">
        <thead>
          <tr>
            <th>ລຳດັບ</th>
            <th>ຊື່ພື້ນທີ່</th>
            <th>ເນື້ອທີ່ (ຕາແມັດ)</th>
            <th>ສ່ວນຮ້ອຍ</th>
            <th>ໝາຍເຫດ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.areaNo}
                  onChange={(e) => handleInputChange(row.id, "areaNo", e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.areaName}
                  onChange={(e) => handleInputChange(row.id, "areaName", e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.areaSize}
                  onChange={(e) => handleInputChange(row.id, "areaSize", e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.percentage}
                  onChange={(e) => handleInputChange(row.id, "percentage", e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.remark}
                  onChange={(e) => handleInputChange(row.id, "remark", e.target.value)}
                  className="form-control"
                />
              </td>
              <td>
                <div className="d-flex">
                  {/* Hide remove button if there's only one row */}
                  {rows.length > 1 && (
                    <a
                      href="#"
                      className="btn btn-sm btn-icon btn-bg-light btn-active-danger"
                      onClick={() => handleRemoveRow(row.id)}
                    >
                      <KTIcon iconName="minus" className="fs-5" />
                    </a>
                  )}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-primary ms-3"
                    onClick={handleAddRow}
                  >
                    <KTIcon iconName="plus" className="fs-5" />
                  </a>
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