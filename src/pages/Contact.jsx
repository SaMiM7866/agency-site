import { Sec, Head } from '../ui.jsx'
import { C } from '../content.js'

export default function Contact() {
  // No backend: submitting opens the visitor's email app with the details filled in
  const send = (e) => {
    e.preventDefault()
    const body = [...new FormData(e.target).entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
    location.href = `mailto:${C.email}?subject=${encodeURIComponent('New enquiry from website')}&body=${encodeURIComponent(body)}`
  }
  return (
    <Sec id="contact" shape="swirl" scale={0.32}>
      <Head eyebrow="Contact" title="Let’s Create Something People Remember."
        text="Got a business, product or idea you want to grow? Tell us about it. We’ll bring the strategy, creativity and caffeine." />
      <form className="form" onSubmit={send}>
        <input name="Name" placeholder="Name" required />
        <input name="Business Name" placeholder="Business Name" />
        <input name="Phone Number" type="tel" placeholder="Phone Number" required />
        <input name="Email" type="email" placeholder="Email" />
        <select name="Service Required" defaultValue="">
          <option value="" disabled>Service Required</option>
          {C.services.map((s) => <option key={s.title}>{s.title}</option>)}
        </select>
        <input name="Monthly Marketing Budget" placeholder="Monthly Marketing Budget" />
        <textarea name="About the Brand" rows="4" placeholder="Tell Us About Your Brand" />
        <button className="btn" type="submit">Start a Conversation</button>
      </form>
    </Sec>
  )
}
