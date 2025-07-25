import { type ChangeTheme } from "../../domain/usecases/ChangeTheme";
import { type ToogleThema } from "../../domain/entities/Toggle";

export class ChangeToggleService implements ChangeTheme {
    execute(thema: boolean): ToogleThema {
        return {
            thema
        }
    }
}