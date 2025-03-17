"use client";

import { setSortBy } from "@redux/features/userData/userDataSlice";
import { useDispatch } from "react-redux";

const ThSort = ({ styles, label, sort }) => {
  const dispatch = useDispatch();

  const sortHandler = () => {
    dispatch(
      setSortBy({
        type: "setSort",
        payload: sort,
      })
    );
  };

  return (
    <th className={styles} onClick={sortHandler}>
      {label}
    </th>
  );
};

export default ThSort;
