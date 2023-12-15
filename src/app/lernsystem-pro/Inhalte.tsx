import Image from 'next/image'
import InhaltIntro from './InhaltIntro'
import Inhalt1 from './Inhalt1'
import Inhalt2 from './Inhalt2'

export default function Features() {
  return (
    <section id="Inhalte">
      <InhaltIntro />
      <Inhalt1 />
      <Inhalt2 />
    </section>
  )
}