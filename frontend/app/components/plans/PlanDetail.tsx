import Image from 'next/image'
import check from '../../../public/assets/check.svg'

interface Props {
    name: string,
    detail : string
    border?: boolean
    selected?: boolean
}

const PlanDetail = ({name,detail,border,selected}:Props) => {
  return (
    <div style={{borderBottom : border ? "1px solid rgba(128, 128, 128, 0.2)" : "none" }} className="flex items-center gap-3 py-3" >
        <Image src={check} width={20} height={20}  alt="" />
    <div>
      <p className=" text-gray-500 font-semibold text-sm" >{name}</p>
      <p className="text-sm font-semibold">{detail}</p>
    </div>
  </div>
  )
}

export default PlanDetail