import React from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage);

  const onChangeCallback = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCount = Number(event.target.value);
    onChange(1, newCount);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        variant="outlined"
        shape="rounded"
        size="small"
        sx={{
          ".Mui-selected": {
            color: "#fff",
            backgroundColor: "#0066CC",
          },
          ".MuiPaginationItem-root": {
            margin: "0 10px",
          },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
      />

      <span className={s.text2}>Cтрок в таблице</span>
    </div>
  );
};

export default SuperPagination;
