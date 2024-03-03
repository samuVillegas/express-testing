import { CreateUserRequestBodyDto } from "../../src/dto/user.dto";
import UserModel from "../../src/models/user.model";
import UserRepository from "../../src/repository/user.repository";
import UserService from "../../src/service/user.service";

const userService = new UserService();

describe("user.service.test", () => {
  it("Create user test Ok", () => {
    //Arrange
    const id = 1;
    const name = "Samuel";
    const email = "ville@gmail.com";
    const password = "1234567";

    const createUserRequestDtoParam: CreateUserRequestBodyDto = {
      name,
      email,
      password,
    };

    const userModelParamOfCreateMethod = new UserModel();
    userModelParamOfCreateMethod.name = name;
    userModelParamOfCreateMethod.email = email;
    userModelParamOfCreateMethod.password = password;

    const userModelReturnedByCreateMethod = new UserModel();
    userModelReturnedByCreateMethod.id = id;
    userModelReturnedByCreateMethod.name = name;
    userModelReturnedByCreateMethod.email = email;
    userModelReturnedByCreateMethod.password = password;

    const userResponseDtoExpected = {
      id,
      name,
      email,
      password,
    };

    const createMock = jest
      .spyOn(UserRepository.prototype, "create")
      .mockImplementation(() => userModelReturnedByCreateMethod);

    //Act
    const result = userService.create(createUserRequestDtoParam);

    //Assert
    expect(result).toEqual(userResponseDtoExpected);
    expect(createMock).toHaveBeenCalledWith(userModelParamOfCreateMethod);
  });
});
