import React, { Component } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import img2 from '../assets/fileUpload.png';

class Spo2 extends Component {
  // API Endpoints
  custom_file_upload_url = `http://127.0.0.1:5000/spo2_flask`;

  constructor(props) {
    super(props);
    this.state = {
      image_file: null,
      image_preview: '',
    };
  }

  // Image Preview Handler
  handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];

    this.setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });
  };

  // Image/File Submit Handler
  handleSubmitFile = () => {
    if (this.state.image_file !== null) {
      let formData = new FormData();
      formData.append('file', this.state.image_file);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile

      axios
        .post(this.custom_file_upload_url, formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // render from here
  render() {
    return (
      <div className="container d-flex  justify-content-center ">
        {/* image input field */}
        {/* <input
                  type="file"
                  onChange={this.handleImagePreview}
              />
              <label>Upload file</label>
              <button className='btn btn-primary' onClick={this.handleSubmitFile}>Submit</button> */}
        <div className="drag-image shadow ">
          <Image
            src={img2}
            className="my-2"
            style={{ marginBottom: '2rem', height: '20rem' }}
          />
          <div className="icon my-3">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <h6>Drag & Drop File Here</h6>
          <span>OR</span>

          <input type="file" onChange={this.handleImagePreview} />
          <button className="my-3" onClick={this.handleSubmitFile}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Spo2;
