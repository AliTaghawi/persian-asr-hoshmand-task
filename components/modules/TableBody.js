"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisplay,
  setUsersData,
  searchTextValue
} from "@redux/features/userData/userDataSlice";
import TableRaw from "@elements/TableRaw";

const TableBody = ({ data }) => {
  const dispatch = useDispatch();
  const displayData = useSelector(selectDisplay);
  const searchText = useSelector(searchTextValue)
  useEffect(() => {
    dispatch(setUsersData(data));
  }, []);

  return (
    <tbody>
      {displayData.length || searchText
        ? displayData.map((user) => <TableRaw key={user.id} user={user} />)
        : data.map((user) => <TableRaw key={user.id} user={user} />)}
    </tbody>
  );
};

export default TableBody;
