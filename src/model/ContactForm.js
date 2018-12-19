import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import classNames from 'classnames'

// import './App.css';

const CLOUDINARY_UPLOAD_PRESET='nzw8sov3';
const CLOUDINARY_UPLOAD_URL='https://api.cloudinary.com/v1_1/hlps10425/image/upload';

export default class ContactForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            uploadedFile:null,
            uploadedFileCloudinaryUrl:''
        };
    }

    onImageDrop(files)
    {
        this.setState({
            uploadedFile:files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file)
    {
        let upload=request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset',CLOUDINARY_UPLOAD_PRESET)
            .field('file',file);

        upload.end((err,response)=>
        {
            if(err)
            {
                console.error(err);
            }

            if(response.body.secure_url!=='')
            {
                this.setState({
                    uploadedFileCloudinaryUrl:response.body.secure_url
                });
            }
        });
    }


    render()
    {
        return (
            <form>
                <div className="FileUpload">
                    <Dropzone
                        onDropAccepted={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/*"
                        maxSize={1048576}
                        onDropRejected={()=>{
                            alert('rejected!');
                        }}
                    >
                        {({getRootProps, getInputProps, isDragActive}) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                            <p>Drop files here...</p> :
                                            <p>Try dropping some files here, or click to select files to upload.</p>
                                    }
                                </div>
                            )
                        }}
                    </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl===''?null:
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl}/>
                        </div>}
                </div>
            </form>
        )
    }
}