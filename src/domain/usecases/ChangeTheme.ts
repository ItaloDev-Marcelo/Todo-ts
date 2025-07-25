import {type ToogleThema} from '../entities/Toggle';

export interface ChangeTheme {
    execute(thema: boolean) :ToogleThema
}