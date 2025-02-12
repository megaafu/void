export interface User {
  fullname: string;
  type: string[];
}

export interface AuthResponse {
  error: boolean;
  statusCode: number;
  message: string;
  data: {
    user: User;
    token: string;
  };
}
