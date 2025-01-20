import Hero from './components/Hero'
import InfernoNews from './components/InfernoNews'
import InteractiveUpdates from './components/InteractiveUpdates'
import Competitions from './components/Competitions'
import SponsorshipAppeal from './components/SponsorshipAppeal'
import CallToAction from './components/CallToAction'
import Marquee from './components/Marquee'

const images = [
  "/sponsors/nvidia_logo.jpg",
  "/sponsors/altium.png",
  "/sponsors/ansys_logo.png",
  "/sponsors/solidworks_logo.png",
  "/sponsors/indiacircuits.png",
  "/sponsors/neutronium.png",
  "/sponsors/69rigs.png",

];

export default function Home() {

  return (
    <div className="bg-black text-white">
      <Hero />
      <InfernoNews />
      <InteractiveUpdates />
      <Competitions />
      <Marquee images={images}/>
      <SponsorshipAppeal />

      <CallToAction />
      {/* <Contact/> */}
    </div>
  )
}

