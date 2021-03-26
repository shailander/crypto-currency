import React from "react";
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";

function Body(props) {
  const {
    coinData,
    stableSort,
    getComparator,
    order,
    orderBy,
    page,
    rowsPerPage,
    handleCoinSelect,
    calculateIndex,
    checkStatus,
    round,
  } = props;

  return (
    <TableBody>
      {stableSort(coinData, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow
            key={row.id}
            className="table-row"
            onClick={() => handleCoinSelect(row)}
          >
            <TableCell>{calculateIndex(index + 1)}</TableCell>
            <TableCell>
              <div className="coin-info">
                <img className="coin-img" src={row.image} />
                <span className="coin-name">{row.name}</span>
                <span className="coin-symbol">{row.symbol.toUpperCase()}</span>
              </div>
            </TableCell>
            <TableCell className={checkStatus(row.price_change_percentage_24h)}>
              {round(row.price_change_percentage_24h, 1)}%
            </TableCell>
            <TableCell align="right">
              <CurrencyFormat
                value={row.current_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </TableCell>
            <TableCell align="right">
              <CurrencyFormat
                value={row.market_cap}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export default Body;
