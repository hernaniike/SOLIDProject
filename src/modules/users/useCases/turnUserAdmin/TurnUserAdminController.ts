import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = <{ user_id: string }>request.params;
      // const userId = <IRequest>user_id;
      const user = this.turnUserAdminUseCase.execute({ user_id });
      console.log(user);
      return response.status(200).json(user);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
  }
}

export { TurnUserAdminController };
