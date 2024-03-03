import {
  CreateUserRequestBodyDto,
  UpdateUserRequestBodyDto,
  UserResponseDto,
} from "../dto/user.dto";

export default interface IUserService {
  create(createUserDto: CreateUserRequestBodyDto): UserResponseDto;
  list(): UserResponseDto[];
  update(id: number, updateUserDto: UpdateUserRequestBodyDto): UserResponseDto;
  delete(id: number): boolean;
}
