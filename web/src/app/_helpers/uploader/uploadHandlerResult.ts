export class UploadHandlerResult<T> {
    message: string;
    status: UploadStatus;
    files: UploadFileInfo[];
    data: T;
  }
  
  export enum UploadStatus {
      failure = 0,
      success = 1,
      successWithSomeFailure = 2,
      progress = 3
  }
  
  export interface UploadFileInfo {
      id: number;
      title: string;
      size: number;
      sizeInformations: string;
      name: string;
      uploadTime: Date | string;
      type: any;
      status: UploadStatus;
      extension: string;
      message: string;
  }
  