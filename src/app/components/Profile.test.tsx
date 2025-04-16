import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Profile from "@/app/components/Profile";

const mockProfile = {
  avatar_url: "https://avatars.githubusercontent.com/u/624760?v=4",
  name: "Eddie Jaoude (initial)",
}

describe("Profile Component", () => {
  test('Click on CTA fetches new data', async () => {
    render(<Profile initial={mockProfile}/>)

    expect(screen.getByRole('heading', {level: 1, name: 'Eddie Jaoude (initial)'})).toBeDefined()

    const cta = screen.getByRole('button', { name: 'Get Ed profile' })
    fireEvent.click(cta)

    await waitFor(() => {
      expect(screen.getByRole('heading', {level: 1, name: 'Edvinas Naraveckas (mocked)'})).toBeDefined()
    })
  })
})
