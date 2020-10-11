import React from 'react'
import { Link } from 'react-router-dom';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityListItemAttendees from './ActivityListItemAttendees';
import format from 'date-fns/format'

const ActivityListItem: React.FC<{ list: IActivity }> = ({ list }) => {
    const host = list.attendees.filter(x => x.isHost)[0];
    return (
        <>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular src={host.image || '/assets/user.png'} />
                            <Item.Content>
                                <Item.Header as={Link} to={`/activities/${list.id}`}>{list.title}</Item.Header>
                                <Item.Description>Hosted by {host.displayName}</Item.Description>
                                {list.isHost &&
                                    <Item.Description>
                                        <Label
                                            basic
                                            color='orange'
                                            content='You are hosting this activity' />
                                    </Item.Description>}
                                {list.isGoing && !list.isHost &&
                                    <Item.Description>
                                        <Label
                                            basic
                                            color='green'
                                            content='You are going to this activity' />
                                    </Item.Description>}
                            </Item.Content>
                        </Item>
                    </Item.Group>

                </Segment><Segment>
                    <Icon name='clock' /> {format(list.date, 'h:mm a')}
                    <Icon name='marker' /> {list.venue}, {list.city}
                </Segment><Segment secondary>
                    <ActivityListItemAttendees attendees={list.attendees} />

                </Segment>
                <Segment clearing>
                    <span>{list.description}</span>
                    <Button
                        as={Link}
                        to={`/activities/${list.id}`}
                        floated='right'
                        color='blue'
                        content='View' />
                </Segment>
            </Segment.Group>
        </>

    )
}

export default ActivityListItem
