import Hero from './components/Hero'
import InfernoNews from './components/InfernoNews'
import InteractiveUpdates from './components/InteractiveUpdates'
import Competitions from './components/Competitions'
import SponsorshipAppeal from './components/SponsorshipAppeal'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <InfernoNews />
      <InteractiveUpdates />
      <Competitions />
      <SponsorshipAppeal />
      <CallToAction />
      {/* <Contact/> */}
    </div>
  )
}

