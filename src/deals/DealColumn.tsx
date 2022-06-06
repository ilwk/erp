import { Box, Typography } from "@mui/material";
import { Identifier } from "react-admin";

import { DealCard } from "./DealCard";
import { stageNames } from "./stages";
import { RecordMap } from "./DealListContent";

export const DealColumn = ({
  stage,
  dealIds,
  data,
}: {
  stage: string;
  dealIds: Identifier[];
  data: RecordMap;
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        paddingTop: "8px",
        paddingBottom: "16px",
        bgcolor: "#eaeaee",
        "&:first-child": {
          paddingLeft: "5px",
          borderTopLeftRadius: 5,
        },
        "&:last-child": {
          paddingRight: "5px",
          borderTopRightRadius: 5,
        },
      }}
    >
      <Typography align="center" variant="subtitle1">
        {/* @ts-ignore */}
        {stageNames[stage]}
      </Typography>
      <div>
        {
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
              padding: "5px",
              "&.isDraggingOver": {
                bgcolor: "#dadadf",
              },
            }}
          >
            {dealIds.map((id, index) => (
              <DealCard key={id} index={index} deal={data[id]} />
            ))}
          </Box>
        }
      </div>
    </Box>
  );
};
