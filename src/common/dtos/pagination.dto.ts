import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{

    @IsOptional()
    @IsPositive()
    // Transformar
    limit?: number;
    
    @IsOptional()
    @Min(0)
    offset?: number;

}