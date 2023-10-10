import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Image, Divider } from 'antd';
import { Video } from 'cloudinary-react';
import axios from 'axios';
import UploadWidget from '../../components/UploadWidget';

const Wallet = () => {
  const API_KEY = "373bc9b180e920e9c2ebceaa3b341eed"
  const [img, setImg] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const customRequest = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.set('key', API_KEY);
    formData.append('image', file);

    try {
      const response = await axios.post('https://api.imgbb.com/1/upload', formData);

      if (response.status === 200 && response.data && response.data.data) {
        // Successful upload
        const imageUrl = response.data.data.url;
        setImg(imageUrl)

        console.log('img URL', imageUrl);

        onSuccess();
        message.success(`${file.name} uploaded successfully. Image URL: ${imageUrl}`);
      } else {
        // Handle upload failure
        onError();
        message.error(`Failed to upload ${file.name}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error uploading image:', error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }

   
  };

  const customRequestForUploadVideo = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/digjzzh2e/auto/upload?upload_preset=emate123`, // Replace 'your-cloud-name' with your Cloudinary Cloud Name
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('res', response);

      // if (response.status === 200 && response.data.secure_url) {
      //   const videoUrl = response.data.secure_url;
      //   setVideoUrl(videoUrl);
      //   onSuccess();
      //   message.success(`${file.name} uploaded successfully. Video URL: ${videoUrl}`);
      // } else {
      //   onError();
      //   message.error(`Failed to upload ${file.name}`);
      // }
    } catch (error) {
      console.error('Error uploading video:', error);
      onError(error);
      message.error(`Failed to upload ${file.name}`);
    }
  };


  return (
    <main style={{minHeight: '90vh'}}>
        <h1>Test Upload Image</h1>
        <Upload customRequest={customRequest}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>


        <Image src={img}/>
        <h1>Hi</h1>
        <Divider/>
      <h1>Upload Video</h1>
      <Upload customRequest={customRequestForUploadVideo}>
        <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
        </Upload>
        {videoUrl && (
        <div>
          <h2>Uploaded Video:</h2>
         
          <Video publicId={videoUrl} controls width="400" height="300" />
        </div>
      )}


  <Divider/>
  <UploadWidget />        
    </main>
  )
}

export default Wallet
