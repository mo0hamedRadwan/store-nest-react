import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function CheckboxInput(props: FormControlProps) {
  const { checked, setChecked, id, error } = useFormControl({
    rules: [requiredRule],
    ...props,
    type: "checkbox",
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
    </>
  );
}
