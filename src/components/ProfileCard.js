import Image from 'next/image'
import avatar from '../../public/me.jpg'

export default function ProfileCard() {
    return (
        <div className={`card filter backdrop-blur-xl m-auto w-[350px] shadow-2xl bg-slate-900 p-6 rounded-xl`}>
          <Image src={avatar} alt="Kevin Yang" width={150} height={150} priority className={'avatar rounded-full m-auto border-[10px] border-white mb-4 shadow-2xl'} />
          <figcaption className="font-medium">
            <div className={"font-bold text-xl text-white"}>
              Kevin Yang
            </div>
            <div className="text-xl text-white">
              Fullstack Software Engineer
            </div>
          </figcaption>
          <hr className="h-px my-8 bg-white border-0" />
          <p className={"text-sm text-white"}>
              A creative person with strong problem solving abilities, solution‐oriented who performs well under pressure. Detailed, methodical with strong organizational and analytical skills.
              Flexible and energetic teamplayer. Has a great passion in coding, software designning, application architecting.
          </p>
          <button className="h-10 px-6 mt-5 rounded-md border text-sm text-slate-800 bg-white font-bold hover:bg-transparent hover:text-white" type="button">
            Contact Me
          </button>
        </div>
    )
}