import { ErrorDto } from "@domain/dto/error.dto";
import { OptionsDto } from "@domain/dto/options.dto";
import { CreateUserDto, UpdateUserDto } from "@domain/dto/user.dto";
import { User } from "@domain/models/user";
import { IUserRepository } from "@domain/repositories/user.repository";

export interface IRepository {
  userRepo: IUserRepository;
}

interface IUserService {
  create: (user: CreateUserDto) => Promise<boolean | ErrorDto>;
  update: (id: string, user: UpdateUserDto) => Promise<boolean | ErrorDto>;
  remove: (id: string) => Promise<boolean | ErrorDto>;
  get: (id: string) => Promise<User | ErrorDto>;
  list: (options: OptionsDto) => Promise<User[] | ErrorDto>;
}

const newUserService = async ({
  userRepo,
}: IRepository): Promise<IUserService> => {
  const create = async (user: CreateUserDto) => {
    return await userRepo.create(user);
  };
  const update = async (id: string, user: UpdateUserDto) => {
    return await userRepo.update(id, user);
  };
  const remove = async (id: string) => {
    return await userRepo.remove(id);
  };
  const get = async (id: string) => {
    return await userRepo.get(id);
  };
  const list = async (options: OptionsDto) => {
    return await userRepo.list(options);
  };
  return {
    create,
    update,
    remove,
    get,
    list,
  };
};

// const userService = await newUserService({});
// const result = userService.get ? await userService.get() : ({} as UserService);
// result.data;

export default newUserService;
