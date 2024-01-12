import { useParams } from 'react-router-dom'
import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Video } from '../components/Video/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <>
      <Header />

      <Container>
        <div className="flex">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Sidebar />
        </div>
      </Container>
    </>
  )
}
