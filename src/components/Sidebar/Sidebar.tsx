import { gql, useQuery } from '@apollo/client'
import { Lesson } from '../Lesson/Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: Array<{
    availableAt: string
    id: string
    lessonType: 'live' | 'class'
    slug: string
    title: string
  }>
}

export function Sidebar() {
  const { data: LessonsResponse } =
    useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[21.75rem] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {LessonsResponse?.lessons.map(
          ({ title, id, lessonType, availableAt, slug }) => (
            <Lesson
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
              key={id}
            />
          ),
        )}
      </div>
    </aside>
  )
}
