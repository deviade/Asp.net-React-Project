import React, { useContext, useState } from 'react'
import { Segment, Form, Button, Grid } from 'semantic-ui-react'
import { ActivityFormValues } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import SelectInput from '../../../app/common/form/SelectInput';
import { category } from '../../../app/common/options/CategoryOptions'
import DateInput from '../../../app/common/form/DateInput'
import { combineDateAndTime } from '../../../app/common/util/util';
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { RootStoreContent } from '../../../app/stores/rootStore';


const validate = combineValidators({
    title: isRequired({ message: 'Event title is required' }),
    category: isRequired('Catgory'),
    description: composeValidators(
        isRequired('Description'),
        hasLengthGreaterThan(4)({ message: 'Description needs to be atleast 5 characters' })
    )(),
    city: isRequired('City'),
    venue: isRequired('Venue'),
    date: isRequired('Date'),
    time: isRequired('Time')
})

interface DetailParams {
    id: string
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
    const rootStore = useContext(RootStoreContent);
    const {
        createActivity,
        editActivity,
        submitting,
        loadActivity
    } = rootStore.activityStore

    const [activity, setActivity] = useState(new ActivityFormValues());
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (match.params.id) {
            setLoading(true);
            loadActivity(match.params.id).then(
                (activity) => setActivity(new ActivityFormValues(activity))
            ).finally(() => setLoading(false));
        }
    }, [loadActivity, match.params.id])

    const handleFinalFormSubmit = (values: any) => {
        const dateAndTime = combineDateAndTime(values.date, values.time);
        const { date, time, ...activity } = values;
        activity.date = dateAndTime;
        if (!activity.id) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    };
    return (
        <Grid>
            <Grid.Column width={12}>
                <Segment clearing>
                    <FinalForm
                        validate={validate}
                        initialValues={activity}
                        onSubmit={handleFinalFormSubmit}
                        render={({ handleSubmit, invalid, pristine }) => (
                            <Form onSubmit={handleSubmit} loading={loading}>
                                <Field
                                    name='title'
                                    placeholder='Title'
                                    value={activity.title}
                                    component={TextInput}
                                />
                                <Field
                                    name='description'
                                    rows={3}
                                    component={TextAreaInput}
                                    placeholder='Description'
                                    value={activity.description}
                                />
                                <Field
                                    name='category'
                                    component={SelectInput}
                                    options={category}
                                    placeholder='Category'
                                    value={activity.category}
                                />
                                <Form.Group widths='equal'>
                                    <Field
                                        name='date'
                                        component={DateInput}
                                        placeholder='Date'
                                        date={true}
                                        value={activity.date}
                                    />
                                    <Field
                                        name='time'
                                        component={DateInput}
                                        placeholder='Time'
                                        time={true}
                                        value={activity.time}
                                    />
                                </Form.Group>
                                <Field
                                    name='city'
                                    component={TextInput}
                                    placeholder='City'
                                    value={activity.city}
                                />
                                <Field
                                    name='venue'
                                    component={TextInput}
                                    placeholder='Venue'
                                    value={activity.venue}
                                    disabled={loading}
                                />
                                <Button
                                    loading={submitting}
                                    disabled={loading || invalid || pristine}
                                    floated='right'
                                    positive
                                    type='submit'
                                    content='submit'
                                />
                                <Button
                                    floated='right'
                                    type='submit'
                                    content='Cancel'
                                    disabled={loading}
                                    onClick={e => {
                                        e.preventDefault();
                                        activity.id
                                            ? history.push(`/activities/${activity.id}`)
                                            : history.push('/activities');
                                    }}
                                />
                            </Form>
                        )}
                    />
                </Segment>
            </Grid.Column>
        </Grid>

    )
}

export default observer(ActivityForm)
