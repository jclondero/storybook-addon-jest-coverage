export const defaultOptionsChart = {
  series: [76, 67, 61, 90],
  options: {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#388e3c", "#9a0036", "#f57c00", "#388e3c"],
    labels: ["Statements", "Branches", "Functions", "Lines"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 140,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName: string, opts: any) {
        return (
          seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
        );
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          legend: {
            offsetX: -30,
          },
        },
      },
      {
        breakpoint: 800,
        options: {
          legend: {
            offsetX: 40,
          },
        },
      },
      {
        breakpoint: 900,
        options: {
          legend: {
            offsetX: 80,
          },
        },
      },
    ],
  },
};
