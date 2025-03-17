"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisplay,
  setInitialData,
} from "@redux/features/userData/userDataSlice";
import TableRaw from "@elements/TableRaw";

const TableBody = ({ data }) => {
  const dispatch = useDispatch();
  const displayData = useSelector(selectDisplay);
  useEffect(() => {
    dispatch(setInitialData(data));
  }, []);

  return (
    <tbody>
      {displayData.length
        ? displayData.map((user) => <TableRaw key={user.id} user={user} />)
        : data.map((user) => <TableRaw key={user.id} user={user} />)}
    </tbody>
  );
};

export default TableBody;
