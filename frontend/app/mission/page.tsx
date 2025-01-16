import MissionHero from '../components/MissionHero'
import MissionSection from '../components/MissionSection'

export default function MissionPage() {
  return (
    <div className="bg-black text-white">
      <MissionHero />
      <MissionSection
        title="Autonomous Navigation"
        description="Our rover employs cutting-edge AI algorithms to navigate the challenging Martian terrain autonomously."
        imageSrc="/autonomous-navigation.jpg"
        imageAlt="Autonomous Navigation Illustration"
        reverse={false}
      />
      <MissionSection
        title="Astrobiology Expedition"
        description="Equipped with advanced sensors and analytical tools, our rover is designed to search for signs of past or present life on Mars."
        imageSrc="/astrobiology-expedition.jpg"
        imageAlt="Astrobiology Expedition Illustration"
        reverse={true}
      />
      <MissionSection
        title="Dexterity Tasks"
        description="With its state-of-the-art robotic arm, our rover can perform intricate tasks such as sample collection and equipment maintenance."
        imageSrc="/dexterity-tasks.jpg"
        imageAlt="Dexterity Tasks Illustration"
        reverse={false}
      />
      <MissionSection
        title="Delivery Mission"
        description="Our rover is capable of transporting and delivering vital supplies and equipment to support human missions on Mars."
        imageSrc="/delivery-mission.jpg"
        imageAlt="Delivery Mission Illustration"
        reverse={true}
      />
    </div>
  )
}

