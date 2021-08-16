import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
import { Tab } from "../Tab";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tab
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: "Test coverage",
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/testcoverage/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === "testcoverage",
    render: Tab,
  });
});
