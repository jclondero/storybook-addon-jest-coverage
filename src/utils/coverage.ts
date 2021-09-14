export type statusProps = "bad" | "regular" | "good";

export const getColor = (status: statusProps) => {
  switch (status) {
    case "good":
      return "#388e3c";

    case "regular":
      return "#f57c00";

    default:
      return "#9a0036";
  }
};

export const getStatus = (percentage: number) => {
  if (percentage > 80) {
    return "good";
  }

  if (percentage > 60) {
    return "regular";
  }

  return "bad";
};
