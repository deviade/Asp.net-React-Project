import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react'

interface IProps {
    setFiles: (files: object[]) => void
}

const dropzoneStyles = {
    border: 'dashed 3px',
    borderColor: '#eee',
    borderRadius: 5,
    paddingTop: 30,
    textAlign: 'center' as 'center',
    height: 200
}

const dropzoneActive = {
    borderColor: 'green'
}

const PhotoWidgetDropzone: React.FC<IProps> = ({ setFiles }) => {
    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map((file: object) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        ));
    }, [setFiles]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}
            style={
                isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
            }
        >
            <input {...getInputProps()} />
            <Icon name='upload' size='huge' />
            <Header content='Drop image here' />
        </div>
    )
}

export default PhotoWidgetDropzone