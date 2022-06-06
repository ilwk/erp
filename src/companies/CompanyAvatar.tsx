import * as React from "react";
import { Avatar } from "@mui/material";
import { useRecordContext } from "react-admin";

import { Company } from "../types";

export const CompanyAvatar = (props: {
  record?: Company;
  size?: "small" | "large";
}) => {
  const { size = "large" } = props;
  const record = useRecordContext<Company>(props);
  if (!record) return null;
  return (
    <Avatar
      src={`https://picsum.photos/seed/${record.name}/200`}
      alt={record.name}
      sx={{
        bgcolor: "aliceblue",
        "& img": { objectFit: "contain" },
      }}
      imgProps={{ className: size }}
    />
  );
};
