import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import imageTomStuart from '@/images/team/tom-stuart.jpg'
import imageLukeDugdale from '@/images/team/luke-dugdale.jpeg'
import imageClementMayer from '@/images/team/clement-mayer.jpeg'
import imageMazenZibara from '@/images/team/mazen-zibara.jpg'
import imageIsaacDugdale from '@/images/team/isaac-dugdale.jpg'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our vision"
        title="Decentralising venture capital "
        invert
      >
        <p>
         We want to collaboratively drive innovation and opportunity in the ICP ecosystem. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Decentralised" invert>
            We believe in the power of decentralised systems to solve a number of critical problems.
          </GridListItem>
          <GridListItem title="Transparent" invert>
            We believe in bringing transparency to the investment process & decision making.
          </GridListItem>
          <GridListItem title="Community-driven" invert>
            We believe in involving the IC community in ecosystem investment & development.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Contributors',
    people: [
      {
        name: 'Luke Dugdale',
        role: 'Partner',
        image: { src: imageLukeDugdale },
      },
      {
        name: 'Tom Stuart',
        role: 'Partner',
        image: { src: imageTomStuart },
      },
      {
        name: 'Clement Mayer',
        role: 'Partner',
        image: { src: imageClementMayer },
      },
      {
        name: 'Isaac Dugdale',
        role: 'Partner',
        image: { src: imageIsaacDugdale },
      },
      {
        name: 'Mazen Zibara',
        role: 'Partner',
        image: { src: imageMazenZibara },
      },
    ],
  },
  
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About ICVC" title="Welcome to the future of venture capital">
        <p>
          A new pathway for supporting and accelerating projects on the Internet Computer Protocol (ICP).
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Imagine a platform where you, as a token holder, get to be a part of the decision-making process, guiding and fostering the next generation of innovative ventures on the ICP.
          </p>
          <p>
          ICVC, governed by the Service Nervous System (SNS), aims to democratize investment opportunities, allowing us to collectively back promising projects and aid them in navigating the path from conception to realization.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="20+" label="Contributors" />
          <StatListItem value="0" label="Projects supported" />
          <StatListItem value="$10M" label="Funding available" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      

      <ContactSection />
    </>
  )
}
