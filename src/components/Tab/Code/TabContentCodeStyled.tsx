import { styled } from "@storybook/theming";

export const TabContentCodeStyled = styled.div`
  .small {
    font-size: 12px;
  }
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  h1 {
    font-size: 20px;
    margin: 0;
  }
  h2 {
    font-size: 14px;
  }
  pre {
    font: 12px/1.4 Consolas, "Liberation Mono", Menlo, Courier, monospace;
    margin: 0;
    padding: 0;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
  }
  a {
    color: #0074d9;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .strong {
    font-weight: bold;
  }
  .space-top1 {
    padding: 10px 0 0 0;
  }
  .pad2y {
    padding: 20px 0;
  }
  .pad1y {
    padding: 10px 0;
  }
  .pad2x {
    padding: 0 20px;
  }
  .pad2 {
    padding: 20px;
  }
  .pad1 {
    padding: 10px;
  }
  .space-left2 {
    padding-left: 55px;
  }
  .space-right2 {
    padding-right: 20px;
  }
  .center {
    text-align: center;
  }
  .clearfix {
    display: block;
  }
  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .fl {
    float: left;
  }
  @media only screen and (max-width: 640px) {
    .col3 {
      width: 100%;
      max-width: 100%;
    }
    .hide-mobile {
      display: none !important;
    }
  }

  .quiet {
    color: #7f7f7f;
    color: rgba(0, 0, 0, 0.5);
  }
  .quiet a {
    opacity: 0.7;
  }

  .fraction {
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 10px;
    color: #555;
    background: #e8e8e8;
    padding: 4px 5px;
    border-radius: 3px;
    vertical-align: middle;
  }

  div.path a:link,
  div.path a:visited {
    color: #333;
  }
  table.coverage {
    border-collapse: collapse;
    margin: 10px 0 0 0;
    padding: 0;
  }

  table.coverage td {
    margin: 0;
    padding: 0;
    vertical-align: top;
  }
  table.coverage td.line-count {
    text-align: right;
    padding-right: 5px;
  }
  table.coverage td.line-coverage {
    text-align: right;
    padding-right: 10px;
    min-width: 20px;
  }

  table.coverage td span.cline-any {
    display: inline-block;
    padding: 0 5px;
    width: 100%;
  }
  .missing-if-branch {
    display: inline-block;
    margin-right: 5px;
    border-radius: 3px;
    position: relative;
    padding: 0 4px;
    background: #333;
    color: yellow;
  }

  .skip-if-branch {
    display: none;
    margin-right: 10px;
    position: relative;
    padding: 0 4px;
    background: #ccc;
    color: white;
  }
  .missing-if-branch .typ,
  .skip-if-branch .typ {
    color: inherit !important;
  }
  .coverage-summary {
    border-collapse: collapse;
    width: 100%;
  }
  .coverage-summary tr {
    border-bottom: 1px solid #bbb;
  }
  .keyline-all {
    border: 1px solid #ddd;
  }
  .coverage-summary td,
  .coverage-summary th {
    padding: 10px;
  }
  .coverage-summary tbody {
    border: 1px solid #bbb;
  }
  .coverage-summary td {
    border-right: 1px solid #bbb;
  }
  .coverage-summary td:last-child {
    border-right: none;
  }
  .coverage-summary th {
    text-align: left;
    font-weight: normal;
    white-space: nowrap;
  }
  .coverage-summary th.file {
    border-right: none !important;
  }
  .coverage-summary th.pct {
  }
  .coverage-summary th.pic,
  .coverage-summary th.abs,
  .coverage-summary td.pct,
  .coverage-summary td.abs {
    text-align: right;
  }
  .coverage-summary td.file {
    white-space: nowrap;
  }
  .coverage-summary td.pic {
    min-width: 120px !important;
  }
  .coverage-summary tfoot td {
  }

  .coverage-summary .sorter {
    height: 10px;
    width: 7px;
    display: inline-block;
    margin-left: 0.5em;
    background: url(sort-arrow-sprite.png) no-repeat scroll 0 0 transparent;
  }
  .coverage-summary .sorted .sorter {
    background-position: 0 -20px;
  }
  .coverage-summary .sorted-desc .sorter {
    background-position: 0 -10px;
  }
  .status-line {
    height: 10px;
  }
  /* yellow */
  .cbranch-no {
    background: yellow !important;
    color: #111;
  }
  /* dark red */
  .red.solid,
  .status-line.low,
  .low .cover-fill {
    background: #c21f39;
  }
  .low .chart {
    border: 1px solid #c21f39;
  }
  .highlighted,
  .highlighted .cstat-no,
  .highlighted .fstat-no,
  .highlighted .cbranch-no {
    background: #c21f39 !important;
  }
  /* medium red */
  .cstat-no,
  .fstat-no,
  .cbranch-no,
  .cbranch-no {
    background: #f6c6ce;
  }
  /* light red */
  .low,
  .cline-no {
    background: #fce1e5;
  }
  /* light green */
  .high,
  .cline-yes {
    background: rgb(230, 245, 208);
  }
  /* medium green */
  .cstat-yes {
    background: rgb(161, 215, 106);
  }
  /* dark green */
  .status-line.high,
  .high .cover-fill {
    background: rgb(77, 146, 33);
  }
  .high .chart {
    border: 1px solid rgb(77, 146, 33);
  }
  /* dark yellow (gold) */
  .status-line.medium,
  .medium .cover-fill {
    background: #f9cd0b;
  }
  .medium .chart {
    border: 1px solid #f9cd0b;
  }
  /* light yellow */
  .medium {
    background: #fff4c2;
  }

  .cstat-skip {
    background: #ddd;
    color: #111;
  }
  .fstat-skip {
    background: #ddd;
    color: #111 !important;
  }
  .cbranch-skip {
    background: #ddd !important;
    color: #111;
  }

  span.cline-neutral {
    background: #eaeaea;
  }

  .coverage-summary td.empty {
    opacity: 0.5;
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 1;
    color: #888;
  }

  .cover-fill,
  .cover-empty {
    display: inline-block;
    height: 12px;
  }
  .chart {
    line-height: 0;
  }
  .cover-empty {
    background: white;
  }
  .cover-full {
    border-right: none !important;
  }
  pre.prettyprint {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .com {
    color: #999 !important;
  }
  .ignore-none {
    color: #999;
    font-weight: normal;
  }

  .wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -48px;
  }
  .footer,
  .push {
    height: 48px;
  }

  .pln {
    color: #000;
  }
  @media screen {
    .str {
      color: #080;
    }
    .kwd {
      color: #008;
    }
    .com {
      color: #800;
    }
    .typ {
      color: #606;
    }
    .lit {
      color: #066;
    }
    .pun,
    .opn,
    .clo {
      color: #660;
    }
    .tag {
      color: #008;
    }
    .atn {
      color: #606;
    }
    .atv {
      color: #080;
    }
    .dec,
    .var {
      color: #606;
    }
    .fun {
      color: red;
    }
  }
  @media print, projection {
    .str {
      color: #060;
    }
    .kwd {
      color: #006;
      font-weight: bold;
    }
    .com {
      color: #600;
      font-style: italic;
    }
    .typ {
      color: #404;
      font-weight: bold;
    }
    .lit {
      color: #044;
    }
    .pun,
    .opn,
    .clo {
      color: #440;
    }
    .tag {
      color: #006;
      font-weight: bold;
    }
    .atn {
      color: #404;
    }
    .atv {
      color: #060;
    }
  }
  pre.prettyprint {
    padding: 2px;
    border: 1px solid #888;
  }
  ol.linenums {
    margin-top: 0;
    margin-bottom: 0;
  }
  li.L0,
  li.L1,
  li.L2,
  li.L3,
  li.L5,
  li.L6,
  li.L7,
  li.L8 {
    list-style-type: none;
  }
  li.L1,
  li.L3,
  li.L5,
  li.L7,
  li.L9 {
    background: #eee;
  }
`;