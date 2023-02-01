import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [fare, setFare] = useState([
    {
      id: 0,
      isHover: false,
      col: [
        {
          colId: 1,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 2,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 3,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 4,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 5,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 6,
          rowId: 0,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 1,
      isHover: false,
      col: [
        {
          colId: 7,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 8,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 9,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 10,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 11,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 12,
          rowId: 1,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 2,
      isHover: false,
      col: [
        {
          colId: 13,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 14,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 15,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 16,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 17,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 18,
          rowId: 2,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 3,
      isHover: false,
      col: [
        {
          colId: 19,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 20,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 21,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 22,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 23,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 24,
          rowId: 3,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 4,
      isHover: false,
      col: [
        {
          colId: 25,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 26,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 27,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 28,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 29,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 30,
          rowId: 4,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 5,
      isHover: false,
      col: [
        {
          colId: 31,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 32,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 33,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 34,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 35,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 36,
          rowId: 5,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
    {
      id: 6,
      isHover: false,
      col: [
        {
          colId: 37,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 38,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 39,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 40,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 41,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
        {
          colId: 42,
          rowId: 6,
          lowestFare: "SR 20,311.00",
          isActive: false,
          isHover: false,
        },
      ],
    },
  ]);

  const selectColor = (rowid, colid) => {
    // find index for column array
    const colIndex = fare[rowid].col.findIndex((ele) => ele.colId === colid);
    //update true
    if (fare[rowid].col[colIndex].isActive === false) {
      //update main array
      fare.filter((elem) => elem.col.filter((elem) => (elem.isActive = false)));
      //selected item add class
      fare[rowid].col[colIndex].isActive = true;
      //update main array
      const tempArray = fare.filter((elem) =>
        elem.col.filter((elem) => elem.colId === colid)
      );
      setFare(tempArray);
    } else {
      const tempArray = fare.filter((elem) =>
        elem.col.filter((elem) => (elem.isActive = false))
      );
      setFare(tempArray);
    }
  };

  const bgChangeRowColumn = (rowid, colid) => {
    let colInx = fare[rowid].col.findIndex((ele) => ele.colId === colid);
    let rowInx = fare.findIndex((ele) => ele.id === rowid);

    if (fare[rowid].col[colInx].isHover === false) {
      //update main array
      fare.filter((elem) => elem.col.filter((elem) => (elem.isHover = false)));
      fare.filter((elem) => (elem.isHover = false));
      fare[rowInx].isHover = true;
      //selected item add class for column and rows
      for (let i = 0; i <= rowid; i++) {
        for (let j = 0; j <= colInx; j++) {
          fare[rowid].col[j].isHover = true;
          fare[i].col[colInx].isHover = true;
        }
      }

      const tempArr = fare.map((elem) => elem);
      setFare(tempArr);
    } else {
      fare.filter((elem) => elem.col.filter((elem) => (elem.isHover = false)));
      fare.filter((elem) => (elem.isHover = false));
      fare[rowInx].isHover = true;
      //selected item add class for column and rows
      for (let i = 0; i <= rowid; i++) {
        for (let j = 0; j <= colInx; j++) {
          fare[rowid].col[j].isHover = true;
          fare[i].col[colInx].isHover = true;
        }
      }

      const tempArr = fare.map((elem) => elem);
      setFare(tempArr);
    }
  };

  return (
    <>
      <div className="matrix">matrix</div>
      <div className="table">
        <span className="return-label">Return</span>
        <table>
          <tbody>
            <tr className="t-row">
              <th className="head">Departure</th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
              <th className="t-head border-row" >
                <span className="header-title">Mon 23 JAN</span>
              </th>
            </tr>
            {
            /* /* <tr className="t-row f-row">
              <td className="t-cell">Mon 23 JAN</td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Tue 24 JAN</td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Wed 25 JAN</td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Thu 26 JAN</td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Fri 27 JAN</td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={btnClick ? "fare-btn btnColor" : "fare-btn"}
                  onClick={selectColor}
                >
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Sat 28 JAN</td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr>
            <tr className="t-row">
              <td className="t-cell">Sun 29 JAN</td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
              <td className="t-cell">
                <button className="fare-btn">
                  <span>SR 20,311.00</span>
                </button>
              </td>
            </tr> */}
            {fare.map((item) => (
              <tr className="t-row" key={item.id} id={item.id}>
                <td
                  className={item.isHover ? "t-cell bg-color-hover" : "t-cell"}
                >
                  Mon 23 JAN
                </td>
                {fare[item.id].col.map((item) => (
                  <td
                    className={
                      item.isHover ? "t-cell bg-color-hover" : "t-cell"
                    }
                    key={item.colId}
                  >
                    <button
                      className={
                        item.isActive ? "fare-btn btn-color" : "fare-btn"
                      }
                      onClick={() => selectColor(item.rowId, item.colId)}
                      onMouseOver={() =>
                        bgChangeRowColumn(item.rowId, item.colId)
                      }
                      id={item.colId}
                    >
                      <span>{item.lowestFare}</span>
                    </button>
                  </td>
                ))}
                {/* <td className="t-cell">
                <button
                  className={ "fare-btn"}
                  onClick={()=>selectColor(item.id)}
                >
                  <span>{item.lowestFare}</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={"fare-btn"}
                  onClick={()=>selectColor(item.id)}
                >
                  <span>{item.lowestFare}</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={"fare-btn"}
                  onClick={()=>selectColor(item.id)}
                >
                  <span>{item.lowestFare}</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={"fare-btn"}
                  onClick={()=>selectColor(item.id)}
                >
                  <span>{item.lowestFare}</span>
                </button>
              </td>
              <td className="t-cell">
                <button
                  className={"fare-btn"}
                  onClick={()=>selectColor(item.id)}
                >
                  <span>{item.lowestFare}</span>
                </button>
              </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
