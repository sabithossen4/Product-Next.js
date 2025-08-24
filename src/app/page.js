import Banner from "@/components/Banner";
import Featured from "@/components/Featured";


export const dynamic= "force-dynamic";
export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
    </div>
  );
}
