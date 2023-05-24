import axios from "axios";
import {FTP_URL} from "../http";

export default class FtpService {

    static async renameFile(originalFile: File, newName: string) {
        return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
        });
    }

    static async getFileExtension(filename: string) {
        return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
    }

    static async uploadFile(selectedFile: File, fileName: string) {
        const file = await this.renameFile(
            selectedFile,
            fileName + "." + await this.getFileExtension(selectedFile.name)
        )
        const formData = new FormData();
        formData.append('file', file);
        axios.post(FTP_URL + "/upload", formData)
            .then(() => {
                console.log('File uploaded successfully');
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    }

    static async downloadFile(fileName: string) {
        return axios.get(`${FTP_URL}/download/${fileName}`)
            .then((response) => {
                console.log('File downloaded successfully');
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    }

}