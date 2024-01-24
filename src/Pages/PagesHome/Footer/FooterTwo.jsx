import linkedIn from "../../../Image/linkedin.png"
import gitHub from "../../../Image/github.png"

export default function FooterTwo() {
  return (
  <div className="flex flex-row justify-between mb-5">
    <div>
    © 2024 By Averta. All rights reserved.
    <a className="text-blue-500" href="https://www.linkedin.com/in/ahmed-alsayed-issa/" target="_blank" rel="noreferrer">Developer AhmedAlsayed</a>

    </div>
    <div className="flex gap-2">
      <a className="text-blue-500" href="https://www.linkedin.com/in/ahmed-alsayed-issa/" target="_blank" rel="noreferrer">
          <img className='max-w-[32px] h-fit' src={linkedIn} />
        </a>
      <a className="text-blue-500" href="https://github.com/AhmedAlsayed105" target="_blank" rel="noreferrer">
            <img className='max-w-[32px] h-fit' src={gitHub} />
        </a>

    </div>
  </div>
  
    )
}
