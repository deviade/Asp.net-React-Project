import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfilePhostos from './ProfilePhotos'
import ProfileDescription from './ProfileDescription'

const panes = [
    { menuItem: 'About', render: () => <ProfileDescription /> },
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
        />
    )
}

export default ProfileContent
