import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../pages/SingleProduct";

function Review() {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await axios.get(url + "/product-specification-list/");
      groupData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const groupData = (data) => {
    const grouped = {};
    console.log(data, "data");

    data.forEach((item) => {
      const { id, title } = item;
      if (!grouped[id]) {
        grouped[id] = { title, rows: [] };
      }

      if (!grouped[id].rows[item.order_id - 1]) {
        grouped[id].rows[item.order_id - 1] = [];
      }

      grouped[id].rows[item.order_id - 1].push(
        ...item?.specification_groups?.map((row) => [
          ...row?.specification_rows?.map((el) => el?.value),
        ])
      );
    });

    console.log(grouped, "grouped");

    setGroupedData(grouped);
  };

  return (
    <div className="container d-block">
      {Object.keys(groupedData).length === 0 && <div>Nothing was found!</div>}
      {Object.values(groupedData).map((group, index) => (
        <div key={index}>
          <h5 className="text-center my-4">{group.title}</h5>
          <table className="table table-bordered table-striped mb-0 mx-auto">
            <tbody>
              {group.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell != null ? cell : ""}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Review;
