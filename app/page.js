import Leftdb from "../components/leftdb"
import Rightdb from "../components/rightdb"
export default function Home() {
  return (
    <div className="h-[vh] w-[vw] flex justify-around gap-4">
      <Leftdb />
      <Rightdb/>
    </div>
  );
}
