import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 130 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-32' : 'w-0 group-hover/logo:w-32',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M 30.624 23.04 L 12.384 23.04 Q 11.072 23.04 10 22.4 Q 8.928 21.76 8.288 20.688 Q 7.648 19.616 7.648 18.304 L 7.648 4.736 Q 7.648 3.424 8.288 2.352 Q 8.928 1.28 10 0.64 Q 11.072 0 12.384 0 L 30.624 0 L 30.624 4.992 L 13.664 4.992 Q 13.299 4.992 13.056 5.123 A 0.82 0.82 0 0 0 12.88 5.248 A 0.785 0.785 0 0 0 12.68 5.564 Q 12.608 5.768 12.608 6.048 L 12.608 16.992 Q 12.608 17.504 12.88 17.776 A 0.876 0.876 0 0 0 13.26 17.996 Q 13.439 18.048 13.664 18.048 L 30.624 18.048 L 30.624 23.04 Z M 89.024 23.04 L 70.784 23.04 Q 69.472 23.04 68.4 22.4 Q 67.328 21.76 66.688 20.688 Q 66.048 19.616 66.048 18.304 L 66.048 4.736 Q 66.048 3.424 66.688 2.352 Q 67.328 1.28 68.4 0.64 Q 69.472 0 70.784 0 L 89.024 0 L 89.024 4.992 L 72.064 4.992 Q 71.699 4.992 71.456 5.123 A 0.82 0.82 0 0 0 71.28 5.248 A 0.785 0.785 0 0 0 71.08 5.564 Q 71.008 5.768 71.008 6.048 L 71.008 16.992 Q 71.008 17.504 71.28 17.776 A 0.876 0.876 0 0 0 71.66 17.996 Q 71.839 18.048 72.064 18.048 L 89.024 18.048 L 89.024 23.04 Z M 50.752 23.04 L 46.624 23.04 L 33.28 0 L 39.04 0 L 48.704 16.736 L 58.368 0 L 64.096 0 L 50.752 23.04 Z M 4.896 23.04 L 0 23.04 L 0 0 L 4.896 0 L 4.896 23.04 Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
     
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M 30.624 23.04 L 12.384 23.04 Q 11.072 23.04 10 22.4 Q 8.928 21.76 8.288 20.688 Q 7.648 19.616 7.648 18.304 L 7.648 4.736 Q 7.648 3.424 8.288 2.352 Q 8.928 1.28 10 0.64 Q 11.072 0 12.384 0 L 30.624 0 L 30.624 4.992 L 13.664 4.992 Q 13.299 4.992 13.056 5.123 A 0.82 0.82 0 0 0 12.88 5.248 A 0.785 0.785 0 0 0 12.68 5.564 Q 12.608 5.768 12.608 6.048 L 12.608 16.992 Q 12.608 17.504 12.88 17.776 A 0.876 0.876 0 0 0 13.26 17.996 Q 13.439 18.048 13.664 18.048 L 30.624 18.048 L 30.624 23.04 Z M 89.024 23.04 L 70.784 23.04 Q 69.472 23.04 68.4 22.4 Q 67.328 21.76 66.688 20.688 Q 66.048 19.616 66.048 18.304 L 66.048 4.736 Q 66.048 3.424 66.688 2.352 Q 67.328 1.28 68.4 0.64 Q 69.472 0 70.784 0 L 89.024 0 L 89.024 4.992 L 72.064 4.992 Q 71.699 4.992 71.456 5.123 A 0.82 0.82 0 0 0 71.28 5.248 A 0.785 0.785 0 0 0 71.08 5.564 Q 71.008 5.768 71.008 6.048 L 71.008 16.992 Q 71.008 17.504 71.28 17.776 A 0.876 0.876 0 0 0 71.66 17.996 Q 71.839 18.048 72.064 18.048 L 89.024 18.048 L 89.024 23.04 Z M 50.752 23.04 L 46.624 23.04 L 33.28 0 L 39.04 0 L 48.704 16.736 L 58.368 0 L 64.096 0 L 50.752 23.04 Z M 4.896 23.04 L 0 23.04 L 0 0 L 4.896 0 L 4.896 23.04 Z" 
      />
    </svg>
  )
}