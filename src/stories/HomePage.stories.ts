import type { Meta, StoryObj } from '@storybook/react';
// import { expect, userEvent, within } from '@storybook/test';
import { http, HttpResponse } from 'msw'


import Home from "@/app/page";
import ed from "@/mock/data/ed.json";
import eddie from "@/mock/data/eddie.json";

const meta = {
  title: 'Pages/HomePage',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.github.com/users/naravedv-diconium",
          () => HttpResponse.json(ed)),
        http.get("https://api.github.com/users/eddiejaoude",
          () => HttpResponse.json(eddie)),
      ],
    },
  },
};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = canvas.getByRole('button', { name: /Log in/i });
//     await expect(loginButton).toBeInTheDocument();
//     await userEvent.click(loginButton);
//     await expect(loginButton).not.toBeInTheDocument();
//
//     const logoutButton = canvas.getByRole('button', { name: /Log out/i });
//     await expect(logoutButton).toBeInTheDocument();
//   },
// };
