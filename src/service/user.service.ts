import {
  CreateUserRequestBodyDto,
  UserResponseDto,
  UpdateUserRequestBodyDto,
} from "../dto/user.dto";
import NotFoundError from "../middlewares/notfound.error.middleware";
import UserModel from "../models/user.model";
import UserRepository from "../repository/user.repository";
import IUserService from "./iuser.service";

export default class UserService implements IUserService {
  private readonly userRepository: UserRepository = new UserRepository();

  create(createUserDto: CreateUserRequestBodyDto): UserResponseDto {
    const user: UserModel = new UserModel();

    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    const newUser = this.userRepository.create(user);

    return newUser;
  }
  list(): UserResponseDto[] {
    const userModels = this.userRepository.findAll();
    if (userModels) {
      return userModels;
    } else {
      throw new NotFoundError("Users not found");
    }
  }
  update(id: number, updateUserDto: UpdateUserRequestBodyDto): UserResponseDto {
    const user = this.userRepository.findById(id);
    if (!user) throw new NotFoundError("User not found");
    user.name = updateUserDto.name;
    return Object(this.userRepository.update(user));
  }
  delete(id: number): boolean {
    const user = this.userRepository.findById(id);
    if (!user) throw new NotFoundError("User not found");
    this.userRepository.delete(id);
    return true;
  }
}
