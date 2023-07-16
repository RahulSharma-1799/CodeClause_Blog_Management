import React from "react";
import { categories } from "../../constants/data";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";

const StyleTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyleButton = styled(Button)`
  margin: 20px;
  width:85%;
  background-color:#6495ed;
  color: #fff;
`;
const Categories = () => {
  return (
    <>
      <StyleButton variant="contained">Create Blog</StyleButton>
      <StyleTable>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
    </>
  );
};

export default Categories;
