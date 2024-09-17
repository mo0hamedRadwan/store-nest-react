import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function CheckboxInput(props: FormControlProps) {
  const { checked, setChecked, id, error } = useFormControl({
    rules: [requiredRule],
    ...props,
    type: "checkbox", // must be explicitly set to checkbox
  });

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked);
        }}
        id={id}
        className={`hidden ${error ? "notChecked" : ""}`}
      />
      {/* <Checkbox
        // onChange={e => {
        //   setChecked(e.target.checked);
        // }}
        checked={checked}
        onChange={_ => {
          setChecked(checked);
        }}
        id={id}
      /> */}
    </>
  );
}
