import { FileItem, FileUploader, FileUploaderOptions } from 'ng2-file-upload';

export class FileUploaderOneRequest extends FileUploader {

    constructor(options: FileUploaderOptions) {
        super(options);
    }

    uploadAllFiles(): XMLHttpRequest {

        var xhr = new XMLHttpRequest();
        var sendable = new FormData();
        var fakeitem: FileItem = null;
        this.onBuildItemForm(fakeitem, sendable);

        for (const item of this.queue) {
            item.isReady = true;
            item.isUploading = true;
            item.isUploaded = false;
            item.isSuccess = false;
            item.isCancel = false;
            item.isError = false;
            item.progress = 0;

            if (typeof item._file.size !== 'number') {
                throw new TypeError('The file specified is no longer valid');
            }
            sendable.append("files", item._file, item.file.name);
        }

        if (this.options.additionalParameter !== undefined) {
            Object.keys(this.options.additionalParameter).forEach((key) => {
                sendable.append(key, this.options.additionalParameter[key]);
            });
        }

        // xhr.onload = () => {
        //     var gist = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 ? 'Success' : 'Error';
        //     var method = 'on' + gist + 'Item';
        //     this[method](fakeitem, null, xhr.status, null);

        // };
        xhr.onerror = () => {
            this.onErrorItem(fakeitem, null, xhr.status, null);
        };

        xhr.onabort = () => {
            this.onErrorItem(fakeitem, null, xhr.status, null);
        };

        xhr.open("POST", this.options.url, true);
        xhr.withCredentials = true;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }

        // ---------------
        xhr.onload = () => {
            const headers = this._parseHeaders(xhr.getAllResponseHeaders());
            const response = this._transformResponse(xhr.response, headers);
            const gist = this._isSuccessCode(xhr.status) ? "Success" : "Error";
            const method = "_on" + gist + "Item";
            const queueLength = this.queue.length;
            for (var i = 0; i < queueLength; i++) {
                this[method](
                    this.queue[this.queue.length - 1],
                    response,
                    xhr.status,
                    headers
                );
                this._onCompleteItem(
                    this.queue[this.queue.length - 1],
                    response,
                    xhr.status,
                    headers
                );
            }
        };
        //------
        xhr.send(sendable);
        return xhr;
    };


    // this.uploader.uploadAllFiles().onreadystatechange = function () {
    //   if(this.readyState==4){
    //     if(this.status==200){
    //       that.pciturePaths=JSON.parse(this.response).response;
    //       console.log(JSON.parse(this.response).response);
    //     }
    //   }
    // }

}