import {describe, expect, test} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import Home from "@/app/page";

describe("Page", () => {
  test('Renders initial user from mocked source', async () => {
    render(await Home())

    screen.debug()
    await waitFor(()=> {
      expect(screen.getByRole('heading', {level: 1, name: 'Eddie Jaoude (mocked)'})).toBeDefined()
    })
  })
})