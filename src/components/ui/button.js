import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

const buttonVariants = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  default: 'bg-brand text-white hover:bg-brand-hover',
  gradient: 'bg-brand text-white hover:bg-brand-hover',
  success: 'bg-brand text-white hover:bg-brand-hover',
  secondary: 'border border-hairline bg-raised text-ink hover:bg-raised-hover',
  outline: 'border border-hairline bg-surface text-ink hover:bg-raised',
  inverse: 'bg-surface text-brand-hover hover:bg-[#F2F7F3]',
  onBrand: 'border border-white/40 text-white hover:bg-white/10',
  ghost: 'text-ink-secondary hover:bg-raised hover:text-ink',
  link: 'text-brand underline-offset-4 hover:underline',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
};

const buttonSizes = {
  sm: 'h-8 rounded-md px-3 text-[13px]',
  default: 'h-10 rounded-md px-4 text-sm',
  lg: 'h-11 rounded-md px-5 text-sm',
  icon: 'h-9 w-9 rounded-md'
};

export const Button = React.forwardRef(
  (
    { className, variant = 'primary', size = 'default', asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
