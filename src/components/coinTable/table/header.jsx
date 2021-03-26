import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";

function Header({ order, onRequestSort }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Coin</TableCell>
        <TableCell sortDirection={order}>
          <TableSortLabel
            active={order ? true : false}
            direction={order ? order : "asc"}
            onClick={() => onRequestSort()}
          >
            24h
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Market Cap</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default Header;
