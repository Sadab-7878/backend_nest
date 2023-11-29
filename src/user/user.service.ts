import { Injectable } from "@nestjs/common";
import { userCredDTO } from "./dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "src/models/user.model";

@Injectable()
export class UserService {
  private readonly email: string = "dev@example.com";
  private readonly password: string = "abc1234";

  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>
  ) {}
  userAuth(userCredential: userCredDTO): boolean {
    if (
      userCredential.email === this.email &&
      userCredential.password === this.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  async createUser(user: Users) {
    const result = this.userRepository.insert(user);
    return result;
  }

  async getUserByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return (
        "first_name: " +
        user.first_name +
        "\n" +
        "middle_name: " +
        user.middle_name +
        "\n" +
        "last_name: " +
        user.last_name +
        "\n" +
        "email: " +
        user.email +
        "\n" +
        " password: " +
        user.password
      );
    } else {
      return "User not found";
    }
  }
}
