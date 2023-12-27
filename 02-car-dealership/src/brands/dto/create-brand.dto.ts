import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'Must be a cool string' })
  @MinLength(1)
  readonly name: string;
}
