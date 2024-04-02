import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    stateProp: {
      options: ["hovered", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hovered",
    className: {},
    text: "CONTACT ME",
    arrowClassName: {},
    arrow: "/img/arrow.svg",
  },
};
