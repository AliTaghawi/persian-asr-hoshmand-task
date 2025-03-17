"use client";

import { setInitialData, setSortBy } from "@redux/features/userData/userDataSlice";
import { useDispatch } from "react-redux";

const ThSort = ({data, styles, label, sort }) => {
  const dispatch = useDispatch();

  const sortHandler = () => {
    dispatch(setInitialData(data))
    dispatch(
      setSortBy(sort)
    );
  };

  return (
    <th className={styles} onClick={sortHandler}>
      {label}
    </th>
  );
};

export default ThSort;
