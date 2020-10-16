import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";
import { RootStoreContent } from "../../app/stores/rootStore";
import ProfileEditForm from "./ProfileEditForm";

const ProfileDescription = () => {
  const rootStore = useContext(RootStoreContent);
  const { isCurrentUser, profile, updateProfile } = rootStore.profileStore;
  const [editMode, setEditMode] = useState(false);
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`About ${profile!.username}`}
          />
          {isCurrentUser && (
            <Button
              floated="right"
              basic 
              content={editMode ? "Cancel" : "Edit profile"}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <ProfileEditForm updateProfile={updateProfile} profile={profile!} />
          ) : (
            <span>{profile!.bio}</span>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default ProfileDescription;
