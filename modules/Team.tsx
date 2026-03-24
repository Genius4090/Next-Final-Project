import Image from "next/image"

const Team = () => {
  return (
    <div>
  <h4 className="text-5xl font-bold text-center">Наша команда</h4>
  <ul className="flex flex-wrap  gap-x-30 gap-y-20 justify-center pt-20 pb-22">
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
    <li className="flex flex-col items-center justify-center">
      <div className="border rounded-full p-4">
        <Image src={"/images/teamAvatar.png"} alt="teamAvatar" width={233} height={233} style={{ width: 'auto', height: 'auto' }}/>
      </div>
      <h3 className="mt-3 text-2xl font-black">Александр Петро</h3>
        <p className="text-[#464646] text-xl font-semibold">главный повар</p>
    </li>
  </ul>
 </div>
  )
}

export default Team