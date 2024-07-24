/**
 * Progress bar is used for lazy loading for modules
 */

type ProgressBarProps = {
  bgColor?: string;
  activeColor?: string;
  height?: string;
  fill?: string;
};

export default function ProgressBar({
  bgColor = "bg-slate-200",
  activeColor = "bg-slate-700",
  height = "h-2",
  fill = "w-1/2",
}: ProgressBarProps) {
  return (
    <>
      <div className={`progress-bar w-full ${height} ${bgColor}`}>
        <div
          className={`progress-bar-active ${fill} h-full ${activeColor}`}></div>
      </div>
    </>
  );
}
