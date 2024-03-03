export interface CreateUserRequestBodyDto {
  name: string;
  email: string;
  password: string;
}

export interface UserResponseDto {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserRequestParamDto {
  id: number;
}

export interface UpdateUserRequestBodyDto {
  name: string;
}

export interface DeleteUserRequestParamDto {
  id: number;
}
