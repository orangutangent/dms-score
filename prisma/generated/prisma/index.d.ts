
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DigitalMaturitySurveyResult
 * 
 */
export type DigitalMaturitySurveyResult = $Result.DefaultSelection<Prisma.$DigitalMaturitySurveyResultPayload>
/**
 * Model GovernmentSurveyResult
 * 
 */
export type GovernmentSurveyResult = $Result.DefaultSelection<Prisma.$GovernmentSurveyResultPayload>
/**
 * Model GovernmentSurveyServiceScore
 * 
 */
export type GovernmentSurveyServiceScore = $Result.DefaultSelection<Prisma.$GovernmentSurveyServiceScorePayload>
/**
 * Model DigitalMaturitySurveyServiceScore
 * 
 */
export type DigitalMaturitySurveyServiceScore = $Result.DefaultSelection<Prisma.$DigitalMaturitySurveyServiceScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DigitalMaturitySurveyResults
 * const digitalMaturitySurveyResults = await prisma.digitalMaturitySurveyResult.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more DigitalMaturitySurveyResults
   * const digitalMaturitySurveyResults = await prisma.digitalMaturitySurveyResult.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.digitalMaturitySurveyResult`: Exposes CRUD operations for the **DigitalMaturitySurveyResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalMaturitySurveyResults
    * const digitalMaturitySurveyResults = await prisma.digitalMaturitySurveyResult.findMany()
    * ```
    */
  get digitalMaturitySurveyResult(): Prisma.DigitalMaturitySurveyResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.governmentSurveyResult`: Exposes CRUD operations for the **GovernmentSurveyResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GovernmentSurveyResults
    * const governmentSurveyResults = await prisma.governmentSurveyResult.findMany()
    * ```
    */
  get governmentSurveyResult(): Prisma.GovernmentSurveyResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.governmentSurveyServiceScore`: Exposes CRUD operations for the **GovernmentSurveyServiceScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GovernmentSurveyServiceScores
    * const governmentSurveyServiceScores = await prisma.governmentSurveyServiceScore.findMany()
    * ```
    */
  get governmentSurveyServiceScore(): Prisma.GovernmentSurveyServiceScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.digitalMaturitySurveyServiceScore`: Exposes CRUD operations for the **DigitalMaturitySurveyServiceScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalMaturitySurveyServiceScores
    * const digitalMaturitySurveyServiceScores = await prisma.digitalMaturitySurveyServiceScore.findMany()
    * ```
    */
  get digitalMaturitySurveyServiceScore(): Prisma.DigitalMaturitySurveyServiceScoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    DigitalMaturitySurveyResult: 'DigitalMaturitySurveyResult',
    GovernmentSurveyResult: 'GovernmentSurveyResult',
    GovernmentSurveyServiceScore: 'GovernmentSurveyServiceScore',
    DigitalMaturitySurveyServiceScore: 'DigitalMaturitySurveyServiceScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "digitalMaturitySurveyResult" | "governmentSurveyResult" | "governmentSurveyServiceScore" | "digitalMaturitySurveyServiceScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DigitalMaturitySurveyResult: {
        payload: Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>
        fields: Prisma.DigitalMaturitySurveyResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalMaturitySurveyResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalMaturitySurveyResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          findFirst: {
            args: Prisma.DigitalMaturitySurveyResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalMaturitySurveyResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          findMany: {
            args: Prisma.DigitalMaturitySurveyResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>[]
          }
          create: {
            args: Prisma.DigitalMaturitySurveyResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          createMany: {
            args: Prisma.DigitalMaturitySurveyResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DigitalMaturitySurveyResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>[]
          }
          delete: {
            args: Prisma.DigitalMaturitySurveyResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          update: {
            args: Prisma.DigitalMaturitySurveyResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          deleteMany: {
            args: Prisma.DigitalMaturitySurveyResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalMaturitySurveyResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DigitalMaturitySurveyResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>[]
          }
          upsert: {
            args: Prisma.DigitalMaturitySurveyResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyResultPayload>
          }
          aggregate: {
            args: Prisma.DigitalMaturitySurveyResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDigitalMaturitySurveyResult>
          }
          groupBy: {
            args: Prisma.DigitalMaturitySurveyResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DigitalMaturitySurveyResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalMaturitySurveyResultCountArgs<ExtArgs>
            result: $Utils.Optional<DigitalMaturitySurveyResultCountAggregateOutputType> | number
          }
        }
      }
      GovernmentSurveyResult: {
        payload: Prisma.$GovernmentSurveyResultPayload<ExtArgs>
        fields: Prisma.GovernmentSurveyResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GovernmentSurveyResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GovernmentSurveyResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          findFirst: {
            args: Prisma.GovernmentSurveyResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GovernmentSurveyResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          findMany: {
            args: Prisma.GovernmentSurveyResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>[]
          }
          create: {
            args: Prisma.GovernmentSurveyResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          createMany: {
            args: Prisma.GovernmentSurveyResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GovernmentSurveyResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>[]
          }
          delete: {
            args: Prisma.GovernmentSurveyResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          update: {
            args: Prisma.GovernmentSurveyResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          deleteMany: {
            args: Prisma.GovernmentSurveyResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GovernmentSurveyResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GovernmentSurveyResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>[]
          }
          upsert: {
            args: Prisma.GovernmentSurveyResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyResultPayload>
          }
          aggregate: {
            args: Prisma.GovernmentSurveyResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGovernmentSurveyResult>
          }
          groupBy: {
            args: Prisma.GovernmentSurveyResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<GovernmentSurveyResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.GovernmentSurveyResultCountArgs<ExtArgs>
            result: $Utils.Optional<GovernmentSurveyResultCountAggregateOutputType> | number
          }
        }
      }
      GovernmentSurveyServiceScore: {
        payload: Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>
        fields: Prisma.GovernmentSurveyServiceScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GovernmentSurveyServiceScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GovernmentSurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          findFirst: {
            args: Prisma.GovernmentSurveyServiceScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GovernmentSurveyServiceScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          findMany: {
            args: Prisma.GovernmentSurveyServiceScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>[]
          }
          create: {
            args: Prisma.GovernmentSurveyServiceScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          createMany: {
            args: Prisma.GovernmentSurveyServiceScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GovernmentSurveyServiceScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>[]
          }
          delete: {
            args: Prisma.GovernmentSurveyServiceScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          update: {
            args: Prisma.GovernmentSurveyServiceScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          deleteMany: {
            args: Prisma.GovernmentSurveyServiceScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GovernmentSurveyServiceScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GovernmentSurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>[]
          }
          upsert: {
            args: Prisma.GovernmentSurveyServiceScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentSurveyServiceScorePayload>
          }
          aggregate: {
            args: Prisma.GovernmentSurveyServiceScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGovernmentSurveyServiceScore>
          }
          groupBy: {
            args: Prisma.GovernmentSurveyServiceScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GovernmentSurveyServiceScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GovernmentSurveyServiceScoreCountArgs<ExtArgs>
            result: $Utils.Optional<GovernmentSurveyServiceScoreCountAggregateOutputType> | number
          }
        }
      }
      DigitalMaturitySurveyServiceScore: {
        payload: Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>
        fields: Prisma.DigitalMaturitySurveyServiceScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalMaturitySurveyServiceScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalMaturitySurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          findFirst: {
            args: Prisma.DigitalMaturitySurveyServiceScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalMaturitySurveyServiceScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          findMany: {
            args: Prisma.DigitalMaturitySurveyServiceScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>[]
          }
          create: {
            args: Prisma.DigitalMaturitySurveyServiceScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          createMany: {
            args: Prisma.DigitalMaturitySurveyServiceScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DigitalMaturitySurveyServiceScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>[]
          }
          delete: {
            args: Prisma.DigitalMaturitySurveyServiceScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          update: {
            args: Prisma.DigitalMaturitySurveyServiceScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          deleteMany: {
            args: Prisma.DigitalMaturitySurveyServiceScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalMaturitySurveyServiceScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DigitalMaturitySurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>[]
          }
          upsert: {
            args: Prisma.DigitalMaturitySurveyServiceScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalMaturitySurveyServiceScorePayload>
          }
          aggregate: {
            args: Prisma.DigitalMaturitySurveyServiceScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDigitalMaturitySurveyServiceScore>
          }
          groupBy: {
            args: Prisma.DigitalMaturitySurveyServiceScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<DigitalMaturitySurveyServiceScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalMaturitySurveyServiceScoreCountArgs<ExtArgs>
            result: $Utils.Optional<DigitalMaturitySurveyServiceScoreCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    digitalMaturitySurveyResult?: DigitalMaturitySurveyResultOmit
    governmentSurveyResult?: GovernmentSurveyResultOmit
    governmentSurveyServiceScore?: GovernmentSurveyServiceScoreOmit
    digitalMaturitySurveyServiceScore?: DigitalMaturitySurveyServiceScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type DigitalMaturitySurveyResultCountOutputType
   */

  export type DigitalMaturitySurveyResultCountOutputType = {
    serviceScores: number
  }

  export type DigitalMaturitySurveyResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceScores?: boolean | DigitalMaturitySurveyResultCountOutputTypeCountServiceScoresArgs
  }

  // Custom InputTypes
  /**
   * DigitalMaturitySurveyResultCountOutputType without action
   */
  export type DigitalMaturitySurveyResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResultCountOutputType
     */
    select?: DigitalMaturitySurveyResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DigitalMaturitySurveyResultCountOutputType without action
   */
  export type DigitalMaturitySurveyResultCountOutputTypeCountServiceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalMaturitySurveyServiceScoreWhereInput
  }


  /**
   * Count Type GovernmentSurveyResultCountOutputType
   */

  export type GovernmentSurveyResultCountOutputType = {
    serviceScores: number
  }

  export type GovernmentSurveyResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceScores?: boolean | GovernmentSurveyResultCountOutputTypeCountServiceScoresArgs
  }

  // Custom InputTypes
  /**
   * GovernmentSurveyResultCountOutputType without action
   */
  export type GovernmentSurveyResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResultCountOutputType
     */
    select?: GovernmentSurveyResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GovernmentSurveyResultCountOutputType without action
   */
  export type GovernmentSurveyResultCountOutputTypeCountServiceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GovernmentSurveyServiceScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DigitalMaturitySurveyResult
   */

  export type AggregateDigitalMaturitySurveyResult = {
    _count: DigitalMaturitySurveyResultCountAggregateOutputType | null
    _avg: DigitalMaturitySurveyResultAvgAggregateOutputType | null
    _sum: DigitalMaturitySurveyResultSumAggregateOutputType | null
    _min: DigitalMaturitySurveyResultMinAggregateOutputType | null
    _max: DigitalMaturitySurveyResultMaxAggregateOutputType | null
  }

  export type DigitalMaturitySurveyResultAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type DigitalMaturitySurveyResultSumAggregateOutputType = {
    overallScore: number | null
  }

  export type DigitalMaturitySurveyResultMinAggregateOutputType = {
    id: string | null
    country: string | null
    region: string | null
    sector: string | null
    overallScore: number | null
    finalThoughts: string | null
    createdAt: Date | null
  }

  export type DigitalMaturitySurveyResultMaxAggregateOutputType = {
    id: string | null
    country: string | null
    region: string | null
    sector: string | null
    overallScore: number | null
    finalThoughts: string | null
    createdAt: Date | null
  }

  export type DigitalMaturitySurveyResultCountAggregateOutputType = {
    id: number
    country: number
    region: number
    sector: number
    overallScore: number
    finalThoughts: number
    criterionScores: number
    rawAnswers: number
    createdAt: number
    _all: number
  }


  export type DigitalMaturitySurveyResultAvgAggregateInputType = {
    overallScore?: true
  }

  export type DigitalMaturitySurveyResultSumAggregateInputType = {
    overallScore?: true
  }

  export type DigitalMaturitySurveyResultMinAggregateInputType = {
    id?: true
    country?: true
    region?: true
    sector?: true
    overallScore?: true
    finalThoughts?: true
    createdAt?: true
  }

  export type DigitalMaturitySurveyResultMaxAggregateInputType = {
    id?: true
    country?: true
    region?: true
    sector?: true
    overallScore?: true
    finalThoughts?: true
    createdAt?: true
  }

  export type DigitalMaturitySurveyResultCountAggregateInputType = {
    id?: true
    country?: true
    region?: true
    sector?: true
    overallScore?: true
    finalThoughts?: true
    criterionScores?: true
    rawAnswers?: true
    createdAt?: true
    _all?: true
  }

  export type DigitalMaturitySurveyResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalMaturitySurveyResult to aggregate.
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyResults to fetch.
     */
    orderBy?: DigitalMaturitySurveyResultOrderByWithRelationInput | DigitalMaturitySurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalMaturitySurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalMaturitySurveyResults
    **/
    _count?: true | DigitalMaturitySurveyResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DigitalMaturitySurveyResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DigitalMaturitySurveyResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalMaturitySurveyResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalMaturitySurveyResultMaxAggregateInputType
  }

  export type GetDigitalMaturitySurveyResultAggregateType<T extends DigitalMaturitySurveyResultAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalMaturitySurveyResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalMaturitySurveyResult[P]>
      : GetScalarType<T[P], AggregateDigitalMaturitySurveyResult[P]>
  }




  export type DigitalMaturitySurveyResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalMaturitySurveyResultWhereInput
    orderBy?: DigitalMaturitySurveyResultOrderByWithAggregationInput | DigitalMaturitySurveyResultOrderByWithAggregationInput[]
    by: DigitalMaturitySurveyResultScalarFieldEnum[] | DigitalMaturitySurveyResultScalarFieldEnum
    having?: DigitalMaturitySurveyResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalMaturitySurveyResultCountAggregateInputType | true
    _avg?: DigitalMaturitySurveyResultAvgAggregateInputType
    _sum?: DigitalMaturitySurveyResultSumAggregateInputType
    _min?: DigitalMaturitySurveyResultMinAggregateInputType
    _max?: DigitalMaturitySurveyResultMaxAggregateInputType
  }

  export type DigitalMaturitySurveyResultGroupByOutputType = {
    id: string
    country: string
    region: string
    sector: string
    overallScore: number
    finalThoughts: string
    criterionScores: JsonValue
    rawAnswers: JsonValue
    createdAt: Date
    _count: DigitalMaturitySurveyResultCountAggregateOutputType | null
    _avg: DigitalMaturitySurveyResultAvgAggregateOutputType | null
    _sum: DigitalMaturitySurveyResultSumAggregateOutputType | null
    _min: DigitalMaturitySurveyResultMinAggregateOutputType | null
    _max: DigitalMaturitySurveyResultMaxAggregateOutputType | null
  }

  type GetDigitalMaturitySurveyResultGroupByPayload<T extends DigitalMaturitySurveyResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalMaturitySurveyResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalMaturitySurveyResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalMaturitySurveyResultGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalMaturitySurveyResultGroupByOutputType[P]>
        }
      >
    >


  export type DigitalMaturitySurveyResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    sector?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
    serviceScores?: boolean | DigitalMaturitySurveyResult$serviceScoresArgs<ExtArgs>
    _count?: boolean | DigitalMaturitySurveyResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalMaturitySurveyResult"]>

  export type DigitalMaturitySurveyResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    sector?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["digitalMaturitySurveyResult"]>

  export type DigitalMaturitySurveyResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    sector?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["digitalMaturitySurveyResult"]>

  export type DigitalMaturitySurveyResultSelectScalar = {
    id?: boolean
    country?: boolean
    region?: boolean
    sector?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
  }

  export type DigitalMaturitySurveyResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "region" | "sector" | "overallScore" | "finalThoughts" | "criterionScores" | "rawAnswers" | "createdAt", ExtArgs["result"]["digitalMaturitySurveyResult"]>
  export type DigitalMaturitySurveyResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceScores?: boolean | DigitalMaturitySurveyResult$serviceScoresArgs<ExtArgs>
    _count?: boolean | DigitalMaturitySurveyResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DigitalMaturitySurveyResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DigitalMaturitySurveyResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DigitalMaturitySurveyResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DigitalMaturitySurveyResult"
    objects: {
      serviceScores: Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string
      region: string
      sector: string
      overallScore: number
      finalThoughts: string
      criterionScores: Prisma.JsonValue
      rawAnswers: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["digitalMaturitySurveyResult"]>
    composites: {}
  }

  type DigitalMaturitySurveyResultGetPayload<S extends boolean | null | undefined | DigitalMaturitySurveyResultDefaultArgs> = $Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload, S>

  type DigitalMaturitySurveyResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DigitalMaturitySurveyResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DigitalMaturitySurveyResultCountAggregateInputType | true
    }

  export interface DigitalMaturitySurveyResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalMaturitySurveyResult'], meta: { name: 'DigitalMaturitySurveyResult' } }
    /**
     * Find zero or one DigitalMaturitySurveyResult that matches the filter.
     * @param {DigitalMaturitySurveyResultFindUniqueArgs} args - Arguments to find a DigitalMaturitySurveyResult
     * @example
     * // Get one DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DigitalMaturitySurveyResultFindUniqueArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultFindUniqueArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DigitalMaturitySurveyResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DigitalMaturitySurveyResultFindUniqueOrThrowArgs} args - Arguments to find a DigitalMaturitySurveyResult
     * @example
     * // Get one DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DigitalMaturitySurveyResultFindUniqueOrThrowArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalMaturitySurveyResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultFindFirstArgs} args - Arguments to find a DigitalMaturitySurveyResult
     * @example
     * // Get one DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DigitalMaturitySurveyResultFindFirstArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultFindFirstArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalMaturitySurveyResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultFindFirstOrThrowArgs} args - Arguments to find a DigitalMaturitySurveyResult
     * @example
     * // Get one DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DigitalMaturitySurveyResultFindFirstOrThrowArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DigitalMaturitySurveyResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResults = await prisma.digitalMaturitySurveyResult.findMany()
     * 
     * // Get first 10 DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResults = await prisma.digitalMaturitySurveyResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const digitalMaturitySurveyResultWithIdOnly = await prisma.digitalMaturitySurveyResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DigitalMaturitySurveyResultFindManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DigitalMaturitySurveyResult.
     * @param {DigitalMaturitySurveyResultCreateArgs} args - Arguments to create a DigitalMaturitySurveyResult.
     * @example
     * // Create one DigitalMaturitySurveyResult
     * const DigitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.create({
     *   data: {
     *     // ... data to create a DigitalMaturitySurveyResult
     *   }
     * })
     * 
     */
    create<T extends DigitalMaturitySurveyResultCreateArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultCreateArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DigitalMaturitySurveyResults.
     * @param {DigitalMaturitySurveyResultCreateManyArgs} args - Arguments to create many DigitalMaturitySurveyResults.
     * @example
     * // Create many DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DigitalMaturitySurveyResultCreateManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DigitalMaturitySurveyResults and returns the data saved in the database.
     * @param {DigitalMaturitySurveyResultCreateManyAndReturnArgs} args - Arguments to create many DigitalMaturitySurveyResults.
     * @example
     * // Create many DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DigitalMaturitySurveyResults and only return the `id`
     * const digitalMaturitySurveyResultWithIdOnly = await prisma.digitalMaturitySurveyResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DigitalMaturitySurveyResultCreateManyAndReturnArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DigitalMaturitySurveyResult.
     * @param {DigitalMaturitySurveyResultDeleteArgs} args - Arguments to delete one DigitalMaturitySurveyResult.
     * @example
     * // Delete one DigitalMaturitySurveyResult
     * const DigitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.delete({
     *   where: {
     *     // ... filter to delete one DigitalMaturitySurveyResult
     *   }
     * })
     * 
     */
    delete<T extends DigitalMaturitySurveyResultDeleteArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultDeleteArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DigitalMaturitySurveyResult.
     * @param {DigitalMaturitySurveyResultUpdateArgs} args - Arguments to update one DigitalMaturitySurveyResult.
     * @example
     * // Update one DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DigitalMaturitySurveyResultUpdateArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultUpdateArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DigitalMaturitySurveyResults.
     * @param {DigitalMaturitySurveyResultDeleteManyArgs} args - Arguments to filter DigitalMaturitySurveyResults to delete.
     * @example
     * // Delete a few DigitalMaturitySurveyResults
     * const { count } = await prisma.digitalMaturitySurveyResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DigitalMaturitySurveyResultDeleteManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalMaturitySurveyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DigitalMaturitySurveyResultUpdateManyArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalMaturitySurveyResults and returns the data updated in the database.
     * @param {DigitalMaturitySurveyResultUpdateManyAndReturnArgs} args - Arguments to update many DigitalMaturitySurveyResults.
     * @example
     * // Update many DigitalMaturitySurveyResults
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DigitalMaturitySurveyResults and only return the `id`
     * const digitalMaturitySurveyResultWithIdOnly = await prisma.digitalMaturitySurveyResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DigitalMaturitySurveyResultUpdateManyAndReturnArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DigitalMaturitySurveyResult.
     * @param {DigitalMaturitySurveyResultUpsertArgs} args - Arguments to update or create a DigitalMaturitySurveyResult.
     * @example
     * // Update or create a DigitalMaturitySurveyResult
     * const digitalMaturitySurveyResult = await prisma.digitalMaturitySurveyResult.upsert({
     *   create: {
     *     // ... data to create a DigitalMaturitySurveyResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalMaturitySurveyResult we want to update
     *   }
     * })
     */
    upsert<T extends DigitalMaturitySurveyResultUpsertArgs>(args: SelectSubset<T, DigitalMaturitySurveyResultUpsertArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DigitalMaturitySurveyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultCountArgs} args - Arguments to filter DigitalMaturitySurveyResults to count.
     * @example
     * // Count the number of DigitalMaturitySurveyResults
     * const count = await prisma.digitalMaturitySurveyResult.count({
     *   where: {
     *     // ... the filter for the DigitalMaturitySurveyResults we want to count
     *   }
     * })
    **/
    count<T extends DigitalMaturitySurveyResultCountArgs>(
      args?: Subset<T, DigitalMaturitySurveyResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalMaturitySurveyResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalMaturitySurveyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalMaturitySurveyResultAggregateArgs>(args: Subset<T, DigitalMaturitySurveyResultAggregateArgs>): Prisma.PrismaPromise<GetDigitalMaturitySurveyResultAggregateType<T>>

    /**
     * Group by DigitalMaturitySurveyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyResultGroupByArgs} args - Group by arguments.
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
      T extends DigitalMaturitySurveyResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalMaturitySurveyResultGroupByArgs['orderBy'] }
        : { orderBy?: DigitalMaturitySurveyResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalMaturitySurveyResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalMaturitySurveyResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalMaturitySurveyResult model
   */
  readonly fields: DigitalMaturitySurveyResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalMaturitySurveyResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalMaturitySurveyResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceScores<T extends DigitalMaturitySurveyResult$serviceScoresArgs<ExtArgs> = {}>(args?: Subset<T, DigitalMaturitySurveyResult$serviceScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DigitalMaturitySurveyResult model
   */
  interface DigitalMaturitySurveyResultFieldRefs {
    readonly id: FieldRef<"DigitalMaturitySurveyResult", 'String'>
    readonly country: FieldRef<"DigitalMaturitySurveyResult", 'String'>
    readonly region: FieldRef<"DigitalMaturitySurveyResult", 'String'>
    readonly sector: FieldRef<"DigitalMaturitySurveyResult", 'String'>
    readonly overallScore: FieldRef<"DigitalMaturitySurveyResult", 'Float'>
    readonly finalThoughts: FieldRef<"DigitalMaturitySurveyResult", 'String'>
    readonly criterionScores: FieldRef<"DigitalMaturitySurveyResult", 'Json'>
    readonly rawAnswers: FieldRef<"DigitalMaturitySurveyResult", 'Json'>
    readonly createdAt: FieldRef<"DigitalMaturitySurveyResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DigitalMaturitySurveyResult findUnique
   */
  export type DigitalMaturitySurveyResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyResult to fetch.
     */
    where: DigitalMaturitySurveyResultWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyResult findUniqueOrThrow
   */
  export type DigitalMaturitySurveyResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyResult to fetch.
     */
    where: DigitalMaturitySurveyResultWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyResult findFirst
   */
  export type DigitalMaturitySurveyResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyResult to fetch.
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyResults to fetch.
     */
    orderBy?: DigitalMaturitySurveyResultOrderByWithRelationInput | DigitalMaturitySurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalMaturitySurveyResults.
     */
    cursor?: DigitalMaturitySurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalMaturitySurveyResults.
     */
    distinct?: DigitalMaturitySurveyResultScalarFieldEnum | DigitalMaturitySurveyResultScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyResult findFirstOrThrow
   */
  export type DigitalMaturitySurveyResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyResult to fetch.
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyResults to fetch.
     */
    orderBy?: DigitalMaturitySurveyResultOrderByWithRelationInput | DigitalMaturitySurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalMaturitySurveyResults.
     */
    cursor?: DigitalMaturitySurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalMaturitySurveyResults.
     */
    distinct?: DigitalMaturitySurveyResultScalarFieldEnum | DigitalMaturitySurveyResultScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyResult findMany
   */
  export type DigitalMaturitySurveyResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyResults to fetch.
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyResults to fetch.
     */
    orderBy?: DigitalMaturitySurveyResultOrderByWithRelationInput | DigitalMaturitySurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalMaturitySurveyResults.
     */
    cursor?: DigitalMaturitySurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyResults.
     */
    skip?: number
    distinct?: DigitalMaturitySurveyResultScalarFieldEnum | DigitalMaturitySurveyResultScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyResult create
   */
  export type DigitalMaturitySurveyResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * The data needed to create a DigitalMaturitySurveyResult.
     */
    data: XOR<DigitalMaturitySurveyResultCreateInput, DigitalMaturitySurveyResultUncheckedCreateInput>
  }

  /**
   * DigitalMaturitySurveyResult createMany
   */
  export type DigitalMaturitySurveyResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalMaturitySurveyResults.
     */
    data: DigitalMaturitySurveyResultCreateManyInput | DigitalMaturitySurveyResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalMaturitySurveyResult createManyAndReturn
   */
  export type DigitalMaturitySurveyResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * The data used to create many DigitalMaturitySurveyResults.
     */
    data: DigitalMaturitySurveyResultCreateManyInput | DigitalMaturitySurveyResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalMaturitySurveyResult update
   */
  export type DigitalMaturitySurveyResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * The data needed to update a DigitalMaturitySurveyResult.
     */
    data: XOR<DigitalMaturitySurveyResultUpdateInput, DigitalMaturitySurveyResultUncheckedUpdateInput>
    /**
     * Choose, which DigitalMaturitySurveyResult to update.
     */
    where: DigitalMaturitySurveyResultWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyResult updateMany
   */
  export type DigitalMaturitySurveyResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalMaturitySurveyResults.
     */
    data: XOR<DigitalMaturitySurveyResultUpdateManyMutationInput, DigitalMaturitySurveyResultUncheckedUpdateManyInput>
    /**
     * Filter which DigitalMaturitySurveyResults to update
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * Limit how many DigitalMaturitySurveyResults to update.
     */
    limit?: number
  }

  /**
   * DigitalMaturitySurveyResult updateManyAndReturn
   */
  export type DigitalMaturitySurveyResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * The data used to update DigitalMaturitySurveyResults.
     */
    data: XOR<DigitalMaturitySurveyResultUpdateManyMutationInput, DigitalMaturitySurveyResultUncheckedUpdateManyInput>
    /**
     * Filter which DigitalMaturitySurveyResults to update
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * Limit how many DigitalMaturitySurveyResults to update.
     */
    limit?: number
  }

  /**
   * DigitalMaturitySurveyResult upsert
   */
  export type DigitalMaturitySurveyResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * The filter to search for the DigitalMaturitySurveyResult to update in case it exists.
     */
    where: DigitalMaturitySurveyResultWhereUniqueInput
    /**
     * In case the DigitalMaturitySurveyResult found by the `where` argument doesn't exist, create a new DigitalMaturitySurveyResult with this data.
     */
    create: XOR<DigitalMaturitySurveyResultCreateInput, DigitalMaturitySurveyResultUncheckedCreateInput>
    /**
     * In case the DigitalMaturitySurveyResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalMaturitySurveyResultUpdateInput, DigitalMaturitySurveyResultUncheckedUpdateInput>
  }

  /**
   * DigitalMaturitySurveyResult delete
   */
  export type DigitalMaturitySurveyResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
    /**
     * Filter which DigitalMaturitySurveyResult to delete.
     */
    where: DigitalMaturitySurveyResultWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyResult deleteMany
   */
  export type DigitalMaturitySurveyResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalMaturitySurveyResults to delete
     */
    where?: DigitalMaturitySurveyResultWhereInput
    /**
     * Limit how many DigitalMaturitySurveyResults to delete.
     */
    limit?: number
  }

  /**
   * DigitalMaturitySurveyResult.serviceScores
   */
  export type DigitalMaturitySurveyResult$serviceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithRelationInput | DigitalMaturitySurveyServiceScoreOrderByWithRelationInput[]
    cursor?: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DigitalMaturitySurveyServiceScoreScalarFieldEnum | DigitalMaturitySurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyResult without action
   */
  export type DigitalMaturitySurveyResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyResult
     */
    select?: DigitalMaturitySurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyResult
     */
    omit?: DigitalMaturitySurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyResultInclude<ExtArgs> | null
  }


  /**
   * Model GovernmentSurveyResult
   */

  export type AggregateGovernmentSurveyResult = {
    _count: GovernmentSurveyResultCountAggregateOutputType | null
    _avg: GovernmentSurveyResultAvgAggregateOutputType | null
    _sum: GovernmentSurveyResultSumAggregateOutputType | null
    _min: GovernmentSurveyResultMinAggregateOutputType | null
    _max: GovernmentSurveyResultMaxAggregateOutputType | null
  }

  export type GovernmentSurveyResultAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type GovernmentSurveyResultSumAggregateOutputType = {
    overallScore: number | null
  }

  export type GovernmentSurveyResultMinAggregateOutputType = {
    id: string | null
    country: string | null
    region: string | null
    department: string | null
    overallScore: number | null
    finalThoughts: string | null
    createdAt: Date | null
  }

  export type GovernmentSurveyResultMaxAggregateOutputType = {
    id: string | null
    country: string | null
    region: string | null
    department: string | null
    overallScore: number | null
    finalThoughts: string | null
    createdAt: Date | null
  }

  export type GovernmentSurveyResultCountAggregateOutputType = {
    id: number
    country: number
    region: number
    department: number
    overallScore: number
    finalThoughts: number
    criterionScores: number
    rawAnswers: number
    createdAt: number
    sectionScores: number
    _all: number
  }


  export type GovernmentSurveyResultAvgAggregateInputType = {
    overallScore?: true
  }

  export type GovernmentSurveyResultSumAggregateInputType = {
    overallScore?: true
  }

  export type GovernmentSurveyResultMinAggregateInputType = {
    id?: true
    country?: true
    region?: true
    department?: true
    overallScore?: true
    finalThoughts?: true
    createdAt?: true
  }

  export type GovernmentSurveyResultMaxAggregateInputType = {
    id?: true
    country?: true
    region?: true
    department?: true
    overallScore?: true
    finalThoughts?: true
    createdAt?: true
  }

  export type GovernmentSurveyResultCountAggregateInputType = {
    id?: true
    country?: true
    region?: true
    department?: true
    overallScore?: true
    finalThoughts?: true
    criterionScores?: true
    rawAnswers?: true
    createdAt?: true
    sectionScores?: true
    _all?: true
  }

  export type GovernmentSurveyResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentSurveyResult to aggregate.
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyResults to fetch.
     */
    orderBy?: GovernmentSurveyResultOrderByWithRelationInput | GovernmentSurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GovernmentSurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GovernmentSurveyResults
    **/
    _count?: true | GovernmentSurveyResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GovernmentSurveyResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GovernmentSurveyResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GovernmentSurveyResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GovernmentSurveyResultMaxAggregateInputType
  }

  export type GetGovernmentSurveyResultAggregateType<T extends GovernmentSurveyResultAggregateArgs> = {
        [P in keyof T & keyof AggregateGovernmentSurveyResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGovernmentSurveyResult[P]>
      : GetScalarType<T[P], AggregateGovernmentSurveyResult[P]>
  }




  export type GovernmentSurveyResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GovernmentSurveyResultWhereInput
    orderBy?: GovernmentSurveyResultOrderByWithAggregationInput | GovernmentSurveyResultOrderByWithAggregationInput[]
    by: GovernmentSurveyResultScalarFieldEnum[] | GovernmentSurveyResultScalarFieldEnum
    having?: GovernmentSurveyResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GovernmentSurveyResultCountAggregateInputType | true
    _avg?: GovernmentSurveyResultAvgAggregateInputType
    _sum?: GovernmentSurveyResultSumAggregateInputType
    _min?: GovernmentSurveyResultMinAggregateInputType
    _max?: GovernmentSurveyResultMaxAggregateInputType
  }

  export type GovernmentSurveyResultGroupByOutputType = {
    id: string
    country: string
    region: string
    department: string
    overallScore: number
    finalThoughts: string
    criterionScores: JsonValue
    rawAnswers: JsonValue
    createdAt: Date
    sectionScores: JsonValue | null
    _count: GovernmentSurveyResultCountAggregateOutputType | null
    _avg: GovernmentSurveyResultAvgAggregateOutputType | null
    _sum: GovernmentSurveyResultSumAggregateOutputType | null
    _min: GovernmentSurveyResultMinAggregateOutputType | null
    _max: GovernmentSurveyResultMaxAggregateOutputType | null
  }

  type GetGovernmentSurveyResultGroupByPayload<T extends GovernmentSurveyResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GovernmentSurveyResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GovernmentSurveyResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GovernmentSurveyResultGroupByOutputType[P]>
            : GetScalarType<T[P], GovernmentSurveyResultGroupByOutputType[P]>
        }
      >
    >


  export type GovernmentSurveyResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    department?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
    sectionScores?: boolean
    serviceScores?: boolean | GovernmentSurveyResult$serviceScoresArgs<ExtArgs>
    _count?: boolean | GovernmentSurveyResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentSurveyResult"]>

  export type GovernmentSurveyResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    department?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
    sectionScores?: boolean
  }, ExtArgs["result"]["governmentSurveyResult"]>

  export type GovernmentSurveyResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    region?: boolean
    department?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
    sectionScores?: boolean
  }, ExtArgs["result"]["governmentSurveyResult"]>

  export type GovernmentSurveyResultSelectScalar = {
    id?: boolean
    country?: boolean
    region?: boolean
    department?: boolean
    overallScore?: boolean
    finalThoughts?: boolean
    criterionScores?: boolean
    rawAnswers?: boolean
    createdAt?: boolean
    sectionScores?: boolean
  }

  export type GovernmentSurveyResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "region" | "department" | "overallScore" | "finalThoughts" | "criterionScores" | "rawAnswers" | "createdAt" | "sectionScores", ExtArgs["result"]["governmentSurveyResult"]>
  export type GovernmentSurveyResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceScores?: boolean | GovernmentSurveyResult$serviceScoresArgs<ExtArgs>
    _count?: boolean | GovernmentSurveyResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GovernmentSurveyResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GovernmentSurveyResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GovernmentSurveyResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GovernmentSurveyResult"
    objects: {
      serviceScores: Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string
      region: string
      department: string
      overallScore: number
      finalThoughts: string
      criterionScores: Prisma.JsonValue
      rawAnswers: Prisma.JsonValue
      createdAt: Date
      sectionScores: Prisma.JsonValue | null
    }, ExtArgs["result"]["governmentSurveyResult"]>
    composites: {}
  }

  type GovernmentSurveyResultGetPayload<S extends boolean | null | undefined | GovernmentSurveyResultDefaultArgs> = $Result.GetResult<Prisma.$GovernmentSurveyResultPayload, S>

  type GovernmentSurveyResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GovernmentSurveyResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GovernmentSurveyResultCountAggregateInputType | true
    }

  export interface GovernmentSurveyResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GovernmentSurveyResult'], meta: { name: 'GovernmentSurveyResult' } }
    /**
     * Find zero or one GovernmentSurveyResult that matches the filter.
     * @param {GovernmentSurveyResultFindUniqueArgs} args - Arguments to find a GovernmentSurveyResult
     * @example
     * // Get one GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GovernmentSurveyResultFindUniqueArgs>(args: SelectSubset<T, GovernmentSurveyResultFindUniqueArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GovernmentSurveyResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GovernmentSurveyResultFindUniqueOrThrowArgs} args - Arguments to find a GovernmentSurveyResult
     * @example
     * // Get one GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GovernmentSurveyResultFindUniqueOrThrowArgs>(args: SelectSubset<T, GovernmentSurveyResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentSurveyResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultFindFirstArgs} args - Arguments to find a GovernmentSurveyResult
     * @example
     * // Get one GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GovernmentSurveyResultFindFirstArgs>(args?: SelectSubset<T, GovernmentSurveyResultFindFirstArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentSurveyResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultFindFirstOrThrowArgs} args - Arguments to find a GovernmentSurveyResult
     * @example
     * // Get one GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GovernmentSurveyResultFindFirstOrThrowArgs>(args?: SelectSubset<T, GovernmentSurveyResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GovernmentSurveyResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GovernmentSurveyResults
     * const governmentSurveyResults = await prisma.governmentSurveyResult.findMany()
     * 
     * // Get first 10 GovernmentSurveyResults
     * const governmentSurveyResults = await prisma.governmentSurveyResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const governmentSurveyResultWithIdOnly = await prisma.governmentSurveyResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GovernmentSurveyResultFindManyArgs>(args?: SelectSubset<T, GovernmentSurveyResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GovernmentSurveyResult.
     * @param {GovernmentSurveyResultCreateArgs} args - Arguments to create a GovernmentSurveyResult.
     * @example
     * // Create one GovernmentSurveyResult
     * const GovernmentSurveyResult = await prisma.governmentSurveyResult.create({
     *   data: {
     *     // ... data to create a GovernmentSurveyResult
     *   }
     * })
     * 
     */
    create<T extends GovernmentSurveyResultCreateArgs>(args: SelectSubset<T, GovernmentSurveyResultCreateArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GovernmentSurveyResults.
     * @param {GovernmentSurveyResultCreateManyArgs} args - Arguments to create many GovernmentSurveyResults.
     * @example
     * // Create many GovernmentSurveyResults
     * const governmentSurveyResult = await prisma.governmentSurveyResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GovernmentSurveyResultCreateManyArgs>(args?: SelectSubset<T, GovernmentSurveyResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GovernmentSurveyResults and returns the data saved in the database.
     * @param {GovernmentSurveyResultCreateManyAndReturnArgs} args - Arguments to create many GovernmentSurveyResults.
     * @example
     * // Create many GovernmentSurveyResults
     * const governmentSurveyResult = await prisma.governmentSurveyResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GovernmentSurveyResults and only return the `id`
     * const governmentSurveyResultWithIdOnly = await prisma.governmentSurveyResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GovernmentSurveyResultCreateManyAndReturnArgs>(args?: SelectSubset<T, GovernmentSurveyResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GovernmentSurveyResult.
     * @param {GovernmentSurveyResultDeleteArgs} args - Arguments to delete one GovernmentSurveyResult.
     * @example
     * // Delete one GovernmentSurveyResult
     * const GovernmentSurveyResult = await prisma.governmentSurveyResult.delete({
     *   where: {
     *     // ... filter to delete one GovernmentSurveyResult
     *   }
     * })
     * 
     */
    delete<T extends GovernmentSurveyResultDeleteArgs>(args: SelectSubset<T, GovernmentSurveyResultDeleteArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GovernmentSurveyResult.
     * @param {GovernmentSurveyResultUpdateArgs} args - Arguments to update one GovernmentSurveyResult.
     * @example
     * // Update one GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GovernmentSurveyResultUpdateArgs>(args: SelectSubset<T, GovernmentSurveyResultUpdateArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GovernmentSurveyResults.
     * @param {GovernmentSurveyResultDeleteManyArgs} args - Arguments to filter GovernmentSurveyResults to delete.
     * @example
     * // Delete a few GovernmentSurveyResults
     * const { count } = await prisma.governmentSurveyResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GovernmentSurveyResultDeleteManyArgs>(args?: SelectSubset<T, GovernmentSurveyResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentSurveyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GovernmentSurveyResults
     * const governmentSurveyResult = await prisma.governmentSurveyResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GovernmentSurveyResultUpdateManyArgs>(args: SelectSubset<T, GovernmentSurveyResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentSurveyResults and returns the data updated in the database.
     * @param {GovernmentSurveyResultUpdateManyAndReturnArgs} args - Arguments to update many GovernmentSurveyResults.
     * @example
     * // Update many GovernmentSurveyResults
     * const governmentSurveyResult = await prisma.governmentSurveyResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GovernmentSurveyResults and only return the `id`
     * const governmentSurveyResultWithIdOnly = await prisma.governmentSurveyResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GovernmentSurveyResultUpdateManyAndReturnArgs>(args: SelectSubset<T, GovernmentSurveyResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GovernmentSurveyResult.
     * @param {GovernmentSurveyResultUpsertArgs} args - Arguments to update or create a GovernmentSurveyResult.
     * @example
     * // Update or create a GovernmentSurveyResult
     * const governmentSurveyResult = await prisma.governmentSurveyResult.upsert({
     *   create: {
     *     // ... data to create a GovernmentSurveyResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GovernmentSurveyResult we want to update
     *   }
     * })
     */
    upsert<T extends GovernmentSurveyResultUpsertArgs>(args: SelectSubset<T, GovernmentSurveyResultUpsertArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GovernmentSurveyResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultCountArgs} args - Arguments to filter GovernmentSurveyResults to count.
     * @example
     * // Count the number of GovernmentSurveyResults
     * const count = await prisma.governmentSurveyResult.count({
     *   where: {
     *     // ... the filter for the GovernmentSurveyResults we want to count
     *   }
     * })
    **/
    count<T extends GovernmentSurveyResultCountArgs>(
      args?: Subset<T, GovernmentSurveyResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GovernmentSurveyResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GovernmentSurveyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GovernmentSurveyResultAggregateArgs>(args: Subset<T, GovernmentSurveyResultAggregateArgs>): Prisma.PrismaPromise<GetGovernmentSurveyResultAggregateType<T>>

    /**
     * Group by GovernmentSurveyResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyResultGroupByArgs} args - Group by arguments.
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
      T extends GovernmentSurveyResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GovernmentSurveyResultGroupByArgs['orderBy'] }
        : { orderBy?: GovernmentSurveyResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GovernmentSurveyResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGovernmentSurveyResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GovernmentSurveyResult model
   */
  readonly fields: GovernmentSurveyResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GovernmentSurveyResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GovernmentSurveyResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceScores<T extends GovernmentSurveyResult$serviceScoresArgs<ExtArgs> = {}>(args?: Subset<T, GovernmentSurveyResult$serviceScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GovernmentSurveyResult model
   */
  interface GovernmentSurveyResultFieldRefs {
    readonly id: FieldRef<"GovernmentSurveyResult", 'String'>
    readonly country: FieldRef<"GovernmentSurveyResult", 'String'>
    readonly region: FieldRef<"GovernmentSurveyResult", 'String'>
    readonly department: FieldRef<"GovernmentSurveyResult", 'String'>
    readonly overallScore: FieldRef<"GovernmentSurveyResult", 'Float'>
    readonly finalThoughts: FieldRef<"GovernmentSurveyResult", 'String'>
    readonly criterionScores: FieldRef<"GovernmentSurveyResult", 'Json'>
    readonly rawAnswers: FieldRef<"GovernmentSurveyResult", 'Json'>
    readonly createdAt: FieldRef<"GovernmentSurveyResult", 'DateTime'>
    readonly sectionScores: FieldRef<"GovernmentSurveyResult", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GovernmentSurveyResult findUnique
   */
  export type GovernmentSurveyResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyResult to fetch.
     */
    where: GovernmentSurveyResultWhereUniqueInput
  }

  /**
   * GovernmentSurveyResult findUniqueOrThrow
   */
  export type GovernmentSurveyResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyResult to fetch.
     */
    where: GovernmentSurveyResultWhereUniqueInput
  }

  /**
   * GovernmentSurveyResult findFirst
   */
  export type GovernmentSurveyResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyResult to fetch.
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyResults to fetch.
     */
    orderBy?: GovernmentSurveyResultOrderByWithRelationInput | GovernmentSurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentSurveyResults.
     */
    cursor?: GovernmentSurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentSurveyResults.
     */
    distinct?: GovernmentSurveyResultScalarFieldEnum | GovernmentSurveyResultScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyResult findFirstOrThrow
   */
  export type GovernmentSurveyResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyResult to fetch.
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyResults to fetch.
     */
    orderBy?: GovernmentSurveyResultOrderByWithRelationInput | GovernmentSurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentSurveyResults.
     */
    cursor?: GovernmentSurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentSurveyResults.
     */
    distinct?: GovernmentSurveyResultScalarFieldEnum | GovernmentSurveyResultScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyResult findMany
   */
  export type GovernmentSurveyResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyResults to fetch.
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyResults to fetch.
     */
    orderBy?: GovernmentSurveyResultOrderByWithRelationInput | GovernmentSurveyResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GovernmentSurveyResults.
     */
    cursor?: GovernmentSurveyResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyResults.
     */
    skip?: number
    distinct?: GovernmentSurveyResultScalarFieldEnum | GovernmentSurveyResultScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyResult create
   */
  export type GovernmentSurveyResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * The data needed to create a GovernmentSurveyResult.
     */
    data: XOR<GovernmentSurveyResultCreateInput, GovernmentSurveyResultUncheckedCreateInput>
  }

  /**
   * GovernmentSurveyResult createMany
   */
  export type GovernmentSurveyResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GovernmentSurveyResults.
     */
    data: GovernmentSurveyResultCreateManyInput | GovernmentSurveyResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GovernmentSurveyResult createManyAndReturn
   */
  export type GovernmentSurveyResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * The data used to create many GovernmentSurveyResults.
     */
    data: GovernmentSurveyResultCreateManyInput | GovernmentSurveyResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GovernmentSurveyResult update
   */
  export type GovernmentSurveyResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * The data needed to update a GovernmentSurveyResult.
     */
    data: XOR<GovernmentSurveyResultUpdateInput, GovernmentSurveyResultUncheckedUpdateInput>
    /**
     * Choose, which GovernmentSurveyResult to update.
     */
    where: GovernmentSurveyResultWhereUniqueInput
  }

  /**
   * GovernmentSurveyResult updateMany
   */
  export type GovernmentSurveyResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GovernmentSurveyResults.
     */
    data: XOR<GovernmentSurveyResultUpdateManyMutationInput, GovernmentSurveyResultUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentSurveyResults to update
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * Limit how many GovernmentSurveyResults to update.
     */
    limit?: number
  }

  /**
   * GovernmentSurveyResult updateManyAndReturn
   */
  export type GovernmentSurveyResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * The data used to update GovernmentSurveyResults.
     */
    data: XOR<GovernmentSurveyResultUpdateManyMutationInput, GovernmentSurveyResultUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentSurveyResults to update
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * Limit how many GovernmentSurveyResults to update.
     */
    limit?: number
  }

  /**
   * GovernmentSurveyResult upsert
   */
  export type GovernmentSurveyResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * The filter to search for the GovernmentSurveyResult to update in case it exists.
     */
    where: GovernmentSurveyResultWhereUniqueInput
    /**
     * In case the GovernmentSurveyResult found by the `where` argument doesn't exist, create a new GovernmentSurveyResult with this data.
     */
    create: XOR<GovernmentSurveyResultCreateInput, GovernmentSurveyResultUncheckedCreateInput>
    /**
     * In case the GovernmentSurveyResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GovernmentSurveyResultUpdateInput, GovernmentSurveyResultUncheckedUpdateInput>
  }

  /**
   * GovernmentSurveyResult delete
   */
  export type GovernmentSurveyResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
    /**
     * Filter which GovernmentSurveyResult to delete.
     */
    where: GovernmentSurveyResultWhereUniqueInput
  }

  /**
   * GovernmentSurveyResult deleteMany
   */
  export type GovernmentSurveyResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentSurveyResults to delete
     */
    where?: GovernmentSurveyResultWhereInput
    /**
     * Limit how many GovernmentSurveyResults to delete.
     */
    limit?: number
  }

  /**
   * GovernmentSurveyResult.serviceScores
   */
  export type GovernmentSurveyResult$serviceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    where?: GovernmentSurveyServiceScoreWhereInput
    orderBy?: GovernmentSurveyServiceScoreOrderByWithRelationInput | GovernmentSurveyServiceScoreOrderByWithRelationInput[]
    cursor?: GovernmentSurveyServiceScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GovernmentSurveyServiceScoreScalarFieldEnum | GovernmentSurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyResult without action
   */
  export type GovernmentSurveyResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyResult
     */
    select?: GovernmentSurveyResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyResult
     */
    omit?: GovernmentSurveyResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyResultInclude<ExtArgs> | null
  }


  /**
   * Model GovernmentSurveyServiceScore
   */

  export type AggregateGovernmentSurveyServiceScore = {
    _count: GovernmentSurveyServiceScoreCountAggregateOutputType | null
    _avg: GovernmentSurveyServiceScoreAvgAggregateOutputType | null
    _sum: GovernmentSurveyServiceScoreSumAggregateOutputType | null
    _min: GovernmentSurveyServiceScoreMinAggregateOutputType | null
    _max: GovernmentSurveyServiceScoreMaxAggregateOutputType | null
  }

  export type GovernmentSurveyServiceScoreAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type GovernmentSurveyServiceScoreSumAggregateOutputType = {
    overallScore: number | null
  }

  export type GovernmentSurveyServiceScoreMinAggregateOutputType = {
    id: string | null
    resultId: string | null
    serviceCode: string | null
    overallScore: number | null
    createdAt: Date | null
  }

  export type GovernmentSurveyServiceScoreMaxAggregateOutputType = {
    id: string | null
    resultId: string | null
    serviceCode: string | null
    overallScore: number | null
    createdAt: Date | null
  }

  export type GovernmentSurveyServiceScoreCountAggregateOutputType = {
    id: number
    resultId: number
    serviceCode: number
    overallScore: number
    criterionScores: number
    createdAt: number
    _all: number
  }


  export type GovernmentSurveyServiceScoreAvgAggregateInputType = {
    overallScore?: true
  }

  export type GovernmentSurveyServiceScoreSumAggregateInputType = {
    overallScore?: true
  }

  export type GovernmentSurveyServiceScoreMinAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    createdAt?: true
  }

  export type GovernmentSurveyServiceScoreMaxAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    createdAt?: true
  }

  export type GovernmentSurveyServiceScoreCountAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    criterionScores?: true
    createdAt?: true
    _all?: true
  }

  export type GovernmentSurveyServiceScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentSurveyServiceScore to aggregate.
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyServiceScores to fetch.
     */
    orderBy?: GovernmentSurveyServiceScoreOrderByWithRelationInput | GovernmentSurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GovernmentSurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GovernmentSurveyServiceScores
    **/
    _count?: true | GovernmentSurveyServiceScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GovernmentSurveyServiceScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GovernmentSurveyServiceScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GovernmentSurveyServiceScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GovernmentSurveyServiceScoreMaxAggregateInputType
  }

  export type GetGovernmentSurveyServiceScoreAggregateType<T extends GovernmentSurveyServiceScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateGovernmentSurveyServiceScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGovernmentSurveyServiceScore[P]>
      : GetScalarType<T[P], AggregateGovernmentSurveyServiceScore[P]>
  }




  export type GovernmentSurveyServiceScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GovernmentSurveyServiceScoreWhereInput
    orderBy?: GovernmentSurveyServiceScoreOrderByWithAggregationInput | GovernmentSurveyServiceScoreOrderByWithAggregationInput[]
    by: GovernmentSurveyServiceScoreScalarFieldEnum[] | GovernmentSurveyServiceScoreScalarFieldEnum
    having?: GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GovernmentSurveyServiceScoreCountAggregateInputType | true
    _avg?: GovernmentSurveyServiceScoreAvgAggregateInputType
    _sum?: GovernmentSurveyServiceScoreSumAggregateInputType
    _min?: GovernmentSurveyServiceScoreMinAggregateInputType
    _max?: GovernmentSurveyServiceScoreMaxAggregateInputType
  }

  export type GovernmentSurveyServiceScoreGroupByOutputType = {
    id: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonValue
    createdAt: Date
    _count: GovernmentSurveyServiceScoreCountAggregateOutputType | null
    _avg: GovernmentSurveyServiceScoreAvgAggregateOutputType | null
    _sum: GovernmentSurveyServiceScoreSumAggregateOutputType | null
    _min: GovernmentSurveyServiceScoreMinAggregateOutputType | null
    _max: GovernmentSurveyServiceScoreMaxAggregateOutputType | null
  }

  type GetGovernmentSurveyServiceScoreGroupByPayload<T extends GovernmentSurveyServiceScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GovernmentSurveyServiceScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GovernmentSurveyServiceScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GovernmentSurveyServiceScoreGroupByOutputType[P]>
            : GetScalarType<T[P], GovernmentSurveyServiceScoreGroupByOutputType[P]>
        }
      >
    >


  export type GovernmentSurveyServiceScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentSurveyServiceScore"]>

  export type GovernmentSurveyServiceScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentSurveyServiceScore"]>

  export type GovernmentSurveyServiceScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentSurveyServiceScore"]>

  export type GovernmentSurveyServiceScoreSelectScalar = {
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
  }

  export type GovernmentSurveyServiceScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resultId" | "serviceCode" | "overallScore" | "criterionScores" | "createdAt", ExtArgs["result"]["governmentSurveyServiceScore"]>
  export type GovernmentSurveyServiceScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }
  export type GovernmentSurveyServiceScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }
  export type GovernmentSurveyServiceScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | GovernmentSurveyResultDefaultArgs<ExtArgs>
  }

  export type $GovernmentSurveyServiceScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GovernmentSurveyServiceScore"
    objects: {
      result: Prisma.$GovernmentSurveyResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resultId: string
      serviceCode: string
      overallScore: number
      criterionScores: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["governmentSurveyServiceScore"]>
    composites: {}
  }

  type GovernmentSurveyServiceScoreGetPayload<S extends boolean | null | undefined | GovernmentSurveyServiceScoreDefaultArgs> = $Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload, S>

  type GovernmentSurveyServiceScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GovernmentSurveyServiceScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GovernmentSurveyServiceScoreCountAggregateInputType | true
    }

  export interface GovernmentSurveyServiceScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GovernmentSurveyServiceScore'], meta: { name: 'GovernmentSurveyServiceScore' } }
    /**
     * Find zero or one GovernmentSurveyServiceScore that matches the filter.
     * @param {GovernmentSurveyServiceScoreFindUniqueArgs} args - Arguments to find a GovernmentSurveyServiceScore
     * @example
     * // Get one GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GovernmentSurveyServiceScoreFindUniqueArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreFindUniqueArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GovernmentSurveyServiceScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GovernmentSurveyServiceScoreFindUniqueOrThrowArgs} args - Arguments to find a GovernmentSurveyServiceScore
     * @example
     * // Get one GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GovernmentSurveyServiceScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentSurveyServiceScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreFindFirstArgs} args - Arguments to find a GovernmentSurveyServiceScore
     * @example
     * // Get one GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GovernmentSurveyServiceScoreFindFirstArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreFindFirstArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentSurveyServiceScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreFindFirstOrThrowArgs} args - Arguments to find a GovernmentSurveyServiceScore
     * @example
     * // Get one GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GovernmentSurveyServiceScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GovernmentSurveyServiceScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GovernmentSurveyServiceScores
     * const governmentSurveyServiceScores = await prisma.governmentSurveyServiceScore.findMany()
     * 
     * // Get first 10 GovernmentSurveyServiceScores
     * const governmentSurveyServiceScores = await prisma.governmentSurveyServiceScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const governmentSurveyServiceScoreWithIdOnly = await prisma.governmentSurveyServiceScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GovernmentSurveyServiceScoreFindManyArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GovernmentSurveyServiceScore.
     * @param {GovernmentSurveyServiceScoreCreateArgs} args - Arguments to create a GovernmentSurveyServiceScore.
     * @example
     * // Create one GovernmentSurveyServiceScore
     * const GovernmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.create({
     *   data: {
     *     // ... data to create a GovernmentSurveyServiceScore
     *   }
     * })
     * 
     */
    create<T extends GovernmentSurveyServiceScoreCreateArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreCreateArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GovernmentSurveyServiceScores.
     * @param {GovernmentSurveyServiceScoreCreateManyArgs} args - Arguments to create many GovernmentSurveyServiceScores.
     * @example
     * // Create many GovernmentSurveyServiceScores
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GovernmentSurveyServiceScoreCreateManyArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GovernmentSurveyServiceScores and returns the data saved in the database.
     * @param {GovernmentSurveyServiceScoreCreateManyAndReturnArgs} args - Arguments to create many GovernmentSurveyServiceScores.
     * @example
     * // Create many GovernmentSurveyServiceScores
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GovernmentSurveyServiceScores and only return the `id`
     * const governmentSurveyServiceScoreWithIdOnly = await prisma.governmentSurveyServiceScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GovernmentSurveyServiceScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GovernmentSurveyServiceScore.
     * @param {GovernmentSurveyServiceScoreDeleteArgs} args - Arguments to delete one GovernmentSurveyServiceScore.
     * @example
     * // Delete one GovernmentSurveyServiceScore
     * const GovernmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.delete({
     *   where: {
     *     // ... filter to delete one GovernmentSurveyServiceScore
     *   }
     * })
     * 
     */
    delete<T extends GovernmentSurveyServiceScoreDeleteArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreDeleteArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GovernmentSurveyServiceScore.
     * @param {GovernmentSurveyServiceScoreUpdateArgs} args - Arguments to update one GovernmentSurveyServiceScore.
     * @example
     * // Update one GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GovernmentSurveyServiceScoreUpdateArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreUpdateArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GovernmentSurveyServiceScores.
     * @param {GovernmentSurveyServiceScoreDeleteManyArgs} args - Arguments to filter GovernmentSurveyServiceScores to delete.
     * @example
     * // Delete a few GovernmentSurveyServiceScores
     * const { count } = await prisma.governmentSurveyServiceScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GovernmentSurveyServiceScoreDeleteManyArgs>(args?: SelectSubset<T, GovernmentSurveyServiceScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentSurveyServiceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GovernmentSurveyServiceScores
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GovernmentSurveyServiceScoreUpdateManyArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentSurveyServiceScores and returns the data updated in the database.
     * @param {GovernmentSurveyServiceScoreUpdateManyAndReturnArgs} args - Arguments to update many GovernmentSurveyServiceScores.
     * @example
     * // Update many GovernmentSurveyServiceScores
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GovernmentSurveyServiceScores and only return the `id`
     * const governmentSurveyServiceScoreWithIdOnly = await prisma.governmentSurveyServiceScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GovernmentSurveyServiceScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GovernmentSurveyServiceScore.
     * @param {GovernmentSurveyServiceScoreUpsertArgs} args - Arguments to update or create a GovernmentSurveyServiceScore.
     * @example
     * // Update or create a GovernmentSurveyServiceScore
     * const governmentSurveyServiceScore = await prisma.governmentSurveyServiceScore.upsert({
     *   create: {
     *     // ... data to create a GovernmentSurveyServiceScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GovernmentSurveyServiceScore we want to update
     *   }
     * })
     */
    upsert<T extends GovernmentSurveyServiceScoreUpsertArgs>(args: SelectSubset<T, GovernmentSurveyServiceScoreUpsertArgs<ExtArgs>>): Prisma__GovernmentSurveyServiceScoreClient<$Result.GetResult<Prisma.$GovernmentSurveyServiceScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GovernmentSurveyServiceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreCountArgs} args - Arguments to filter GovernmentSurveyServiceScores to count.
     * @example
     * // Count the number of GovernmentSurveyServiceScores
     * const count = await prisma.governmentSurveyServiceScore.count({
     *   where: {
     *     // ... the filter for the GovernmentSurveyServiceScores we want to count
     *   }
     * })
    **/
    count<T extends GovernmentSurveyServiceScoreCountArgs>(
      args?: Subset<T, GovernmentSurveyServiceScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GovernmentSurveyServiceScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GovernmentSurveyServiceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GovernmentSurveyServiceScoreAggregateArgs>(args: Subset<T, GovernmentSurveyServiceScoreAggregateArgs>): Prisma.PrismaPromise<GetGovernmentSurveyServiceScoreAggregateType<T>>

    /**
     * Group by GovernmentSurveyServiceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentSurveyServiceScoreGroupByArgs} args - Group by arguments.
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
      T extends GovernmentSurveyServiceScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GovernmentSurveyServiceScoreGroupByArgs['orderBy'] }
        : { orderBy?: GovernmentSurveyServiceScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GovernmentSurveyServiceScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGovernmentSurveyServiceScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GovernmentSurveyServiceScore model
   */
  readonly fields: GovernmentSurveyServiceScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GovernmentSurveyServiceScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GovernmentSurveyServiceScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends GovernmentSurveyResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GovernmentSurveyResultDefaultArgs<ExtArgs>>): Prisma__GovernmentSurveyResultClient<$Result.GetResult<Prisma.$GovernmentSurveyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GovernmentSurveyServiceScore model
   */
  interface GovernmentSurveyServiceScoreFieldRefs {
    readonly id: FieldRef<"GovernmentSurveyServiceScore", 'String'>
    readonly resultId: FieldRef<"GovernmentSurveyServiceScore", 'String'>
    readonly serviceCode: FieldRef<"GovernmentSurveyServiceScore", 'String'>
    readonly overallScore: FieldRef<"GovernmentSurveyServiceScore", 'Float'>
    readonly criterionScores: FieldRef<"GovernmentSurveyServiceScore", 'Json'>
    readonly createdAt: FieldRef<"GovernmentSurveyServiceScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GovernmentSurveyServiceScore findUnique
   */
  export type GovernmentSurveyServiceScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyServiceScore to fetch.
     */
    where: GovernmentSurveyServiceScoreWhereUniqueInput
  }

  /**
   * GovernmentSurveyServiceScore findUniqueOrThrow
   */
  export type GovernmentSurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyServiceScore to fetch.
     */
    where: GovernmentSurveyServiceScoreWhereUniqueInput
  }

  /**
   * GovernmentSurveyServiceScore findFirst
   */
  export type GovernmentSurveyServiceScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyServiceScore to fetch.
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyServiceScores to fetch.
     */
    orderBy?: GovernmentSurveyServiceScoreOrderByWithRelationInput | GovernmentSurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentSurveyServiceScores.
     */
    cursor?: GovernmentSurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentSurveyServiceScores.
     */
    distinct?: GovernmentSurveyServiceScoreScalarFieldEnum | GovernmentSurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyServiceScore findFirstOrThrow
   */
  export type GovernmentSurveyServiceScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyServiceScore to fetch.
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyServiceScores to fetch.
     */
    orderBy?: GovernmentSurveyServiceScoreOrderByWithRelationInput | GovernmentSurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentSurveyServiceScores.
     */
    cursor?: GovernmentSurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentSurveyServiceScores.
     */
    distinct?: GovernmentSurveyServiceScoreScalarFieldEnum | GovernmentSurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyServiceScore findMany
   */
  export type GovernmentSurveyServiceScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentSurveyServiceScores to fetch.
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentSurveyServiceScores to fetch.
     */
    orderBy?: GovernmentSurveyServiceScoreOrderByWithRelationInput | GovernmentSurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GovernmentSurveyServiceScores.
     */
    cursor?: GovernmentSurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentSurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentSurveyServiceScores.
     */
    skip?: number
    distinct?: GovernmentSurveyServiceScoreScalarFieldEnum | GovernmentSurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * GovernmentSurveyServiceScore create
   */
  export type GovernmentSurveyServiceScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a GovernmentSurveyServiceScore.
     */
    data: XOR<GovernmentSurveyServiceScoreCreateInput, GovernmentSurveyServiceScoreUncheckedCreateInput>
  }

  /**
   * GovernmentSurveyServiceScore createMany
   */
  export type GovernmentSurveyServiceScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GovernmentSurveyServiceScores.
     */
    data: GovernmentSurveyServiceScoreCreateManyInput | GovernmentSurveyServiceScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GovernmentSurveyServiceScore createManyAndReturn
   */
  export type GovernmentSurveyServiceScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * The data used to create many GovernmentSurveyServiceScores.
     */
    data: GovernmentSurveyServiceScoreCreateManyInput | GovernmentSurveyServiceScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GovernmentSurveyServiceScore update
   */
  export type GovernmentSurveyServiceScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a GovernmentSurveyServiceScore.
     */
    data: XOR<GovernmentSurveyServiceScoreUpdateInput, GovernmentSurveyServiceScoreUncheckedUpdateInput>
    /**
     * Choose, which GovernmentSurveyServiceScore to update.
     */
    where: GovernmentSurveyServiceScoreWhereUniqueInput
  }

  /**
   * GovernmentSurveyServiceScore updateMany
   */
  export type GovernmentSurveyServiceScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GovernmentSurveyServiceScores.
     */
    data: XOR<GovernmentSurveyServiceScoreUpdateManyMutationInput, GovernmentSurveyServiceScoreUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentSurveyServiceScores to update
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * Limit how many GovernmentSurveyServiceScores to update.
     */
    limit?: number
  }

  /**
   * GovernmentSurveyServiceScore updateManyAndReturn
   */
  export type GovernmentSurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * The data used to update GovernmentSurveyServiceScores.
     */
    data: XOR<GovernmentSurveyServiceScoreUpdateManyMutationInput, GovernmentSurveyServiceScoreUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentSurveyServiceScores to update
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * Limit how many GovernmentSurveyServiceScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GovernmentSurveyServiceScore upsert
   */
  export type GovernmentSurveyServiceScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the GovernmentSurveyServiceScore to update in case it exists.
     */
    where: GovernmentSurveyServiceScoreWhereUniqueInput
    /**
     * In case the GovernmentSurveyServiceScore found by the `where` argument doesn't exist, create a new GovernmentSurveyServiceScore with this data.
     */
    create: XOR<GovernmentSurveyServiceScoreCreateInput, GovernmentSurveyServiceScoreUncheckedCreateInput>
    /**
     * In case the GovernmentSurveyServiceScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GovernmentSurveyServiceScoreUpdateInput, GovernmentSurveyServiceScoreUncheckedUpdateInput>
  }

  /**
   * GovernmentSurveyServiceScore delete
   */
  export type GovernmentSurveyServiceScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter which GovernmentSurveyServiceScore to delete.
     */
    where: GovernmentSurveyServiceScoreWhereUniqueInput
  }

  /**
   * GovernmentSurveyServiceScore deleteMany
   */
  export type GovernmentSurveyServiceScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentSurveyServiceScores to delete
     */
    where?: GovernmentSurveyServiceScoreWhereInput
    /**
     * Limit how many GovernmentSurveyServiceScores to delete.
     */
    limit?: number
  }

  /**
   * GovernmentSurveyServiceScore without action
   */
  export type GovernmentSurveyServiceScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentSurveyServiceScore
     */
    select?: GovernmentSurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentSurveyServiceScore
     */
    omit?: GovernmentSurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentSurveyServiceScoreInclude<ExtArgs> | null
  }


  /**
   * Model DigitalMaturitySurveyServiceScore
   */

  export type AggregateDigitalMaturitySurveyServiceScore = {
    _count: DigitalMaturitySurveyServiceScoreCountAggregateOutputType | null
    _avg: DigitalMaturitySurveyServiceScoreAvgAggregateOutputType | null
    _sum: DigitalMaturitySurveyServiceScoreSumAggregateOutputType | null
    _min: DigitalMaturitySurveyServiceScoreMinAggregateOutputType | null
    _max: DigitalMaturitySurveyServiceScoreMaxAggregateOutputType | null
  }

  export type DigitalMaturitySurveyServiceScoreAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type DigitalMaturitySurveyServiceScoreSumAggregateOutputType = {
    overallScore: number | null
  }

  export type DigitalMaturitySurveyServiceScoreMinAggregateOutputType = {
    id: string | null
    resultId: string | null
    serviceCode: string | null
    overallScore: number | null
    createdAt: Date | null
  }

  export type DigitalMaturitySurveyServiceScoreMaxAggregateOutputType = {
    id: string | null
    resultId: string | null
    serviceCode: string | null
    overallScore: number | null
    createdAt: Date | null
  }

  export type DigitalMaturitySurveyServiceScoreCountAggregateOutputType = {
    id: number
    resultId: number
    serviceCode: number
    overallScore: number
    criterionScores: number
    createdAt: number
    _all: number
  }


  export type DigitalMaturitySurveyServiceScoreAvgAggregateInputType = {
    overallScore?: true
  }

  export type DigitalMaturitySurveyServiceScoreSumAggregateInputType = {
    overallScore?: true
  }

  export type DigitalMaturitySurveyServiceScoreMinAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    createdAt?: true
  }

  export type DigitalMaturitySurveyServiceScoreMaxAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    createdAt?: true
  }

  export type DigitalMaturitySurveyServiceScoreCountAggregateInputType = {
    id?: true
    resultId?: true
    serviceCode?: true
    overallScore?: true
    criterionScores?: true
    createdAt?: true
    _all?: true
  }

  export type DigitalMaturitySurveyServiceScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalMaturitySurveyServiceScore to aggregate.
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyServiceScores to fetch.
     */
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithRelationInput | DigitalMaturitySurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalMaturitySurveyServiceScores
    **/
    _count?: true | DigitalMaturitySurveyServiceScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DigitalMaturitySurveyServiceScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DigitalMaturitySurveyServiceScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalMaturitySurveyServiceScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalMaturitySurveyServiceScoreMaxAggregateInputType
  }

  export type GetDigitalMaturitySurveyServiceScoreAggregateType<T extends DigitalMaturitySurveyServiceScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalMaturitySurveyServiceScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalMaturitySurveyServiceScore[P]>
      : GetScalarType<T[P], AggregateDigitalMaturitySurveyServiceScore[P]>
  }




  export type DigitalMaturitySurveyServiceScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithAggregationInput | DigitalMaturitySurveyServiceScoreOrderByWithAggregationInput[]
    by: DigitalMaturitySurveyServiceScoreScalarFieldEnum[] | DigitalMaturitySurveyServiceScoreScalarFieldEnum
    having?: DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalMaturitySurveyServiceScoreCountAggregateInputType | true
    _avg?: DigitalMaturitySurveyServiceScoreAvgAggregateInputType
    _sum?: DigitalMaturitySurveyServiceScoreSumAggregateInputType
    _min?: DigitalMaturitySurveyServiceScoreMinAggregateInputType
    _max?: DigitalMaturitySurveyServiceScoreMaxAggregateInputType
  }

  export type DigitalMaturitySurveyServiceScoreGroupByOutputType = {
    id: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonValue
    createdAt: Date
    _count: DigitalMaturitySurveyServiceScoreCountAggregateOutputType | null
    _avg: DigitalMaturitySurveyServiceScoreAvgAggregateOutputType | null
    _sum: DigitalMaturitySurveyServiceScoreSumAggregateOutputType | null
    _min: DigitalMaturitySurveyServiceScoreMinAggregateOutputType | null
    _max: DigitalMaturitySurveyServiceScoreMaxAggregateOutputType | null
  }

  type GetDigitalMaturitySurveyServiceScoreGroupByPayload<T extends DigitalMaturitySurveyServiceScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalMaturitySurveyServiceScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalMaturitySurveyServiceScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalMaturitySurveyServiceScoreGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalMaturitySurveyServiceScoreGroupByOutputType[P]>
        }
      >
    >


  export type DigitalMaturitySurveyServiceScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalMaturitySurveyServiceScore"]>

  export type DigitalMaturitySurveyServiceScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalMaturitySurveyServiceScore"]>

  export type DigitalMaturitySurveyServiceScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalMaturitySurveyServiceScore"]>

  export type DigitalMaturitySurveyServiceScoreSelectScalar = {
    id?: boolean
    resultId?: boolean
    serviceCode?: boolean
    overallScore?: boolean
    criterionScores?: boolean
    createdAt?: boolean
  }

  export type DigitalMaturitySurveyServiceScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resultId" | "serviceCode" | "overallScore" | "criterionScores" | "createdAt", ExtArgs["result"]["digitalMaturitySurveyServiceScore"]>
  export type DigitalMaturitySurveyServiceScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }
  export type DigitalMaturitySurveyServiceScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }
  export type DigitalMaturitySurveyServiceScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | DigitalMaturitySurveyResultDefaultArgs<ExtArgs>
  }

  export type $DigitalMaturitySurveyServiceScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DigitalMaturitySurveyServiceScore"
    objects: {
      result: Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resultId: string
      serviceCode: string
      overallScore: number
      criterionScores: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["digitalMaturitySurveyServiceScore"]>
    composites: {}
  }

  type DigitalMaturitySurveyServiceScoreGetPayload<S extends boolean | null | undefined | DigitalMaturitySurveyServiceScoreDefaultArgs> = $Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload, S>

  type DigitalMaturitySurveyServiceScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DigitalMaturitySurveyServiceScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DigitalMaturitySurveyServiceScoreCountAggregateInputType | true
    }

  export interface DigitalMaturitySurveyServiceScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalMaturitySurveyServiceScore'], meta: { name: 'DigitalMaturitySurveyServiceScore' } }
    /**
     * Find zero or one DigitalMaturitySurveyServiceScore that matches the filter.
     * @param {DigitalMaturitySurveyServiceScoreFindUniqueArgs} args - Arguments to find a DigitalMaturitySurveyServiceScore
     * @example
     * // Get one DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DigitalMaturitySurveyServiceScoreFindUniqueArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreFindUniqueArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DigitalMaturitySurveyServiceScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DigitalMaturitySurveyServiceScoreFindUniqueOrThrowArgs} args - Arguments to find a DigitalMaturitySurveyServiceScore
     * @example
     * // Get one DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DigitalMaturitySurveyServiceScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalMaturitySurveyServiceScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreFindFirstArgs} args - Arguments to find a DigitalMaturitySurveyServiceScore
     * @example
     * // Get one DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DigitalMaturitySurveyServiceScoreFindFirstArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreFindFirstArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalMaturitySurveyServiceScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreFindFirstOrThrowArgs} args - Arguments to find a DigitalMaturitySurveyServiceScore
     * @example
     * // Get one DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DigitalMaturitySurveyServiceScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DigitalMaturitySurveyServiceScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScores = await prisma.digitalMaturitySurveyServiceScore.findMany()
     * 
     * // Get first 10 DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScores = await prisma.digitalMaturitySurveyServiceScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const digitalMaturitySurveyServiceScoreWithIdOnly = await prisma.digitalMaturitySurveyServiceScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DigitalMaturitySurveyServiceScoreFindManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DigitalMaturitySurveyServiceScore.
     * @param {DigitalMaturitySurveyServiceScoreCreateArgs} args - Arguments to create a DigitalMaturitySurveyServiceScore.
     * @example
     * // Create one DigitalMaturitySurveyServiceScore
     * const DigitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.create({
     *   data: {
     *     // ... data to create a DigitalMaturitySurveyServiceScore
     *   }
     * })
     * 
     */
    create<T extends DigitalMaturitySurveyServiceScoreCreateArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreCreateArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DigitalMaturitySurveyServiceScores.
     * @param {DigitalMaturitySurveyServiceScoreCreateManyArgs} args - Arguments to create many DigitalMaturitySurveyServiceScores.
     * @example
     * // Create many DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DigitalMaturitySurveyServiceScoreCreateManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DigitalMaturitySurveyServiceScores and returns the data saved in the database.
     * @param {DigitalMaturitySurveyServiceScoreCreateManyAndReturnArgs} args - Arguments to create many DigitalMaturitySurveyServiceScores.
     * @example
     * // Create many DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DigitalMaturitySurveyServiceScores and only return the `id`
     * const digitalMaturitySurveyServiceScoreWithIdOnly = await prisma.digitalMaturitySurveyServiceScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DigitalMaturitySurveyServiceScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DigitalMaturitySurveyServiceScore.
     * @param {DigitalMaturitySurveyServiceScoreDeleteArgs} args - Arguments to delete one DigitalMaturitySurveyServiceScore.
     * @example
     * // Delete one DigitalMaturitySurveyServiceScore
     * const DigitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.delete({
     *   where: {
     *     // ... filter to delete one DigitalMaturitySurveyServiceScore
     *   }
     * })
     * 
     */
    delete<T extends DigitalMaturitySurveyServiceScoreDeleteArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreDeleteArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DigitalMaturitySurveyServiceScore.
     * @param {DigitalMaturitySurveyServiceScoreUpdateArgs} args - Arguments to update one DigitalMaturitySurveyServiceScore.
     * @example
     * // Update one DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DigitalMaturitySurveyServiceScoreUpdateArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreUpdateArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DigitalMaturitySurveyServiceScores.
     * @param {DigitalMaturitySurveyServiceScoreDeleteManyArgs} args - Arguments to filter DigitalMaturitySurveyServiceScores to delete.
     * @example
     * // Delete a few DigitalMaturitySurveyServiceScores
     * const { count } = await prisma.digitalMaturitySurveyServiceScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DigitalMaturitySurveyServiceScoreDeleteManyArgs>(args?: SelectSubset<T, DigitalMaturitySurveyServiceScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalMaturitySurveyServiceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DigitalMaturitySurveyServiceScoreUpdateManyArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalMaturitySurveyServiceScores and returns the data updated in the database.
     * @param {DigitalMaturitySurveyServiceScoreUpdateManyAndReturnArgs} args - Arguments to update many DigitalMaturitySurveyServiceScores.
     * @example
     * // Update many DigitalMaturitySurveyServiceScores
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DigitalMaturitySurveyServiceScores and only return the `id`
     * const digitalMaturitySurveyServiceScoreWithIdOnly = await prisma.digitalMaturitySurveyServiceScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DigitalMaturitySurveyServiceScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DigitalMaturitySurveyServiceScore.
     * @param {DigitalMaturitySurveyServiceScoreUpsertArgs} args - Arguments to update or create a DigitalMaturitySurveyServiceScore.
     * @example
     * // Update or create a DigitalMaturitySurveyServiceScore
     * const digitalMaturitySurveyServiceScore = await prisma.digitalMaturitySurveyServiceScore.upsert({
     *   create: {
     *     // ... data to create a DigitalMaturitySurveyServiceScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalMaturitySurveyServiceScore we want to update
     *   }
     * })
     */
    upsert<T extends DigitalMaturitySurveyServiceScoreUpsertArgs>(args: SelectSubset<T, DigitalMaturitySurveyServiceScoreUpsertArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyServiceScoreClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyServiceScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DigitalMaturitySurveyServiceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreCountArgs} args - Arguments to filter DigitalMaturitySurveyServiceScores to count.
     * @example
     * // Count the number of DigitalMaturitySurveyServiceScores
     * const count = await prisma.digitalMaturitySurveyServiceScore.count({
     *   where: {
     *     // ... the filter for the DigitalMaturitySurveyServiceScores we want to count
     *   }
     * })
    **/
    count<T extends DigitalMaturitySurveyServiceScoreCountArgs>(
      args?: Subset<T, DigitalMaturitySurveyServiceScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalMaturitySurveyServiceScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalMaturitySurveyServiceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalMaturitySurveyServiceScoreAggregateArgs>(args: Subset<T, DigitalMaturitySurveyServiceScoreAggregateArgs>): Prisma.PrismaPromise<GetDigitalMaturitySurveyServiceScoreAggregateType<T>>

    /**
     * Group by DigitalMaturitySurveyServiceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalMaturitySurveyServiceScoreGroupByArgs} args - Group by arguments.
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
      T extends DigitalMaturitySurveyServiceScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalMaturitySurveyServiceScoreGroupByArgs['orderBy'] }
        : { orderBy?: DigitalMaturitySurveyServiceScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalMaturitySurveyServiceScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalMaturitySurveyServiceScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalMaturitySurveyServiceScore model
   */
  readonly fields: DigitalMaturitySurveyServiceScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalMaturitySurveyServiceScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalMaturitySurveyServiceScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends DigitalMaturitySurveyResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DigitalMaturitySurveyResultDefaultArgs<ExtArgs>>): Prisma__DigitalMaturitySurveyResultClient<$Result.GetResult<Prisma.$DigitalMaturitySurveyResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DigitalMaturitySurveyServiceScore model
   */
  interface DigitalMaturitySurveyServiceScoreFieldRefs {
    readonly id: FieldRef<"DigitalMaturitySurveyServiceScore", 'String'>
    readonly resultId: FieldRef<"DigitalMaturitySurveyServiceScore", 'String'>
    readonly serviceCode: FieldRef<"DigitalMaturitySurveyServiceScore", 'String'>
    readonly overallScore: FieldRef<"DigitalMaturitySurveyServiceScore", 'Float'>
    readonly criterionScores: FieldRef<"DigitalMaturitySurveyServiceScore", 'Json'>
    readonly createdAt: FieldRef<"DigitalMaturitySurveyServiceScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DigitalMaturitySurveyServiceScore findUnique
   */
  export type DigitalMaturitySurveyServiceScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyServiceScore to fetch.
     */
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyServiceScore findUniqueOrThrow
   */
  export type DigitalMaturitySurveyServiceScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyServiceScore to fetch.
     */
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyServiceScore findFirst
   */
  export type DigitalMaturitySurveyServiceScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyServiceScore to fetch.
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyServiceScores to fetch.
     */
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithRelationInput | DigitalMaturitySurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalMaturitySurveyServiceScores.
     */
    cursor?: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalMaturitySurveyServiceScores.
     */
    distinct?: DigitalMaturitySurveyServiceScoreScalarFieldEnum | DigitalMaturitySurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyServiceScore findFirstOrThrow
   */
  export type DigitalMaturitySurveyServiceScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyServiceScore to fetch.
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyServiceScores to fetch.
     */
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithRelationInput | DigitalMaturitySurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalMaturitySurveyServiceScores.
     */
    cursor?: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyServiceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalMaturitySurveyServiceScores.
     */
    distinct?: DigitalMaturitySurveyServiceScoreScalarFieldEnum | DigitalMaturitySurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyServiceScore findMany
   */
  export type DigitalMaturitySurveyServiceScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter, which DigitalMaturitySurveyServiceScores to fetch.
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalMaturitySurveyServiceScores to fetch.
     */
    orderBy?: DigitalMaturitySurveyServiceScoreOrderByWithRelationInput | DigitalMaturitySurveyServiceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalMaturitySurveyServiceScores.
     */
    cursor?: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalMaturitySurveyServiceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalMaturitySurveyServiceScores.
     */
    skip?: number
    distinct?: DigitalMaturitySurveyServiceScoreScalarFieldEnum | DigitalMaturitySurveyServiceScoreScalarFieldEnum[]
  }

  /**
   * DigitalMaturitySurveyServiceScore create
   */
  export type DigitalMaturitySurveyServiceScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a DigitalMaturitySurveyServiceScore.
     */
    data: XOR<DigitalMaturitySurveyServiceScoreCreateInput, DigitalMaturitySurveyServiceScoreUncheckedCreateInput>
  }

  /**
   * DigitalMaturitySurveyServiceScore createMany
   */
  export type DigitalMaturitySurveyServiceScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalMaturitySurveyServiceScores.
     */
    data: DigitalMaturitySurveyServiceScoreCreateManyInput | DigitalMaturitySurveyServiceScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalMaturitySurveyServiceScore createManyAndReturn
   */
  export type DigitalMaturitySurveyServiceScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * The data used to create many DigitalMaturitySurveyServiceScores.
     */
    data: DigitalMaturitySurveyServiceScoreCreateManyInput | DigitalMaturitySurveyServiceScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DigitalMaturitySurveyServiceScore update
   */
  export type DigitalMaturitySurveyServiceScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a DigitalMaturitySurveyServiceScore.
     */
    data: XOR<DigitalMaturitySurveyServiceScoreUpdateInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateInput>
    /**
     * Choose, which DigitalMaturitySurveyServiceScore to update.
     */
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyServiceScore updateMany
   */
  export type DigitalMaturitySurveyServiceScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalMaturitySurveyServiceScores.
     */
    data: XOR<DigitalMaturitySurveyServiceScoreUpdateManyMutationInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateManyInput>
    /**
     * Filter which DigitalMaturitySurveyServiceScores to update
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * Limit how many DigitalMaturitySurveyServiceScores to update.
     */
    limit?: number
  }

  /**
   * DigitalMaturitySurveyServiceScore updateManyAndReturn
   */
  export type DigitalMaturitySurveyServiceScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * The data used to update DigitalMaturitySurveyServiceScores.
     */
    data: XOR<DigitalMaturitySurveyServiceScoreUpdateManyMutationInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateManyInput>
    /**
     * Filter which DigitalMaturitySurveyServiceScores to update
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * Limit how many DigitalMaturitySurveyServiceScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DigitalMaturitySurveyServiceScore upsert
   */
  export type DigitalMaturitySurveyServiceScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the DigitalMaturitySurveyServiceScore to update in case it exists.
     */
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    /**
     * In case the DigitalMaturitySurveyServiceScore found by the `where` argument doesn't exist, create a new DigitalMaturitySurveyServiceScore with this data.
     */
    create: XOR<DigitalMaturitySurveyServiceScoreCreateInput, DigitalMaturitySurveyServiceScoreUncheckedCreateInput>
    /**
     * In case the DigitalMaturitySurveyServiceScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalMaturitySurveyServiceScoreUpdateInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateInput>
  }

  /**
   * DigitalMaturitySurveyServiceScore delete
   */
  export type DigitalMaturitySurveyServiceScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
    /**
     * Filter which DigitalMaturitySurveyServiceScore to delete.
     */
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
  }

  /**
   * DigitalMaturitySurveyServiceScore deleteMany
   */
  export type DigitalMaturitySurveyServiceScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalMaturitySurveyServiceScores to delete
     */
    where?: DigitalMaturitySurveyServiceScoreWhereInput
    /**
     * Limit how many DigitalMaturitySurveyServiceScores to delete.
     */
    limit?: number
  }

  /**
   * DigitalMaturitySurveyServiceScore without action
   */
  export type DigitalMaturitySurveyServiceScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalMaturitySurveyServiceScore
     */
    select?: DigitalMaturitySurveyServiceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalMaturitySurveyServiceScore
     */
    omit?: DigitalMaturitySurveyServiceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalMaturitySurveyServiceScoreInclude<ExtArgs> | null
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


  export const DigitalMaturitySurveyResultScalarFieldEnum: {
    id: 'id',
    country: 'country',
    region: 'region',
    sector: 'sector',
    overallScore: 'overallScore',
    finalThoughts: 'finalThoughts',
    criterionScores: 'criterionScores',
    rawAnswers: 'rawAnswers',
    createdAt: 'createdAt'
  };

  export type DigitalMaturitySurveyResultScalarFieldEnum = (typeof DigitalMaturitySurveyResultScalarFieldEnum)[keyof typeof DigitalMaturitySurveyResultScalarFieldEnum]


  export const GovernmentSurveyResultScalarFieldEnum: {
    id: 'id',
    country: 'country',
    region: 'region',
    department: 'department',
    overallScore: 'overallScore',
    finalThoughts: 'finalThoughts',
    criterionScores: 'criterionScores',
    rawAnswers: 'rawAnswers',
    createdAt: 'createdAt',
    sectionScores: 'sectionScores'
  };

  export type GovernmentSurveyResultScalarFieldEnum = (typeof GovernmentSurveyResultScalarFieldEnum)[keyof typeof GovernmentSurveyResultScalarFieldEnum]


  export const GovernmentSurveyServiceScoreScalarFieldEnum: {
    id: 'id',
    resultId: 'resultId',
    serviceCode: 'serviceCode',
    overallScore: 'overallScore',
    criterionScores: 'criterionScores',
    createdAt: 'createdAt'
  };

  export type GovernmentSurveyServiceScoreScalarFieldEnum = (typeof GovernmentSurveyServiceScoreScalarFieldEnum)[keyof typeof GovernmentSurveyServiceScoreScalarFieldEnum]


  export const DigitalMaturitySurveyServiceScoreScalarFieldEnum: {
    id: 'id',
    resultId: 'resultId',
    serviceCode: 'serviceCode',
    overallScore: 'overallScore',
    criterionScores: 'criterionScores',
    createdAt: 'createdAt'
  };

  export type DigitalMaturitySurveyServiceScoreScalarFieldEnum = (typeof DigitalMaturitySurveyServiceScoreScalarFieldEnum)[keyof typeof DigitalMaturitySurveyServiceScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DigitalMaturitySurveyResultWhereInput = {
    AND?: DigitalMaturitySurveyResultWhereInput | DigitalMaturitySurveyResultWhereInput[]
    OR?: DigitalMaturitySurveyResultWhereInput[]
    NOT?: DigitalMaturitySurveyResultWhereInput | DigitalMaturitySurveyResultWhereInput[]
    id?: StringFilter<"DigitalMaturitySurveyResult"> | string
    country?: StringFilter<"DigitalMaturitySurveyResult"> | string
    region?: StringFilter<"DigitalMaturitySurveyResult"> | string
    sector?: StringFilter<"DigitalMaturitySurveyResult"> | string
    overallScore?: FloatFilter<"DigitalMaturitySurveyResult"> | number
    finalThoughts?: StringFilter<"DigitalMaturitySurveyResult"> | string
    criterionScores?: JsonFilter<"DigitalMaturitySurveyResult">
    rawAnswers?: JsonFilter<"DigitalMaturitySurveyResult">
    createdAt?: DateTimeFilter<"DigitalMaturitySurveyResult"> | Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreListRelationFilter
  }

  export type DigitalMaturitySurveyResultOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
    serviceScores?: DigitalMaturitySurveyServiceScoreOrderByRelationAggregateInput
  }

  export type DigitalMaturitySurveyResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DigitalMaturitySurveyResultWhereInput | DigitalMaturitySurveyResultWhereInput[]
    OR?: DigitalMaturitySurveyResultWhereInput[]
    NOT?: DigitalMaturitySurveyResultWhereInput | DigitalMaturitySurveyResultWhereInput[]
    country?: StringFilter<"DigitalMaturitySurveyResult"> | string
    region?: StringFilter<"DigitalMaturitySurveyResult"> | string
    sector?: StringFilter<"DigitalMaturitySurveyResult"> | string
    overallScore?: FloatFilter<"DigitalMaturitySurveyResult"> | number
    finalThoughts?: StringFilter<"DigitalMaturitySurveyResult"> | string
    criterionScores?: JsonFilter<"DigitalMaturitySurveyResult">
    rawAnswers?: JsonFilter<"DigitalMaturitySurveyResult">
    createdAt?: DateTimeFilter<"DigitalMaturitySurveyResult"> | Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreListRelationFilter
  }, "id">

  export type DigitalMaturitySurveyResultOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
    _count?: DigitalMaturitySurveyResultCountOrderByAggregateInput
    _avg?: DigitalMaturitySurveyResultAvgOrderByAggregateInput
    _max?: DigitalMaturitySurveyResultMaxOrderByAggregateInput
    _min?: DigitalMaturitySurveyResultMinOrderByAggregateInput
    _sum?: DigitalMaturitySurveyResultSumOrderByAggregateInput
  }

  export type DigitalMaturitySurveyResultScalarWhereWithAggregatesInput = {
    AND?: DigitalMaturitySurveyResultScalarWhereWithAggregatesInput | DigitalMaturitySurveyResultScalarWhereWithAggregatesInput[]
    OR?: DigitalMaturitySurveyResultScalarWhereWithAggregatesInput[]
    NOT?: DigitalMaturitySurveyResultScalarWhereWithAggregatesInput | DigitalMaturitySurveyResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DigitalMaturitySurveyResult"> | string
    country?: StringWithAggregatesFilter<"DigitalMaturitySurveyResult"> | string
    region?: StringWithAggregatesFilter<"DigitalMaturitySurveyResult"> | string
    sector?: StringWithAggregatesFilter<"DigitalMaturitySurveyResult"> | string
    overallScore?: FloatWithAggregatesFilter<"DigitalMaturitySurveyResult"> | number
    finalThoughts?: StringWithAggregatesFilter<"DigitalMaturitySurveyResult"> | string
    criterionScores?: JsonWithAggregatesFilter<"DigitalMaturitySurveyResult">
    rawAnswers?: JsonWithAggregatesFilter<"DigitalMaturitySurveyResult">
    createdAt?: DateTimeWithAggregatesFilter<"DigitalMaturitySurveyResult"> | Date | string
  }

  export type GovernmentSurveyResultWhereInput = {
    AND?: GovernmentSurveyResultWhereInput | GovernmentSurveyResultWhereInput[]
    OR?: GovernmentSurveyResultWhereInput[]
    NOT?: GovernmentSurveyResultWhereInput | GovernmentSurveyResultWhereInput[]
    id?: StringFilter<"GovernmentSurveyResult"> | string
    country?: StringFilter<"GovernmentSurveyResult"> | string
    region?: StringFilter<"GovernmentSurveyResult"> | string
    department?: StringFilter<"GovernmentSurveyResult"> | string
    overallScore?: FloatFilter<"GovernmentSurveyResult"> | number
    finalThoughts?: StringFilter<"GovernmentSurveyResult"> | string
    criterionScores?: JsonFilter<"GovernmentSurveyResult">
    rawAnswers?: JsonFilter<"GovernmentSurveyResult">
    createdAt?: DateTimeFilter<"GovernmentSurveyResult"> | Date | string
    sectionScores?: JsonNullableFilter<"GovernmentSurveyResult">
    serviceScores?: GovernmentSurveyServiceScoreListRelationFilter
  }

  export type GovernmentSurveyResultOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    department?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
    sectionScores?: SortOrderInput | SortOrder
    serviceScores?: GovernmentSurveyServiceScoreOrderByRelationAggregateInput
  }

  export type GovernmentSurveyResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GovernmentSurveyResultWhereInput | GovernmentSurveyResultWhereInput[]
    OR?: GovernmentSurveyResultWhereInput[]
    NOT?: GovernmentSurveyResultWhereInput | GovernmentSurveyResultWhereInput[]
    country?: StringFilter<"GovernmentSurveyResult"> | string
    region?: StringFilter<"GovernmentSurveyResult"> | string
    department?: StringFilter<"GovernmentSurveyResult"> | string
    overallScore?: FloatFilter<"GovernmentSurveyResult"> | number
    finalThoughts?: StringFilter<"GovernmentSurveyResult"> | string
    criterionScores?: JsonFilter<"GovernmentSurveyResult">
    rawAnswers?: JsonFilter<"GovernmentSurveyResult">
    createdAt?: DateTimeFilter<"GovernmentSurveyResult"> | Date | string
    sectionScores?: JsonNullableFilter<"GovernmentSurveyResult">
    serviceScores?: GovernmentSurveyServiceScoreListRelationFilter
  }, "id">

  export type GovernmentSurveyResultOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    department?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
    sectionScores?: SortOrderInput | SortOrder
    _count?: GovernmentSurveyResultCountOrderByAggregateInput
    _avg?: GovernmentSurveyResultAvgOrderByAggregateInput
    _max?: GovernmentSurveyResultMaxOrderByAggregateInput
    _min?: GovernmentSurveyResultMinOrderByAggregateInput
    _sum?: GovernmentSurveyResultSumOrderByAggregateInput
  }

  export type GovernmentSurveyResultScalarWhereWithAggregatesInput = {
    AND?: GovernmentSurveyResultScalarWhereWithAggregatesInput | GovernmentSurveyResultScalarWhereWithAggregatesInput[]
    OR?: GovernmentSurveyResultScalarWhereWithAggregatesInput[]
    NOT?: GovernmentSurveyResultScalarWhereWithAggregatesInput | GovernmentSurveyResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GovernmentSurveyResult"> | string
    country?: StringWithAggregatesFilter<"GovernmentSurveyResult"> | string
    region?: StringWithAggregatesFilter<"GovernmentSurveyResult"> | string
    department?: StringWithAggregatesFilter<"GovernmentSurveyResult"> | string
    overallScore?: FloatWithAggregatesFilter<"GovernmentSurveyResult"> | number
    finalThoughts?: StringWithAggregatesFilter<"GovernmentSurveyResult"> | string
    criterionScores?: JsonWithAggregatesFilter<"GovernmentSurveyResult">
    rawAnswers?: JsonWithAggregatesFilter<"GovernmentSurveyResult">
    createdAt?: DateTimeWithAggregatesFilter<"GovernmentSurveyResult"> | Date | string
    sectionScores?: JsonNullableWithAggregatesFilter<"GovernmentSurveyResult">
  }

  export type GovernmentSurveyServiceScoreWhereInput = {
    AND?: GovernmentSurveyServiceScoreWhereInput | GovernmentSurveyServiceScoreWhereInput[]
    OR?: GovernmentSurveyServiceScoreWhereInput[]
    NOT?: GovernmentSurveyServiceScoreWhereInput | GovernmentSurveyServiceScoreWhereInput[]
    id?: StringFilter<"GovernmentSurveyServiceScore"> | string
    resultId?: StringFilter<"GovernmentSurveyServiceScore"> | string
    serviceCode?: StringFilter<"GovernmentSurveyServiceScore"> | string
    overallScore?: FloatFilter<"GovernmentSurveyServiceScore"> | number
    criterionScores?: JsonFilter<"GovernmentSurveyServiceScore">
    createdAt?: DateTimeFilter<"GovernmentSurveyServiceScore"> | Date | string
    result?: XOR<GovernmentSurveyResultScalarRelationFilter, GovernmentSurveyResultWhereInput>
  }

  export type GovernmentSurveyServiceScoreOrderByWithRelationInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
    result?: GovernmentSurveyResultOrderByWithRelationInput
  }

  export type GovernmentSurveyServiceScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GovernmentSurveyServiceScoreWhereInput | GovernmentSurveyServiceScoreWhereInput[]
    OR?: GovernmentSurveyServiceScoreWhereInput[]
    NOT?: GovernmentSurveyServiceScoreWhereInput | GovernmentSurveyServiceScoreWhereInput[]
    resultId?: StringFilter<"GovernmentSurveyServiceScore"> | string
    serviceCode?: StringFilter<"GovernmentSurveyServiceScore"> | string
    overallScore?: FloatFilter<"GovernmentSurveyServiceScore"> | number
    criterionScores?: JsonFilter<"GovernmentSurveyServiceScore">
    createdAt?: DateTimeFilter<"GovernmentSurveyServiceScore"> | Date | string
    result?: XOR<GovernmentSurveyResultScalarRelationFilter, GovernmentSurveyResultWhereInput>
  }, "id">

  export type GovernmentSurveyServiceScoreOrderByWithAggregationInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
    _count?: GovernmentSurveyServiceScoreCountOrderByAggregateInput
    _avg?: GovernmentSurveyServiceScoreAvgOrderByAggregateInput
    _max?: GovernmentSurveyServiceScoreMaxOrderByAggregateInput
    _min?: GovernmentSurveyServiceScoreMinOrderByAggregateInput
    _sum?: GovernmentSurveyServiceScoreSumOrderByAggregateInput
  }

  export type GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput = {
    AND?: GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput | GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput[]
    OR?: GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput[]
    NOT?: GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput | GovernmentSurveyServiceScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GovernmentSurveyServiceScore"> | string
    resultId?: StringWithAggregatesFilter<"GovernmentSurveyServiceScore"> | string
    serviceCode?: StringWithAggregatesFilter<"GovernmentSurveyServiceScore"> | string
    overallScore?: FloatWithAggregatesFilter<"GovernmentSurveyServiceScore"> | number
    criterionScores?: JsonWithAggregatesFilter<"GovernmentSurveyServiceScore">
    createdAt?: DateTimeWithAggregatesFilter<"GovernmentSurveyServiceScore"> | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreWhereInput = {
    AND?: DigitalMaturitySurveyServiceScoreWhereInput | DigitalMaturitySurveyServiceScoreWhereInput[]
    OR?: DigitalMaturitySurveyServiceScoreWhereInput[]
    NOT?: DigitalMaturitySurveyServiceScoreWhereInput | DigitalMaturitySurveyServiceScoreWhereInput[]
    id?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    resultId?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    serviceCode?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    overallScore?: FloatFilter<"DigitalMaturitySurveyServiceScore"> | number
    criterionScores?: JsonFilter<"DigitalMaturitySurveyServiceScore">
    createdAt?: DateTimeFilter<"DigitalMaturitySurveyServiceScore"> | Date | string
    result?: XOR<DigitalMaturitySurveyResultScalarRelationFilter, DigitalMaturitySurveyResultWhereInput>
  }

  export type DigitalMaturitySurveyServiceScoreOrderByWithRelationInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
    result?: DigitalMaturitySurveyResultOrderByWithRelationInput
  }

  export type DigitalMaturitySurveyServiceScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DigitalMaturitySurveyServiceScoreWhereInput | DigitalMaturitySurveyServiceScoreWhereInput[]
    OR?: DigitalMaturitySurveyServiceScoreWhereInput[]
    NOT?: DigitalMaturitySurveyServiceScoreWhereInput | DigitalMaturitySurveyServiceScoreWhereInput[]
    resultId?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    serviceCode?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    overallScore?: FloatFilter<"DigitalMaturitySurveyServiceScore"> | number
    criterionScores?: JsonFilter<"DigitalMaturitySurveyServiceScore">
    createdAt?: DateTimeFilter<"DigitalMaturitySurveyServiceScore"> | Date | string
    result?: XOR<DigitalMaturitySurveyResultScalarRelationFilter, DigitalMaturitySurveyResultWhereInput>
  }, "id">

  export type DigitalMaturitySurveyServiceScoreOrderByWithAggregationInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
    _count?: DigitalMaturitySurveyServiceScoreCountOrderByAggregateInput
    _avg?: DigitalMaturitySurveyServiceScoreAvgOrderByAggregateInput
    _max?: DigitalMaturitySurveyServiceScoreMaxOrderByAggregateInput
    _min?: DigitalMaturitySurveyServiceScoreMinOrderByAggregateInput
    _sum?: DigitalMaturitySurveyServiceScoreSumOrderByAggregateInput
  }

  export type DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput = {
    AND?: DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput | DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput[]
    OR?: DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput[]
    NOT?: DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput | DigitalMaturitySurveyServiceScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DigitalMaturitySurveyServiceScore"> | string
    resultId?: StringWithAggregatesFilter<"DigitalMaturitySurveyServiceScore"> | string
    serviceCode?: StringWithAggregatesFilter<"DigitalMaturitySurveyServiceScore"> | string
    overallScore?: FloatWithAggregatesFilter<"DigitalMaturitySurveyServiceScore"> | number
    criterionScores?: JsonWithAggregatesFilter<"DigitalMaturitySurveyServiceScore">
    createdAt?: DateTimeWithAggregatesFilter<"DigitalMaturitySurveyServiceScore"> | Date | string
  }

  export type DigitalMaturitySurveyResultCreateInput = {
    id?: string
    country: string
    region?: string
    sector?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreCreateNestedManyWithoutResultInput
  }

  export type DigitalMaturitySurveyResultUncheckedCreateInput = {
    id?: string
    country: string
    region?: string
    sector?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreUncheckedCreateNestedManyWithoutResultInput
  }

  export type DigitalMaturitySurveyResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreUpdateManyWithoutResultNestedInput
  }

  export type DigitalMaturitySurveyResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceScores?: DigitalMaturitySurveyServiceScoreUncheckedUpdateManyWithoutResultNestedInput
  }

  export type DigitalMaturitySurveyResultCreateManyInput = {
    id?: string
    country: string
    region?: string
    sector?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyResultCreateInput = {
    id?: string
    country: string
    region?: string
    department?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    serviceScores?: GovernmentSurveyServiceScoreCreateNestedManyWithoutResultInput
  }

  export type GovernmentSurveyResultUncheckedCreateInput = {
    id?: string
    country: string
    region?: string
    department?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    serviceScores?: GovernmentSurveyServiceScoreUncheckedCreateNestedManyWithoutResultInput
  }

  export type GovernmentSurveyResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    serviceScores?: GovernmentSurveyServiceScoreUpdateManyWithoutResultNestedInput
  }

  export type GovernmentSurveyResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
    serviceScores?: GovernmentSurveyServiceScoreUncheckedUpdateManyWithoutResultNestedInput
  }

  export type GovernmentSurveyResultCreateManyInput = {
    id?: string
    country: string
    region?: string
    department?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyServiceScoreCreateInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    result: GovernmentSurveyResultCreateNestedOneWithoutServiceScoresInput
  }

  export type GovernmentSurveyServiceScoreUncheckedCreateInput = {
    id?: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GovernmentSurveyServiceScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: GovernmentSurveyResultUpdateOneRequiredWithoutServiceScoresNestedInput
  }

  export type GovernmentSurveyServiceScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyServiceScoreCreateManyInput = {
    id?: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GovernmentSurveyServiceScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyServiceScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreCreateInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    result: DigitalMaturitySurveyResultCreateNestedOneWithoutServiceScoresInput
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedCreateInput = {
    id?: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: DigitalMaturitySurveyResultUpdateOneRequiredWithoutServiceScoresNestedInput
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreCreateManyInput = {
    id?: string
    resultId: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreListRelationFilter = {
    every?: DigitalMaturitySurveyServiceScoreWhereInput
    some?: DigitalMaturitySurveyServiceScoreWhereInput
    none?: DigitalMaturitySurveyServiceScoreWhereInput
  }

  export type DigitalMaturitySurveyServiceScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DigitalMaturitySurveyResultCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyResultAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type DigitalMaturitySurveyResultMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyResultMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyResultSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GovernmentSurveyServiceScoreListRelationFilter = {
    every?: GovernmentSurveyServiceScoreWhereInput
    some?: GovernmentSurveyServiceScoreWhereInput
    none?: GovernmentSurveyServiceScoreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GovernmentSurveyServiceScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GovernmentSurveyResultCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    department?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    criterionScores?: SortOrder
    rawAnswers?: SortOrder
    createdAt?: SortOrder
    sectionScores?: SortOrder
  }

  export type GovernmentSurveyResultAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type GovernmentSurveyResultMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    department?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    createdAt?: SortOrder
  }

  export type GovernmentSurveyResultMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    region?: SortOrder
    department?: SortOrder
    overallScore?: SortOrder
    finalThoughts?: SortOrder
    createdAt?: SortOrder
  }

  export type GovernmentSurveyResultSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GovernmentSurveyResultScalarRelationFilter = {
    is?: GovernmentSurveyResultWhereInput
    isNot?: GovernmentSurveyResultWhereInput
  }

  export type GovernmentSurveyServiceScoreCountOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
  }

  export type GovernmentSurveyServiceScoreAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type GovernmentSurveyServiceScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type GovernmentSurveyServiceScoreMinOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type GovernmentSurveyServiceScoreSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type DigitalMaturitySurveyResultScalarRelationFilter = {
    is?: DigitalMaturitySurveyResultWhereInput
    isNot?: DigitalMaturitySurveyResultWhereInput
  }

  export type DigitalMaturitySurveyServiceScoreCountOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    criterionScores?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyServiceScoreAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type DigitalMaturitySurveyServiceScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyServiceScoreMinOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    serviceCode?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalMaturitySurveyServiceScoreSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type DigitalMaturitySurveyServiceScoreCreateNestedManyWithoutResultInput = {
    create?: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput> | DigitalMaturitySurveyServiceScoreCreateWithoutResultInput[] | DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput | DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput[]
    createMany?: DigitalMaturitySurveyServiceScoreCreateManyResultInputEnvelope
    connect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput> | DigitalMaturitySurveyServiceScoreCreateWithoutResultInput[] | DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput | DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput[]
    createMany?: DigitalMaturitySurveyServiceScoreCreateManyResultInputEnvelope
    connect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUpdateManyWithoutResultNestedInput = {
    create?: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput> | DigitalMaturitySurveyServiceScoreCreateWithoutResultInput[] | DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput | DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput[]
    upsert?: DigitalMaturitySurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput | DigitalMaturitySurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: DigitalMaturitySurveyServiceScoreCreateManyResultInputEnvelope
    set?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    disconnect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    delete?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    connect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    update?: DigitalMaturitySurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput | DigitalMaturitySurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: DigitalMaturitySurveyServiceScoreUpdateManyWithWhereWithoutResultInput | DigitalMaturitySurveyServiceScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: DigitalMaturitySurveyServiceScoreScalarWhereInput | DigitalMaturitySurveyServiceScoreScalarWhereInput[]
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput> | DigitalMaturitySurveyServiceScoreCreateWithoutResultInput[] | DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput | DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput[]
    upsert?: DigitalMaturitySurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput | DigitalMaturitySurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: DigitalMaturitySurveyServiceScoreCreateManyResultInputEnvelope
    set?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    disconnect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    delete?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    connect?: DigitalMaturitySurveyServiceScoreWhereUniqueInput | DigitalMaturitySurveyServiceScoreWhereUniqueInput[]
    update?: DigitalMaturitySurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput | DigitalMaturitySurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: DigitalMaturitySurveyServiceScoreUpdateManyWithWhereWithoutResultInput | DigitalMaturitySurveyServiceScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: DigitalMaturitySurveyServiceScoreScalarWhereInput | DigitalMaturitySurveyServiceScoreScalarWhereInput[]
  }

  export type GovernmentSurveyServiceScoreCreateNestedManyWithoutResultInput = {
    create?: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput> | GovernmentSurveyServiceScoreCreateWithoutResultInput[] | GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput | GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput[]
    createMany?: GovernmentSurveyServiceScoreCreateManyResultInputEnvelope
    connect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
  }

  export type GovernmentSurveyServiceScoreUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput> | GovernmentSurveyServiceScoreCreateWithoutResultInput[] | GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput | GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput[]
    createMany?: GovernmentSurveyServiceScoreCreateManyResultInputEnvelope
    connect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
  }

  export type GovernmentSurveyServiceScoreUpdateManyWithoutResultNestedInput = {
    create?: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput> | GovernmentSurveyServiceScoreCreateWithoutResultInput[] | GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput | GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput[]
    upsert?: GovernmentSurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput | GovernmentSurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: GovernmentSurveyServiceScoreCreateManyResultInputEnvelope
    set?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    disconnect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    delete?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    connect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    update?: GovernmentSurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput | GovernmentSurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: GovernmentSurveyServiceScoreUpdateManyWithWhereWithoutResultInput | GovernmentSurveyServiceScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: GovernmentSurveyServiceScoreScalarWhereInput | GovernmentSurveyServiceScoreScalarWhereInput[]
  }

  export type GovernmentSurveyServiceScoreUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput> | GovernmentSurveyServiceScoreCreateWithoutResultInput[] | GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput | GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput[]
    upsert?: GovernmentSurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput | GovernmentSurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: GovernmentSurveyServiceScoreCreateManyResultInputEnvelope
    set?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    disconnect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    delete?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    connect?: GovernmentSurveyServiceScoreWhereUniqueInput | GovernmentSurveyServiceScoreWhereUniqueInput[]
    update?: GovernmentSurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput | GovernmentSurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: GovernmentSurveyServiceScoreUpdateManyWithWhereWithoutResultInput | GovernmentSurveyServiceScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: GovernmentSurveyServiceScoreScalarWhereInput | GovernmentSurveyServiceScoreScalarWhereInput[]
  }

  export type GovernmentSurveyResultCreateNestedOneWithoutServiceScoresInput = {
    create?: XOR<GovernmentSurveyResultCreateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedCreateWithoutServiceScoresInput>
    connectOrCreate?: GovernmentSurveyResultCreateOrConnectWithoutServiceScoresInput
    connect?: GovernmentSurveyResultWhereUniqueInput
  }

  export type GovernmentSurveyResultUpdateOneRequiredWithoutServiceScoresNestedInput = {
    create?: XOR<GovernmentSurveyResultCreateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedCreateWithoutServiceScoresInput>
    connectOrCreate?: GovernmentSurveyResultCreateOrConnectWithoutServiceScoresInput
    upsert?: GovernmentSurveyResultUpsertWithoutServiceScoresInput
    connect?: GovernmentSurveyResultWhereUniqueInput
    update?: XOR<XOR<GovernmentSurveyResultUpdateToOneWithWhereWithoutServiceScoresInput, GovernmentSurveyResultUpdateWithoutServiceScoresInput>, GovernmentSurveyResultUncheckedUpdateWithoutServiceScoresInput>
  }

  export type DigitalMaturitySurveyResultCreateNestedOneWithoutServiceScoresInput = {
    create?: XOR<DigitalMaturitySurveyResultCreateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedCreateWithoutServiceScoresInput>
    connectOrCreate?: DigitalMaturitySurveyResultCreateOrConnectWithoutServiceScoresInput
    connect?: DigitalMaturitySurveyResultWhereUniqueInput
  }

  export type DigitalMaturitySurveyResultUpdateOneRequiredWithoutServiceScoresNestedInput = {
    create?: XOR<DigitalMaturitySurveyResultCreateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedCreateWithoutServiceScoresInput>
    connectOrCreate?: DigitalMaturitySurveyResultCreateOrConnectWithoutServiceScoresInput
    upsert?: DigitalMaturitySurveyResultUpsertWithoutServiceScoresInput
    connect?: DigitalMaturitySurveyResultWhereUniqueInput
    update?: XOR<XOR<DigitalMaturitySurveyResultUpdateToOneWithWhereWithoutServiceScoresInput, DigitalMaturitySurveyResultUpdateWithoutServiceScoresInput>, DigitalMaturitySurveyResultUncheckedUpdateWithoutServiceScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DigitalMaturitySurveyServiceScoreCreateWithoutResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreCreateOrConnectWithoutResultInput = {
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    create: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput>
  }

  export type DigitalMaturitySurveyServiceScoreCreateManyResultInputEnvelope = {
    data: DigitalMaturitySurveyServiceScoreCreateManyResultInput | DigitalMaturitySurveyServiceScoreCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type DigitalMaturitySurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput = {
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    update: XOR<DigitalMaturitySurveyServiceScoreUpdateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateWithoutResultInput>
    create: XOR<DigitalMaturitySurveyServiceScoreCreateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedCreateWithoutResultInput>
  }

  export type DigitalMaturitySurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput = {
    where: DigitalMaturitySurveyServiceScoreWhereUniqueInput
    data: XOR<DigitalMaturitySurveyServiceScoreUpdateWithoutResultInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateWithoutResultInput>
  }

  export type DigitalMaturitySurveyServiceScoreUpdateManyWithWhereWithoutResultInput = {
    where: DigitalMaturitySurveyServiceScoreScalarWhereInput
    data: XOR<DigitalMaturitySurveyServiceScoreUpdateManyMutationInput, DigitalMaturitySurveyServiceScoreUncheckedUpdateManyWithoutResultInput>
  }

  export type DigitalMaturitySurveyServiceScoreScalarWhereInput = {
    AND?: DigitalMaturitySurveyServiceScoreScalarWhereInput | DigitalMaturitySurveyServiceScoreScalarWhereInput[]
    OR?: DigitalMaturitySurveyServiceScoreScalarWhereInput[]
    NOT?: DigitalMaturitySurveyServiceScoreScalarWhereInput | DigitalMaturitySurveyServiceScoreScalarWhereInput[]
    id?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    resultId?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    serviceCode?: StringFilter<"DigitalMaturitySurveyServiceScore"> | string
    overallScore?: FloatFilter<"DigitalMaturitySurveyServiceScore"> | number
    criterionScores?: JsonFilter<"DigitalMaturitySurveyServiceScore">
    createdAt?: DateTimeFilter<"DigitalMaturitySurveyServiceScore"> | Date | string
  }

  export type GovernmentSurveyServiceScoreCreateWithoutResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GovernmentSurveyServiceScoreCreateOrConnectWithoutResultInput = {
    where: GovernmentSurveyServiceScoreWhereUniqueInput
    create: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput>
  }

  export type GovernmentSurveyServiceScoreCreateManyResultInputEnvelope = {
    data: GovernmentSurveyServiceScoreCreateManyResultInput | GovernmentSurveyServiceScoreCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type GovernmentSurveyServiceScoreUpsertWithWhereUniqueWithoutResultInput = {
    where: GovernmentSurveyServiceScoreWhereUniqueInput
    update: XOR<GovernmentSurveyServiceScoreUpdateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedUpdateWithoutResultInput>
    create: XOR<GovernmentSurveyServiceScoreCreateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedCreateWithoutResultInput>
  }

  export type GovernmentSurveyServiceScoreUpdateWithWhereUniqueWithoutResultInput = {
    where: GovernmentSurveyServiceScoreWhereUniqueInput
    data: XOR<GovernmentSurveyServiceScoreUpdateWithoutResultInput, GovernmentSurveyServiceScoreUncheckedUpdateWithoutResultInput>
  }

  export type GovernmentSurveyServiceScoreUpdateManyWithWhereWithoutResultInput = {
    where: GovernmentSurveyServiceScoreScalarWhereInput
    data: XOR<GovernmentSurveyServiceScoreUpdateManyMutationInput, GovernmentSurveyServiceScoreUncheckedUpdateManyWithoutResultInput>
  }

  export type GovernmentSurveyServiceScoreScalarWhereInput = {
    AND?: GovernmentSurveyServiceScoreScalarWhereInput | GovernmentSurveyServiceScoreScalarWhereInput[]
    OR?: GovernmentSurveyServiceScoreScalarWhereInput[]
    NOT?: GovernmentSurveyServiceScoreScalarWhereInput | GovernmentSurveyServiceScoreScalarWhereInput[]
    id?: StringFilter<"GovernmentSurveyServiceScore"> | string
    resultId?: StringFilter<"GovernmentSurveyServiceScore"> | string
    serviceCode?: StringFilter<"GovernmentSurveyServiceScore"> | string
    overallScore?: FloatFilter<"GovernmentSurveyServiceScore"> | number
    criterionScores?: JsonFilter<"GovernmentSurveyServiceScore">
    createdAt?: DateTimeFilter<"GovernmentSurveyServiceScore"> | Date | string
  }

  export type GovernmentSurveyResultCreateWithoutServiceScoresInput = {
    id?: string
    country: string
    region?: string
    department?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyResultUncheckedCreateWithoutServiceScoresInput = {
    id?: string
    country: string
    region?: string
    department?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyResultCreateOrConnectWithoutServiceScoresInput = {
    where: GovernmentSurveyResultWhereUniqueInput
    create: XOR<GovernmentSurveyResultCreateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedCreateWithoutServiceScoresInput>
  }

  export type GovernmentSurveyResultUpsertWithoutServiceScoresInput = {
    update: XOR<GovernmentSurveyResultUpdateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedUpdateWithoutServiceScoresInput>
    create: XOR<GovernmentSurveyResultCreateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedCreateWithoutServiceScoresInput>
    where?: GovernmentSurveyResultWhereInput
  }

  export type GovernmentSurveyResultUpdateToOneWithWhereWithoutServiceScoresInput = {
    where?: GovernmentSurveyResultWhereInput
    data: XOR<GovernmentSurveyResultUpdateWithoutServiceScoresInput, GovernmentSurveyResultUncheckedUpdateWithoutServiceScoresInput>
  }

  export type GovernmentSurveyResultUpdateWithoutServiceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GovernmentSurveyResultUncheckedUpdateWithoutServiceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionScores?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DigitalMaturitySurveyResultCreateWithoutServiceScoresInput = {
    id?: string
    country: string
    region?: string
    sector?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyResultUncheckedCreateWithoutServiceScoresInput = {
    id?: string
    country: string
    region?: string
    sector?: string
    overallScore: number
    finalThoughts?: string
    criterionScores: JsonNullValueInput | InputJsonValue
    rawAnswers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyResultCreateOrConnectWithoutServiceScoresInput = {
    where: DigitalMaturitySurveyResultWhereUniqueInput
    create: XOR<DigitalMaturitySurveyResultCreateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedCreateWithoutServiceScoresInput>
  }

  export type DigitalMaturitySurveyResultUpsertWithoutServiceScoresInput = {
    update: XOR<DigitalMaturitySurveyResultUpdateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedUpdateWithoutServiceScoresInput>
    create: XOR<DigitalMaturitySurveyResultCreateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedCreateWithoutServiceScoresInput>
    where?: DigitalMaturitySurveyResultWhereInput
  }

  export type DigitalMaturitySurveyResultUpdateToOneWithWhereWithoutServiceScoresInput = {
    where?: DigitalMaturitySurveyResultWhereInput
    data: XOR<DigitalMaturitySurveyResultUpdateWithoutServiceScoresInput, DigitalMaturitySurveyResultUncheckedUpdateWithoutServiceScoresInput>
  }

  export type DigitalMaturitySurveyResultUpdateWithoutServiceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyResultUncheckedUpdateWithoutServiceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    finalThoughts?: StringFieldUpdateOperationsInput | string
    criterionScores?: JsonNullValueInput | InputJsonValue
    rawAnswers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreCreateManyResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalMaturitySurveyServiceScoreUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyServiceScoreCreateManyResultInput = {
    id?: string
    serviceCode: string
    overallScore: number
    criterionScores: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GovernmentSurveyServiceScoreUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyServiceScoreUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentSurveyServiceScoreUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    criterionScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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