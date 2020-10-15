import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import { useContext } from 'react';
import { RootStoreContent } from '../../app/stores/rootStore';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';

interface RouteParams {
    username: string
}

interface IProps extends RouteComponentProps<RouteParams> { }

const ProfilePage: React.FC<IProps> = ({ match }) => {
    const rootStore = useContext(RootStoreContent);
    const { loadProfile, profile, loadingProfile } = rootStore.profileStore;

    useEffect(() => {
        loadProfile(match.params.username);
    }, [match, loadProfile])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />

    return (
        <Grid>
            <Grid.Column width={16}>
                <ProfileHeader profile={profile!}/>
                <ProfileContent />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ProfilePage)
