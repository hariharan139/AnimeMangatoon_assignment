import React, { useState } from 'react';

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles.length > 0) {
            setFiles([...selectedFiles]); // Convert FileList to an array
        } else {
            console.error("No files selected.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (files.length > 0) {
            console.log("Files to process:", files);
        } else {
            console.error("Must pass a valid list of files to parse.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" multiple onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
