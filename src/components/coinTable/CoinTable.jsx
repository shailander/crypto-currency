import React from "react";
import { Table, TableContainer, Paper } from "@material-ui/core";
import "./CoinTable.scss";
import CoinTableLogic from "./CoinTableLogic";
import Header from "./table/header";
import Body from "./table/body";
import Footer from "./table/footer";

function CoinTable({ coinData, handleModalChange, setCoinSelected }) {
  const {
    orderBy,
    calculateIndex,
    handleChangePage,
    handleChangeRowsPerPage,
    classes,
    round,
    checkStatus,
    getComparator,
    stableSort,
    onRequestSort,
    handleCoinSelect,
    page,
    rowsPerPage,
    order,
  } = CoinTableLogic(handleModalChange, setCoinSelected);
  if (!coinData) {
    return <div>No Data</div>;
  }
  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <Header order={order} onRequestSort={onRequestSort} />
          <Body
            coinData={coinData}
            stableSort={stableSort}
            getComparator={getComparator}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
            handleCoinSelect={handleCoinSelect}
            calculateIndex={calculateIndex}
            checkStatus={checkStatus}
            round={round}
          />
          <Footer
            coinData={coinData}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Table>
      </TableContainer>
    </div>
  );
}

export default CoinTable;
