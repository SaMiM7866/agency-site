import { Sec, Head } from '../ui.jsx'
import { C } from '../content.js'

export default function Blog() {
  return (
    <Sec id="blog" shape="bulb" scale={0.4}>
      <Head eyebrow="Blog" title="Ideas, Insights & Everything Social." text="Articles are coming soon. Topics we will cover:" />
      <div className="chips">{C.blog.map((b) => <span key={b}>{b}</span>)}</div>
    </Sec>
  )
}
