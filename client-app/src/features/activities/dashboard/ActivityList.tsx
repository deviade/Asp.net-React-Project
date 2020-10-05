import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext } from 'react'
import { Item, Label } from 'semantic-ui-react';
import { RootStoreContent } from '../../../app/stores/rootStore';
import ActivityListItem from './ActivityListItem'
import {format} from 'date-fns';

const ActivityList: React.FC = () => {

    const rootStore = useContext(RootStoreContent);
    const { activityByDate } = rootStore.activityStore;

    return (
        <>
            {activityByDate.map(([group, activities]) => (
                <Fragment key={group}>
                    <Label size='large' color='blue'>
                        {format(Date.parse(group), 'eeee do MMMM')}
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
