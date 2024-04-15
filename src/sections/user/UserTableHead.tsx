import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import { visuallyHidden } from "./utils";
import type { HeaderLabelModel } from "models/common";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

interface UserTableHeadProps {
  order?: 'asc' | 'desc';
  orderBy: string
  headLabel: HeaderLabelModel[]
  onRequestSort: (_event: any, id: string) => void
}

export default function UserTableHead({
  order,
  orderBy,
  headLabel,
  onRequestSort,
}: UserTableHeadProps) {
  const { t } = useTranslation()
  const onSort = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || "center"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={onSort(headCell.id)}
            >
              {t(headCell.label ?? '')}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
