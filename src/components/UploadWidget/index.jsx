import {useEffect, useState, useRef} from 'react'
import { Button } from 'antd'
const UploadWidget = () => {
    const cloudnaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudnaryRef.current = window.cloudinary;
        widgetRef.current = cloudnaryRef.current.createUploadWidget({
            cloudName: "digjzzh2e",
            uploadPreset: "emate123"
        }, function(error, result){

        })
    })
  return (
    <div>
        <Button onClick={() => widgetRef.current.open()}>
            Upload
        </Button>
    </div>
  )
}

export default UploadWidget
