import Profile from "@/app/components/Profile";

export default async function Home() {
  const res = await fetch('https://api.github.com/users/eddiejaoude');
  const data = await res.json();

  return (
    <div className={`flex flex-col items-center justify-center gap-4 p-6`}>
      <Profile initial={data}/>
    </div>
  )
}
