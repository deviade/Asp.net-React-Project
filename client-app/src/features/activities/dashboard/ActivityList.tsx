import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext } from 'react'
import { Item, Label } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';
import ActivityListItem from './ActivityListItem'

const ActivityList: React.FC = () => {

    const activityStore = useContext(ActivityStore);
    const { activityByDate } = activityStore;

    return (
        <>
            {activityByDate.map(([group, activities]) => (
                <Fragment key={group}>
                    <Label key={group} size='large' color='blue'>
                        {group}
                    </Label>
                    <Item.Group divider>
                        {activities.map(list => (
                            <ActivityListItem key={list.id} list={list} />
                        ))}
                    </Item.Group>
                </Fragment>
            ))}
        </>
    )
}

export default observer(ActivityList);
