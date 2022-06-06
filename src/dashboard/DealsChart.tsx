import * as React from "react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useGetList } from "react-admin";
import { startOfMonth, format } from "date-fns";
import { Deal } from "../types";

import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

const multiplier = {
  opportunity: 0.2,
  "proposal-sent": 0.5,
  "in-negociation": 0.8,
  delayed: 0.3,
};

export const DealsChart = () => {
  const { data, isLoading } = useGetList<Deal>("deals", {
    pagination: { perPage: 100, page: 1 },
    sort: {
      field: "start_at",
      order: "ASC",
    },
  });
  const [months, setMonths] = useState<any[]>([]);

  useEffect(() => {
    if (!data) return;
    const dealsByMonth = data.reduce((acc, deal) => {
      const month = startOfMonth(
        deal.start_at ? new Date(deal.start_at) : new Date()
      ).toISOString();
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(deal);
      return acc;
    }, {} as any);

    const amountByMonth = Object.keys(dealsByMonth).map((month) => {
      return {
        date: format(new Date(month), "MMM"),
        won: dealsByMonth[month]
          .filter((deal: Deal) => deal.stage === "won")
          .reduce((acc: number, deal: Deal) => {
            acc += deal.amount;
            return acc;
          }, 0),
        pending: dealsByMonth[month]
          .filter((deal: Deal) => !["won", "lost"].includes(deal.stage))
          .reduce((acc: number, deal: Deal) => {
            // @ts-ignore
            acc += deal.amount * multiplier[deal.stage];
            return acc;
          }, 0),
        lost: dealsByMonth[month]
          .filter((deal: Deal) => deal.stage === "lost")
          .reduce((acc: number, deal: Deal) => {
            acc -= deal.amount;
            return acc;
          }, 0),
      };
    });

    setMonths(amountByMonth);
  }, [data]);

  if (isLoading) return null; // FIXME return skeleton instead

  const range = months.reduce(
    (acc, month) => {
      acc.min = Math.min(acc.min, month.lost);
      acc.max = Math.max(acc.max, month.won + month.pending);
      return acc;
    },
    { min: 0, max: 0 }
  );

  console.log(months);

  // We'll make some helpers to get at the data we want
  const x = (d) => d.pending;
  const y = (d) => +d.won / 100;
  const width = 500;
  const height = 500;

  const margin = { top: 20, bottom: 20, left: 20, right: 20 };
  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: months.map(x),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...months.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box ml={2} mr={2} display="flex">
          <AttachMoneyIcon color="disabled" fontSize="large" />
        </Box>
        <Link
          underline="none"
          variant="h5"
          color="textSecondary"
          component={RouterLink}
          to="/deals"
        >
          Upcoming Deal Revenue
        </Link>
      </Box>
      <Box height={height}>
        <svg width={width} height={height}>
          {months.map((d, i) => {
            const barHeight = yMax - yPoint(d);
            return (
              <Group key={`bar-${i}`}>
                <Bar
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill="#fc2e1c"
                ></Bar>
              </Group>
            );
          })}
        </svg>
      </Box>
    </>
  );
};
