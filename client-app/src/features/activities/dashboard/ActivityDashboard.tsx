import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import { observer } from 'mobx-react-lite'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContent } from '../../../app/stores/rootStore';

const ActivityDashboard: React.FC = () => {
    const rootStore = useContext(RootStoreContent);
    const { loadActivities, loadingInitial } = rootStore.activityStore;
    
    useEffect(() => {
        loadActivities();
    }, [loadActivities]);

    if (loadingInitial) return <LoadingComponent content='Wait While Loading Activities' />

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Activity Filter</h2>
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDashboard);
