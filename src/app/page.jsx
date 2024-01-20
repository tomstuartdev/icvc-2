import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'

import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import logoPlug from '@/images/projects/plug/plug.png'
import logoDfinity from '@/images/projects/dfinity/dfinity.png'
import logoFunded from '@/images/projects/funded/funded.png'
import logoTRAX from '@/images/projects/trax/trax.png'
import logoDfinityBlack from '@/images/projects/dfinity/dfinity-black.png'
import logoVault from '@/images/projects/vault/vault.png'
import imageLaptop from '@/images/laptop.jpg'
import imageEcosystem from '@/images/ecosystem.png'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Dfinity', logoDfinity],
  ['Plug', logoPlug],
  ['TRAX', logoTRAX],
  ['Funded', logoFunded],
  ['VaultBet', logoVault]
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            From the brilliant minds behind
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="A comprehensive suite of investment services"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe in the <span className='font-bold'>Internet Computer&apos;s</span> potential to power the future of web3. Our investment solutions offer comprehensive support for a wide range of ecosystem projects.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our thesis"
        title="We invest in companies with the potential to grow adoption of the ICP network."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          ICVC primarily backs founders building in three key verticals: infrastructure, decentralised finance and consumer applications.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          
          <List className="mt-16 lg:mt-0 lg:w-full lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Infrastructure">
              We believe investing in infrastructure to support the next generation of builders on the IC.
            </ListItem>
            <ListItem title="DeFi">
            Investing in DeFi projects, leveraging blockchain&apos;s decentralized financial services, offers potential rewards, yet entails risks. Careful research and vigilance are vital in this evolving landscape.
            </ListItem>
            <ListItem title="Consumer apps">
              We believe in the potential of consumer apps to 10x the growth and adoption of the IC network.
            </ListItem>
            {/* <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem> */}
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'ICVC is a decentralised venture capital fund dedicated to supporting the Internet Computer ecosystem.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Decentralised venture capital for the <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700/70 via-purple-800 to-pink-700/50'>Internet Computer.</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            ICVC is a decentralised venture capital fund dedicated to supporting the Internet Computer ecosystem. 
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'DFINITY', logo: logoDfinityBlack }}
      >
        The team at ICVC is dedicated to improving funding opportunities for founders building on the Internet Computer. Increasing the decentralisation of investment in ICP projects serves to improve the quality of ecosystem projects and enhance the fundraising process.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
