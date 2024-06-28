import classNames from 'classnames';
import { ReactNode, forwardRef } from 'react';
import { TextField, Label, Input, TextFieldProps, InputProps, LabelProps, Text } from 'react-aria-components';

export type TextInputProps = InputProps & React.RefAttributes<HTMLInputElement> & {
  textFieldProps?: TextFieldProps,
  labelProps?: LabelProps,
  label?: string,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
  errorMessage?: string,
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  className,
  textFieldProps,
  labelProps,
  label,
  prependItem,
  appendItem,
  errorMessage,
  ...rest
}, ref) => {
  return (
    <TextField {...textFieldProps} className={
      classNames(
        "inline-flex flex-col w-full min-w-60",
        textFieldProps?.className
      )}>
      {label && (
        <Text slot="description" className={classNames(
          "font-medium text-black leading-6 min-w-60",
          labelProps?.className
        )}>{label}</Text>
      )}
      <Label className={classNames(className, "flex flex-row w-full bg-slate-200 rounded-xl h-12 outline outline-transparent focus-within:outline-blue-600")} {...labelProps}>
        {prependItem && (
          <span className="flex flex-column items-center justify-center h-full p-2">{prependItem}</span>
        )}
        <Input ref={ref} className={
          classNames(
            "bg-transparent p-3 flex-1 rounded-xl text-slate-900 placeholder:text-slate-500 outline-none",
            {
              "rounded-l-none pl-0": !!prependItem,
              "rounded-r-none pr-0": !!appendItem,
            }
          )}
          {...rest}
        />
        {appendItem && (
          <span className="flex flex-column items-center justify-center h-full p-2">{appendItem}</span>
        )}
      </Label>
      {errorMessage && (
        <div className="text-xs text-red-500">
          <span>{errorMessage}</span>
        </div>
      )}
    </TextField>
  )
});

export default TextInput