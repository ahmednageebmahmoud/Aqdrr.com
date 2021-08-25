import {
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { distinctUntilChanged, scan } from "rxjs/operators";


export interface Download<T> {
  content: Blob | null;
  progress: number;
  message: string;
  state: "PENDING" | "IN_PROGRESS" | "DONE";
}

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
  return event.type === HttpEventType.Response;
}

function isHttpProgressEvent(event: HttpEvent<unknown>): event is HttpProgressEvent {
  return (
    event.type === HttpEventType.DownloadProgress ||
    event.type === HttpEventType.UploadProgress
  );
}

export function download(): (source: Observable<HttpEvent<Blob>>) => Observable<Download<Blob>> {
  return (source: Observable<HttpEvent<Blob>>) =>
    source.pipe(
      scan(
        (download: Download<Blob>, event): Download<Blob> => {
          if (isHttpProgressEvent(event)) {
            var progress = event.total
              ? Math.round((100 * event.loaded) / event.total)
              : download.progress;
            return {
              progress: progress,
              state: "IN_PROGRESS",
              content: null,
              message: `يتم التنزيل ${progress}%`
            };
          }
          if (isHttpResponse(event)) {
            // if (saver) {
            //   saver(event.body);
            // }
            return {
              progress: 100,
              state: "DONE",
              content: event.body,
              message: 'تم تنزيل الملف بنجاح'
            };
          }
          return download;
        },
        { state: "PENDING", progress: 0, content: null, message: 'جاري تحضير الملف للتنزيل' }
      ),
      distinctUntilChanged((a, b) => a.state === b.state
        && a.progress === b.progress
        && a.content === b.content
      )
    );
}




export function getFileExtensionIcon(filename) { // this will give you icon class name

  const iconList = [ // array of icon class list based on type
    { type: "xlsx", icon: "fa fa-file-excel-o", title: "ملف اكسيل" },
    { type: "doc", icon: "fa fa-file-word-o", title: "مستند" },
    { type: "docx", icon: "fa fa-file-word-o", title: "مستند" },
    { type: "pdf", icon: "fa fa-file-pdf-o", title: "ملف pdf" },
    { type: "jpg", icon: "fa fa-picture-o", title: "صورة" },
    { type: "png", icon: "fa fa-picture-o", title: "صورة" },
    { type: "jpeg", icon: "fa fa-picture-o", title: "صورة" },
    { type: "zip", icon: "fa fa-file-archive-o", title: "ملف مضغوط" },
    { type: "rar", icon: "fa fa-file-archive-o", title: "ملف مضغوط" },
    { type: "mp4", icon: "fa fa-file-video-o", title: "مقطع فيديو" },
    { type: "mp3", icon: "fa fa-file-audio-o", title: "ملف صوتي" },
    { type: "txt", icon: "fa fa-file-text-o", title: "صورة" },
  ];

  let ext = filename.split(".").pop();
  let obj = iconList?.filter(row => {
    if (row.type === ext) {
      return true;
    }
  });
  if (obj.length > 0) {
    let icon = obj[0].icon;
    return icon;
  } else {
    return "fa fa-file-o";
  }
}
