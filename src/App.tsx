import Design from "./components/Design"
import Hero from "./components/Hero"
import MailingListForm from "./components/MailingListForm"
import Video from "./components/Video"

function App() {
  return (
    <div className="h-screen">
      <Hero />
      <Video />
      <Design />
      <MailingListForm />
    </div>
  )
}

export default App