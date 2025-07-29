import Design from "./components/Design"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
  )
}

export default App