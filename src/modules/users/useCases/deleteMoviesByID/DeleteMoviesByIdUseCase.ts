import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class DeleteMovieByIdUseCase {
  async execute(id: CreateUserDTO): Promise<void> {
    // Verificar se o filme já existe
    const movieAlreadyExists = await prisma.movie.delete({
      where: id,
    });

    if (!movieAlreadyExists) {
      throw new AppError("Movie Not exists!");
    }
  }
}
