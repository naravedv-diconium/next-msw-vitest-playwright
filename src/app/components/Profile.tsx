'use client'

import {useCallback, useState} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Profile({initial}: { initial: any }) {
  const [profile, setProfile] = useState(initial);

  const
    getProfile = useCallback(async (user: string) => {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setProfile(data);
    }, [])

  return (
    <>
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <img src={profile.avatar_url} alt="avatar" className="h-64 w-64 rounded-full"/>
      <button
        onClick={() => getProfile('naravedv-diconium')}
        className="cursor-pointer border-2 bg-gray-500 p-2">
        Get Ed profile
      </button>
    </>
  )
}