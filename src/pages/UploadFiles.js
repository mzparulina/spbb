import React,  { useState, useEffect }from 'react'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import useFileHandlers from '../components/useFileHandlers'

const Input = (props) => (
    <input
      type="file"
      accept="image/*"
      name="img-loader-input"
      multiple
      {...props}
    />
  )
function UploadFiles() {

 
}

export default UploadFiles
