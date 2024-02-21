import Image from "next/image"
const rightdb1 = () => {
  return (
    <>
        <div className="flex mt-5 w-[60%] h-[50px] border-black">
            <h1 className="text-[white]">Hello, <br/> Dr. Colter!</h1>
            <input type="text" placeholder="Search" className="bg-[transparent] outline-white"/>
            <div className="bg-[blue] rounded-[50%] w-[30px] h-[30px]">
              <Image src = "/icons/notification.png" width={20} height={10}/>
            </div>
        </div>
    </>
  )
}

export default rightdb1