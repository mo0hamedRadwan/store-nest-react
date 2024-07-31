export type SectionHeaderProps = {
  headerText: string;
  customComponent?: React.ReactNode;
  sectionName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SectionHeader({
  headerText,
  customComponent,
  sectionName = "section",
}: SectionHeaderProps) {
  return (
    <>
      <h2
        className={`${sectionName}__header-text text-3xl lg:text-4xl font-bold text-black-soft-foreground`}>
        {headerText}
      </h2>

      {customComponent && customComponent}
    </>
  );
}
