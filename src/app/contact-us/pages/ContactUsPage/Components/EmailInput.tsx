import { trans } from "@mongez/localization";
import {
  emailRule,
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

type EmailInputPropsType = FormControlProps & {
  labelText?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
};

export default function EmailInput(props: EmailInputPropsType) {
  const { value, changeValue, error, id } = useFormControl({
    ...props,
    rules: [requiredRule, emailRule],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <div className={`flex flex-col gap-y-2 ${props.className}`}>
      {props.labelText && <label htmlFor={id}>{trans(props.labelText)}</label>}
      <input
        type="email"
        id={id}
        value={value || ""}
        placeholder={props.placeholder ? trans(props.placeholder) : ""}
        onChange={handleInputChange}
        className={`w-full h-full text-lg p-5 rounded-lg border border-gray-200 focus:border-primary outline-none ${props.inputClassName}`}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
