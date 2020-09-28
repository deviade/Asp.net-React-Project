import React from 'react'
import { Link } from 'react-router-dom';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import format from 'date-fns/format'

const ActivityListItem: React.FC<{ list: IActivity }> = ({ list }) => {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as='a'>{list.title}</Item.Header>
                            <Item.Description>
                                Hosted by Bob
                        </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>

            </Segment>
            <Segment>
                <Icon name='clock' /> {format(list.date,'h:mm a')}
                <Icon name='marker' /> {list.venue}, {list.city}
            </Segment>
            <Segment secondary>
                Attendees will go here
            </Segment>
            <Segment clearing>
                <span>{list.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${list.id}`}
                    floated='right'
                    color='blue'
                    content='View'
                />
            </Segment>
        </Segment.Group>

    )
}

export default ActivityListItem
