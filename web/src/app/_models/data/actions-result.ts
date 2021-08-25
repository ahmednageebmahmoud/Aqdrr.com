export interface SuccessfullyResult {
  title: string;
  message: string;
}

export interface MessageWithObject {
  message: string;
  data: Object;
}

export interface FailureResult {
  title: string;
  message: string;
}


export interface ExecuteResult {
  isSuccessfully: boolean;
  message: string;
  actionResult: any;
}
