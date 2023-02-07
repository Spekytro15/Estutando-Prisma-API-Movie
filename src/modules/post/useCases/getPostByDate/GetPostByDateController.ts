import { Request, Response } from "express";
import { GetPostByDateUseCase } from "./GetPostByDateUseCase";

export class GetPostByDateController {
  async handle(req: Request, res: Response) {
    const { pPage, pPer_Page } = req.params;
    const getPostByDateUseCase = new GetPostByDateUseCase();

    const result = await getPostByDateUseCase.execute(
      parseInt(pPage),
      parseInt(pPer_Page)
    );

    return res.status(200).json({
      code: 200,
      Page: parseInt(pPage),
      Per_Page: parseInt(pPer_Page),
      items: result,
    });
  }
}
