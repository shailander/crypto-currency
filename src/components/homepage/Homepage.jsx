import React from "react";
import HomepageLogic from "./HomepageLogic";
import Search from "../search/Search";
import CoinTable from "../coinTable/CoinTable";
import PopupModal from "../popupModal/PopupModal";

function Homepage(props) {
  const {
    search,
    handleSearchChange,
    data,
    modalOpen,
    handleModalChange,
    coinSelected,
    setCoinSelected,
  } = HomepageLogic();
  return (
    <>
      {
        <PopupModal
          open={modalOpen}
          handleClose={handleModalChange}
          data={coinSelected}
        />
      }
      <Search searchValue={search} handleChange={handleSearchChange} />
      <CoinTable
        coinData={data}
        handleModalChange={handleModalChange}
        setCoinSelected={setCoinSelected}
      />
    </>
  );
}

export default Homepage;
