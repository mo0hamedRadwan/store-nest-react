import { trans } from "@mongez/localization";
import { FormControlProps, requiredRule, useFormControl } from "@mongez/react-form";


type TextAreaPropsType = FormControlProps & {
    labelText?: string;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
};

export default function TextArea(props: TextAreaPropsType) {
    const { value, changeValue, error, id } = useFormControl({
        ...props,
        rules: [requiredRule],
    });
    return (
        <div className={`w-full flex flex-col gap-y-2 ${props.className}`}>
            {props.labelText && <label htmlFor={id}>{trans(props.labelText)}</label>}
            <textarea
                id={id}
                value={value}
                placeholder={trans(props.placeholder || "")}
                onChange={changeValue}
                className={`w-full h-full text-lg p-5 rounded-lg border border-gray-200 focus:border-primary outline-none ${props.inputClassName}`}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}
