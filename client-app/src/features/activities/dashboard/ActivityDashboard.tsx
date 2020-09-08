import React, { SyntheticEvent } from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../../activities/details/ActivityDetails'
import ActivityForm from '../../activities/form/ActivityForm'



interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setselectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (e:SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target:string;
}

const ActivityDashboard: React.FC<IProps> = (props) => {
    const {
        activities,
        selectActivity,
        selectedActivity,
        editMode,
        setEditMode,
        setselectedActivity,
        editActivity,
        createActivity,
        deleteActivity,
        submitting,
        target
    } = props
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                    target={target}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity}
                        setEditMode={setEditMode}
                        setselectedActivity={setselectedActivity}                        
                    />
                )}
                {editMode && (
                    <ActivityForm
                        key={(selectedActivity && selectedActivity.id ) || 0}
                        setEditMode={setEditMode}
                        activity={selectedActivity}
                        editActivity={editActivity}
                        createActivity={createActivity}
                        submitting={submitting}
                    />
                )}
            </Grid.Column>
        </Grid>

    );
};

export default ActivityDashboard
