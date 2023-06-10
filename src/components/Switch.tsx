import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const switchClasses = cva("", {
  variants: {
    variant: {
      primary: "peer-checked:bg-sky-500",
      secondary: "peer-checked:bg-gray-500",
      success: "peer-checked:bg-green-500",
      danger: "peer-checked:bg-red-500",
      warning: "peer-checked:bg-yellow-500",
      info: "peer-checked:bg-blue-500",
      light: "peer-checked:bg-gray-100",
      dark: "peer-checked:bg-gray-800",
    },
    size: {
      small: "w-14 before:h-6 before:w-6 before:peer-checked:translate-x-6",
      normal: "w-[68px] before:h-8 before:w-8 before:peer-checked:translate-x-7",
      large: "w-20 before:h-10 before:w-10 before:peer-checked:translate-x-8",
    },
  },
  defaultVariants: {
    size: "normal",
    variant: "primary",
  },
});

const switchSizeClasses = cva("", {
  variants: {
    size: {
      small: "h-8",
      normal: "h-10",
      large: "h-12",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

const switchLabelClasses = cva("", {
  variants: {
    size: {
      small: "ml-16",
      normal: "ml-[76px]",
      large: "ml-[88px]",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

const switchIconClasses = cva("", {
  variants: {
    size: {
      small: "h-6 w-6 peer-checked:translate-x-6",
      normal: "h-8 w-8 peer-checked:translate-x-7",
      large: "h-10 w-10 peer-checked:translate-x-8",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export interface SwitchButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof switchClasses>,
    VariantProps<typeof switchSizeClasses>,
    VariantProps<typeof switchLabelClasses>,
    VariantProps<typeof switchIconClasses> {
  offIcon?: React.ReactNode;
  onIcon?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Switch: React.FC<SwitchButtonProps> = ({ className, variant, size, children, ...props }) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <label htmlFor={props.id} className={clsx("relative inline-block", switchSizeClasses({ size }))}>
      {children ? (
        <span className={clsx("flex h-full items-center text-xl", switchLabelClasses({ size }))}>{children}</span>
      ) : null}
      <input
        type="checkbox"
        {...props}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setToggled(e.target.checked);
          if (props.onChange) props.onChange(e);
        }}
        className="peer h-0 w-0 opacity-0"
      />
      <span
        className={clsx(
          "absolute inset-0 cursor-pointer rounded-3xl bg-slate-600 transition-all duration-500 before:absolute before:left-1 before:bottom-1 before:rounded-full before:bg-white before:transition-[0.5s] peer-focus:shadow",
          switchClasses({ size, variant }),
        )}
      ></span>
      <span className={clsx("absolute left-1 bottom-1 text-black transition-[0.5s]", switchIconClasses({ size }))}>
        {(() => {
          if (props.icon) return props.icon;
          if (props?.onIcon && props?.offIcon) return toggled ? props.onIcon : props.offIcon;
          if (props.onIcon && !props?.offIcon) return props.onIcon;
          if (!props?.onIcon && props.offIcon) return props.offIcon;
          return <></>;
        })()}
      </span>
    </label>
  );
};
