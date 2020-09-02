import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activities: IActivity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void;
}

const ActivityList: React.FC<IProps> = (props) => {
    const { activities, selectActivity, deleteActivity } = props;
    return (
        <Segment clearing>
            <Item.Group divider>
                {activities.map(list => (
                    <Item key={list.id}>
                        <Item.Content>
                            <Item.Header as='a'>{list.title}</Item.Header>
                            <Item.Meta>{list.date}</Item.Meta>
                            <Item.Description>
                                <div>{list.description}</div>
                                <div>{list.city}, {list.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    onClick={() => selectActivity(list.id)}
                                    floated='right'
                                    color='blue'
                                    content='View' />
                                <Label basic content={list.category}
                                />
                                <Button
                                    onClick={() => deleteActivity(list.id)}
                                    floated='right'
                                    color='red'
                                    content='Delete'
                                />
                                <Label basic content={list.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}

export default ActivityList
