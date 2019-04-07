import { configure, addDecorator } from "@storybook/react";
import { configureViewport } from "@storybook/addon-viewport";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";

function loadStories() {
  const req = require.context("../src", true, /\.story\.tsx?$/);
  req.keys().forEach(story => req(story));
}

addDecorator(withKnobs({ escapeHTML: false }));
addDecorator(
  withOptions({
    addonPanelInRight: true
  })
);

configure(loadStories, module);
configureViewport({
  defaultViewport: "iphone5"
});
