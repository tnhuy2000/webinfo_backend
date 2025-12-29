import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('JSON', () => Object)
export class JSONScalar implements CustomScalar<object, object> {
  description = 'JSON custom scalar type';

  parseValue(value: any): object {
    return value; // value from the client
  }

  serialize(value: any): object {
    return value; // value sent to the client
  }

  parseLiteral(ast: ValueNode): object {
    if (ast.kind === Kind.OBJECT) {
      return this.parseObject(ast as any);
    }
    return null as any;
  }

  private parseObject(ast: any): any {
    const value = Object.create(null);
    ast.fields.forEach((field: any) => {
      value[field.name.value] = this.parseLiteral(field.value);
    });
    return value;
  }
}
