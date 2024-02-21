import Rightdb1 from "./rightdbinnerdivs/rightdb1"
import Rightdb2 from "./rightdbinnerdivs/rightdb2"
import Rightdb3 from "./rightdbinnerdivs/rightdb3"
import Rightdb4 from "./rightdbinnerdivs/rightdb4"
import Rightdb5 from "./rightdbinnerdivs/rightdb5"
import Rightdb6 from "./rightdbinnerdivs/rightdb6"
import Rightdb7 from "./rightdbinnerdivs/rightdb7"
import Rightdbleftdiv from "./rightdbinnerdivs/rightdb-leftdiv"
const rightdb = () => {
  return (
    <>
      <div className="flex bg-[#151C39] w-[90%] h-[600px] rounded-[20px] items-center justify-around">
        <div className="w-[40%] flex flex-col gap-8">
          <div>
            <Rightdb1 />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <Rightdb2 />
              <Rightdb3 />
            </div>
            
              <Rightdb4 />
            
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <Rightdb5 />
              </div>
              <div className="flex flex-col justify-between">
                <Rightdb6 />
                <Rightdb7 />
              </div>
            </div>
          </div>
        </div>
        <Rightdbleftdiv />
      </div>
    </>
  )
}

export default rightdb