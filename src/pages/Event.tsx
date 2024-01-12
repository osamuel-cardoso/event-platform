import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Video } from '../components/Video/Video'

export function Event() {
  return (
    <>
      <Header />

      <Container>
        <div className="flex">
          <Video />
          <Sidebar />
        </div>
      </Container>
    </>
  )
}
