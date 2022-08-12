import { OptionsDto } from "@domain/dto/options.dto";
import { CreateUserDto, UpdateUserDto } from "@domain/dto/user.dto";
import { User } from "@domain/models/user";
import { IUserRepository } from "@domain/repositories/user.repository";

const newUserMock = async (): Promise<IUserRepository> => {
  const create = async (user: CreateUserDto) => {
    return false;
  };
  const update = async (id: string, user: UpdateUserDto) => {
    return false;
  };
  const remove = async (id: string) => {
    return false;
  };
  const get = async (id: string) => {
    return {} as User;
  };
  const list = async (options: OptionsDto) => {
    return [] as User[];
  };
  return { create, update, remove, get, list };
};
export default newUserMock;
