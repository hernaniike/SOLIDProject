import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = <{ user_id: string }>request.headers;
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(all);
    } catch (e) {
      throw response.status(400).json({ error: e.message });
    }
  }
}

export { ListAllUsersController };
