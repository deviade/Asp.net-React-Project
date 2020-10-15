import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfilePhostos from './ProfilePhotos'

const panes = [
    { menuItem: 'About', render: () => <Tab.Pane>About content</Tab.Pane> },
    { menuItem: 'Photos', render: () => <ProfilePhostos /> },
    { menuItem: 'Activities', render: () => <Tab.Pane>Activities content</Tab.Pane> },
    { menuItem: 'Followers', render: () => <Tab.Pane>Followers content</Tab.Pane> },
    { menuItem: 'FOllowing', render: () => <Tab.Pane>FOllowing content</Tab.Pane> },
]

const ProfileContent = () => {
    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            activeIndex={1}
        />
    )
}

export default ProfileContent
