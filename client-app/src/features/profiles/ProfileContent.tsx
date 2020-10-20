import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhostos from "./ProfilePhotos";
import ProfileDescription from "./ProfileDescription";
import ProfileFollowings from "./ProfileFollowings";

const panes = [
  { menuItem: "About", render: () => <ProfileDescription /> },
  { menuItem: "Photo(s)", render: () => <ProfilePhostos /> },
  {
    menuItem: "Activities",
    render: () => <Tab.Pane>Activities content</Tab.Pane>,
  },
  { menuItem: "Follower(s)", render: () => <ProfileFollowings /> },
  { menuItem: "Following(s)", render: () => <ProfileFollowings /> },
];

interface IProps {
  setActiveTab: (activeIndex: any) => void;
}

const ProfileContent: React.FC<IProps> = ({ setActiveTab }) => {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
};

export default ProfileContent;
