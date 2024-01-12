import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react'

export function Video() {
  return (
    <main className="max-w-[68.75rem]">
      <div className="bg-black">
        <div className="h-full w-full min-w-[60vh] mx-auto aspect-video">
          <Player>
            <Youtube videoId="C1CyJW2D0zY" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[68.75rem] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Aula -1 | abertura do ignite-lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              necessitatibus repellendus fugit, sit itaque aut doloremque rem
              quos deserunt natus, consequatur autem iure quisquam officia
              assumenda minus explicabo et aliquid.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full text-2xl block "
                src="https://github.com/diego3g.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Diego Fernandes
                </strong>
                <span className="text-gray-200 text-sm block">
                  CTO @Rocketseat
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center transition hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center transition ease-in duration-200 hover:bg-blue-500 hover:text-black"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 transition hover:bg-gray-600"
          >
            <div className="bg-green-700 h-full p-6 flex flex-col items-center justify-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2 ">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 transition hover:bg-gray-600"
          >
            <div className="bg-green-700 h-full p-6 flex flex-col items-center justify-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2 ">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
