import { Partido } from "src/app/feature/partido/shared/model/partido";

export class Apuesta {
  id ?: string;
	dinero ?: string;
	nombre ?: string;
	cedula ?: string;
	puntajePais1 ?: string;
	puntajePais2 ?: string;
	isGanador ?: boolean;
  dineroGanado ?: string;
  partido ?: Partido;
}
