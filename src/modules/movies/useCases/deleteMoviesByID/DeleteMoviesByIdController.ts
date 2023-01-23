import { DeleteMovieByIdUseCase } from "./DeleteMoviesByIdUseCase";
import { Request, Response } from "express";

export class DeleteMovieByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteMovieByIdUseCase = new DeleteMovieByIdUseCase();

    console.log(id);
    console.log(typeof id);
    const result = await deleteMovieByIdUseCase.execute({
      id,
      title: "",
      duration: 0,
      release_date: "",
    });

    return res.status(201).send({
      Menssage: "Sucess full",
    });
  }
}
