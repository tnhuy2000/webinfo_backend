import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class JSONScalar implements CustomScalar<object, object> {
    description: string;
    parseValue(value: any): object;
    serialize(value: any): object;
    parseLiteral(ast: ValueNode): object;
    private parseObject;
}
