
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UserIds
 * 
 */
export type UserIds = $Result.DefaultSelection<Prisma.$UserIdsPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model CharacterCustomization
 * 
 */
export type CharacterCustomization = $Result.DefaultSelection<Prisma.$CharacterCustomizationPayload>
/**
 * Model CharacterStatus
 * 
 */
export type CharacterStatus = $Result.DefaultSelection<Prisma.$CharacterStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.userIds`: Exposes CRUD operations for the **UserIds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserIds
    * const userIds = await prisma.userIds.findMany()
    * ```
    */
  get userIds(): Prisma.UserIdsDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.characterCustomization`: Exposes CRUD operations for the **CharacterCustomization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterCustomizations
    * const characterCustomizations = await prisma.characterCustomization.findMany()
    * ```
    */
  get characterCustomization(): Prisma.CharacterCustomizationDelegate<ExtArgs>;

  /**
   * `prisma.characterStatus`: Exposes CRUD operations for the **CharacterStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterStatuses
    * const characterStatuses = await prisma.characterStatus.findMany()
    * ```
    */
  get characterStatus(): Prisma.CharacterStatusDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    UserIds: 'UserIds',
    Characters: 'Characters',
    CharacterCustomization: 'CharacterCustomization',
    CharacterStatus: 'CharacterStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "userIds" | "characters" | "characterCustomization" | "characterStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UserIds: {
        payload: Prisma.$UserIdsPayload<ExtArgs>
        fields: Prisma.UserIdsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserIdsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserIdsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          findFirst: {
            args: Prisma.UserIdsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserIdsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          findMany: {
            args: Prisma.UserIdsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>[]
          }
          create: {
            args: Prisma.UserIdsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          createMany: {
            args: Prisma.UserIdsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserIdsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          update: {
            args: Prisma.UserIdsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          deleteMany: {
            args: Prisma.UserIdsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserIdsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserIdsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIdsPayload>
          }
          aggregate: {
            args: Prisma.UserIdsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserIds>
          }
          groupBy: {
            args: Prisma.UserIdsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserIdsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserIdsCountArgs<ExtArgs>
            result: $Utils.Optional<UserIdsCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      CharacterCustomization: {
        payload: Prisma.$CharacterCustomizationPayload<ExtArgs>
        fields: Prisma.CharacterCustomizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterCustomizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterCustomizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          findFirst: {
            args: Prisma.CharacterCustomizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterCustomizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          findMany: {
            args: Prisma.CharacterCustomizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>[]
          }
          create: {
            args: Prisma.CharacterCustomizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          createMany: {
            args: Prisma.CharacterCustomizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharacterCustomizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          update: {
            args: Prisma.CharacterCustomizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          deleteMany: {
            args: Prisma.CharacterCustomizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterCustomizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterCustomizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterCustomizationPayload>
          }
          aggregate: {
            args: Prisma.CharacterCustomizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterCustomization>
          }
          groupBy: {
            args: Prisma.CharacterCustomizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterCustomizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCustomizationCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCustomizationCountAggregateOutputType> | number
          }
        }
      }
      CharacterStatus: {
        payload: Prisma.$CharacterStatusPayload<ExtArgs>
        fields: Prisma.CharacterStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          findFirst: {
            args: Prisma.CharacterStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          findMany: {
            args: Prisma.CharacterStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>[]
          }
          create: {
            args: Prisma.CharacterStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          createMany: {
            args: Prisma.CharacterStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharacterStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          update: {
            args: Prisma.CharacterStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          deleteMany: {
            args: Prisma.CharacterStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatusPayload>
          }
          aggregate: {
            args: Prisma.CharacterStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterStatus>
          }
          groupBy: {
            args: Prisma.CharacterStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterStatusCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterStatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_ids: number
    characters: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | UsersCountOutputTypeCountUser_idsArgs
    characters?: boolean | UsersCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_idsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    character_select: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    character_select: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    whitelisted: boolean | null
    banned: boolean | null
    character_select: number | null
    last_login: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    whitelisted: boolean | null
    banned: boolean | null
    character_select: number | null
    last_login: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    whitelisted: number
    banned: number
    character_select: number
    last_login: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    character_select?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    character_select?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    whitelisted?: true
    banned?: true
    character_select?: true
    last_login?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    whitelisted?: true
    banned?: true
    character_select?: true
    last_login?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    whitelisted?: true
    banned?: true
    character_select?: true
    last_login?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    whitelisted: boolean | null
    banned: boolean | null
    character_select: number | null
    last_login: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whitelisted?: boolean
    banned?: boolean
    character_select?: boolean
    last_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_ids?: boolean | Users$user_idsArgs<ExtArgs>
    characters?: boolean | Users$charactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type UsersSelectScalar = {
    id?: boolean
    whitelisted?: boolean
    banned?: boolean
    character_select?: boolean
    last_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | Users$user_idsArgs<ExtArgs>
    characters?: boolean | Users$charactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      user_ids: Prisma.$UserIdsPayload<ExtArgs>[]
      characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      whitelisted: boolean | null
      banned: boolean | null
      character_select: number | null
      last_login: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_ids<T extends Users$user_idsArgs<ExtArgs> = {}>(args?: Subset<T, Users$user_idsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findMany"> | Null>
    characters<T extends Users$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Users$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly whitelisted: FieldRef<"Users", 'Boolean'>
    readonly banned: FieldRef<"Users", 'Boolean'>
    readonly character_select: FieldRef<"Users", 'Int'>
    readonly last_login: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.user_ids
   */
  export type Users$user_idsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    where?: UserIdsWhereInput
    orderBy?: UserIdsOrderByWithRelationInput | UserIdsOrderByWithRelationInput[]
    cursor?: UserIdsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserIdsScalarFieldEnum | UserIdsScalarFieldEnum[]
  }

  /**
   * Users.characters
   */
  export type Users$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model UserIds
   */

  export type AggregateUserIds = {
    _count: UserIdsCountAggregateOutputType | null
    _avg: UserIdsAvgAggregateOutputType | null
    _sum: UserIdsSumAggregateOutputType | null
    _min: UserIdsMinAggregateOutputType | null
    _max: UserIdsMaxAggregateOutputType | null
  }

  export type UserIdsAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserIdsSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserIdsMinAggregateOutputType = {
    identifier: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserIdsMaxAggregateOutputType = {
    identifier: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserIdsCountAggregateOutputType = {
    identifier: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserIdsAvgAggregateInputType = {
    user_id?: true
  }

  export type UserIdsSumAggregateInputType = {
    user_id?: true
  }

  export type UserIdsMinAggregateInputType = {
    identifier?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserIdsMaxAggregateInputType = {
    identifier?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserIdsCountAggregateInputType = {
    identifier?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserIdsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIds to aggregate.
     */
    where?: UserIdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIds to fetch.
     */
    orderBy?: UserIdsOrderByWithRelationInput | UserIdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserIdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserIds
    **/
    _count?: true | UserIdsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserIdsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserIdsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserIdsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserIdsMaxAggregateInputType
  }

  export type GetUserIdsAggregateType<T extends UserIdsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserIds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserIds[P]>
      : GetScalarType<T[P], AggregateUserIds[P]>
  }




  export type UserIdsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdsWhereInput
    orderBy?: UserIdsOrderByWithAggregationInput | UserIdsOrderByWithAggregationInput[]
    by: UserIdsScalarFieldEnum[] | UserIdsScalarFieldEnum
    having?: UserIdsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserIdsCountAggregateInputType | true
    _avg?: UserIdsAvgAggregateInputType
    _sum?: UserIdsSumAggregateInputType
    _min?: UserIdsMinAggregateInputType
    _max?: UserIdsMaxAggregateInputType
  }

  export type UserIdsGroupByOutputType = {
    identifier: string
    user_id: number
    createdAt: Date
    updatedAt: Date
    _count: UserIdsCountAggregateOutputType | null
    _avg: UserIdsAvgAggregateOutputType | null
    _sum: UserIdsSumAggregateOutputType | null
    _min: UserIdsMinAggregateOutputType | null
    _max: UserIdsMaxAggregateOutputType | null
  }

  type GetUserIdsGroupByPayload<T extends UserIdsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserIdsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserIdsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserIdsGroupByOutputType[P]>
            : GetScalarType<T[P], UserIdsGroupByOutputType[P]>
        }
      >
    >


  export type UserIdsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userIds"]>


  export type UserIdsSelectScalar = {
    identifier?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserIdsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserIdsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserIds"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userIds"]>
    composites: {}
  }

  type UserIdsGetPayload<S extends boolean | null | undefined | UserIdsDefaultArgs> = $Result.GetResult<Prisma.$UserIdsPayload, S>

  type UserIdsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserIdsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserIdsCountAggregateInputType | true
    }

  export interface UserIdsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserIds'], meta: { name: 'UserIds' } }
    /**
     * Find zero or one UserIds that matches the filter.
     * @param {UserIdsFindUniqueArgs} args - Arguments to find a UserIds
     * @example
     * // Get one UserIds
     * const userIds = await prisma.userIds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserIdsFindUniqueArgs>(args: SelectSubset<T, UserIdsFindUniqueArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserIds that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserIdsFindUniqueOrThrowArgs} args - Arguments to find a UserIds
     * @example
     * // Get one UserIds
     * const userIds = await prisma.userIds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserIdsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserIdsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsFindFirstArgs} args - Arguments to find a UserIds
     * @example
     * // Get one UserIds
     * const userIds = await prisma.userIds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserIdsFindFirstArgs>(args?: SelectSubset<T, UserIdsFindFirstArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserIds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsFindFirstOrThrowArgs} args - Arguments to find a UserIds
     * @example
     * // Get one UserIds
     * const userIds = await prisma.userIds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserIdsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserIdsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserIds
     * const userIds = await prisma.userIds.findMany()
     * 
     * // Get first 10 UserIds
     * const userIds = await prisma.userIds.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const userIdsWithIdentifierOnly = await prisma.userIds.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends UserIdsFindManyArgs>(args?: SelectSubset<T, UserIdsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserIds.
     * @param {UserIdsCreateArgs} args - Arguments to create a UserIds.
     * @example
     * // Create one UserIds
     * const UserIds = await prisma.userIds.create({
     *   data: {
     *     // ... data to create a UserIds
     *   }
     * })
     * 
     */
    create<T extends UserIdsCreateArgs>(args: SelectSubset<T, UserIdsCreateArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserIds.
     * @param {UserIdsCreateManyArgs} args - Arguments to create many UserIds.
     * @example
     * // Create many UserIds
     * const userIds = await prisma.userIds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserIdsCreateManyArgs>(args?: SelectSubset<T, UserIdsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserIds.
     * @param {UserIdsDeleteArgs} args - Arguments to delete one UserIds.
     * @example
     * // Delete one UserIds
     * const UserIds = await prisma.userIds.delete({
     *   where: {
     *     // ... filter to delete one UserIds
     *   }
     * })
     * 
     */
    delete<T extends UserIdsDeleteArgs>(args: SelectSubset<T, UserIdsDeleteArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserIds.
     * @param {UserIdsUpdateArgs} args - Arguments to update one UserIds.
     * @example
     * // Update one UserIds
     * const userIds = await prisma.userIds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserIdsUpdateArgs>(args: SelectSubset<T, UserIdsUpdateArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserIds.
     * @param {UserIdsDeleteManyArgs} args - Arguments to filter UserIds to delete.
     * @example
     * // Delete a few UserIds
     * const { count } = await prisma.userIds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserIdsDeleteManyArgs>(args?: SelectSubset<T, UserIdsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserIds
     * const userIds = await prisma.userIds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserIdsUpdateManyArgs>(args: SelectSubset<T, UserIdsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserIds.
     * @param {UserIdsUpsertArgs} args - Arguments to update or create a UserIds.
     * @example
     * // Update or create a UserIds
     * const userIds = await prisma.userIds.upsert({
     *   create: {
     *     // ... data to create a UserIds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserIds we want to update
     *   }
     * })
     */
    upsert<T extends UserIdsUpsertArgs>(args: SelectSubset<T, UserIdsUpsertArgs<ExtArgs>>): Prisma__UserIdsClient<$Result.GetResult<Prisma.$UserIdsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsCountArgs} args - Arguments to filter UserIds to count.
     * @example
     * // Count the number of UserIds
     * const count = await prisma.userIds.count({
     *   where: {
     *     // ... the filter for the UserIds we want to count
     *   }
     * })
    **/
    count<T extends UserIdsCountArgs>(
      args?: Subset<T, UserIdsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserIdsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserIdsAggregateArgs>(args: Subset<T, UserIdsAggregateArgs>): Prisma.PrismaPromise<GetUserIdsAggregateType<T>>

    /**
     * Group by UserIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserIdsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserIdsGroupByArgs['orderBy'] }
        : { orderBy?: UserIdsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserIdsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserIdsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserIds model
   */
  readonly fields: UserIdsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserIds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserIdsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserIds model
   */ 
  interface UserIdsFieldRefs {
    readonly identifier: FieldRef<"UserIds", 'String'>
    readonly user_id: FieldRef<"UserIds", 'Int'>
    readonly createdAt: FieldRef<"UserIds", 'DateTime'>
    readonly updatedAt: FieldRef<"UserIds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserIds findUnique
   */
  export type UserIdsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter, which UserIds to fetch.
     */
    where: UserIdsWhereUniqueInput
  }

  /**
   * UserIds findUniqueOrThrow
   */
  export type UserIdsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter, which UserIds to fetch.
     */
    where: UserIdsWhereUniqueInput
  }

  /**
   * UserIds findFirst
   */
  export type UserIdsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter, which UserIds to fetch.
     */
    where?: UserIdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIds to fetch.
     */
    orderBy?: UserIdsOrderByWithRelationInput | UserIdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIds.
     */
    cursor?: UserIdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIds.
     */
    distinct?: UserIdsScalarFieldEnum | UserIdsScalarFieldEnum[]
  }

  /**
   * UserIds findFirstOrThrow
   */
  export type UserIdsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter, which UserIds to fetch.
     */
    where?: UserIdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIds to fetch.
     */
    orderBy?: UserIdsOrderByWithRelationInput | UserIdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIds.
     */
    cursor?: UserIdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIds.
     */
    distinct?: UserIdsScalarFieldEnum | UserIdsScalarFieldEnum[]
  }

  /**
   * UserIds findMany
   */
  export type UserIdsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter, which UserIds to fetch.
     */
    where?: UserIdsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIds to fetch.
     */
    orderBy?: UserIdsOrderByWithRelationInput | UserIdsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserIds.
     */
    cursor?: UserIdsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIds.
     */
    skip?: number
    distinct?: UserIdsScalarFieldEnum | UserIdsScalarFieldEnum[]
  }

  /**
   * UserIds create
   */
  export type UserIdsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserIds.
     */
    data: XOR<UserIdsCreateInput, UserIdsUncheckedCreateInput>
  }

  /**
   * UserIds createMany
   */
  export type UserIdsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserIds.
     */
    data: UserIdsCreateManyInput | UserIdsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserIds update
   */
  export type UserIdsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserIds.
     */
    data: XOR<UserIdsUpdateInput, UserIdsUncheckedUpdateInput>
    /**
     * Choose, which UserIds to update.
     */
    where: UserIdsWhereUniqueInput
  }

  /**
   * UserIds updateMany
   */
  export type UserIdsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserIds.
     */
    data: XOR<UserIdsUpdateManyMutationInput, UserIdsUncheckedUpdateManyInput>
    /**
     * Filter which UserIds to update
     */
    where?: UserIdsWhereInput
  }

  /**
   * UserIds upsert
   */
  export type UserIdsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserIds to update in case it exists.
     */
    where: UserIdsWhereUniqueInput
    /**
     * In case the UserIds found by the `where` argument doesn't exist, create a new UserIds with this data.
     */
    create: XOR<UserIdsCreateInput, UserIdsUncheckedCreateInput>
    /**
     * In case the UserIds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserIdsUpdateInput, UserIdsUncheckedUpdateInput>
  }

  /**
   * UserIds delete
   */
  export type UserIdsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
    /**
     * Filter which UserIds to delete.
     */
    where: UserIdsWhereUniqueInput
  }

  /**
   * UserIds deleteMany
   */
  export type UserIdsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIds to delete
     */
    where?: UserIdsWhereInput
  }

  /**
   * UserIds without action
   */
  export type UserIdsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIds
     */
    select?: UserIdsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIdsInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CharactersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CharactersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersCountAggregateOutputType = {
    id: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CharactersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CharactersMinAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersMaxAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersCountAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    id: number
    user_id: number
    createdAt: Date
    updatedAt: Date
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    customization?: boolean | Characters$customizationArgs<ExtArgs>
    status?: boolean | Characters$statusArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>


  export type CharactersSelectScalar = {
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    customization?: boolean | Characters$customizationArgs<ExtArgs>
    status?: boolean | Characters$statusArgs<ExtArgs>
  }

  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      customization: Prisma.$CharacterCustomizationPayload<ExtArgs> | null
      status: Prisma.$CharacterStatusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }

  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharactersFindUniqueArgs>(args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs>(args: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharactersFindFirstArgs>(args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs>(args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charactersWithIdOnly = await prisma.characters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharactersFindManyArgs>(args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
     */
    create<T extends CharactersCreateArgs>(args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharactersCreateManyArgs>(args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
     */
    delete<T extends CharactersDeleteArgs>(args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharactersUpdateArgs>(args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharactersDeleteManyArgs>(args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharactersUpdateManyArgs>(args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
     */
    upsert<T extends CharactersUpsertArgs>(args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customization<T extends Characters$customizationArgs<ExtArgs> = {}>(args?: Subset<T, Characters$customizationArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    status<T extends Characters$statusArgs<ExtArgs> = {}>(args?: Subset<T, Characters$statusArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly id: FieldRef<"Characters", 'Int'>
    readonly user_id: FieldRef<"Characters", 'Int'>
    readonly createdAt: FieldRef<"Characters", 'DateTime'>
    readonly updatedAt: FieldRef<"Characters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.customization
   */
  export type Characters$customizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    where?: CharacterCustomizationWhereInput
  }

  /**
   * Characters.status
   */
  export type Characters$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    where?: CharacterStatusWhereInput
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model CharacterCustomization
   */

  export type AggregateCharacterCustomization = {
    _count: CharacterCustomizationCountAggregateOutputType | null
    _avg: CharacterCustomizationAvgAggregateOutputType | null
    _sum: CharacterCustomizationSumAggregateOutputType | null
    _min: CharacterCustomizationMinAggregateOutputType | null
    _max: CharacterCustomizationMaxAggregateOutputType | null
  }

  export type CharacterCustomizationAvgAggregateOutputType = {
    id: number | null
    character_id: number | null
    model: number | null
  }

  export type CharacterCustomizationSumAggregateOutputType = {
    id: number | null
    character_id: number | null
    model: number | null
  }

  export type CharacterCustomizationMinAggregateOutputType = {
    id: number | null
    character_id: number | null
    model: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCustomizationMaxAggregateOutputType = {
    id: number | null
    character_id: number | null
    model: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCustomizationCountAggregateOutputType = {
    id: number
    character_id: number
    model: number
    components: number
    props: number
    faceFeatures: number
    headBlend: number
    overlays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterCustomizationAvgAggregateInputType = {
    id?: true
    character_id?: true
    model?: true
  }

  export type CharacterCustomizationSumAggregateInputType = {
    id?: true
    character_id?: true
    model?: true
  }

  export type CharacterCustomizationMinAggregateInputType = {
    id?: true
    character_id?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCustomizationMaxAggregateInputType = {
    id?: true
    character_id?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCustomizationCountAggregateInputType = {
    id?: true
    character_id?: true
    model?: true
    components?: true
    props?: true
    faceFeatures?: true
    headBlend?: true
    overlays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterCustomizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterCustomization to aggregate.
     */
    where?: CharacterCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterCustomizations to fetch.
     */
    orderBy?: CharacterCustomizationOrderByWithRelationInput | CharacterCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterCustomizations
    **/
    _count?: true | CharacterCustomizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterCustomizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterCustomizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterCustomizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterCustomizationMaxAggregateInputType
  }

  export type GetCharacterCustomizationAggregateType<T extends CharacterCustomizationAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterCustomization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterCustomization[P]>
      : GetScalarType<T[P], AggregateCharacterCustomization[P]>
  }




  export type CharacterCustomizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterCustomizationWhereInput
    orderBy?: CharacterCustomizationOrderByWithAggregationInput | CharacterCustomizationOrderByWithAggregationInput[]
    by: CharacterCustomizationScalarFieldEnum[] | CharacterCustomizationScalarFieldEnum
    having?: CharacterCustomizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCustomizationCountAggregateInputType | true
    _avg?: CharacterCustomizationAvgAggregateInputType
    _sum?: CharacterCustomizationSumAggregateInputType
    _min?: CharacterCustomizationMinAggregateInputType
    _max?: CharacterCustomizationMaxAggregateInputType
  }

  export type CharacterCustomizationGroupByOutputType = {
    id: number
    character_id: number
    model: number
    components: JsonValue
    props: JsonValue
    faceFeatures: JsonValue
    headBlend: JsonValue
    overlays: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CharacterCustomizationCountAggregateOutputType | null
    _avg: CharacterCustomizationAvgAggregateOutputType | null
    _sum: CharacterCustomizationSumAggregateOutputType | null
    _min: CharacterCustomizationMinAggregateOutputType | null
    _max: CharacterCustomizationMaxAggregateOutputType | null
  }

  type GetCharacterCustomizationGroupByPayload<T extends CharacterCustomizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterCustomizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterCustomizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterCustomizationGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterCustomizationGroupByOutputType[P]>
        }
      >
    >


  export type CharacterCustomizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    character_id?: boolean
    model?: boolean
    components?: boolean
    props?: boolean
    faceFeatures?: boolean
    headBlend?: boolean
    overlays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterCustomization"]>


  export type CharacterCustomizationSelectScalar = {
    id?: boolean
    character_id?: boolean
    model?: boolean
    components?: boolean
    props?: boolean
    faceFeatures?: boolean
    headBlend?: boolean
    overlays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterCustomizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }

  export type $CharacterCustomizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterCustomization"
    objects: {
      character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      character_id: number
      model: number
      components: Prisma.JsonValue
      props: Prisma.JsonValue
      faceFeatures: Prisma.JsonValue
      headBlend: Prisma.JsonValue
      overlays: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characterCustomization"]>
    composites: {}
  }

  type CharacterCustomizationGetPayload<S extends boolean | null | undefined | CharacterCustomizationDefaultArgs> = $Result.GetResult<Prisma.$CharacterCustomizationPayload, S>

  type CharacterCustomizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterCustomizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterCustomizationCountAggregateInputType | true
    }

  export interface CharacterCustomizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterCustomization'], meta: { name: 'CharacterCustomization' } }
    /**
     * Find zero or one CharacterCustomization that matches the filter.
     * @param {CharacterCustomizationFindUniqueArgs} args - Arguments to find a CharacterCustomization
     * @example
     * // Get one CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterCustomizationFindUniqueArgs>(args: SelectSubset<T, CharacterCustomizationFindUniqueArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CharacterCustomization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterCustomizationFindUniqueOrThrowArgs} args - Arguments to find a CharacterCustomization
     * @example
     * // Get one CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterCustomizationFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterCustomizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CharacterCustomization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationFindFirstArgs} args - Arguments to find a CharacterCustomization
     * @example
     * // Get one CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterCustomizationFindFirstArgs>(args?: SelectSubset<T, CharacterCustomizationFindFirstArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CharacterCustomization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationFindFirstOrThrowArgs} args - Arguments to find a CharacterCustomization
     * @example
     * // Get one CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterCustomizationFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterCustomizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CharacterCustomizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterCustomizations
     * const characterCustomizations = await prisma.characterCustomization.findMany()
     * 
     * // Get first 10 CharacterCustomizations
     * const characterCustomizations = await prisma.characterCustomization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterCustomizationWithIdOnly = await prisma.characterCustomization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterCustomizationFindManyArgs>(args?: SelectSubset<T, CharacterCustomizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CharacterCustomization.
     * @param {CharacterCustomizationCreateArgs} args - Arguments to create a CharacterCustomization.
     * @example
     * // Create one CharacterCustomization
     * const CharacterCustomization = await prisma.characterCustomization.create({
     *   data: {
     *     // ... data to create a CharacterCustomization
     *   }
     * })
     * 
     */
    create<T extends CharacterCustomizationCreateArgs>(args: SelectSubset<T, CharacterCustomizationCreateArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CharacterCustomizations.
     * @param {CharacterCustomizationCreateManyArgs} args - Arguments to create many CharacterCustomizations.
     * @example
     * // Create many CharacterCustomizations
     * const characterCustomization = await prisma.characterCustomization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCustomizationCreateManyArgs>(args?: SelectSubset<T, CharacterCustomizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterCustomization.
     * @param {CharacterCustomizationDeleteArgs} args - Arguments to delete one CharacterCustomization.
     * @example
     * // Delete one CharacterCustomization
     * const CharacterCustomization = await prisma.characterCustomization.delete({
     *   where: {
     *     // ... filter to delete one CharacterCustomization
     *   }
     * })
     * 
     */
    delete<T extends CharacterCustomizationDeleteArgs>(args: SelectSubset<T, CharacterCustomizationDeleteArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CharacterCustomization.
     * @param {CharacterCustomizationUpdateArgs} args - Arguments to update one CharacterCustomization.
     * @example
     * // Update one CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterCustomizationUpdateArgs>(args: SelectSubset<T, CharacterCustomizationUpdateArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CharacterCustomizations.
     * @param {CharacterCustomizationDeleteManyArgs} args - Arguments to filter CharacterCustomizations to delete.
     * @example
     * // Delete a few CharacterCustomizations
     * const { count } = await prisma.characterCustomization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterCustomizationDeleteManyArgs>(args?: SelectSubset<T, CharacterCustomizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterCustomizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterCustomizations
     * const characterCustomization = await prisma.characterCustomization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterCustomizationUpdateManyArgs>(args: SelectSubset<T, CharacterCustomizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterCustomization.
     * @param {CharacterCustomizationUpsertArgs} args - Arguments to update or create a CharacterCustomization.
     * @example
     * // Update or create a CharacterCustomization
     * const characterCustomization = await prisma.characterCustomization.upsert({
     *   create: {
     *     // ... data to create a CharacterCustomization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterCustomization we want to update
     *   }
     * })
     */
    upsert<T extends CharacterCustomizationUpsertArgs>(args: SelectSubset<T, CharacterCustomizationUpsertArgs<ExtArgs>>): Prisma__CharacterCustomizationClient<$Result.GetResult<Prisma.$CharacterCustomizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CharacterCustomizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationCountArgs} args - Arguments to filter CharacterCustomizations to count.
     * @example
     * // Count the number of CharacterCustomizations
     * const count = await prisma.characterCustomization.count({
     *   where: {
     *     // ... the filter for the CharacterCustomizations we want to count
     *   }
     * })
    **/
    count<T extends CharacterCustomizationCountArgs>(
      args?: Subset<T, CharacterCustomizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCustomizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterCustomization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterCustomizationAggregateArgs>(args: Subset<T, CharacterCustomizationAggregateArgs>): Prisma.PrismaPromise<GetCharacterCustomizationAggregateType<T>>

    /**
     * Group by CharacterCustomization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCustomizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterCustomizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterCustomizationGroupByArgs['orderBy'] }
        : { orderBy?: CharacterCustomizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterCustomizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterCustomizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterCustomization model
   */
  readonly fields: CharacterCustomizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterCustomization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterCustomizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterCustomization model
   */ 
  interface CharacterCustomizationFieldRefs {
    readonly id: FieldRef<"CharacterCustomization", 'Int'>
    readonly character_id: FieldRef<"CharacterCustomization", 'Int'>
    readonly model: FieldRef<"CharacterCustomization", 'Int'>
    readonly components: FieldRef<"CharacterCustomization", 'Json'>
    readonly props: FieldRef<"CharacterCustomization", 'Json'>
    readonly faceFeatures: FieldRef<"CharacterCustomization", 'Json'>
    readonly headBlend: FieldRef<"CharacterCustomization", 'Json'>
    readonly overlays: FieldRef<"CharacterCustomization", 'Json'>
    readonly createdAt: FieldRef<"CharacterCustomization", 'DateTime'>
    readonly updatedAt: FieldRef<"CharacterCustomization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CharacterCustomization findUnique
   */
  export type CharacterCustomizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which CharacterCustomization to fetch.
     */
    where: CharacterCustomizationWhereUniqueInput
  }

  /**
   * CharacterCustomization findUniqueOrThrow
   */
  export type CharacterCustomizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which CharacterCustomization to fetch.
     */
    where: CharacterCustomizationWhereUniqueInput
  }

  /**
   * CharacterCustomization findFirst
   */
  export type CharacterCustomizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which CharacterCustomization to fetch.
     */
    where?: CharacterCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterCustomizations to fetch.
     */
    orderBy?: CharacterCustomizationOrderByWithRelationInput | CharacterCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterCustomizations.
     */
    cursor?: CharacterCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterCustomizations.
     */
    distinct?: CharacterCustomizationScalarFieldEnum | CharacterCustomizationScalarFieldEnum[]
  }

  /**
   * CharacterCustomization findFirstOrThrow
   */
  export type CharacterCustomizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which CharacterCustomization to fetch.
     */
    where?: CharacterCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterCustomizations to fetch.
     */
    orderBy?: CharacterCustomizationOrderByWithRelationInput | CharacterCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterCustomizations.
     */
    cursor?: CharacterCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterCustomizations.
     */
    distinct?: CharacterCustomizationScalarFieldEnum | CharacterCustomizationScalarFieldEnum[]
  }

  /**
   * CharacterCustomization findMany
   */
  export type CharacterCustomizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which CharacterCustomizations to fetch.
     */
    where?: CharacterCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterCustomizations to fetch.
     */
    orderBy?: CharacterCustomizationOrderByWithRelationInput | CharacterCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterCustomizations.
     */
    cursor?: CharacterCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterCustomizations.
     */
    skip?: number
    distinct?: CharacterCustomizationScalarFieldEnum | CharacterCustomizationScalarFieldEnum[]
  }

  /**
   * CharacterCustomization create
   */
  export type CharacterCustomizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterCustomization.
     */
    data: XOR<CharacterCustomizationCreateInput, CharacterCustomizationUncheckedCreateInput>
  }

  /**
   * CharacterCustomization createMany
   */
  export type CharacterCustomizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterCustomizations.
     */
    data: CharacterCustomizationCreateManyInput | CharacterCustomizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterCustomization update
   */
  export type CharacterCustomizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterCustomization.
     */
    data: XOR<CharacterCustomizationUpdateInput, CharacterCustomizationUncheckedUpdateInput>
    /**
     * Choose, which CharacterCustomization to update.
     */
    where: CharacterCustomizationWhereUniqueInput
  }

  /**
   * CharacterCustomization updateMany
   */
  export type CharacterCustomizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterCustomizations.
     */
    data: XOR<CharacterCustomizationUpdateManyMutationInput, CharacterCustomizationUncheckedUpdateManyInput>
    /**
     * Filter which CharacterCustomizations to update
     */
    where?: CharacterCustomizationWhereInput
  }

  /**
   * CharacterCustomization upsert
   */
  export type CharacterCustomizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterCustomization to update in case it exists.
     */
    where: CharacterCustomizationWhereUniqueInput
    /**
     * In case the CharacterCustomization found by the `where` argument doesn't exist, create a new CharacterCustomization with this data.
     */
    create: XOR<CharacterCustomizationCreateInput, CharacterCustomizationUncheckedCreateInput>
    /**
     * In case the CharacterCustomization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterCustomizationUpdateInput, CharacterCustomizationUncheckedUpdateInput>
  }

  /**
   * CharacterCustomization delete
   */
  export type CharacterCustomizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
    /**
     * Filter which CharacterCustomization to delete.
     */
    where: CharacterCustomizationWhereUniqueInput
  }

  /**
   * CharacterCustomization deleteMany
   */
  export type CharacterCustomizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterCustomizations to delete
     */
    where?: CharacterCustomizationWhereInput
  }

  /**
   * CharacterCustomization without action
   */
  export type CharacterCustomizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCustomization
     */
    select?: CharacterCustomizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterCustomizationInclude<ExtArgs> | null
  }


  /**
   * Model CharacterStatus
   */

  export type AggregateCharacterStatus = {
    _count: CharacterStatusCountAggregateOutputType | null
    _avg: CharacterStatusAvgAggregateOutputType | null
    _sum: CharacterStatusSumAggregateOutputType | null
    _min: CharacterStatusMinAggregateOutputType | null
    _max: CharacterStatusMaxAggregateOutputType | null
  }

  export type CharacterStatusAvgAggregateOutputType = {
    id: number | null
    character_id: number | null
    health: number | null
    armour: number | null
    heading: number | null
    positionX: number | null
    positionY: number | null
    positionZ: number | null
  }

  export type CharacterStatusSumAggregateOutputType = {
    id: number | null
    character_id: number | null
    health: number | null
    armour: number | null
    heading: number | null
    positionX: number | null
    positionY: number | null
    positionZ: number | null
  }

  export type CharacterStatusMinAggregateOutputType = {
    id: number | null
    character_id: number | null
    health: number | null
    armour: number | null
    heading: number | null
    positionX: number | null
    positionY: number | null
    positionZ: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterStatusMaxAggregateOutputType = {
    id: number | null
    character_id: number | null
    health: number | null
    armour: number | null
    heading: number | null
    positionX: number | null
    positionY: number | null
    positionZ: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterStatusCountAggregateOutputType = {
    id: number
    character_id: number
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterStatusAvgAggregateInputType = {
    id?: true
    character_id?: true
    health?: true
    armour?: true
    heading?: true
    positionX?: true
    positionY?: true
    positionZ?: true
  }

  export type CharacterStatusSumAggregateInputType = {
    id?: true
    character_id?: true
    health?: true
    armour?: true
    heading?: true
    positionX?: true
    positionY?: true
    positionZ?: true
  }

  export type CharacterStatusMinAggregateInputType = {
    id?: true
    character_id?: true
    health?: true
    armour?: true
    heading?: true
    positionX?: true
    positionY?: true
    positionZ?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterStatusMaxAggregateInputType = {
    id?: true
    character_id?: true
    health?: true
    armour?: true
    heading?: true
    positionX?: true
    positionY?: true
    positionZ?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterStatusCountAggregateInputType = {
    id?: true
    character_id?: true
    health?: true
    armour?: true
    heading?: true
    positionX?: true
    positionY?: true
    positionZ?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStatus to aggregate.
     */
    where?: CharacterStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStatuses to fetch.
     */
    orderBy?: CharacterStatusOrderByWithRelationInput | CharacterStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterStatuses
    **/
    _count?: true | CharacterStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterStatusMaxAggregateInputType
  }

  export type GetCharacterStatusAggregateType<T extends CharacterStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterStatus[P]>
      : GetScalarType<T[P], AggregateCharacterStatus[P]>
  }




  export type CharacterStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterStatusWhereInput
    orderBy?: CharacterStatusOrderByWithAggregationInput | CharacterStatusOrderByWithAggregationInput[]
    by: CharacterStatusScalarFieldEnum[] | CharacterStatusScalarFieldEnum
    having?: CharacterStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterStatusCountAggregateInputType | true
    _avg?: CharacterStatusAvgAggregateInputType
    _sum?: CharacterStatusSumAggregateInputType
    _min?: CharacterStatusMinAggregateInputType
    _max?: CharacterStatusMaxAggregateInputType
  }

  export type CharacterStatusGroupByOutputType = {
    id: number
    character_id: number
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt: Date
    updatedAt: Date
    _count: CharacterStatusCountAggregateOutputType | null
    _avg: CharacterStatusAvgAggregateOutputType | null
    _sum: CharacterStatusSumAggregateOutputType | null
    _min: CharacterStatusMinAggregateOutputType | null
    _max: CharacterStatusMaxAggregateOutputType | null
  }

  type GetCharacterStatusGroupByPayload<T extends CharacterStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterStatusGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterStatusGroupByOutputType[P]>
        }
      >
    >


  export type CharacterStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    character_id?: boolean
    health?: boolean
    armour?: boolean
    heading?: boolean
    positionX?: boolean
    positionY?: boolean
    positionZ?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterStatus"]>


  export type CharacterStatusSelectScalar = {
    id?: boolean
    character_id?: boolean
    health?: boolean
    armour?: boolean
    heading?: boolean
    positionX?: boolean
    positionY?: boolean
    positionZ?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }

  export type $CharacterStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterStatus"
    objects: {
      character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      character_id: number
      health: number
      armour: number
      heading: number
      positionX: number
      positionY: number
      positionZ: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characterStatus"]>
    composites: {}
  }

  type CharacterStatusGetPayload<S extends boolean | null | undefined | CharacterStatusDefaultArgs> = $Result.GetResult<Prisma.$CharacterStatusPayload, S>

  type CharacterStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterStatusCountAggregateInputType | true
    }

  export interface CharacterStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterStatus'], meta: { name: 'CharacterStatus' } }
    /**
     * Find zero or one CharacterStatus that matches the filter.
     * @param {CharacterStatusFindUniqueArgs} args - Arguments to find a CharacterStatus
     * @example
     * // Get one CharacterStatus
     * const characterStatus = await prisma.characterStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterStatusFindUniqueArgs>(args: SelectSubset<T, CharacterStatusFindUniqueArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CharacterStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterStatusFindUniqueOrThrowArgs} args - Arguments to find a CharacterStatus
     * @example
     * // Get one CharacterStatus
     * const characterStatus = await prisma.characterStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CharacterStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusFindFirstArgs} args - Arguments to find a CharacterStatus
     * @example
     * // Get one CharacterStatus
     * const characterStatus = await prisma.characterStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterStatusFindFirstArgs>(args?: SelectSubset<T, CharacterStatusFindFirstArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CharacterStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusFindFirstOrThrowArgs} args - Arguments to find a CharacterStatus
     * @example
     * // Get one CharacterStatus
     * const characterStatus = await prisma.characterStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CharacterStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterStatuses
     * const characterStatuses = await prisma.characterStatus.findMany()
     * 
     * // Get first 10 CharacterStatuses
     * const characterStatuses = await prisma.characterStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterStatusWithIdOnly = await prisma.characterStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterStatusFindManyArgs>(args?: SelectSubset<T, CharacterStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CharacterStatus.
     * @param {CharacterStatusCreateArgs} args - Arguments to create a CharacterStatus.
     * @example
     * // Create one CharacterStatus
     * const CharacterStatus = await prisma.characterStatus.create({
     *   data: {
     *     // ... data to create a CharacterStatus
     *   }
     * })
     * 
     */
    create<T extends CharacterStatusCreateArgs>(args: SelectSubset<T, CharacterStatusCreateArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CharacterStatuses.
     * @param {CharacterStatusCreateManyArgs} args - Arguments to create many CharacterStatuses.
     * @example
     * // Create many CharacterStatuses
     * const characterStatus = await prisma.characterStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterStatusCreateManyArgs>(args?: SelectSubset<T, CharacterStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterStatus.
     * @param {CharacterStatusDeleteArgs} args - Arguments to delete one CharacterStatus.
     * @example
     * // Delete one CharacterStatus
     * const CharacterStatus = await prisma.characterStatus.delete({
     *   where: {
     *     // ... filter to delete one CharacterStatus
     *   }
     * })
     * 
     */
    delete<T extends CharacterStatusDeleteArgs>(args: SelectSubset<T, CharacterStatusDeleteArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CharacterStatus.
     * @param {CharacterStatusUpdateArgs} args - Arguments to update one CharacterStatus.
     * @example
     * // Update one CharacterStatus
     * const characterStatus = await prisma.characterStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterStatusUpdateArgs>(args: SelectSubset<T, CharacterStatusUpdateArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CharacterStatuses.
     * @param {CharacterStatusDeleteManyArgs} args - Arguments to filter CharacterStatuses to delete.
     * @example
     * // Delete a few CharacterStatuses
     * const { count } = await prisma.characterStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterStatusDeleteManyArgs>(args?: SelectSubset<T, CharacterStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterStatuses
     * const characterStatus = await prisma.characterStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterStatusUpdateManyArgs>(args: SelectSubset<T, CharacterStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterStatus.
     * @param {CharacterStatusUpsertArgs} args - Arguments to update or create a CharacterStatus.
     * @example
     * // Update or create a CharacterStatus
     * const characterStatus = await prisma.characterStatus.upsert({
     *   create: {
     *     // ... data to create a CharacterStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterStatus we want to update
     *   }
     * })
     */
    upsert<T extends CharacterStatusUpsertArgs>(args: SelectSubset<T, CharacterStatusUpsertArgs<ExtArgs>>): Prisma__CharacterStatusClient<$Result.GetResult<Prisma.$CharacterStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CharacterStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusCountArgs} args - Arguments to filter CharacterStatuses to count.
     * @example
     * // Count the number of CharacterStatuses
     * const count = await prisma.characterStatus.count({
     *   where: {
     *     // ... the filter for the CharacterStatuses we want to count
     *   }
     * })
    **/
    count<T extends CharacterStatusCountArgs>(
      args?: Subset<T, CharacterStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterStatusAggregateArgs>(args: Subset<T, CharacterStatusAggregateArgs>): Prisma.PrismaPromise<GetCharacterStatusAggregateType<T>>

    /**
     * Group by CharacterStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterStatusGroupByArgs['orderBy'] }
        : { orderBy?: CharacterStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterStatus model
   */
  readonly fields: CharacterStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterStatus model
   */ 
  interface CharacterStatusFieldRefs {
    readonly id: FieldRef<"CharacterStatus", 'Int'>
    readonly character_id: FieldRef<"CharacterStatus", 'Int'>
    readonly health: FieldRef<"CharacterStatus", 'Int'>
    readonly armour: FieldRef<"CharacterStatus", 'Int'>
    readonly heading: FieldRef<"CharacterStatus", 'Float'>
    readonly positionX: FieldRef<"CharacterStatus", 'Float'>
    readonly positionY: FieldRef<"CharacterStatus", 'Float'>
    readonly positionZ: FieldRef<"CharacterStatus", 'Float'>
    readonly createdAt: FieldRef<"CharacterStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"CharacterStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CharacterStatus findUnique
   */
  export type CharacterStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStatus to fetch.
     */
    where: CharacterStatusWhereUniqueInput
  }

  /**
   * CharacterStatus findUniqueOrThrow
   */
  export type CharacterStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStatus to fetch.
     */
    where: CharacterStatusWhereUniqueInput
  }

  /**
   * CharacterStatus findFirst
   */
  export type CharacterStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStatus to fetch.
     */
    where?: CharacterStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStatuses to fetch.
     */
    orderBy?: CharacterStatusOrderByWithRelationInput | CharacterStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterStatuses.
     */
    cursor?: CharacterStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterStatuses.
     */
    distinct?: CharacterStatusScalarFieldEnum | CharacterStatusScalarFieldEnum[]
  }

  /**
   * CharacterStatus findFirstOrThrow
   */
  export type CharacterStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStatus to fetch.
     */
    where?: CharacterStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStatuses to fetch.
     */
    orderBy?: CharacterStatusOrderByWithRelationInput | CharacterStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterStatuses.
     */
    cursor?: CharacterStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterStatuses.
     */
    distinct?: CharacterStatusScalarFieldEnum | CharacterStatusScalarFieldEnum[]
  }

  /**
   * CharacterStatus findMany
   */
  export type CharacterStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStatuses to fetch.
     */
    where?: CharacterStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStatuses to fetch.
     */
    orderBy?: CharacterStatusOrderByWithRelationInput | CharacterStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterStatuses.
     */
    cursor?: CharacterStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStatuses.
     */
    skip?: number
    distinct?: CharacterStatusScalarFieldEnum | CharacterStatusScalarFieldEnum[]
  }

  /**
   * CharacterStatus create
   */
  export type CharacterStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterStatus.
     */
    data: XOR<CharacterStatusCreateInput, CharacterStatusUncheckedCreateInput>
  }

  /**
   * CharacterStatus createMany
   */
  export type CharacterStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterStatuses.
     */
    data: CharacterStatusCreateManyInput | CharacterStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterStatus update
   */
  export type CharacterStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterStatus.
     */
    data: XOR<CharacterStatusUpdateInput, CharacterStatusUncheckedUpdateInput>
    /**
     * Choose, which CharacterStatus to update.
     */
    where: CharacterStatusWhereUniqueInput
  }

  /**
   * CharacterStatus updateMany
   */
  export type CharacterStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterStatuses.
     */
    data: XOR<CharacterStatusUpdateManyMutationInput, CharacterStatusUncheckedUpdateManyInput>
    /**
     * Filter which CharacterStatuses to update
     */
    where?: CharacterStatusWhereInput
  }

  /**
   * CharacterStatus upsert
   */
  export type CharacterStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterStatus to update in case it exists.
     */
    where: CharacterStatusWhereUniqueInput
    /**
     * In case the CharacterStatus found by the `where` argument doesn't exist, create a new CharacterStatus with this data.
     */
    create: XOR<CharacterStatusCreateInput, CharacterStatusUncheckedCreateInput>
    /**
     * In case the CharacterStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterStatusUpdateInput, CharacterStatusUncheckedUpdateInput>
  }

  /**
   * CharacterStatus delete
   */
  export type CharacterStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
    /**
     * Filter which CharacterStatus to delete.
     */
    where: CharacterStatusWhereUniqueInput
  }

  /**
   * CharacterStatus deleteMany
   */
  export type CharacterStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStatuses to delete
     */
    where?: CharacterStatusWhereInput
  }

  /**
   * CharacterStatus without action
   */
  export type CharacterStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatus
     */
    select?: CharacterStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    whitelisted: 'whitelisted',
    banned: 'banned',
    character_select: 'character_select',
    last_login: 'last_login',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UserIdsScalarFieldEnum: {
    identifier: 'identifier',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserIdsScalarFieldEnum = (typeof UserIdsScalarFieldEnum)[keyof typeof UserIdsScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const CharacterCustomizationScalarFieldEnum: {
    id: 'id',
    character_id: 'character_id',
    model: 'model',
    components: 'components',
    props: 'props',
    faceFeatures: 'faceFeatures',
    headBlend: 'headBlend',
    overlays: 'overlays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterCustomizationScalarFieldEnum = (typeof CharacterCustomizationScalarFieldEnum)[keyof typeof CharacterCustomizationScalarFieldEnum]


  export const CharacterStatusScalarFieldEnum: {
    id: 'id',
    character_id: 'character_id',
    health: 'health',
    armour: 'armour',
    heading: 'heading',
    positionX: 'positionX',
    positionY: 'positionY',
    positionZ: 'positionZ',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterStatusScalarFieldEnum = (typeof CharacterStatusScalarFieldEnum)[keyof typeof CharacterStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    whitelisted?: BoolNullableFilter<"Users"> | boolean | null
    banned?: BoolNullableFilter<"Users"> | boolean | null
    character_select?: IntNullableFilter<"Users"> | number | null
    last_login?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    user_ids?: UserIdsListRelationFilter
    characters?: CharactersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    whitelisted?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    character_select?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_ids?: UserIdsOrderByRelationAggregateInput
    characters?: CharactersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    whitelisted?: BoolNullableFilter<"Users"> | boolean | null
    banned?: BoolNullableFilter<"Users"> | boolean | null
    character_select?: IntNullableFilter<"Users"> | number | null
    last_login?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    user_ids?: UserIdsListRelationFilter
    characters?: CharactersListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    whitelisted?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    character_select?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    whitelisted?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    banned?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    character_select?: IntNullableWithAggregatesFilter<"Users"> | number | null
    last_login?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type UserIdsWhereInput = {
    AND?: UserIdsWhereInput | UserIdsWhereInput[]
    OR?: UserIdsWhereInput[]
    NOT?: UserIdsWhereInput | UserIdsWhereInput[]
    identifier?: StringFilter<"UserIds"> | string
    user_id?: IntFilter<"UserIds"> | number
    createdAt?: DateTimeFilter<"UserIds"> | Date | string
    updatedAt?: DateTimeFilter<"UserIds"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type UserIdsOrderByWithRelationInput = {
    identifier?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserIdsWhereUniqueInput = Prisma.AtLeast<{
    identifier?: string
    AND?: UserIdsWhereInput | UserIdsWhereInput[]
    OR?: UserIdsWhereInput[]
    NOT?: UserIdsWhereInput | UserIdsWhereInput[]
    user_id?: IntFilter<"UserIds"> | number
    createdAt?: DateTimeFilter<"UserIds"> | Date | string
    updatedAt?: DateTimeFilter<"UserIds"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "identifier">

  export type UserIdsOrderByWithAggregationInput = {
    identifier?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserIdsCountOrderByAggregateInput
    _avg?: UserIdsAvgOrderByAggregateInput
    _max?: UserIdsMaxOrderByAggregateInput
    _min?: UserIdsMinOrderByAggregateInput
    _sum?: UserIdsSumOrderByAggregateInput
  }

  export type UserIdsScalarWhereWithAggregatesInput = {
    AND?: UserIdsScalarWhereWithAggregatesInput | UserIdsScalarWhereWithAggregatesInput[]
    OR?: UserIdsScalarWhereWithAggregatesInput[]
    NOT?: UserIdsScalarWhereWithAggregatesInput | UserIdsScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"UserIds"> | string
    user_id?: IntWithAggregatesFilter<"UserIds"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserIds"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserIds"> | Date | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    id?: IntFilter<"Characters"> | number
    user_id?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    customization?: XOR<CharacterCustomizationNullableRelationFilter, CharacterCustomizationWhereInput> | null
    status?: XOR<CharacterStatusNullableRelationFilter, CharacterStatusWhereInput> | null
  }

  export type CharactersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    customization?: CharacterCustomizationOrderByWithRelationInput
    status?: CharacterStatusOrderByWithRelationInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    user_id?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    customization?: XOR<CharacterCustomizationNullableRelationFilter, CharacterCustomizationWhereInput> | null
    status?: XOR<CharacterStatusNullableRelationFilter, CharacterStatusWhereInput> | null
  }, "id">

  export type CharactersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Characters"> | number
    user_id?: IntWithAggregatesFilter<"Characters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
  }

  export type CharacterCustomizationWhereInput = {
    AND?: CharacterCustomizationWhereInput | CharacterCustomizationWhereInput[]
    OR?: CharacterCustomizationWhereInput[]
    NOT?: CharacterCustomizationWhereInput | CharacterCustomizationWhereInput[]
    id?: IntFilter<"CharacterCustomization"> | number
    character_id?: IntFilter<"CharacterCustomization"> | number
    model?: IntFilter<"CharacterCustomization"> | number
    components?: JsonFilter<"CharacterCustomization">
    props?: JsonFilter<"CharacterCustomization">
    faceFeatures?: JsonFilter<"CharacterCustomization">
    headBlend?: JsonFilter<"CharacterCustomization">
    overlays?: JsonFilter<"CharacterCustomization">
    createdAt?: DateTimeFilter<"CharacterCustomization"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterCustomization"> | Date | string
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharacterCustomizationOrderByWithRelationInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
    components?: SortOrder
    props?: SortOrder
    faceFeatures?: SortOrder
    headBlend?: SortOrder
    overlays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    character?: CharactersOrderByWithRelationInput
  }

  export type CharacterCustomizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    character_id?: number
    AND?: CharacterCustomizationWhereInput | CharacterCustomizationWhereInput[]
    OR?: CharacterCustomizationWhereInput[]
    NOT?: CharacterCustomizationWhereInput | CharacterCustomizationWhereInput[]
    model?: IntFilter<"CharacterCustomization"> | number
    components?: JsonFilter<"CharacterCustomization">
    props?: JsonFilter<"CharacterCustomization">
    faceFeatures?: JsonFilter<"CharacterCustomization">
    headBlend?: JsonFilter<"CharacterCustomization">
    overlays?: JsonFilter<"CharacterCustomization">
    createdAt?: DateTimeFilter<"CharacterCustomization"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterCustomization"> | Date | string
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "id" | "character_id">

  export type CharacterCustomizationOrderByWithAggregationInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
    components?: SortOrder
    props?: SortOrder
    faceFeatures?: SortOrder
    headBlend?: SortOrder
    overlays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCustomizationCountOrderByAggregateInput
    _avg?: CharacterCustomizationAvgOrderByAggregateInput
    _max?: CharacterCustomizationMaxOrderByAggregateInput
    _min?: CharacterCustomizationMinOrderByAggregateInput
    _sum?: CharacterCustomizationSumOrderByAggregateInput
  }

  export type CharacterCustomizationScalarWhereWithAggregatesInput = {
    AND?: CharacterCustomizationScalarWhereWithAggregatesInput | CharacterCustomizationScalarWhereWithAggregatesInput[]
    OR?: CharacterCustomizationScalarWhereWithAggregatesInput[]
    NOT?: CharacterCustomizationScalarWhereWithAggregatesInput | CharacterCustomizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterCustomization"> | number
    character_id?: IntWithAggregatesFilter<"CharacterCustomization"> | number
    model?: IntWithAggregatesFilter<"CharacterCustomization"> | number
    components?: JsonWithAggregatesFilter<"CharacterCustomization">
    props?: JsonWithAggregatesFilter<"CharacterCustomization">
    faceFeatures?: JsonWithAggregatesFilter<"CharacterCustomization">
    headBlend?: JsonWithAggregatesFilter<"CharacterCustomization">
    overlays?: JsonWithAggregatesFilter<"CharacterCustomization">
    createdAt?: DateTimeWithAggregatesFilter<"CharacterCustomization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CharacterCustomization"> | Date | string
  }

  export type CharacterStatusWhereInput = {
    AND?: CharacterStatusWhereInput | CharacterStatusWhereInput[]
    OR?: CharacterStatusWhereInput[]
    NOT?: CharacterStatusWhereInput | CharacterStatusWhereInput[]
    id?: IntFilter<"CharacterStatus"> | number
    character_id?: IntFilter<"CharacterStatus"> | number
    health?: IntFilter<"CharacterStatus"> | number
    armour?: IntFilter<"CharacterStatus"> | number
    heading?: FloatFilter<"CharacterStatus"> | number
    positionX?: FloatFilter<"CharacterStatus"> | number
    positionY?: FloatFilter<"CharacterStatus"> | number
    positionZ?: FloatFilter<"CharacterStatus"> | number
    createdAt?: DateTimeFilter<"CharacterStatus"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterStatus"> | Date | string
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharacterStatusOrderByWithRelationInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    character?: CharactersOrderByWithRelationInput
  }

  export type CharacterStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    character_id?: number
    AND?: CharacterStatusWhereInput | CharacterStatusWhereInput[]
    OR?: CharacterStatusWhereInput[]
    NOT?: CharacterStatusWhereInput | CharacterStatusWhereInput[]
    health?: IntFilter<"CharacterStatus"> | number
    armour?: IntFilter<"CharacterStatus"> | number
    heading?: FloatFilter<"CharacterStatus"> | number
    positionX?: FloatFilter<"CharacterStatus"> | number
    positionY?: FloatFilter<"CharacterStatus"> | number
    positionZ?: FloatFilter<"CharacterStatus"> | number
    createdAt?: DateTimeFilter<"CharacterStatus"> | Date | string
    updatedAt?: DateTimeFilter<"CharacterStatus"> | Date | string
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "id" | "character_id">

  export type CharacterStatusOrderByWithAggregationInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterStatusCountOrderByAggregateInput
    _avg?: CharacterStatusAvgOrderByAggregateInput
    _max?: CharacterStatusMaxOrderByAggregateInput
    _min?: CharacterStatusMinOrderByAggregateInput
    _sum?: CharacterStatusSumOrderByAggregateInput
  }

  export type CharacterStatusScalarWhereWithAggregatesInput = {
    AND?: CharacterStatusScalarWhereWithAggregatesInput | CharacterStatusScalarWhereWithAggregatesInput[]
    OR?: CharacterStatusScalarWhereWithAggregatesInput[]
    NOT?: CharacterStatusScalarWhereWithAggregatesInput | CharacterStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterStatus"> | number
    character_id?: IntWithAggregatesFilter<"CharacterStatus"> | number
    health?: IntWithAggregatesFilter<"CharacterStatus"> | number
    armour?: IntWithAggregatesFilter<"CharacterStatus"> | number
    heading?: FloatWithAggregatesFilter<"CharacterStatus"> | number
    positionX?: FloatWithAggregatesFilter<"CharacterStatus"> | number
    positionY?: FloatWithAggregatesFilter<"CharacterStatus"> | number
    positionZ?: FloatWithAggregatesFilter<"CharacterStatus"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CharacterStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CharacterStatus"> | Date | string
  }

  export type UsersCreateInput = {
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_ids?: UserIdsCreateNestedManyWithoutUserInput
    characters?: CharactersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_ids?: UserIdsUncheckedCreateNestedManyWithoutUserInput
    characters?: CharactersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: UserIdsUpdateManyWithoutUserNestedInput
    characters?: CharactersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: UserIdsUncheckedUpdateManyWithoutUserNestedInput
    characters?: CharactersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdsCreateInput = {
    identifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutUser_idsInput
  }

  export type UserIdsUncheckedCreateInput = {
    identifier: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIdsUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUser_idsNestedInput
  }

  export type UserIdsUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdsCreateManyInput = {
    identifier: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIdsUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdsUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCharactersInput
    customization?: CharacterCustomizationCreateNestedOneWithoutCharacterInput
    status?: CharacterStatusCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customization?: CharacterCustomizationUncheckedCreateNestedOneWithoutCharacterInput
    status?: CharacterStatusUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    customization?: CharacterCustomizationUpdateOneWithoutCharacterNestedInput
    status?: CharacterStatusUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customization?: CharacterCustomizationUncheckedUpdateOneWithoutCharacterNestedInput
    status?: CharacterStatusUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCustomizationCreateInput = {
    model: number
    components: JsonNullValueInput | InputJsonValue
    props: JsonNullValueInput | InputJsonValue
    faceFeatures: JsonNullValueInput | InputJsonValue
    headBlend: JsonNullValueInput | InputJsonValue
    overlays: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    character: CharactersCreateNestedOneWithoutCustomizationInput
  }

  export type CharacterCustomizationUncheckedCreateInput = {
    id?: number
    character_id: number
    model: number
    components: JsonNullValueInput | InputJsonValue
    props: JsonNullValueInput | InputJsonValue
    faceFeatures: JsonNullValueInput | InputJsonValue
    headBlend: JsonNullValueInput | InputJsonValue
    overlays: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCustomizationUpdateInput = {
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharactersUpdateOneRequiredWithoutCustomizationNestedInput
  }

  export type CharacterCustomizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    character_id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCustomizationCreateManyInput = {
    id?: number
    character_id: number
    model: number
    components: JsonNullValueInput | InputJsonValue
    props: JsonNullValueInput | InputJsonValue
    faceFeatures: JsonNullValueInput | InputJsonValue
    headBlend: JsonNullValueInput | InputJsonValue
    overlays: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCustomizationUpdateManyMutationInput = {
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCustomizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    character_id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatusCreateInput = {
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt?: Date | string
    updatedAt?: Date | string
    character: CharactersCreateNestedOneWithoutStatusInput
  }

  export type CharacterStatusUncheckedCreateInput = {
    id?: number
    character_id: number
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterStatusUpdateInput = {
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharactersUpdateOneRequiredWithoutStatusNestedInput
  }

  export type CharacterStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    character_id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatusCreateManyInput = {
    id?: number
    character_id: number
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterStatusUpdateManyMutationInput = {
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    character_id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserIdsListRelationFilter = {
    every?: UserIdsWhereInput
    some?: UserIdsWhereInput
    none?: UserIdsWhereInput
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserIdsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    whitelisted?: SortOrder
    banned?: SortOrder
    character_select?: SortOrder
    last_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    character_select?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    whitelisted?: SortOrder
    banned?: SortOrder
    character_select?: SortOrder
    last_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    whitelisted?: SortOrder
    banned?: SortOrder
    character_select?: SortOrder
    last_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    character_select?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UserIdsCountOrderByAggregateInput = {
    identifier?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIdsAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserIdsMaxOrderByAggregateInput = {
    identifier?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIdsMinOrderByAggregateInput = {
    identifier?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIdsSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CharacterCustomizationNullableRelationFilter = {
    is?: CharacterCustomizationWhereInput | null
    isNot?: CharacterCustomizationWhereInput | null
  }

  export type CharacterStatusNullableRelationFilter = {
    is?: CharacterStatusWhereInput | null
    isNot?: CharacterStatusWhereInput | null
  }

  export type CharactersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type CharacterCustomizationCountOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
    components?: SortOrder
    props?: SortOrder
    faceFeatures?: SortOrder
    headBlend?: SortOrder
    overlays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterCustomizationAvgOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
  }

  export type CharacterCustomizationMaxOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterCustomizationMinOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterCustomizationSumOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    model?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CharacterStatusCountOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
  }

  export type CharacterStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatusMinOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatusSumOrderByAggregateInput = {
    id?: SortOrder
    character_id?: SortOrder
    health?: SortOrder
    armour?: SortOrder
    heading?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    positionZ?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserIdsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput> | UserIdsCreateWithoutUserInput[] | UserIdsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdsCreateOrConnectWithoutUserInput | UserIdsCreateOrConnectWithoutUserInput[]
    createMany?: UserIdsCreateManyUserInputEnvelope
    connect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
  }

  export type CharactersCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type UserIdsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput> | UserIdsCreateWithoutUserInput[] | UserIdsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdsCreateOrConnectWithoutUserInput | UserIdsCreateOrConnectWithoutUserInput[]
    createMany?: UserIdsCreateManyUserInputEnvelope
    connect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserIdsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput> | UserIdsCreateWithoutUserInput[] | UserIdsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdsCreateOrConnectWithoutUserInput | UserIdsCreateOrConnectWithoutUserInput[]
    upsert?: UserIdsUpsertWithWhereUniqueWithoutUserInput | UserIdsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserIdsCreateManyUserInputEnvelope
    set?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    disconnect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    delete?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    connect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    update?: UserIdsUpdateWithWhereUniqueWithoutUserInput | UserIdsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserIdsUpdateManyWithWhereWithoutUserInput | UserIdsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserIdsScalarWhereInput | UserIdsScalarWhereInput[]
  }

  export type CharactersUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserIdsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput> | UserIdsCreateWithoutUserInput[] | UserIdsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdsCreateOrConnectWithoutUserInput | UserIdsCreateOrConnectWithoutUserInput[]
    upsert?: UserIdsUpsertWithWhereUniqueWithoutUserInput | UserIdsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserIdsCreateManyUserInputEnvelope
    set?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    disconnect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    delete?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    connect?: UserIdsWhereUniqueInput | UserIdsWhereUniqueInput[]
    update?: UserIdsUpdateWithWhereUniqueWithoutUserInput | UserIdsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserIdsUpdateManyWithWhereWithoutUserInput | UserIdsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserIdsScalarWhereInput | UserIdsScalarWhereInput[]
  }

  export type CharactersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUser_idsInput = {
    create?: XOR<UsersCreateWithoutUser_idsInput, UsersUncheckedCreateWithoutUser_idsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_idsInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateOneRequiredWithoutUser_idsNestedInput = {
    create?: XOR<UsersCreateWithoutUser_idsInput, UsersUncheckedCreateWithoutUser_idsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_idsInput
    upsert?: UsersUpsertWithoutUser_idsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_idsInput, UsersUpdateWithoutUser_idsInput>, UsersUncheckedUpdateWithoutUser_idsInput>
  }

  export type UsersCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    connect?: UsersWhereUniqueInput
  }

  export type CharacterCustomizationCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterCustomizationCreateOrConnectWithoutCharacterInput
    connect?: CharacterCustomizationWhereUniqueInput
  }

  export type CharacterStatusCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutCharacterInput
    connect?: CharacterStatusWhereUniqueInput
  }

  export type CharacterCustomizationUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterCustomizationCreateOrConnectWithoutCharacterInput
    connect?: CharacterCustomizationWhereUniqueInput
  }

  export type CharacterStatusUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutCharacterInput
    connect?: CharacterStatusWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    upsert?: UsersUpsertWithoutCharactersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCharactersInput, UsersUpdateWithoutCharactersInput>, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterCustomizationUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterCustomizationCreateOrConnectWithoutCharacterInput
    upsert?: CharacterCustomizationUpsertWithoutCharacterInput
    disconnect?: CharacterCustomizationWhereInput | boolean
    delete?: CharacterCustomizationWhereInput | boolean
    connect?: CharacterCustomizationWhereUniqueInput
    update?: XOR<XOR<CharacterCustomizationUpdateToOneWithWhereWithoutCharacterInput, CharacterCustomizationUpdateWithoutCharacterInput>, CharacterCustomizationUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterStatusUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutCharacterInput
    upsert?: CharacterStatusUpsertWithoutCharacterInput
    disconnect?: CharacterStatusWhereInput | boolean
    delete?: CharacterStatusWhereInput | boolean
    connect?: CharacterStatusWhereUniqueInput
    update?: XOR<XOR<CharacterStatusUpdateToOneWithWhereWithoutCharacterInput, CharacterStatusUpdateWithoutCharacterInput>, CharacterStatusUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterCustomizationUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterCustomizationCreateOrConnectWithoutCharacterInput
    upsert?: CharacterCustomizationUpsertWithoutCharacterInput
    disconnect?: CharacterCustomizationWhereInput | boolean
    delete?: CharacterCustomizationWhereInput | boolean
    connect?: CharacterCustomizationWhereUniqueInput
    update?: XOR<XOR<CharacterCustomizationUpdateToOneWithWhereWithoutCharacterInput, CharacterCustomizationUpdateWithoutCharacterInput>, CharacterCustomizationUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterStatusUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutCharacterInput
    upsert?: CharacterStatusUpsertWithoutCharacterInput
    disconnect?: CharacterStatusWhereInput | boolean
    delete?: CharacterStatusWhereInput | boolean
    connect?: CharacterStatusWhereUniqueInput
    update?: XOR<XOR<CharacterStatusUpdateToOneWithWhereWithoutCharacterInput, CharacterStatusUpdateWithoutCharacterInput>, CharacterStatusUncheckedUpdateWithoutCharacterInput>
  }

  export type CharactersCreateNestedOneWithoutCustomizationInput = {
    create?: XOR<CharactersCreateWithoutCustomizationInput, CharactersUncheckedCreateWithoutCustomizationInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCustomizationInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutCustomizationNestedInput = {
    create?: XOR<CharactersCreateWithoutCustomizationInput, CharactersUncheckedCreateWithoutCustomizationInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCustomizationInput
    upsert?: CharactersUpsertWithoutCustomizationInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCustomizationInput, CharactersUpdateWithoutCustomizationInput>, CharactersUncheckedUpdateWithoutCustomizationInput>
  }

  export type CharactersCreateNestedOneWithoutStatusInput = {
    create?: XOR<CharactersCreateWithoutStatusInput, CharactersUncheckedCreateWithoutStatusInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutStatusInput
    connect?: CharactersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharactersUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<CharactersCreateWithoutStatusInput, CharactersUncheckedCreateWithoutStatusInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutStatusInput
    upsert?: CharactersUpsertWithoutStatusInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutStatusInput, CharactersUpdateWithoutStatusInput>, CharactersUncheckedUpdateWithoutStatusInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserIdsCreateWithoutUserInput = {
    identifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIdsUncheckedCreateWithoutUserInput = {
    identifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIdsCreateOrConnectWithoutUserInput = {
    where: UserIdsWhereUniqueInput
    create: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput>
  }

  export type UserIdsCreateManyUserInputEnvelope = {
    data: UserIdsCreateManyUserInput | UserIdsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharactersCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    customization?: CharacterCustomizationCreateNestedOneWithoutCharacterInput
    status?: CharacterStatusCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customization?: CharacterCustomizationUncheckedCreateNestedOneWithoutCharacterInput
    status?: CharacterStatusUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutUserInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersCreateManyUserInputEnvelope = {
    data: CharactersCreateManyUserInput | CharactersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserIdsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserIdsWhereUniqueInput
    update: XOR<UserIdsUpdateWithoutUserInput, UserIdsUncheckedUpdateWithoutUserInput>
    create: XOR<UserIdsCreateWithoutUserInput, UserIdsUncheckedCreateWithoutUserInput>
  }

  export type UserIdsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserIdsWhereUniqueInput
    data: XOR<UserIdsUpdateWithoutUserInput, UserIdsUncheckedUpdateWithoutUserInput>
  }

  export type UserIdsUpdateManyWithWhereWithoutUserInput = {
    where: UserIdsScalarWhereInput
    data: XOR<UserIdsUpdateManyMutationInput, UserIdsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserIdsScalarWhereInput = {
    AND?: UserIdsScalarWhereInput | UserIdsScalarWhereInput[]
    OR?: UserIdsScalarWhereInput[]
    NOT?: UserIdsScalarWhereInput | UserIdsScalarWhereInput[]
    identifier?: StringFilter<"UserIds"> | string
    user_id?: IntFilter<"UserIds"> | number
    createdAt?: DateTimeFilter<"UserIds"> | Date | string
    updatedAt?: DateTimeFilter<"UserIds"> | Date | string
  }

  export type CharactersUpsertWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
  }

  export type CharactersUpdateManyWithWhereWithoutUserInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutUserInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    id?: IntFilter<"Characters"> | number
    user_id?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
  }

  export type UsersCreateWithoutUser_idsInput = {
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharactersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUser_idsInput = {
    id?: number
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharactersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUser_idsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_idsInput, UsersUncheckedCreateWithoutUser_idsInput>
  }

  export type UsersUpsertWithoutUser_idsInput = {
    update: XOR<UsersUpdateWithoutUser_idsInput, UsersUncheckedUpdateWithoutUser_idsInput>
    create: XOR<UsersCreateWithoutUser_idsInput, UsersUncheckedCreateWithoutUser_idsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_idsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_idsInput, UsersUncheckedUpdateWithoutUser_idsInput>
  }

  export type UsersUpdateWithoutUser_idsInput = {
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharactersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharactersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutCharactersInput = {
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_ids?: UserIdsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCharactersInput = {
    id?: number
    whitelisted?: boolean | null
    banned?: boolean | null
    character_select?: number | null
    last_login?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_ids?: UserIdsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCharactersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterCustomizationCreateWithoutCharacterInput = {
    model: number
    components: JsonNullValueInput | InputJsonValue
    props: JsonNullValueInput | InputJsonValue
    faceFeatures: JsonNullValueInput | InputJsonValue
    headBlend: JsonNullValueInput | InputJsonValue
    overlays: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCustomizationUncheckedCreateWithoutCharacterInput = {
    id?: number
    model: number
    components: JsonNullValueInput | InputJsonValue
    props: JsonNullValueInput | InputJsonValue
    faceFeatures: JsonNullValueInput | InputJsonValue
    headBlend: JsonNullValueInput | InputJsonValue
    overlays: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCustomizationCreateOrConnectWithoutCharacterInput = {
    where: CharacterCustomizationWhereUniqueInput
    create: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterStatusCreateWithoutCharacterInput = {
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterStatusUncheckedCreateWithoutCharacterInput = {
    id?: number
    health: number
    armour: number
    heading: number
    positionX: number
    positionY: number
    positionZ: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterStatusCreateOrConnectWithoutCharacterInput = {
    where: CharacterStatusWhereUniqueInput
    create: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
  }

  export type UsersUpsertWithoutCharactersInput = {
    update: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type UsersUpdateWithoutCharactersInput = {
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: UserIdsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCharactersInput = {
    id?: IntFieldUpdateOperationsInput | number
    whitelisted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    character_select?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: UserIdsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharacterCustomizationUpsertWithoutCharacterInput = {
    update: XOR<CharacterCustomizationUpdateWithoutCharacterInput, CharacterCustomizationUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterCustomizationCreateWithoutCharacterInput, CharacterCustomizationUncheckedCreateWithoutCharacterInput>
    where?: CharacterCustomizationWhereInput
  }

  export type CharacterCustomizationUpdateToOneWithWhereWithoutCharacterInput = {
    where?: CharacterCustomizationWhereInput
    data: XOR<CharacterCustomizationUpdateWithoutCharacterInput, CharacterCustomizationUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterCustomizationUpdateWithoutCharacterInput = {
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCustomizationUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    components?: JsonNullValueInput | InputJsonValue
    props?: JsonNullValueInput | InputJsonValue
    faceFeatures?: JsonNullValueInput | InputJsonValue
    headBlend?: JsonNullValueInput | InputJsonValue
    overlays?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatusUpsertWithoutCharacterInput = {
    update: XOR<CharacterStatusUpdateWithoutCharacterInput, CharacterStatusUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterStatusCreateWithoutCharacterInput, CharacterStatusUncheckedCreateWithoutCharacterInput>
    where?: CharacterStatusWhereInput
  }

  export type CharacterStatusUpdateToOneWithWhereWithoutCharacterInput = {
    where?: CharacterStatusWhereInput
    data: XOR<CharacterStatusUpdateWithoutCharacterInput, CharacterStatusUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterStatusUpdateWithoutCharacterInput = {
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatusUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    armour?: IntFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    positionZ?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateWithoutCustomizationInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCharactersInput
    status?: CharacterStatusCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCustomizationInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: CharacterStatusUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCustomizationInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCustomizationInput, CharactersUncheckedCreateWithoutCustomizationInput>
  }

  export type CharactersUpsertWithoutCustomizationInput = {
    update: XOR<CharactersUpdateWithoutCustomizationInput, CharactersUncheckedUpdateWithoutCustomizationInput>
    create: XOR<CharactersCreateWithoutCustomizationInput, CharactersUncheckedCreateWithoutCustomizationInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCustomizationInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCustomizationInput, CharactersUncheckedUpdateWithoutCustomizationInput>
  }

  export type CharactersUpdateWithoutCustomizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    status?: CharacterStatusUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCustomizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: CharacterStatusUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersCreateWithoutStatusInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCharactersInput
    customization?: CharacterCustomizationCreateNestedOneWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutStatusInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customization?: CharacterCustomizationUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutStatusInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutStatusInput, CharactersUncheckedCreateWithoutStatusInput>
  }

  export type CharactersUpsertWithoutStatusInput = {
    update: XOR<CharactersUpdateWithoutStatusInput, CharactersUncheckedUpdateWithoutStatusInput>
    create: XOR<CharactersCreateWithoutStatusInput, CharactersUncheckedCreateWithoutStatusInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutStatusInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutStatusInput, CharactersUncheckedUpdateWithoutStatusInput>
  }

  export type CharactersUpdateWithoutStatusInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    customization?: CharacterCustomizationUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customization?: CharacterCustomizationUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type UserIdsCreateManyUserInput = {
    identifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIdsUpdateWithoutUserInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdsUncheckedUpdateWithoutUserInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIdsUncheckedUpdateManyWithoutUserInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customization?: CharacterCustomizationUpdateOneWithoutCharacterNestedInput
    status?: CharacterStatusUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customization?: CharacterCustomizationUncheckedUpdateOneWithoutCharacterNestedInput
    status?: CharacterStatusUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserIdsDefaultArgs instead
     */
    export type UserIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserIdsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterCustomizationDefaultArgs instead
     */
    export type CharacterCustomizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterCustomizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterStatusDefaultArgs instead
     */
    export type CharacterStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterStatusDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}