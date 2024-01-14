import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="London" invert={invert}>
          10 Barley Mow Passage
          <br />
          W4 4PH, London, United Kingdom
        </Office>
      </li>
      <li>
        <Office name="Zurich" invert={invert}>
          1 Dfinity Way
          <br />
          90210, Zurich, Switzerland
        </Office>
      </li>
    </ul>
  )
}
