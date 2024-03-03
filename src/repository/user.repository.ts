import UserModel from "../models/user.model";
import IUserRepository from "./iuser.repository";

export default class UserRepository implements IUserRepository {
  private static userModelList: UserModel[] = [];
  private static userModelId: number = 0;

  findAll(): UserModel[] | null {
    return UserRepository.userModelList.length > 0
      ? UserRepository.userModelList
      : null;
  }
  findById(id: number): UserModel | null {
    const userModels = UserRepository.userModelList.filter(
      (userModel) => userModel.id === id
    );
    if (userModels.length === 1) return userModels[0];
    else return null;
  }
  create(userModel: UserModel): UserModel {
    userModel.id = ++UserRepository.userModelId;
    UserRepository.userModelList.push(userModel);
    return userModel;
  }
  update(userModel: UserModel): UserModel {
    const index = UserRepository.userModelList.findIndex((userModelFilter) => {
      userModelFilter.id === userModel.id;
    });
    if (index !== -1) {
      UserRepository.userModelList[index] = userModel;
    }
    return userModel;
  }
  delete(id: number): number {
    const index = UserRepository.userModelList.findIndex((userModelFilter) => {
      userModelFilter.id === id;
    });
    UserRepository.userModelList.splice(index, 1);
    return 1;
  }
}
