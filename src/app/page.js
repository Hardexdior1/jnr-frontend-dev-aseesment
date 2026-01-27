
"use client";
import Invoice from "./components/Invoice";
import { useRouter } from "next/navigation";

export default function Home() {
  
  console.log('hello world')
     const router=useRouter()



  return (
    <main>


<section className="p-2 my-auto font-semibold bg-gradient-to-br from-gray-100 via-white to-blue-200 lg:p-5">
<Invoice />

</section>






      






    </main>
  );
}


