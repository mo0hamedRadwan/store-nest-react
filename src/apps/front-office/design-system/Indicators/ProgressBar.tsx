/**
 * Progress bar is used for lazy loading for modules
 */
export default function ProgressBar() {
  return (
    <>
      <div className="progress-bar w-full h-3 bg-slate-400">
        <div className="progress-bar-active w-1/2 h-full bg-slate-700"></div>
      </div>
    </>
  );
}
