import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityList: React.FC = () => {

    const activityStore = useContext(ActivityStore);
    const { activityByDate, deleteActivity, submitting, target } = activityStore;

    return (
        <Segment clearing>
            <Item.Group divider>
                {activityByDate.map(list => (
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
                                    as={Link}
                                    to={`/activities/${list.id}`}
                                    floated='right'
                                    color='blue'
                                    content='View' />
                                <Label basic content={list.category}
                                />
                                <Button
                                    name={list.id}
                                    onClick={(e) => deleteActivity(e, list.id)}
                                    floated='right'
                                    color='red'
                                    content='Delete'
                                    loading={target === list.id && submitting}
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

export default observer(ActivityList);
