import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CheckCircle, Lock } from 'phosphor-react'
import { formatToUpperChar } from '../../utils/formatter'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, type, availableAt }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' ∙ 'd'  de  'MMMM'  ∙  'kk'h'mm",
    { locale: ptBR },
  )

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {formatToUpperChar(availableDateFormatted)}
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2 transition group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-yellow-500 font-medium">
              <Lock size={20} color="currentColor" />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  )
}
