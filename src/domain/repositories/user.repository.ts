import { ErrorDto } from "@domain/dto/error.dto";
import { OptionsDto } from "@domain/dto/options.dto";
import { CreateUserDto, UpdateUserDto } from "@domain/dto/user.dto";
import { User } from "@domain/models/user";

export interface IUserRepository {
  create: (user: CreateUserDto) => Promise<boolean>;
  update: (id: string, user: UpdateUserDto) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
  get: (id: string) => Promise<User | ErrorDto>;
  list: (options: OptionsDto) => Promise<User[] | ErrorDto>;
}
