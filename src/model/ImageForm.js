import React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames'
import {Image, Form, Segment} from "semantic-ui-react";
import { uploadPicture } from "../redux/actions/publishActions";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { MAX_PICTURE_SIZE } from "../constants";


export class ImageForm extends React.Component {

    static propTypes = {
        imgUrl: PropTypes.string,
        pictureSet: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.props.pictureSet(files[0]);
    }

    render() {
        return (
            <Form style={{margin: '1em 7em 1em 7em'}}
            >
                <Segment className="FileUpload">
                    {this.props.imgUrl === '' ?
                        <Dropzone
                            onDropAccepted={this.onImageDrop.bind(this)}
                            multiple={false}
                            accept="image/*"
                            maxSize={MAX_PICTURE_SIZE}
                            onDropRejected={() => {
                                alert('rejected!');
                            }}
                        >
                            {({getRootProps, getInputProps, isDragActive}) => {
                                return (
                                    <Segment
                                        {...getRootProps()}
                                        className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                                    >
                                        <input {...getInputProps()} />
                                        {
                                            isDragActive ?
                                                <p>Drop files here...</p> :
                                                <p>Try dropping some files here, or click to select files to upload(less than 1 MB).</p>
                                        }
                                    </Segment>
                                )
                            }}
                        </Dropzone>
                        :
                        <Segment>
                            <p>{this.state.uploadedFile.name}</p>
                            <Image src={this.props.imgUrl}/>
                        </Segment>}
                </Segment>
            </Form>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    imgUrl: state._publishEvents.imgUrl
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    pictureSet: (file) => {
        dispatch(uploadPicture(file))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);