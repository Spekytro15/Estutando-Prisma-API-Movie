import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class DeleteMovieByIdUseCase {
  async execute(id: CreateMovieDTO): Promise<void> {
    // Verificar se o filme já existe
    const movieAlreadyExists = await prisma.movie.delete({
      where: id,
    });

    if (!movieAlreadyExists) {
      throw new AppError("Movie Not exists!");
    }
  }
}
