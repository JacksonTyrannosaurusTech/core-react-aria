import classNames from "classnames";
import { forwardRef } from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";

export type ButtonVariant = "solid" | "outline" | "ghost"

export type ButtonProps = AriaButtonProps & React.RefAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  variant = "solid",
  ...rest
}, ref) => {

  function ButtonVariant(): ButtonProps["className"] {
    switch (variant) {
      case "ghost":
        return "bg-transparent text-black border-transparent"
      case "outline":
        return "text-orange-500 bg-transparent border-orange-500"
      case "solid":
      default:
        return "text-white bg-orange-500 border-transparent"
    }
  }

  return (
    <AriaButton
      ref={ref}
      className={
        classNames(
          "inline-flex items-center justify-center min-w-[120px] h-12 p-3 rounded-xl border border-solid font-medium",
          ButtonVariant(),
          className
        )
      }
      {...rest}>
      {children}
    </AriaButton>
  )
});

export default Button
