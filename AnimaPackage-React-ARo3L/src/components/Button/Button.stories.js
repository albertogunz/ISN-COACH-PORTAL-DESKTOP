import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["plain", "gray", "filled", "tinted"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    type: "plain",
    icon: true,
    className: {},
    labelClassName: {},
    text: "Get Started",
  },
};
