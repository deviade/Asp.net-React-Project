import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

interface ILoader{
    inverted?: boolean
    content?: string
}

const LoadingComponent:React.FC<ILoader> = ({content,inverted=true}) => {
    return (
        <Dimmer active inverted = {inverted}>
            <Loader content = {content} />
        </Dimmer>
    );
};

export default LoadingComponent
