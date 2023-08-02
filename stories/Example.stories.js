import RbButton from "../src/runtime/components/RbButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'RbButton',
  component: RbButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Secondary',
  },
};
