import Image from 'next/image'
import FeaturesHero from './FeaturesHero'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'

export default function Features() {
  return (
    <section id="CommunityBereiche">
      <FeaturesHero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </section>
  )
}