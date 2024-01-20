import Image from "next/image"
import lpImage from '../../src/app/work/liquidity-providing/hero.png'

export default function StylizedImage() {
  return (
    <div>
      <Image src={lpImage}/>
    </div>
  )
}