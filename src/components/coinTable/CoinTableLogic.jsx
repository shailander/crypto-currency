import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import services from "../service/getData";
import transformCoinData from "../service/transformCoinData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: "auto",
  },
});

const orderBy = "price_change_percentage_24h";

function CoinTableLogic(handleModalChange, setCoinSelected) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState(false);

  const calculateIndex = (index) => {
    return page * rowsPerPage + index;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const checkStatus = (perChange) =>
    perChange > 0 ? "perChange" : "perChange negative";

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    if (!order) {
      return array;
    }
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  const onRequestSort = () => {
    const isAsc = order ? order === "asc" : true;
    setOrder(isAsc ? "desc" : "asc");
  };

  const handleCoinSelect = async ({ id, name }) => {
    handleModalChange();
    const dayData = await services.getDayData(id);
    let priceData = transformCoinData(dayData);
    setCoinSelected({
      name: name,
      priceData: priceData,
    });
  };

  return {
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
  };
}

export default CoinTableLogic;
