import Image from "next/image"
const leftdb = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-[100px] h-[50%]">
        <div>
          <Image src = "/icons/frame.png" alt = "frame" width={20} height={20}/>
        </div>
        <div className="flex flex-col gap-10 justify-around">
          <Image src = "/icons/home.png" alt = "home" width = {15} height={15}/>
          <Image src = "/icons/page.png" alt = "page" width = {15} height={15}/>
          <Image src = "/icons/alarm.png" alt = "alarm" width = {15} height={15}/>
          <Image src = "/icons/msg.png" alt = "msg" width = {15} height={15}/>
          <Image src = "/icons/setting.png" alt = "setting" width = {15} height={15}/>
        </div>
        <div className="flex flex-col gap-10">
          <Image src = "/images/image4.png" alt = "image44" width={30} height={30}/>
          <Image src = "/icons/enter.png" alt = "image4" width={15} height={15}/>
        </div>
      </div>
    </>
  )
}

export default leftdb