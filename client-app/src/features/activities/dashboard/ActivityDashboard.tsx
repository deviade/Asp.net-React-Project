import React, { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import ActivityDetails from '../../activities/details/ActivityDetails'
import ActivityForm from '../../activities/form/ActivityForm'
import { observer } from 'mobx-react-lite'
import Activitystore from '../../../app/stores/activityStore'

const ActivityDashboard: React.FC = () => {

    const activityStore = useContext(Activitystore);
    const { editMode, selectedActivity } = activityStore;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails />
                )}
                {editMode && (
                    <ActivityForm
                        key={(selectedActivity && selectedActivity.id) || 0}
                        activity={selectedActivity}
                    />
                )}
            </Grid.Column>
        </Grid>

    );
};

export default observer(ActivityDashboard);
