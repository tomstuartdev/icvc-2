import Image from 'next/image'
import clsx from 'clsx'

import { Border } from '@/components/Border'

function ImageWrapperWithImage({ author, children, className, image }) {
  return (
    <figure
      className={clsx(
        'grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16',
        className,
      )}
    >
      <div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
        <Image
          alt=""
          {...image}
          sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
          className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
        />
      </div>
    </figure>
  )
}

function ImageWrapperWithoutImage({ author, children, className }) {
  return (
    <></>
  )
}

export function ImageWrapper(props) {
  if (props.image) {
    return <ImageWrapperWithImage {...props} />
  }

  return <ImageWrapperWithoutImage {...props} />
}
