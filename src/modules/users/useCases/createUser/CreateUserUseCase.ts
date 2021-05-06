import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User | undefined {
    const emailTaken = this.usersRepository.findByEmail(email);

    if (!emailTaken) {
      const user = this.usersRepository.create({ name, email });
      return user;
    }
    throw new Error("Email taken");
  }
}

export { CreateUserUseCase };
