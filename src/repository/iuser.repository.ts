import UserModel from "../models/user.model";

export default interface IUserRepository {
  findAll(): UserModel[] | null;
  findById(id: number): UserModel | null;
  create(userModel: UserModel): UserModel;
  update(userModel: UserModel): UserModel;
  delete(id: number): number;
}
