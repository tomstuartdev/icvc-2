import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="flex">
        
        <div className="mt-12 lg:mt-0 ">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Phase 1 - Current" >
      <div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Planning">
        The immediate focus is on finalizing the first version (V1) of the whitepaper and raising the initial capital necessary to progress to the next phase.

        </ListItem>
        
      </List>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Phase 2 - Q1 2024">
      <div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Establishing the legal framework">
        Setting up a legal structure, including the creation of a Foundation in Switzerland, to ensure regulatory compliance and operational stability.

        </ListItem>
        <ListItem title="Leadership recruitment">
        Hiring a senior executive to take on the role of CEO, responsible for spearheading the overall strategy and operations.

        </ListItem>
        
      </List>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Phase 3 - Q2 2024">
      <div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Division into business units">
        Structuring the business into distinct funds, each with a specific investment focus.
        </ListItem>
        <ListItem title="Team expansion">
        Recruiting skilled professionals aligned with the needs of each fund.

        </ListItem>
        <ListItem title="Framework development">
        Building the entire framework, encompassing both technical and non-technical aspects, to support the operational needs of the funds.

        </ListItem>
        <ListItem title="Tokenomics and shareholder relations">
        Working on and publishing detailed tokenomics, including the definition of shareholder relationships and rights.
        </ListItem>
      </List>
      </div>
    </Section>
  )
}

function Deliver2() {
  return (
    <Section title="Phase 4 - Q3 2024">
      <div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Fund finalization">
        Completing the setup and structuring of the first three funds, each poised to target specific areas within the ICP ecosystem.
        </ListItem>
        <ListItem title="Additional hiring">
        Expanding the team further to meet the operational requirements of the newly established funds.

        </ListItem>
        <ListItem title="Fundraising announcement">
        Announcing plans for raising additional capital through various means, including SNS, business angels, and Limited Partners.

        </ListItem>
        
      </List>
      </div>
    </Section>
  )
}

function Deliver3() {
  return (
    <Section title="Phase 5 - Q4 2024">
      <div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Launching the DAO">
        Transitioning ICVC into a fully operational DAO through the SNS.
        </ListItem>
        <ListItem title="Funds Operation Commence">
        Beginning active operations of ICVC’s first three funds, marking the start of a new era in venture capital within the ICP ecosystem.

        </ListItem>
        
      </List>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'ICVC Roadmap',
  description:
    'Our roadmap outlines how we intend to build & scale ICVC over the coming months and years. This page will be updated as new information becomes available.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our Roadmap" title="ICVC Roadmap">
        <p>
          Our roadmap outlines how we intend to build & scale ICVC over the coming months and years. This page will be updated as new information becomes available.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <Deliver2/>
        <Deliver3/>
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
