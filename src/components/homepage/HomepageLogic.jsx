import { useEffect, useState } from "react";
import filterData from "../service/filterData";
import services from "../service/getData";

function HomepageLogic(props) {
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState("");
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [coinSelected, setCoinSelected] = useState("");

  const handleModalChange = () => {
    setCoinSelected("");
    setModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    (async () => {
      const data = await services.getData();
      setData(data);
      setOriginalData(data);
    })();
  }, []);

  const handleSearchChange = ({ target }) => {
    const newData = filterData(originalData, target.value);
    setSearch(target.value);
    setData(newData);
  };
  return {
    search,
    handleSearchChange,
    data,
    modalOpen,
    handleModalChange,
    coinSelected,
    setCoinSelected,
  };
}

export default HomepageLogic;
