/**
 * Progress bar is used for lazy loading for modules
 */
export default function ProgressBar() {
  // { start, end }: { start?: number; end?: number } = { start: 0, end: 100 },
  return (
    <>
      <div className={`progress-bar w-full h-2 bg-slate-200`}>
        <div
          className={`progress-bar-active w-1/2 h-full bg-primary bg-primary`}></div>
      </div>
    </>
  );
}
