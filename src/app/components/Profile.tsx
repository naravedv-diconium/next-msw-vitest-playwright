'use client'

import {useCallback, useState} from "react";

type ProfileData = {
  name?: string;
  avatar_url?: string;
};

type ContributionDay = {
  date: string;
  count: number;
};

export default function Profile({initial}: { initial: ProfileData }) {
  const [profile, setProfile] = useState<ProfileData>(initial);
  const [monthlyContributions, setMonthlyContributions] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMonthlyContributions = useCallback(async (user: string) => {
    const currentYear = new Date().getUTCFullYear();
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=${currentYear}`);
    if (!response.ok) throw new Error('Unable to load contributions');
    const data = await response.json();

    const cutoff = new Date();
    cutoff.setUTCDate(cutoff.getUTCDate() - 30);

    const total = (data.contributions?.weeks ?? [])
      .flatMap((week: { days: ContributionDay[] }) => week.days ?? [])
      .filter((day: ContributionDay) => new Date(day.date) >= cutoff)
      .reduce((sum: number, day: ContributionDay) => sum + (day.count ?? 0), 0);

    return total;
  }, []);

  const getProfile = useCallback(async (user: string) => {
    setLoading(true);
    setError(null);
    try {
      const [profileResponse, contributions] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetchMonthlyContributions(user)
      ]);

      if (!profileResponse.ok) throw new Error('Unable to load profile');
      const profileData = await profileResponse.json();

      setProfile(profileData);
      setMonthlyContributions(contributions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }, [fetchMonthlyContributions]);

  return (
    <>
      <h1 className="text-2xl font-bold">{profile.name ?? 'Unknown user'}</h1>
      {profile.avatar_url && (
        <img src={profile.avatar_url} alt="avatar" className="h-64 w-64 rounded-full"/>
      )}
      <button
        onClick={() => getProfile('naravedv-diconium')}
        className="cursor-pointer border-2 bg-gray-500 p-2 text-white"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Ed profile'}
      </button>
      {monthlyContributions !== null && (
        <p className="mt-4 text-lg">
          Contributions in the last 30 days: <span className="font-semibold">{monthlyContributions}</span>
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </>
  )
}