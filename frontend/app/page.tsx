import Hero from './components/Hero'
import InfernoNews from './components/InfernoNews'
import InteractiveUpdates from './components/InteractiveUpdates'
import Competitions from './components/Competitions'
import SponsorshipAppeal from './components/SponsorshipAppeal'
import CallToAction from './components/CallToAction'
import SponserSection from './components/Sponsors';




export default function Home() {

  return (
    <div className="bg-black text-white ">
      <Hero />
      <Competitions />
      <InfernoNews />
      {/* <InteractiveUpdates /> */}
      {/* <Marquee images={images}/> */}
      <SponserSection/>
      <SponsorshipAppeal />

      <CallToAction />
      {/* <Contact/> */}
    </div>
  )
}

