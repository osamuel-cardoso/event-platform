import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Video } from '../components/Video/Video'

export function Event() {
  return (
    <>
      <Header />
      <div className="flex ">
        <Container>
          <Video />
        </Container>
        <Sidebar />
      </div>
    </>
  )
}
