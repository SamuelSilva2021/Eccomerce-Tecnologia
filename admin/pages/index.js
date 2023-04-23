import Layout from "@/components/Layout";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Olá, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-8 h-8" />
          <span className="py-1 px-2">
            <b> {session?.user?.name}</b>
          </span>
        </div>
      </div>
    </Layout>
  )
}