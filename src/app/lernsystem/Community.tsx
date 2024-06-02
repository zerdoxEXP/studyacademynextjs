import Image from 'next/image'
import CommunityHero from './CommunityHero'
import Community1 from './Community1'
import Community2 from './Community2'
import Community3 from './Community3'

export default function Community() {
  return (
    <section id="CommunityBereiche">
      <CommunityHero />
      <Community1 />
      <Community2 />
      <Community3 />
    </section>
  )
}