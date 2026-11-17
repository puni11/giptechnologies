// The count-up now plays inside <Preloader />, so the navbar just shows the final value.
export const REVENUE_TARGET = 1406515080;
export const formatRevenue = (n) => `₹${n.toLocaleString("en-IN")}+`;

export default function RevenueCounter() {
  return (
    <span className="text-[14px] leading-none font-extrabold tracking-[-0.4px] text-accent tabular-nums">
      {formatRevenue(REVENUE_TARGET)}
    </span>
  );
}