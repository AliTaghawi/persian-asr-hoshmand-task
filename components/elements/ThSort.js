"use client";

import { setSortBy } from "@redux/features/userData/userDataSlice";
import { useDispatch } from "react-redux";

const ThSort = ({data, styles, label, sort }) => {
  const dispatch = useDispatch();

  const sortHandler = () => {
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
