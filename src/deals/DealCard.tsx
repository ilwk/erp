import * as React from "react";
import { ReferenceField, useRedirect } from "react-admin";
import { Box, Card, Typography } from "@mui/material";

import { LogoField } from "../companies/LogoField";
import { Deal } from "../types";

export const DealCard = ({ deal, index }: { deal: Deal; index: number }) => {
  const redirect = useRedirect();
  if (!deal) return null;

  const handleClick = () => {
    redirect(`/deals/${deal.id}/show`);
  };

  return (
    <Box sx={{ marginBottom: 1 }} onClick={handleClick}>
      <Card>
        <Box padding={1} display="flex">
          <ReferenceField
            source="company_id"
            record={deal}
            reference="companies"
          >
            <LogoField size="small" />
          </ReferenceField>
          <Box sx={{ marginLeft: 1 }}>
            <Typography variant="body2" gutterBottom>
              {deal.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {deal.amount.toLocaleString("en-US", {
                notation: "compact",
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
                minimumSignificantDigits: 3,
              })}
              , {deal.type}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
