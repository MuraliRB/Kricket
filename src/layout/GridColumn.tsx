import { Grid } from "@chakra-ui/react";
import React from "react";

interface GridColumnsProps {
  children: React.ReactNode;
  columns: number;
  unit: number;
  gap: number;
}

export default function GridColumn({
  children,
  columns,
  unit,
  gap,
}: GridColumnsProps) {
  return (
    <Grid templateColumns={`repeat(${columns}, ${unit}fr)`} gap={gap}>
      {children}
    </Grid>
  );
}
