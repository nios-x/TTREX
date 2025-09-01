
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Asset
 * ASSETS OWNED BY A WALLET
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Property
 * PROPERTY MODEL
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Fraction
 * FRACTION MODEL
 */
export type Fraction = $Result.DefaultSelection<Prisma.$FractionPayload>
/**
 * Model SellProposal
 * 
 */
export type SellProposal = $Result.DefaultSelection<Prisma.$SellProposalPayload>
/**
 * Model Proposal
 * PROPOSAL MODEL
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Listing
 * LISTING MODEL
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model PendingUser
 * 
 */
export type PendingUser = $Result.DefaultSelection<Prisma.$PendingUserPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model TokenMapping
 * Simple key-value mapping between DB IDs and on-chain token IDs
 */
export type TokenMapping = $Result.DefaultSelection<Prisma.$TokenMappingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  FRACTIONALISED: 'FRACTIONALISED',
  SOLD: 'SOLD'
};

export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus]


export const TxType: {
  BUY: 'BUY',
  SELL: 'SELL',
  FRACTIONALISE: 'FRACTIONALISE',
  UNLOCK: 'UNLOCK'
};

export type TxType = (typeof TxType)[keyof typeof TxType]

}

export type PropertyStatus = $Enums.PropertyStatus

export const PropertyStatus: typeof $Enums.PropertyStatus

export type TxType = $Enums.TxType

export const TxType: typeof $Enums.TxType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fraction`: Exposes CRUD operations for the **Fraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fractions
    * const fractions = await prisma.fraction.findMany()
    * ```
    */
  get fraction(): Prisma.FractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellProposal`: Exposes CRUD operations for the **SellProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellProposals
    * const sellProposals = await prisma.sellProposal.findMany()
    * ```
    */
  get sellProposal(): Prisma.SellProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendingUser`: Exposes CRUD operations for the **PendingUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingUsers
    * const pendingUsers = await prisma.pendingUser.findMany()
    * ```
    */
  get pendingUser(): Prisma.PendingUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenMapping`: Exposes CRUD operations for the **TokenMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenMappings
    * const tokenMappings = await prisma.tokenMapping.findMany()
    * ```
    */
  get tokenMapping(): Prisma.TokenMappingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    User: 'User',
    Wallet: 'Wallet',
    Payment: 'Payment',
    Transaction: 'Transaction',
    Asset: 'Asset',
    Property: 'Property',
    Fraction: 'Fraction',
    SellProposal: 'SellProposal',
    Proposal: 'Proposal',
    Listing: 'Listing',
    PendingUser: 'PendingUser',
    PasswordReset: 'PasswordReset',
    TokenMapping: 'TokenMapping'
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
      modelProps: "user" | "wallet" | "payment" | "transaction" | "asset" | "property" | "fraction" | "sellProposal" | "proposal" | "listing" | "pendingUser" | "passwordReset" | "tokenMapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Fraction: {
        payload: Prisma.$FractionPayload<ExtArgs>
        fields: Prisma.FractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          findFirst: {
            args: Prisma.FractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          findMany: {
            args: Prisma.FractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>[]
          }
          create: {
            args: Prisma.FractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          createMany: {
            args: Prisma.FractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>[]
          }
          delete: {
            args: Prisma.FractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          update: {
            args: Prisma.FractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          deleteMany: {
            args: Prisma.FractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>[]
          }
          upsert: {
            args: Prisma.FractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FractionPayload>
          }
          aggregate: {
            args: Prisma.FractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFraction>
          }
          groupBy: {
            args: Prisma.FractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FractionCountArgs<ExtArgs>
            result: $Utils.Optional<FractionCountAggregateOutputType> | number
          }
        }
      }
      SellProposal: {
        payload: Prisma.$SellProposalPayload<ExtArgs>
        fields: Prisma.SellProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          findFirst: {
            args: Prisma.SellProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          findMany: {
            args: Prisma.SellProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>[]
          }
          create: {
            args: Prisma.SellProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          createMany: {
            args: Prisma.SellProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>[]
          }
          delete: {
            args: Prisma.SellProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          update: {
            args: Prisma.SellProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          deleteMany: {
            args: Prisma.SellProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>[]
          }
          upsert: {
            args: Prisma.SellProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellProposalPayload>
          }
          aggregate: {
            args: Prisma.SellProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellProposal>
          }
          groupBy: {
            args: Prisma.SellProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellProposalCountArgs<ExtArgs>
            result: $Utils.Optional<SellProposalCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      PendingUser: {
        payload: Prisma.$PendingUserPayload<ExtArgs>
        fields: Prisma.PendingUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          findFirst: {
            args: Prisma.PendingUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          findMany: {
            args: Prisma.PendingUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>[]
          }
          create: {
            args: Prisma.PendingUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          createMany: {
            args: Prisma.PendingUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>[]
          }
          delete: {
            args: Prisma.PendingUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          update: {
            args: Prisma.PendingUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          deleteMany: {
            args: Prisma.PendingUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendingUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>[]
          }
          upsert: {
            args: Prisma.PendingUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingUserPayload>
          }
          aggregate: {
            args: Prisma.PendingUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingUser>
          }
          groupBy: {
            args: Prisma.PendingUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingUserCountArgs<ExtArgs>
            result: $Utils.Optional<PendingUserCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      TokenMapping: {
        payload: Prisma.$TokenMappingPayload<ExtArgs>
        fields: Prisma.TokenMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          findFirst: {
            args: Prisma.TokenMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          findMany: {
            args: Prisma.TokenMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>[]
          }
          create: {
            args: Prisma.TokenMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          createMany: {
            args: Prisma.TokenMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>[]
          }
          delete: {
            args: Prisma.TokenMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          update: {
            args: Prisma.TokenMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          deleteMany: {
            args: Prisma.TokenMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>[]
          }
          upsert: {
            args: Prisma.TokenMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenMappingPayload>
          }
          aggregate: {
            args: Prisma.TokenMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenMapping>
          }
          groupBy: {
            args: Prisma.TokenMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenMappingCountArgs<ExtArgs>
            result: $Utils.Optional<TokenMappingCountAggregateOutputType> | number
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
    user?: UserOmit
    wallet?: WalletOmit
    payment?: PaymentOmit
    transaction?: TransactionOmit
    asset?: AssetOmit
    property?: PropertyOmit
    fraction?: FractionOmit
    sellProposal?: SellProposalOmit
    proposal?: ProposalOmit
    listing?: ListingOmit
    pendingUser?: PendingUserOmit
    passwordReset?: PasswordResetOmit
    tokenMapping?: TokenMappingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wallets: number
    properties: number
    proposals: number
    listings: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | UserCountOutputTypeCountWalletsArgs
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    proposals?: boolean | UserCountOutputTypeCountProposalsArgs
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    assets: number
    fractions: number
    transactions: number
    payments: number
    sellProposals: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | WalletCountOutputTypeCountAssetsArgs
    fractions?: boolean | WalletCountOutputTypeCountFractionsArgs
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
    payments?: boolean | WalletCountOutputTypeCountPaymentsArgs
    sellProposals?: boolean | WalletCountOutputTypeCountSellProposalsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountFractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FractionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountSellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellProposalWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    fractions: number
    proposals: number
    payments: number
    listings: number
    sellProposals: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fractions?: boolean | PropertyCountOutputTypeCountFractionsArgs
    proposals?: boolean | PropertyCountOutputTypeCountProposalsArgs
    payments?: boolean | PropertyCountOutputTypeCountPaymentsArgs
    listings?: boolean | PropertyCountOutputTypeCountListingsArgs
    sellProposals?: boolean | PropertyCountOutputTypeCountSellProposalsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FractionWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountSellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellProposalWhereInput
  }


  /**
   * Count Type FractionCountOutputType
   */

  export type FractionCountOutputType = {
    transactions: number
    sellProposals: number
  }

  export type FractionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FractionCountOutputTypeCountTransactionsArgs
    sellProposals?: boolean | FractionCountOutputTypeCountSellProposalsArgs
  }

  // Custom InputTypes
  /**
   * FractionCountOutputType without action
   */
  export type FractionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FractionCountOutputType
     */
    select?: FractionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FractionCountOutputType without action
   */
  export type FractionCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * FractionCountOutputType without action
   */
  export type FractionCountOutputTypeCountSellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellProposalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    wallets?: boolean | User$walletsArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | User$walletsArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallets: Prisma.$WalletPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      listings: Prisma.$ListingPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets<T extends User$walletsArgs<ExtArgs> = {}>(args?: Subset<T, User$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends User$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallets
   */
  export type User$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.proposals
   */
  export type User$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    address: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    address: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    address: number
    userId: number
    createdAt: number
    _all: number
  }


  export type WalletMinAggregateInputType = {
    id?: true
    address?: true
    userId?: true
    createdAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    address?: true
    userId?: true
    createdAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    address?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    address: string
    userId: string
    createdAt: Date
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assets?: boolean | Wallet$assetsArgs<ExtArgs>
    fractions?: boolean | Wallet$fractionsArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    payments?: boolean | Wallet$paymentsArgs<ExtArgs>
    sellProposals?: boolean | Wallet$sellProposalsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "userId" | "createdAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assets?: boolean | Wallet$assetsArgs<ExtArgs>
    fractions?: boolean | Wallet$fractionsArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    payments?: boolean | Wallet$paymentsArgs<ExtArgs>
    sellProposals?: boolean | Wallet$sellProposalsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assets: Prisma.$AssetPayload<ExtArgs>[]
      fractions: Prisma.$FractionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      sellProposals: Prisma.$SellProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assets<T extends Wallet$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fractions<T extends Wallet$fractionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$fractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Wallet$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellProposals<T extends Wallet$sellProposalsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$sellProposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly address: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.assets
   */
  export type Wallet$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Wallet.fractions
   */
  export type Wallet$fractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    where?: FractionWhereInput
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    cursor?: FractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FractionScalarFieldEnum | FractionScalarFieldEnum[]
  }

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet.payments
   */
  export type Wallet$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Wallet.sellProposals
   */
  export type Wallet$sellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    where?: SellProposalWhereInput
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    cursor?: SellProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fromWalletId: string | null
    amount: number | null
    distributed: boolean | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fromWalletId: string | null
    amount: number | null
    distributed: boolean | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    propertyId: number
    fromWalletId: number
    amount: number
    distributed: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    propertyId?: true
    fromWalletId?: true
    amount?: true
    distributed?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    propertyId?: true
    fromWalletId?: true
    amount?: true
    distributed?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    propertyId?: true
    fromWalletId?: true
    amount?: true
    distributed?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    propertyId: string
    fromWalletId: string
    amount: number
    distributed: boolean
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fromWalletId?: boolean
    amount?: boolean
    distributed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fromWalletId?: boolean
    amount?: boolean
    distributed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fromWalletId?: boolean
    amount?: boolean
    distributed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    propertyId?: boolean
    fromWalletId?: boolean
    amount?: boolean
    distributed?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "fromWalletId" | "amount" | "distributed" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fromWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      fromWallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      fromWalletId: string
      amount: number
      distributed: boolean
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromWallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly propertyId: FieldRef<"Payment", 'String'>
    readonly fromWalletId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly distributed: FieldRef<"Payment", 'Boolean'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    propertyId: string | null
    fractionId: string | null
    type: $Enums.TxType | null
    amount: number | null
    hash: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    propertyId: string | null
    fractionId: string | null
    type: $Enums.TxType | null
    amount: number | null
    hash: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    propertyId: number
    fractionId: number
    type: number
    amount: number
    hash: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    propertyId?: true
    fractionId?: true
    type?: true
    amount?: true
    hash?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    propertyId?: true
    fractionId?: true
    type?: true
    amount?: true
    hash?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    propertyId?: true
    fractionId?: true
    type?: true
    amount?: true
    hash?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string | null
    walletId: string
    propertyId: string | null
    fractionId: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    propertyId?: boolean
    fractionId?: boolean
    type?: boolean
    amount?: boolean
    hash?: boolean
    createdAt?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    propertyId?: boolean
    fractionId?: boolean
    type?: boolean
    amount?: boolean
    hash?: boolean
    createdAt?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    propertyId?: boolean
    fractionId?: boolean
    type?: boolean
    amount?: boolean
    hash?: boolean
    createdAt?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    propertyId?: boolean
    fractionId?: boolean
    type?: boolean
    amount?: boolean
    hash?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "walletId" | "propertyId" | "fractionId" | "type" | "amount" | "hash" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    fraction?: boolean | Transaction$fractionArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      wallet: Prisma.$WalletPayload<ExtArgs>
      fraction: Prisma.$FractionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      walletId: string
      propertyId: string | null
      fractionId: string | null
      type: $Enums.TxType
      amount: number
      hash: string
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Transaction$userArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fraction<T extends Transaction$fractionArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$fractionArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly walletId: FieldRef<"Transaction", 'String'>
    readonly propertyId: FieldRef<"Transaction", 'String'>
    readonly fractionId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TxType'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly hash: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.user
   */
  export type Transaction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction.fraction
   */
  export type Transaction$fractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    where?: FractionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    type: string | null
    referenceId: string | null
    walletId: string | null
    createdAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    type: string | null
    referenceId: string | null
    walletId: string | null
    createdAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    type: number
    referenceId: number
    walletId: number
    createdAt: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    id?: true
    type?: true
    referenceId?: true
    walletId?: true
    createdAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    type?: true
    referenceId?: true
    walletId?: true
    createdAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    type?: true
    referenceId?: true
    walletId?: true
    createdAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    type: string
    referenceId: string
    walletId: string
    createdAt: Date
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    referenceId?: boolean
    walletId?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    referenceId?: boolean
    walletId?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    referenceId?: boolean
    walletId?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    type?: boolean
    referenceId?: boolean
    walletId?: boolean
    createdAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "referenceId" | "walletId" | "createdAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      referenceId: string
      walletId: string
      createdAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly type: FieldRef<"Asset", 'String'>
    readonly referenceId: FieldRef<"Asset", 'String'>
    readonly walletId: FieldRef<"Asset", 'String'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    valuation: number | null
  }

  export type PropertySumAggregateOutputType = {
    valuation: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    valuation: number | null
    nftAddress: string | null
    ownerId: string | null
    imageUrl: string | null
    status: $Enums.PropertyStatus | null
    tokenId: string | null
    createdAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    valuation: number | null
    nftAddress: string | null
    ownerId: string | null
    imageUrl: string | null
    status: $Enums.PropertyStatus | null
    tokenId: string | null
    createdAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    valuation: number
    nftAddress: number
    ownerId: number
    imageUrl: number
    status: number
    tokenId: number
    createdAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    valuation?: true
  }

  export type PropertySumAggregateInputType = {
    valuation?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    valuation?: true
    nftAddress?: true
    ownerId?: true
    imageUrl?: true
    status?: true
    tokenId?: true
    createdAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    valuation?: true
    nftAddress?: true
    ownerId?: true
    imageUrl?: true
    status?: true
    tokenId?: true
    createdAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    valuation?: true
    nftAddress?: true
    ownerId?: true
    imageUrl?: true
    status?: true
    tokenId?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status: $Enums.PropertyStatus
    tokenId: string
    createdAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    valuation?: boolean
    nftAddress?: boolean
    ownerId?: boolean
    imageUrl?: boolean
    status?: boolean
    tokenId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    fractions?: boolean | Property$fractionsArgs<ExtArgs>
    proposals?: boolean | Property$proposalsArgs<ExtArgs>
    payments?: boolean | Property$paymentsArgs<ExtArgs>
    listings?: boolean | Property$listingsArgs<ExtArgs>
    sellProposals?: boolean | Property$sellProposalsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    valuation?: boolean
    nftAddress?: boolean
    ownerId?: boolean
    imageUrl?: boolean
    status?: boolean
    tokenId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    valuation?: boolean
    nftAddress?: boolean
    ownerId?: boolean
    imageUrl?: boolean
    status?: boolean
    tokenId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    valuation?: boolean
    nftAddress?: boolean
    ownerId?: boolean
    imageUrl?: boolean
    status?: boolean
    tokenId?: boolean
    createdAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "valuation" | "nftAddress" | "ownerId" | "imageUrl" | "status" | "tokenId" | "createdAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    fractions?: boolean | Property$fractionsArgs<ExtArgs>
    proposals?: boolean | Property$proposalsArgs<ExtArgs>
    payments?: boolean | Property$paymentsArgs<ExtArgs>
    listings?: boolean | Property$listingsArgs<ExtArgs>
    sellProposals?: boolean | Property$sellProposalsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      fractions: Prisma.$FractionPayload<ExtArgs>[]
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      listings: Prisma.$ListingPayload<ExtArgs>[]
      sellProposals: Prisma.$SellProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      valuation: number
      nftAddress: string
      ownerId: string
      imageUrl: string
      status: $Enums.PropertyStatus
      tokenId: string
      createdAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fractions<T extends Property$fractionsArgs<ExtArgs> = {}>(args?: Subset<T, Property$fractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends Property$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Property$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Property$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Property$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listings<T extends Property$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Property$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellProposals<T extends Property$sellProposalsArgs<ExtArgs> = {}>(args?: Subset<T, Property$sellProposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly valuation: FieldRef<"Property", 'Float'>
    readonly nftAddress: FieldRef<"Property", 'String'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly imageUrl: FieldRef<"Property", 'String'>
    readonly status: FieldRef<"Property", 'PropertyStatus'>
    readonly tokenId: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.fractions
   */
  export type Property$fractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    where?: FractionWhereInput
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    cursor?: FractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FractionScalarFieldEnum | FractionScalarFieldEnum[]
  }

  /**
   * Property.proposals
   */
  export type Property$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Property.payments
   */
  export type Property$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Property.listings
   */
  export type Property$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Property.sellProposals
   */
  export type Property$sellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    where?: SellProposalWhereInput
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    cursor?: SellProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Fraction
   */

  export type AggregateFraction = {
    _count: FractionCountAggregateOutputType | null
    _avg: FractionAvgAggregateOutputType | null
    _sum: FractionSumAggregateOutputType | null
    _min: FractionMinAggregateOutputType | null
    _max: FractionMaxAggregateOutputType | null
  }

  export type FractionAvgAggregateOutputType = {
    supply: number | null
  }

  export type FractionSumAggregateOutputType = {
    supply: number | null
  }

  export type FractionMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    walletId: string | null
    supply: number | null
    createdAt: Date | null
  }

  export type FractionMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    walletId: string | null
    supply: number | null
    createdAt: Date | null
  }

  export type FractionCountAggregateOutputType = {
    id: number
    propertyId: number
    walletId: number
    supply: number
    createdAt: number
    _all: number
  }


  export type FractionAvgAggregateInputType = {
    supply?: true
  }

  export type FractionSumAggregateInputType = {
    supply?: true
  }

  export type FractionMinAggregateInputType = {
    id?: true
    propertyId?: true
    walletId?: true
    supply?: true
    createdAt?: true
  }

  export type FractionMaxAggregateInputType = {
    id?: true
    propertyId?: true
    walletId?: true
    supply?: true
    createdAt?: true
  }

  export type FractionCountAggregateInputType = {
    id?: true
    propertyId?: true
    walletId?: true
    supply?: true
    createdAt?: true
    _all?: true
  }

  export type FractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fraction to aggregate.
     */
    where?: FractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fractions to fetch.
     */
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fractions
    **/
    _count?: true | FractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FractionMaxAggregateInputType
  }

  export type GetFractionAggregateType<T extends FractionAggregateArgs> = {
        [P in keyof T & keyof AggregateFraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFraction[P]>
      : GetScalarType<T[P], AggregateFraction[P]>
  }




  export type FractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FractionWhereInput
    orderBy?: FractionOrderByWithAggregationInput | FractionOrderByWithAggregationInput[]
    by: FractionScalarFieldEnum[] | FractionScalarFieldEnum
    having?: FractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FractionCountAggregateInputType | true
    _avg?: FractionAvgAggregateInputType
    _sum?: FractionSumAggregateInputType
    _min?: FractionMinAggregateInputType
    _max?: FractionMaxAggregateInputType
  }

  export type FractionGroupByOutputType = {
    id: string
    propertyId: string
    walletId: string
    supply: number
    createdAt: Date
    _count: FractionCountAggregateOutputType | null
    _avg: FractionAvgAggregateOutputType | null
    _sum: FractionSumAggregateOutputType | null
    _min: FractionMinAggregateOutputType | null
    _max: FractionMaxAggregateOutputType | null
  }

  type GetFractionGroupByPayload<T extends FractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FractionGroupByOutputType[P]>
            : GetScalarType<T[P], FractionGroupByOutputType[P]>
        }
      >
    >


  export type FractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    walletId?: boolean
    supply?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
    transactions?: boolean | Fraction$transactionsArgs<ExtArgs>
    sellProposals?: boolean | Fraction$sellProposalsArgs<ExtArgs>
    _count?: boolean | FractionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fraction"]>

  export type FractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    walletId?: boolean
    supply?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fraction"]>

  export type FractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    walletId?: boolean
    supply?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fraction"]>

  export type FractionSelectScalar = {
    id?: boolean
    propertyId?: boolean
    walletId?: boolean
    supply?: boolean
    createdAt?: boolean
  }

  export type FractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "walletId" | "supply" | "createdAt", ExtArgs["result"]["fraction"]>
  export type FractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
    transactions?: boolean | Fraction$transactionsArgs<ExtArgs>
    sellProposals?: boolean | Fraction$sellProposalsArgs<ExtArgs>
    _count?: boolean | FractionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type FractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $FractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fraction"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      owner: Prisma.$WalletPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      sellProposals: Prisma.$SellProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      walletId: string
      supply: number
      createdAt: Date
    }, ExtArgs["result"]["fraction"]>
    composites: {}
  }

  type FractionGetPayload<S extends boolean | null | undefined | FractionDefaultArgs> = $Result.GetResult<Prisma.$FractionPayload, S>

  type FractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FractionCountAggregateInputType | true
    }

  export interface FractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fraction'], meta: { name: 'Fraction' } }
    /**
     * Find zero or one Fraction that matches the filter.
     * @param {FractionFindUniqueArgs} args - Arguments to find a Fraction
     * @example
     * // Get one Fraction
     * const fraction = await prisma.fraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FractionFindUniqueArgs>(args: SelectSubset<T, FractionFindUniqueArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FractionFindUniqueOrThrowArgs} args - Arguments to find a Fraction
     * @example
     * // Get one Fraction
     * const fraction = await prisma.fraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FractionFindUniqueOrThrowArgs>(args: SelectSubset<T, FractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionFindFirstArgs} args - Arguments to find a Fraction
     * @example
     * // Get one Fraction
     * const fraction = await prisma.fraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FractionFindFirstArgs>(args?: SelectSubset<T, FractionFindFirstArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionFindFirstOrThrowArgs} args - Arguments to find a Fraction
     * @example
     * // Get one Fraction
     * const fraction = await prisma.fraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FractionFindFirstOrThrowArgs>(args?: SelectSubset<T, FractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fractions
     * const fractions = await prisma.fraction.findMany()
     * 
     * // Get first 10 Fractions
     * const fractions = await prisma.fraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fractionWithIdOnly = await prisma.fraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FractionFindManyArgs>(args?: SelectSubset<T, FractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fraction.
     * @param {FractionCreateArgs} args - Arguments to create a Fraction.
     * @example
     * // Create one Fraction
     * const Fraction = await prisma.fraction.create({
     *   data: {
     *     // ... data to create a Fraction
     *   }
     * })
     * 
     */
    create<T extends FractionCreateArgs>(args: SelectSubset<T, FractionCreateArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fractions.
     * @param {FractionCreateManyArgs} args - Arguments to create many Fractions.
     * @example
     * // Create many Fractions
     * const fraction = await prisma.fraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FractionCreateManyArgs>(args?: SelectSubset<T, FractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fractions and returns the data saved in the database.
     * @param {FractionCreateManyAndReturnArgs} args - Arguments to create many Fractions.
     * @example
     * // Create many Fractions
     * const fraction = await prisma.fraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fractions and only return the `id`
     * const fractionWithIdOnly = await prisma.fraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FractionCreateManyAndReturnArgs>(args?: SelectSubset<T, FractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fraction.
     * @param {FractionDeleteArgs} args - Arguments to delete one Fraction.
     * @example
     * // Delete one Fraction
     * const Fraction = await prisma.fraction.delete({
     *   where: {
     *     // ... filter to delete one Fraction
     *   }
     * })
     * 
     */
    delete<T extends FractionDeleteArgs>(args: SelectSubset<T, FractionDeleteArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fraction.
     * @param {FractionUpdateArgs} args - Arguments to update one Fraction.
     * @example
     * // Update one Fraction
     * const fraction = await prisma.fraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FractionUpdateArgs>(args: SelectSubset<T, FractionUpdateArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fractions.
     * @param {FractionDeleteManyArgs} args - Arguments to filter Fractions to delete.
     * @example
     * // Delete a few Fractions
     * const { count } = await prisma.fraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FractionDeleteManyArgs>(args?: SelectSubset<T, FractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fractions
     * const fraction = await prisma.fraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FractionUpdateManyArgs>(args: SelectSubset<T, FractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fractions and returns the data updated in the database.
     * @param {FractionUpdateManyAndReturnArgs} args - Arguments to update many Fractions.
     * @example
     * // Update many Fractions
     * const fraction = await prisma.fraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fractions and only return the `id`
     * const fractionWithIdOnly = await prisma.fraction.updateManyAndReturn({
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
    updateManyAndReturn<T extends FractionUpdateManyAndReturnArgs>(args: SelectSubset<T, FractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fraction.
     * @param {FractionUpsertArgs} args - Arguments to update or create a Fraction.
     * @example
     * // Update or create a Fraction
     * const fraction = await prisma.fraction.upsert({
     *   create: {
     *     // ... data to create a Fraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fraction we want to update
     *   }
     * })
     */
    upsert<T extends FractionUpsertArgs>(args: SelectSubset<T, FractionUpsertArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionCountArgs} args - Arguments to filter Fractions to count.
     * @example
     * // Count the number of Fractions
     * const count = await prisma.fraction.count({
     *   where: {
     *     // ... the filter for the Fractions we want to count
     *   }
     * })
    **/
    count<T extends FractionCountArgs>(
      args?: Subset<T, FractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FractionAggregateArgs>(args: Subset<T, FractionAggregateArgs>): Prisma.PrismaPromise<GetFractionAggregateType<T>>

    /**
     * Group by Fraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FractionGroupByArgs} args - Group by arguments.
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
      T extends FractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FractionGroupByArgs['orderBy'] }
        : { orderBy?: FractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fraction model
   */
  readonly fields: FractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Fraction$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Fraction$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellProposals<T extends Fraction$sellProposalsArgs<ExtArgs> = {}>(args?: Subset<T, Fraction$sellProposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fraction model
   */
  interface FractionFieldRefs {
    readonly id: FieldRef<"Fraction", 'String'>
    readonly propertyId: FieldRef<"Fraction", 'String'>
    readonly walletId: FieldRef<"Fraction", 'String'>
    readonly supply: FieldRef<"Fraction", 'Int'>
    readonly createdAt: FieldRef<"Fraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fraction findUnique
   */
  export type FractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter, which Fraction to fetch.
     */
    where: FractionWhereUniqueInput
  }

  /**
   * Fraction findUniqueOrThrow
   */
  export type FractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter, which Fraction to fetch.
     */
    where: FractionWhereUniqueInput
  }

  /**
   * Fraction findFirst
   */
  export type FractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter, which Fraction to fetch.
     */
    where?: FractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fractions to fetch.
     */
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fractions.
     */
    cursor?: FractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fractions.
     */
    distinct?: FractionScalarFieldEnum | FractionScalarFieldEnum[]
  }

  /**
   * Fraction findFirstOrThrow
   */
  export type FractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter, which Fraction to fetch.
     */
    where?: FractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fractions to fetch.
     */
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fractions.
     */
    cursor?: FractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fractions.
     */
    distinct?: FractionScalarFieldEnum | FractionScalarFieldEnum[]
  }

  /**
   * Fraction findMany
   */
  export type FractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter, which Fractions to fetch.
     */
    where?: FractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fractions to fetch.
     */
    orderBy?: FractionOrderByWithRelationInput | FractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fractions.
     */
    cursor?: FractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fractions.
     */
    skip?: number
    distinct?: FractionScalarFieldEnum | FractionScalarFieldEnum[]
  }

  /**
   * Fraction create
   */
  export type FractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Fraction.
     */
    data: XOR<FractionCreateInput, FractionUncheckedCreateInput>
  }

  /**
   * Fraction createMany
   */
  export type FractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fractions.
     */
    data: FractionCreateManyInput | FractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fraction createManyAndReturn
   */
  export type FractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * The data used to create many Fractions.
     */
    data: FractionCreateManyInput | FractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fraction update
   */
  export type FractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Fraction.
     */
    data: XOR<FractionUpdateInput, FractionUncheckedUpdateInput>
    /**
     * Choose, which Fraction to update.
     */
    where: FractionWhereUniqueInput
  }

  /**
   * Fraction updateMany
   */
  export type FractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fractions.
     */
    data: XOR<FractionUpdateManyMutationInput, FractionUncheckedUpdateManyInput>
    /**
     * Filter which Fractions to update
     */
    where?: FractionWhereInput
    /**
     * Limit how many Fractions to update.
     */
    limit?: number
  }

  /**
   * Fraction updateManyAndReturn
   */
  export type FractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * The data used to update Fractions.
     */
    data: XOR<FractionUpdateManyMutationInput, FractionUncheckedUpdateManyInput>
    /**
     * Filter which Fractions to update
     */
    where?: FractionWhereInput
    /**
     * Limit how many Fractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fraction upsert
   */
  export type FractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Fraction to update in case it exists.
     */
    where: FractionWhereUniqueInput
    /**
     * In case the Fraction found by the `where` argument doesn't exist, create a new Fraction with this data.
     */
    create: XOR<FractionCreateInput, FractionUncheckedCreateInput>
    /**
     * In case the Fraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FractionUpdateInput, FractionUncheckedUpdateInput>
  }

  /**
   * Fraction delete
   */
  export type FractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
    /**
     * Filter which Fraction to delete.
     */
    where: FractionWhereUniqueInput
  }

  /**
   * Fraction deleteMany
   */
  export type FractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fractions to delete
     */
    where?: FractionWhereInput
    /**
     * Limit how many Fractions to delete.
     */
    limit?: number
  }

  /**
   * Fraction.transactions
   */
  export type Fraction$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Fraction.sellProposals
   */
  export type Fraction$sellProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    where?: SellProposalWhereInput
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    cursor?: SellProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * Fraction without action
   */
  export type FractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fraction
     */
    select?: FractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fraction
     */
    omit?: FractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FractionInclude<ExtArgs> | null
  }


  /**
   * Model SellProposal
   */

  export type AggregateSellProposal = {
    _count: SellProposalCountAggregateOutputType | null
    _avg: SellProposalAvgAggregateOutputType | null
    _sum: SellProposalSumAggregateOutputType | null
    _min: SellProposalMinAggregateOutputType | null
    _max: SellProposalMaxAggregateOutputType | null
  }

  export type SellProposalAvgAggregateOutputType = {
    shardsForSale: number | null
    pricePerShard: number | null
    remaining: number | null
  }

  export type SellProposalSumAggregateOutputType = {
    shardsForSale: number | null
    pricePerShard: number | null
    remaining: number | null
  }

  export type SellProposalMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fractionId: string | null
    walletId: string | null
    shardsForSale: number | null
    pricePerShard: number | null
    remaining: number | null
    executed: boolean | null
    createdAt: Date | null
  }

  export type SellProposalMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    fractionId: string | null
    walletId: string | null
    shardsForSale: number | null
    pricePerShard: number | null
    remaining: number | null
    executed: boolean | null
    createdAt: Date | null
  }

  export type SellProposalCountAggregateOutputType = {
    id: number
    propertyId: number
    fractionId: number
    walletId: number
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed: number
    buyers: number
    createdAt: number
    _all: number
  }


  export type SellProposalAvgAggregateInputType = {
    shardsForSale?: true
    pricePerShard?: true
    remaining?: true
  }

  export type SellProposalSumAggregateInputType = {
    shardsForSale?: true
    pricePerShard?: true
    remaining?: true
  }

  export type SellProposalMinAggregateInputType = {
    id?: true
    propertyId?: true
    fractionId?: true
    walletId?: true
    shardsForSale?: true
    pricePerShard?: true
    remaining?: true
    executed?: true
    createdAt?: true
  }

  export type SellProposalMaxAggregateInputType = {
    id?: true
    propertyId?: true
    fractionId?: true
    walletId?: true
    shardsForSale?: true
    pricePerShard?: true
    remaining?: true
    executed?: true
    createdAt?: true
  }

  export type SellProposalCountAggregateInputType = {
    id?: true
    propertyId?: true
    fractionId?: true
    walletId?: true
    shardsForSale?: true
    pricePerShard?: true
    remaining?: true
    executed?: true
    buyers?: true
    createdAt?: true
    _all?: true
  }

  export type SellProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellProposal to aggregate.
     */
    where?: SellProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellProposals to fetch.
     */
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellProposals
    **/
    _count?: true | SellProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellProposalMaxAggregateInputType
  }

  export type GetSellProposalAggregateType<T extends SellProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateSellProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellProposal[P]>
      : GetScalarType<T[P], AggregateSellProposal[P]>
  }




  export type SellProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellProposalWhereInput
    orderBy?: SellProposalOrderByWithAggregationInput | SellProposalOrderByWithAggregationInput[]
    by: SellProposalScalarFieldEnum[] | SellProposalScalarFieldEnum
    having?: SellProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellProposalCountAggregateInputType | true
    _avg?: SellProposalAvgAggregateInputType
    _sum?: SellProposalSumAggregateInputType
    _min?: SellProposalMinAggregateInputType
    _max?: SellProposalMaxAggregateInputType
  }

  export type SellProposalGroupByOutputType = {
    id: string
    propertyId: string
    fractionId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed: boolean
    buyers: JsonValue
    createdAt: Date
    _count: SellProposalCountAggregateOutputType | null
    _avg: SellProposalAvgAggregateOutputType | null
    _sum: SellProposalSumAggregateOutputType | null
    _min: SellProposalMinAggregateOutputType | null
    _max: SellProposalMaxAggregateOutputType | null
  }

  type GetSellProposalGroupByPayload<T extends SellProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellProposalGroupByOutputType[P]>
            : GetScalarType<T[P], SellProposalGroupByOutputType[P]>
        }
      >
    >


  export type SellProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fractionId?: boolean
    walletId?: boolean
    shardsForSale?: boolean
    pricePerShard?: boolean
    remaining?: boolean
    executed?: boolean
    buyers?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellProposal"]>

  export type SellProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fractionId?: boolean
    walletId?: boolean
    shardsForSale?: boolean
    pricePerShard?: boolean
    remaining?: boolean
    executed?: boolean
    buyers?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellProposal"]>

  export type SellProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    fractionId?: boolean
    walletId?: boolean
    shardsForSale?: boolean
    pricePerShard?: boolean
    remaining?: boolean
    executed?: boolean
    buyers?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellProposal"]>

  export type SellProposalSelectScalar = {
    id?: boolean
    propertyId?: boolean
    fractionId?: boolean
    walletId?: boolean
    shardsForSale?: boolean
    pricePerShard?: boolean
    remaining?: boolean
    executed?: boolean
    buyers?: boolean
    createdAt?: boolean
  }

  export type SellProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "fractionId" | "walletId" | "shardsForSale" | "pricePerShard" | "remaining" | "executed" | "buyers" | "createdAt", ExtArgs["result"]["sellProposal"]>
  export type SellProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type SellProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type SellProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    fraction?: boolean | FractionDefaultArgs<ExtArgs>
    creatorWallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $SellProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellProposal"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      fraction: Prisma.$FractionPayload<ExtArgs>
      creatorWallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      fractionId: string
      walletId: string
      shardsForSale: number
      pricePerShard: number
      remaining: number
      executed: boolean
      buyers: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["sellProposal"]>
    composites: {}
  }

  type SellProposalGetPayload<S extends boolean | null | undefined | SellProposalDefaultArgs> = $Result.GetResult<Prisma.$SellProposalPayload, S>

  type SellProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellProposalCountAggregateInputType | true
    }

  export interface SellProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellProposal'], meta: { name: 'SellProposal' } }
    /**
     * Find zero or one SellProposal that matches the filter.
     * @param {SellProposalFindUniqueArgs} args - Arguments to find a SellProposal
     * @example
     * // Get one SellProposal
     * const sellProposal = await prisma.sellProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellProposalFindUniqueArgs>(args: SelectSubset<T, SellProposalFindUniqueArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellProposalFindUniqueOrThrowArgs} args - Arguments to find a SellProposal
     * @example
     * // Get one SellProposal
     * const sellProposal = await prisma.sellProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, SellProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalFindFirstArgs} args - Arguments to find a SellProposal
     * @example
     * // Get one SellProposal
     * const sellProposal = await prisma.sellProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellProposalFindFirstArgs>(args?: SelectSubset<T, SellProposalFindFirstArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalFindFirstOrThrowArgs} args - Arguments to find a SellProposal
     * @example
     * // Get one SellProposal
     * const sellProposal = await prisma.sellProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, SellProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellProposals
     * const sellProposals = await prisma.sellProposal.findMany()
     * 
     * // Get first 10 SellProposals
     * const sellProposals = await prisma.sellProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellProposalWithIdOnly = await prisma.sellProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellProposalFindManyArgs>(args?: SelectSubset<T, SellProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellProposal.
     * @param {SellProposalCreateArgs} args - Arguments to create a SellProposal.
     * @example
     * // Create one SellProposal
     * const SellProposal = await prisma.sellProposal.create({
     *   data: {
     *     // ... data to create a SellProposal
     *   }
     * })
     * 
     */
    create<T extends SellProposalCreateArgs>(args: SelectSubset<T, SellProposalCreateArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellProposals.
     * @param {SellProposalCreateManyArgs} args - Arguments to create many SellProposals.
     * @example
     * // Create many SellProposals
     * const sellProposal = await prisma.sellProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellProposalCreateManyArgs>(args?: SelectSubset<T, SellProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellProposals and returns the data saved in the database.
     * @param {SellProposalCreateManyAndReturnArgs} args - Arguments to create many SellProposals.
     * @example
     * // Create many SellProposals
     * const sellProposal = await prisma.sellProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellProposals and only return the `id`
     * const sellProposalWithIdOnly = await prisma.sellProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, SellProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellProposal.
     * @param {SellProposalDeleteArgs} args - Arguments to delete one SellProposal.
     * @example
     * // Delete one SellProposal
     * const SellProposal = await prisma.sellProposal.delete({
     *   where: {
     *     // ... filter to delete one SellProposal
     *   }
     * })
     * 
     */
    delete<T extends SellProposalDeleteArgs>(args: SelectSubset<T, SellProposalDeleteArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellProposal.
     * @param {SellProposalUpdateArgs} args - Arguments to update one SellProposal.
     * @example
     * // Update one SellProposal
     * const sellProposal = await prisma.sellProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellProposalUpdateArgs>(args: SelectSubset<T, SellProposalUpdateArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellProposals.
     * @param {SellProposalDeleteManyArgs} args - Arguments to filter SellProposals to delete.
     * @example
     * // Delete a few SellProposals
     * const { count } = await prisma.sellProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellProposalDeleteManyArgs>(args?: SelectSubset<T, SellProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellProposals
     * const sellProposal = await prisma.sellProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellProposalUpdateManyArgs>(args: SelectSubset<T, SellProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellProposals and returns the data updated in the database.
     * @param {SellProposalUpdateManyAndReturnArgs} args - Arguments to update many SellProposals.
     * @example
     * // Update many SellProposals
     * const sellProposal = await prisma.sellProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellProposals and only return the `id`
     * const sellProposalWithIdOnly = await prisma.sellProposal.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, SellProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellProposal.
     * @param {SellProposalUpsertArgs} args - Arguments to update or create a SellProposal.
     * @example
     * // Update or create a SellProposal
     * const sellProposal = await prisma.sellProposal.upsert({
     *   create: {
     *     // ... data to create a SellProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellProposal we want to update
     *   }
     * })
     */
    upsert<T extends SellProposalUpsertArgs>(args: SelectSubset<T, SellProposalUpsertArgs<ExtArgs>>): Prisma__SellProposalClient<$Result.GetResult<Prisma.$SellProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalCountArgs} args - Arguments to filter SellProposals to count.
     * @example
     * // Count the number of SellProposals
     * const count = await prisma.sellProposal.count({
     *   where: {
     *     // ... the filter for the SellProposals we want to count
     *   }
     * })
    **/
    count<T extends SellProposalCountArgs>(
      args?: Subset<T, SellProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellProposalAggregateArgs>(args: Subset<T, SellProposalAggregateArgs>): Prisma.PrismaPromise<GetSellProposalAggregateType<T>>

    /**
     * Group by SellProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellProposalGroupByArgs} args - Group by arguments.
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
      T extends SellProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellProposalGroupByArgs['orderBy'] }
        : { orderBy?: SellProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellProposal model
   */
  readonly fields: SellProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fraction<T extends FractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FractionDefaultArgs<ExtArgs>>): Prisma__FractionClient<$Result.GetResult<Prisma.$FractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creatorWallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SellProposal model
   */
  interface SellProposalFieldRefs {
    readonly id: FieldRef<"SellProposal", 'String'>
    readonly propertyId: FieldRef<"SellProposal", 'String'>
    readonly fractionId: FieldRef<"SellProposal", 'String'>
    readonly walletId: FieldRef<"SellProposal", 'String'>
    readonly shardsForSale: FieldRef<"SellProposal", 'Int'>
    readonly pricePerShard: FieldRef<"SellProposal", 'Float'>
    readonly remaining: FieldRef<"SellProposal", 'Int'>
    readonly executed: FieldRef<"SellProposal", 'Boolean'>
    readonly buyers: FieldRef<"SellProposal", 'Json'>
    readonly createdAt: FieldRef<"SellProposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellProposal findUnique
   */
  export type SellProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter, which SellProposal to fetch.
     */
    where: SellProposalWhereUniqueInput
  }

  /**
   * SellProposal findUniqueOrThrow
   */
  export type SellProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter, which SellProposal to fetch.
     */
    where: SellProposalWhereUniqueInput
  }

  /**
   * SellProposal findFirst
   */
  export type SellProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter, which SellProposal to fetch.
     */
    where?: SellProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellProposals to fetch.
     */
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellProposals.
     */
    cursor?: SellProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellProposals.
     */
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * SellProposal findFirstOrThrow
   */
  export type SellProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter, which SellProposal to fetch.
     */
    where?: SellProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellProposals to fetch.
     */
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellProposals.
     */
    cursor?: SellProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellProposals.
     */
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * SellProposal findMany
   */
  export type SellProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter, which SellProposals to fetch.
     */
    where?: SellProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellProposals to fetch.
     */
    orderBy?: SellProposalOrderByWithRelationInput | SellProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellProposals.
     */
    cursor?: SellProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellProposals.
     */
    skip?: number
    distinct?: SellProposalScalarFieldEnum | SellProposalScalarFieldEnum[]
  }

  /**
   * SellProposal create
   */
  export type SellProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a SellProposal.
     */
    data: XOR<SellProposalCreateInput, SellProposalUncheckedCreateInput>
  }

  /**
   * SellProposal createMany
   */
  export type SellProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellProposals.
     */
    data: SellProposalCreateManyInput | SellProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellProposal createManyAndReturn
   */
  export type SellProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * The data used to create many SellProposals.
     */
    data: SellProposalCreateManyInput | SellProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellProposal update
   */
  export type SellProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a SellProposal.
     */
    data: XOR<SellProposalUpdateInput, SellProposalUncheckedUpdateInput>
    /**
     * Choose, which SellProposal to update.
     */
    where: SellProposalWhereUniqueInput
  }

  /**
   * SellProposal updateMany
   */
  export type SellProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellProposals.
     */
    data: XOR<SellProposalUpdateManyMutationInput, SellProposalUncheckedUpdateManyInput>
    /**
     * Filter which SellProposals to update
     */
    where?: SellProposalWhereInput
    /**
     * Limit how many SellProposals to update.
     */
    limit?: number
  }

  /**
   * SellProposal updateManyAndReturn
   */
  export type SellProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * The data used to update SellProposals.
     */
    data: XOR<SellProposalUpdateManyMutationInput, SellProposalUncheckedUpdateManyInput>
    /**
     * Filter which SellProposals to update
     */
    where?: SellProposalWhereInput
    /**
     * Limit how many SellProposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellProposal upsert
   */
  export type SellProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the SellProposal to update in case it exists.
     */
    where: SellProposalWhereUniqueInput
    /**
     * In case the SellProposal found by the `where` argument doesn't exist, create a new SellProposal with this data.
     */
    create: XOR<SellProposalCreateInput, SellProposalUncheckedCreateInput>
    /**
     * In case the SellProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellProposalUpdateInput, SellProposalUncheckedUpdateInput>
  }

  /**
   * SellProposal delete
   */
  export type SellProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
    /**
     * Filter which SellProposal to delete.
     */
    where: SellProposalWhereUniqueInput
  }

  /**
   * SellProposal deleteMany
   */
  export type SellProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellProposals to delete
     */
    where?: SellProposalWhereInput
    /**
     * Limit how many SellProposals to delete.
     */
    limit?: number
  }

  /**
   * SellProposal without action
   */
  export type SellProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellProposal
     */
    select?: SellProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellProposal
     */
    omit?: SellProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellProposalInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    executed: boolean | null
    createdAt: Date | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    executed: boolean | null
    createdAt: Date | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    propertyId: number
    creatorId: number
    title: number
    description: number
    votes: number
    executed: number
    createdAt: number
    _all: number
  }


  export type ProposalMinAggregateInputType = {
    id?: true
    propertyId?: true
    creatorId?: true
    title?: true
    description?: true
    executed?: true
    createdAt?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    propertyId?: true
    creatorId?: true
    title?: true
    description?: true
    executed?: true
    createdAt?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    propertyId?: true
    creatorId?: true
    title?: true
    description?: true
    votes?: true
    executed?: true
    createdAt?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    propertyId: string
    creatorId: string
    title: string
    description: string
    votes: JsonValue
    executed: boolean
    createdAt: Date
    _count: ProposalCountAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    votes?: boolean
    executed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    votes?: boolean
    executed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    votes?: boolean
    executed?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    propertyId?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    votes?: boolean
    executed?: boolean
    createdAt?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "creatorId" | "title" | "description" | "votes" | "executed" | "createdAt", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      creatorId: string
      title: string
      description: string
      votes: Prisma.JsonValue
      executed: boolean
      createdAt: Date
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly propertyId: FieldRef<"Proposal", 'String'>
    readonly creatorId: FieldRef<"Proposal", 'String'>
    readonly title: FieldRef<"Proposal", 'String'>
    readonly description: FieldRef<"Proposal", 'String'>
    readonly votes: FieldRef<"Proposal", 'Json'>
    readonly executed: FieldRef<"Proposal", 'Boolean'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type ListingSumAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    sellerId: string | null
    amount: number | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    sellerId: string | null
    amount: number | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    propertyId: number
    sellerId: number
    amount: number
    price: number
    active: number
    createdAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    amount?: true
    price?: true
  }

  export type ListingSumAggregateInputType = {
    amount?: true
    price?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    amount?: true
    price?: true
    active?: true
    createdAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    amount?: true
    price?: true
    active?: true
    createdAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    propertyId?: true
    sellerId?: true
    amount?: true
    price?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    propertyId: string
    sellerId: string
    amount: number
    price: number
    active: boolean
    createdAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    amount?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    amount?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    amount?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    propertyId?: boolean
    sellerId?: boolean
    amount?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "sellerId" | "amount" | "price" | "active" | "createdAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      sellerId: string
      amount: number
      price: number
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly propertyId: FieldRef<"Listing", 'String'>
    readonly sellerId: FieldRef<"Listing", 'String'>
    readonly amount: FieldRef<"Listing", 'Int'>
    readonly price: FieldRef<"Listing", 'Float'>
    readonly active: FieldRef<"Listing", 'Boolean'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model PendingUser
   */

  export type AggregatePendingUser = {
    _count: PendingUserCountAggregateOutputType | null
    _min: PendingUserMinAggregateOutputType | null
    _max: PendingUserMaxAggregateOutputType | null
  }

  export type PendingUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    otp: string | null
    createdAt: Date | null
  }

  export type PendingUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    otp: string | null
    createdAt: Date | null
  }

  export type PendingUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    otp: number
    createdAt: number
    _all: number
  }


  export type PendingUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    otp?: true
    createdAt?: true
  }

  export type PendingUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    otp?: true
    createdAt?: true
  }

  export type PendingUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    otp?: true
    createdAt?: true
    _all?: true
  }

  export type PendingUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingUser to aggregate.
     */
    where?: PendingUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingUsers to fetch.
     */
    orderBy?: PendingUserOrderByWithRelationInput | PendingUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingUsers
    **/
    _count?: true | PendingUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingUserMaxAggregateInputType
  }

  export type GetPendingUserAggregateType<T extends PendingUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingUser[P]>
      : GetScalarType<T[P], AggregatePendingUser[P]>
  }




  export type PendingUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingUserWhereInput
    orderBy?: PendingUserOrderByWithAggregationInput | PendingUserOrderByWithAggregationInput[]
    by: PendingUserScalarFieldEnum[] | PendingUserScalarFieldEnum
    having?: PendingUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingUserCountAggregateInputType | true
    _min?: PendingUserMinAggregateInputType
    _max?: PendingUserMaxAggregateInputType
  }

  export type PendingUserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    otp: string
    createdAt: Date
    _count: PendingUserCountAggregateOutputType | null
    _min: PendingUserMinAggregateOutputType | null
    _max: PendingUserMaxAggregateOutputType | null
  }

  type GetPendingUserGroupByPayload<T extends PendingUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingUserGroupByOutputType[P]>
            : GetScalarType<T[P], PendingUserGroupByOutputType[P]>
        }
      >
    >


  export type PendingUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendingUser"]>

  export type PendingUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendingUser"]>

  export type PendingUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendingUser"]>

  export type PendingUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    otp?: boolean
    createdAt?: boolean
  }

  export type PendingUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "otp" | "createdAt", ExtArgs["result"]["pendingUser"]>

  export type $PendingUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      otp: string
      createdAt: Date
    }, ExtArgs["result"]["pendingUser"]>
    composites: {}
  }

  type PendingUserGetPayload<S extends boolean | null | undefined | PendingUserDefaultArgs> = $Result.GetResult<Prisma.$PendingUserPayload, S>

  type PendingUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendingUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendingUserCountAggregateInputType | true
    }

  export interface PendingUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingUser'], meta: { name: 'PendingUser' } }
    /**
     * Find zero or one PendingUser that matches the filter.
     * @param {PendingUserFindUniqueArgs} args - Arguments to find a PendingUser
     * @example
     * // Get one PendingUser
     * const pendingUser = await prisma.pendingUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingUserFindUniqueArgs>(args: SelectSubset<T, PendingUserFindUniqueArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendingUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendingUserFindUniqueOrThrowArgs} args - Arguments to find a PendingUser
     * @example
     * // Get one PendingUser
     * const pendingUser = await prisma.pendingUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingUserFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserFindFirstArgs} args - Arguments to find a PendingUser
     * @example
     * // Get one PendingUser
     * const pendingUser = await prisma.pendingUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingUserFindFirstArgs>(args?: SelectSubset<T, PendingUserFindFirstArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserFindFirstOrThrowArgs} args - Arguments to find a PendingUser
     * @example
     * // Get one PendingUser
     * const pendingUser = await prisma.pendingUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingUserFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendingUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingUsers
     * const pendingUsers = await prisma.pendingUser.findMany()
     * 
     * // Get first 10 PendingUsers
     * const pendingUsers = await prisma.pendingUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingUserWithIdOnly = await prisma.pendingUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingUserFindManyArgs>(args?: SelectSubset<T, PendingUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendingUser.
     * @param {PendingUserCreateArgs} args - Arguments to create a PendingUser.
     * @example
     * // Create one PendingUser
     * const PendingUser = await prisma.pendingUser.create({
     *   data: {
     *     // ... data to create a PendingUser
     *   }
     * })
     * 
     */
    create<T extends PendingUserCreateArgs>(args: SelectSubset<T, PendingUserCreateArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendingUsers.
     * @param {PendingUserCreateManyArgs} args - Arguments to create many PendingUsers.
     * @example
     * // Create many PendingUsers
     * const pendingUser = await prisma.pendingUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingUserCreateManyArgs>(args?: SelectSubset<T, PendingUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingUsers and returns the data saved in the database.
     * @param {PendingUserCreateManyAndReturnArgs} args - Arguments to create many PendingUsers.
     * @example
     * // Create many PendingUsers
     * const pendingUser = await prisma.pendingUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingUsers and only return the `id`
     * const pendingUserWithIdOnly = await prisma.pendingUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingUserCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendingUser.
     * @param {PendingUserDeleteArgs} args - Arguments to delete one PendingUser.
     * @example
     * // Delete one PendingUser
     * const PendingUser = await prisma.pendingUser.delete({
     *   where: {
     *     // ... filter to delete one PendingUser
     *   }
     * })
     * 
     */
    delete<T extends PendingUserDeleteArgs>(args: SelectSubset<T, PendingUserDeleteArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendingUser.
     * @param {PendingUserUpdateArgs} args - Arguments to update one PendingUser.
     * @example
     * // Update one PendingUser
     * const pendingUser = await prisma.pendingUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingUserUpdateArgs>(args: SelectSubset<T, PendingUserUpdateArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendingUsers.
     * @param {PendingUserDeleteManyArgs} args - Arguments to filter PendingUsers to delete.
     * @example
     * // Delete a few PendingUsers
     * const { count } = await prisma.pendingUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingUserDeleteManyArgs>(args?: SelectSubset<T, PendingUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingUsers
     * const pendingUser = await prisma.pendingUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingUserUpdateManyArgs>(args: SelectSubset<T, PendingUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingUsers and returns the data updated in the database.
     * @param {PendingUserUpdateManyAndReturnArgs} args - Arguments to update many PendingUsers.
     * @example
     * // Update many PendingUsers
     * const pendingUser = await prisma.pendingUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendingUsers and only return the `id`
     * const pendingUserWithIdOnly = await prisma.pendingUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends PendingUserUpdateManyAndReturnArgs>(args: SelectSubset<T, PendingUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendingUser.
     * @param {PendingUserUpsertArgs} args - Arguments to update or create a PendingUser.
     * @example
     * // Update or create a PendingUser
     * const pendingUser = await prisma.pendingUser.upsert({
     *   create: {
     *     // ... data to create a PendingUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingUser we want to update
     *   }
     * })
     */
    upsert<T extends PendingUserUpsertArgs>(args: SelectSubset<T, PendingUserUpsertArgs<ExtArgs>>): Prisma__PendingUserClient<$Result.GetResult<Prisma.$PendingUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserCountArgs} args - Arguments to filter PendingUsers to count.
     * @example
     * // Count the number of PendingUsers
     * const count = await prisma.pendingUser.count({
     *   where: {
     *     // ... the filter for the PendingUsers we want to count
     *   }
     * })
    **/
    count<T extends PendingUserCountArgs>(
      args?: Subset<T, PendingUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingUserAggregateArgs>(args: Subset<T, PendingUserAggregateArgs>): Prisma.PrismaPromise<GetPendingUserAggregateType<T>>

    /**
     * Group by PendingUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUserGroupByArgs} args - Group by arguments.
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
      T extends PendingUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingUserGroupByArgs['orderBy'] }
        : { orderBy?: PendingUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingUser model
   */
  readonly fields: PendingUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PendingUser model
   */
  interface PendingUserFieldRefs {
    readonly id: FieldRef<"PendingUser", 'String'>
    readonly email: FieldRef<"PendingUser", 'String'>
    readonly password: FieldRef<"PendingUser", 'String'>
    readonly firstName: FieldRef<"PendingUser", 'String'>
    readonly lastName: FieldRef<"PendingUser", 'String'>
    readonly otp: FieldRef<"PendingUser", 'String'>
    readonly createdAt: FieldRef<"PendingUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingUser findUnique
   */
  export type PendingUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter, which PendingUser to fetch.
     */
    where: PendingUserWhereUniqueInput
  }

  /**
   * PendingUser findUniqueOrThrow
   */
  export type PendingUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter, which PendingUser to fetch.
     */
    where: PendingUserWhereUniqueInput
  }

  /**
   * PendingUser findFirst
   */
  export type PendingUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter, which PendingUser to fetch.
     */
    where?: PendingUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingUsers to fetch.
     */
    orderBy?: PendingUserOrderByWithRelationInput | PendingUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingUsers.
     */
    cursor?: PendingUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingUsers.
     */
    distinct?: PendingUserScalarFieldEnum | PendingUserScalarFieldEnum[]
  }

  /**
   * PendingUser findFirstOrThrow
   */
  export type PendingUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter, which PendingUser to fetch.
     */
    where?: PendingUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingUsers to fetch.
     */
    orderBy?: PendingUserOrderByWithRelationInput | PendingUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingUsers.
     */
    cursor?: PendingUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingUsers.
     */
    distinct?: PendingUserScalarFieldEnum | PendingUserScalarFieldEnum[]
  }

  /**
   * PendingUser findMany
   */
  export type PendingUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter, which PendingUsers to fetch.
     */
    where?: PendingUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingUsers to fetch.
     */
    orderBy?: PendingUserOrderByWithRelationInput | PendingUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingUsers.
     */
    cursor?: PendingUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingUsers.
     */
    skip?: number
    distinct?: PendingUserScalarFieldEnum | PendingUserScalarFieldEnum[]
  }

  /**
   * PendingUser create
   */
  export type PendingUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * The data needed to create a PendingUser.
     */
    data: XOR<PendingUserCreateInput, PendingUserUncheckedCreateInput>
  }

  /**
   * PendingUser createMany
   */
  export type PendingUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingUsers.
     */
    data: PendingUserCreateManyInput | PendingUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingUser createManyAndReturn
   */
  export type PendingUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * The data used to create many PendingUsers.
     */
    data: PendingUserCreateManyInput | PendingUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingUser update
   */
  export type PendingUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * The data needed to update a PendingUser.
     */
    data: XOR<PendingUserUpdateInput, PendingUserUncheckedUpdateInput>
    /**
     * Choose, which PendingUser to update.
     */
    where: PendingUserWhereUniqueInput
  }

  /**
   * PendingUser updateMany
   */
  export type PendingUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingUsers.
     */
    data: XOR<PendingUserUpdateManyMutationInput, PendingUserUncheckedUpdateManyInput>
    /**
     * Filter which PendingUsers to update
     */
    where?: PendingUserWhereInput
    /**
     * Limit how many PendingUsers to update.
     */
    limit?: number
  }

  /**
   * PendingUser updateManyAndReturn
   */
  export type PendingUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * The data used to update PendingUsers.
     */
    data: XOR<PendingUserUpdateManyMutationInput, PendingUserUncheckedUpdateManyInput>
    /**
     * Filter which PendingUsers to update
     */
    where?: PendingUserWhereInput
    /**
     * Limit how many PendingUsers to update.
     */
    limit?: number
  }

  /**
   * PendingUser upsert
   */
  export type PendingUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * The filter to search for the PendingUser to update in case it exists.
     */
    where: PendingUserWhereUniqueInput
    /**
     * In case the PendingUser found by the `where` argument doesn't exist, create a new PendingUser with this data.
     */
    create: XOR<PendingUserCreateInput, PendingUserUncheckedCreateInput>
    /**
     * In case the PendingUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingUserUpdateInput, PendingUserUncheckedUpdateInput>
  }

  /**
   * PendingUser delete
   */
  export type PendingUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
    /**
     * Filter which PendingUser to delete.
     */
    where: PendingUserWhereUniqueInput
  }

  /**
   * PendingUser deleteMany
   */
  export type PendingUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingUsers to delete
     */
    where?: PendingUserWhereInput
    /**
     * Limit how many PendingUsers to delete.
     */
    limit?: number
  }

  /**
   * PendingUser without action
   */
  export type PendingUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingUser
     */
    select?: PendingUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingUser
     */
    omit?: PendingUserOmit<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    createdAt: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    email: string
    otp: string
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "createdAt", ExtArgs["result"]["passwordReset"]>

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly email: FieldRef<"PasswordReset", 'String'>
    readonly otp: FieldRef<"PasswordReset", 'String'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
  }


  /**
   * Model TokenMapping
   */

  export type AggregateTokenMapping = {
    _count: TokenMappingCountAggregateOutputType | null
    _avg: TokenMappingAvgAggregateOutputType | null
    _sum: TokenMappingSumAggregateOutputType | null
    _min: TokenMappingMinAggregateOutputType | null
    _max: TokenMappingMaxAggregateOutputType | null
  }

  export type TokenMappingAvgAggregateOutputType = {
    tokenId: number | null
  }

  export type TokenMappingSumAggregateOutputType = {
    tokenId: number | null
  }

  export type TokenMappingMinAggregateOutputType = {
    id: string | null
    dbId: string | null
    tokenId: number | null
    createdAt: Date | null
  }

  export type TokenMappingMaxAggregateOutputType = {
    id: string | null
    dbId: string | null
    tokenId: number | null
    createdAt: Date | null
  }

  export type TokenMappingCountAggregateOutputType = {
    id: number
    dbId: number
    tokenId: number
    createdAt: number
    _all: number
  }


  export type TokenMappingAvgAggregateInputType = {
    tokenId?: true
  }

  export type TokenMappingSumAggregateInputType = {
    tokenId?: true
  }

  export type TokenMappingMinAggregateInputType = {
    id?: true
    dbId?: true
    tokenId?: true
    createdAt?: true
  }

  export type TokenMappingMaxAggregateInputType = {
    id?: true
    dbId?: true
    tokenId?: true
    createdAt?: true
  }

  export type TokenMappingCountAggregateInputType = {
    id?: true
    dbId?: true
    tokenId?: true
    createdAt?: true
    _all?: true
  }

  export type TokenMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenMapping to aggregate.
     */
    where?: TokenMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMappings to fetch.
     */
    orderBy?: TokenMappingOrderByWithRelationInput | TokenMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenMappings
    **/
    _count?: true | TokenMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMappingMaxAggregateInputType
  }

  export type GetTokenMappingAggregateType<T extends TokenMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenMapping[P]>
      : GetScalarType<T[P], AggregateTokenMapping[P]>
  }




  export type TokenMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenMappingWhereInput
    orderBy?: TokenMappingOrderByWithAggregationInput | TokenMappingOrderByWithAggregationInput[]
    by: TokenMappingScalarFieldEnum[] | TokenMappingScalarFieldEnum
    having?: TokenMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenMappingCountAggregateInputType | true
    _avg?: TokenMappingAvgAggregateInputType
    _sum?: TokenMappingSumAggregateInputType
    _min?: TokenMappingMinAggregateInputType
    _max?: TokenMappingMaxAggregateInputType
  }

  export type TokenMappingGroupByOutputType = {
    id: string
    dbId: string
    tokenId: number
    createdAt: Date
    _count: TokenMappingCountAggregateOutputType | null
    _avg: TokenMappingAvgAggregateOutputType | null
    _sum: TokenMappingSumAggregateOutputType | null
    _min: TokenMappingMinAggregateOutputType | null
    _max: TokenMappingMaxAggregateOutputType | null
  }

  type GetTokenMappingGroupByPayload<T extends TokenMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenMappingGroupByOutputType[P]>
            : GetScalarType<T[P], TokenMappingGroupByOutputType[P]>
        }
      >
    >


  export type TokenMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbId?: boolean
    tokenId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenMapping"]>

  export type TokenMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbId?: boolean
    tokenId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenMapping"]>

  export type TokenMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbId?: boolean
    tokenId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenMapping"]>

  export type TokenMappingSelectScalar = {
    id?: boolean
    dbId?: boolean
    tokenId?: boolean
    createdAt?: boolean
  }

  export type TokenMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dbId" | "tokenId" | "createdAt", ExtArgs["result"]["tokenMapping"]>

  export type $TokenMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dbId: string
      tokenId: number
      createdAt: Date
    }, ExtArgs["result"]["tokenMapping"]>
    composites: {}
  }

  type TokenMappingGetPayload<S extends boolean | null | undefined | TokenMappingDefaultArgs> = $Result.GetResult<Prisma.$TokenMappingPayload, S>

  type TokenMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenMappingCountAggregateInputType | true
    }

  export interface TokenMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenMapping'], meta: { name: 'TokenMapping' } }
    /**
     * Find zero or one TokenMapping that matches the filter.
     * @param {TokenMappingFindUniqueArgs} args - Arguments to find a TokenMapping
     * @example
     * // Get one TokenMapping
     * const tokenMapping = await prisma.tokenMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenMappingFindUniqueArgs>(args: SelectSubset<T, TokenMappingFindUniqueArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenMappingFindUniqueOrThrowArgs} args - Arguments to find a TokenMapping
     * @example
     * // Get one TokenMapping
     * const tokenMapping = await prisma.tokenMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingFindFirstArgs} args - Arguments to find a TokenMapping
     * @example
     * // Get one TokenMapping
     * const tokenMapping = await prisma.tokenMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenMappingFindFirstArgs>(args?: SelectSubset<T, TokenMappingFindFirstArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingFindFirstOrThrowArgs} args - Arguments to find a TokenMapping
     * @example
     * // Get one TokenMapping
     * const tokenMapping = await prisma.tokenMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenMappings
     * const tokenMappings = await prisma.tokenMapping.findMany()
     * 
     * // Get first 10 TokenMappings
     * const tokenMappings = await prisma.tokenMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenMappingWithIdOnly = await prisma.tokenMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenMappingFindManyArgs>(args?: SelectSubset<T, TokenMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenMapping.
     * @param {TokenMappingCreateArgs} args - Arguments to create a TokenMapping.
     * @example
     * // Create one TokenMapping
     * const TokenMapping = await prisma.tokenMapping.create({
     *   data: {
     *     // ... data to create a TokenMapping
     *   }
     * })
     * 
     */
    create<T extends TokenMappingCreateArgs>(args: SelectSubset<T, TokenMappingCreateArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenMappings.
     * @param {TokenMappingCreateManyArgs} args - Arguments to create many TokenMappings.
     * @example
     * // Create many TokenMappings
     * const tokenMapping = await prisma.tokenMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenMappingCreateManyArgs>(args?: SelectSubset<T, TokenMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenMappings and returns the data saved in the database.
     * @param {TokenMappingCreateManyAndReturnArgs} args - Arguments to create many TokenMappings.
     * @example
     * // Create many TokenMappings
     * const tokenMapping = await prisma.tokenMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenMappings and only return the `id`
     * const tokenMappingWithIdOnly = await prisma.tokenMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenMapping.
     * @param {TokenMappingDeleteArgs} args - Arguments to delete one TokenMapping.
     * @example
     * // Delete one TokenMapping
     * const TokenMapping = await prisma.tokenMapping.delete({
     *   where: {
     *     // ... filter to delete one TokenMapping
     *   }
     * })
     * 
     */
    delete<T extends TokenMappingDeleteArgs>(args: SelectSubset<T, TokenMappingDeleteArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenMapping.
     * @param {TokenMappingUpdateArgs} args - Arguments to update one TokenMapping.
     * @example
     * // Update one TokenMapping
     * const tokenMapping = await prisma.tokenMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenMappingUpdateArgs>(args: SelectSubset<T, TokenMappingUpdateArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenMappings.
     * @param {TokenMappingDeleteManyArgs} args - Arguments to filter TokenMappings to delete.
     * @example
     * // Delete a few TokenMappings
     * const { count } = await prisma.tokenMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenMappingDeleteManyArgs>(args?: SelectSubset<T, TokenMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenMappings
     * const tokenMapping = await prisma.tokenMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenMappingUpdateManyArgs>(args: SelectSubset<T, TokenMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenMappings and returns the data updated in the database.
     * @param {TokenMappingUpdateManyAndReturnArgs} args - Arguments to update many TokenMappings.
     * @example
     * // Update many TokenMappings
     * const tokenMapping = await prisma.tokenMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenMappings and only return the `id`
     * const tokenMappingWithIdOnly = await prisma.tokenMapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenMapping.
     * @param {TokenMappingUpsertArgs} args - Arguments to update or create a TokenMapping.
     * @example
     * // Update or create a TokenMapping
     * const tokenMapping = await prisma.tokenMapping.upsert({
     *   create: {
     *     // ... data to create a TokenMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenMapping we want to update
     *   }
     * })
     */
    upsert<T extends TokenMappingUpsertArgs>(args: SelectSubset<T, TokenMappingUpsertArgs<ExtArgs>>): Prisma__TokenMappingClient<$Result.GetResult<Prisma.$TokenMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingCountArgs} args - Arguments to filter TokenMappings to count.
     * @example
     * // Count the number of TokenMappings
     * const count = await prisma.tokenMapping.count({
     *   where: {
     *     // ... the filter for the TokenMappings we want to count
     *   }
     * })
    **/
    count<T extends TokenMappingCountArgs>(
      args?: Subset<T, TokenMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenMappingAggregateArgs>(args: Subset<T, TokenMappingAggregateArgs>): Prisma.PrismaPromise<GetTokenMappingAggregateType<T>>

    /**
     * Group by TokenMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMappingGroupByArgs} args - Group by arguments.
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
      T extends TokenMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenMappingGroupByArgs['orderBy'] }
        : { orderBy?: TokenMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenMapping model
   */
  readonly fields: TokenMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TokenMapping model
   */
  interface TokenMappingFieldRefs {
    readonly id: FieldRef<"TokenMapping", 'String'>
    readonly dbId: FieldRef<"TokenMapping", 'String'>
    readonly tokenId: FieldRef<"TokenMapping", 'Int'>
    readonly createdAt: FieldRef<"TokenMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenMapping findUnique
   */
  export type TokenMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter, which TokenMapping to fetch.
     */
    where: TokenMappingWhereUniqueInput
  }

  /**
   * TokenMapping findUniqueOrThrow
   */
  export type TokenMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter, which TokenMapping to fetch.
     */
    where: TokenMappingWhereUniqueInput
  }

  /**
   * TokenMapping findFirst
   */
  export type TokenMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter, which TokenMapping to fetch.
     */
    where?: TokenMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMappings to fetch.
     */
    orderBy?: TokenMappingOrderByWithRelationInput | TokenMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenMappings.
     */
    cursor?: TokenMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenMappings.
     */
    distinct?: TokenMappingScalarFieldEnum | TokenMappingScalarFieldEnum[]
  }

  /**
   * TokenMapping findFirstOrThrow
   */
  export type TokenMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter, which TokenMapping to fetch.
     */
    where?: TokenMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMappings to fetch.
     */
    orderBy?: TokenMappingOrderByWithRelationInput | TokenMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenMappings.
     */
    cursor?: TokenMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenMappings.
     */
    distinct?: TokenMappingScalarFieldEnum | TokenMappingScalarFieldEnum[]
  }

  /**
   * TokenMapping findMany
   */
  export type TokenMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter, which TokenMappings to fetch.
     */
    where?: TokenMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMappings to fetch.
     */
    orderBy?: TokenMappingOrderByWithRelationInput | TokenMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenMappings.
     */
    cursor?: TokenMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMappings.
     */
    skip?: number
    distinct?: TokenMappingScalarFieldEnum | TokenMappingScalarFieldEnum[]
  }

  /**
   * TokenMapping create
   */
  export type TokenMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * The data needed to create a TokenMapping.
     */
    data: XOR<TokenMappingCreateInput, TokenMappingUncheckedCreateInput>
  }

  /**
   * TokenMapping createMany
   */
  export type TokenMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenMappings.
     */
    data: TokenMappingCreateManyInput | TokenMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenMapping createManyAndReturn
   */
  export type TokenMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * The data used to create many TokenMappings.
     */
    data: TokenMappingCreateManyInput | TokenMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenMapping update
   */
  export type TokenMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * The data needed to update a TokenMapping.
     */
    data: XOR<TokenMappingUpdateInput, TokenMappingUncheckedUpdateInput>
    /**
     * Choose, which TokenMapping to update.
     */
    where: TokenMappingWhereUniqueInput
  }

  /**
   * TokenMapping updateMany
   */
  export type TokenMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenMappings.
     */
    data: XOR<TokenMappingUpdateManyMutationInput, TokenMappingUncheckedUpdateManyInput>
    /**
     * Filter which TokenMappings to update
     */
    where?: TokenMappingWhereInput
    /**
     * Limit how many TokenMappings to update.
     */
    limit?: number
  }

  /**
   * TokenMapping updateManyAndReturn
   */
  export type TokenMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * The data used to update TokenMappings.
     */
    data: XOR<TokenMappingUpdateManyMutationInput, TokenMappingUncheckedUpdateManyInput>
    /**
     * Filter which TokenMappings to update
     */
    where?: TokenMappingWhereInput
    /**
     * Limit how many TokenMappings to update.
     */
    limit?: number
  }

  /**
   * TokenMapping upsert
   */
  export type TokenMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * The filter to search for the TokenMapping to update in case it exists.
     */
    where: TokenMappingWhereUniqueInput
    /**
     * In case the TokenMapping found by the `where` argument doesn't exist, create a new TokenMapping with this data.
     */
    create: XOR<TokenMappingCreateInput, TokenMappingUncheckedCreateInput>
    /**
     * In case the TokenMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenMappingUpdateInput, TokenMappingUncheckedUpdateInput>
  }

  /**
   * TokenMapping delete
   */
  export type TokenMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
    /**
     * Filter which TokenMapping to delete.
     */
    where: TokenMappingWhereUniqueInput
  }

  /**
   * TokenMapping deleteMany
   */
  export type TokenMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenMappings to delete
     */
    where?: TokenMappingWhereInput
    /**
     * Limit how many TokenMappings to delete.
     */
    limit?: number
  }

  /**
   * TokenMapping without action
   */
  export type TokenMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenMapping
     */
    select?: TokenMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenMapping
     */
    omit?: TokenMappingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    address: 'address',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    fromWalletId: 'fromWalletId',
    amount: 'amount',
    distributed: 'distributed',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    propertyId: 'propertyId',
    fractionId: 'fractionId',
    type: 'type',
    amount: 'amount',
    hash: 'hash',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    type: 'type',
    referenceId: 'referenceId',
    walletId: 'walletId',
    createdAt: 'createdAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    valuation: 'valuation',
    nftAddress: 'nftAddress',
    ownerId: 'ownerId',
    imageUrl: 'imageUrl',
    status: 'status',
    tokenId: 'tokenId',
    createdAt: 'createdAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const FractionScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    walletId: 'walletId',
    supply: 'supply',
    createdAt: 'createdAt'
  };

  export type FractionScalarFieldEnum = (typeof FractionScalarFieldEnum)[keyof typeof FractionScalarFieldEnum]


  export const SellProposalScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    fractionId: 'fractionId',
    walletId: 'walletId',
    shardsForSale: 'shardsForSale',
    pricePerShard: 'pricePerShard',
    remaining: 'remaining',
    executed: 'executed',
    buyers: 'buyers',
    createdAt: 'createdAt'
  };

  export type SellProposalScalarFieldEnum = (typeof SellProposalScalarFieldEnum)[keyof typeof SellProposalScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    creatorId: 'creatorId',
    title: 'title',
    description: 'description',
    votes: 'votes',
    executed: 'executed',
    createdAt: 'createdAt'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    sellerId: 'sellerId',
    amount: 'amount',
    price: 'price',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const PendingUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    otp: 'otp',
    createdAt: 'createdAt'
  };

  export type PendingUserScalarFieldEnum = (typeof PendingUserScalarFieldEnum)[keyof typeof PendingUserScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const TokenMappingScalarFieldEnum: {
    id: 'id',
    dbId: 'dbId',
    tokenId: 'tokenId',
    createdAt: 'createdAt'
  };

  export type TokenMappingScalarFieldEnum = (typeof TokenMappingScalarFieldEnum)[keyof typeof TokenMappingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TxType'
   */
  export type EnumTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxType'>
    


  /**
   * Reference to a field of type 'TxType[]'
   */
  export type ListEnumTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxType[]'>
    


  /**
   * Reference to a field of type 'PropertyStatus'
   */
  export type EnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus'>
    


  /**
   * Reference to a field of type 'PropertyStatus[]'
   */
  export type ListEnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallets?: WalletListRelationFilter
    properties?: PropertyListRelationFilter
    proposals?: ProposalListRelationFilter
    listings?: ListingListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    wallets?: WalletOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
    proposals?: ProposalOrderByRelationAggregateInput
    listings?: ListingOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallets?: WalletListRelationFilter
    properties?: PropertyListRelationFilter
    proposals?: ProposalListRelationFilter
    listings?: ListingListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    address?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assets?: AssetListRelationFilter
    fractions?: FractionListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    assets?: AssetOrderByRelationAggregateInput
    fractions?: FractionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    sellProposals?: SellProposalOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    userId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assets?: AssetListRelationFilter
    fractions?: FractionListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }, "id" | "address">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    address?: StringWithAggregatesFilter<"Wallet"> | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    propertyId?: StringFilter<"Payment"> | string
    fromWalletId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    distributed?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    fromWallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fromWalletId?: SortOrder
    amount?: SortOrder
    distributed?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    fromWallet?: WalletOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    propertyId?: StringFilter<"Payment"> | string
    fromWalletId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    distributed?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    fromWallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fromWalletId?: SortOrder
    amount?: SortOrder
    distributed?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    propertyId?: StringWithAggregatesFilter<"Payment"> | string
    fromWalletId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    distributed?: BoolWithAggregatesFilter<"Payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringNullableFilter<"Transaction"> | string | null
    walletId?: StringFilter<"Transaction"> | string
    propertyId?: StringNullableFilter<"Transaction"> | string | null
    fractionId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    amount?: FloatFilter<"Transaction"> | number
    hash?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    fraction?: XOR<FractionNullableScalarRelationFilter, FractionWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    walletId?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    fractionId?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
    fraction?: FractionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringNullableFilter<"Transaction"> | string | null
    walletId?: StringFilter<"Transaction"> | string
    propertyId?: StringNullableFilter<"Transaction"> | string | null
    fractionId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    amount?: FloatFilter<"Transaction"> | number
    hash?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    fraction?: XOR<FractionNullableScalarRelationFilter, FractionWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    walletId?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    fractionId?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    walletId?: StringWithAggregatesFilter<"Transaction"> | string
    propertyId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    fractionId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    type?: EnumTxTypeWithAggregatesFilter<"Transaction"> | $Enums.TxType
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    hash?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    referenceId?: StringFilter<"Asset"> | string
    walletId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    walletId?: SortOrder
    createdAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    type?: StringFilter<"Asset"> | string
    referenceId?: StringFilter<"Asset"> | string
    walletId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    walletId?: SortOrder
    createdAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    type?: StringWithAggregatesFilter<"Asset"> | string
    referenceId?: StringWithAggregatesFilter<"Asset"> | string
    walletId?: StringWithAggregatesFilter<"Asset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    valuation?: FloatFilter<"Property"> | number
    nftAddress?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    imageUrl?: StringFilter<"Property"> | string
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    tokenId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    fractions?: FractionListRelationFilter
    proposals?: ProposalListRelationFilter
    payments?: PaymentListRelationFilter
    listings?: ListingListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    valuation?: SortOrder
    nftAddress?: SortOrder
    ownerId?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    fractions?: FractionOrderByRelationAggregateInput
    proposals?: ProposalOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    listings?: ListingOrderByRelationAggregateInput
    sellProposals?: SellProposalOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    valuation?: FloatFilter<"Property"> | number
    nftAddress?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    imageUrl?: StringFilter<"Property"> | string
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    tokenId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    fractions?: FractionListRelationFilter
    proposals?: ProposalListRelationFilter
    payments?: PaymentListRelationFilter
    listings?: ListingListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    valuation?: SortOrder
    nftAddress?: SortOrder
    ownerId?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    valuation?: FloatWithAggregatesFilter<"Property"> | number
    nftAddress?: StringWithAggregatesFilter<"Property"> | string
    ownerId?: StringWithAggregatesFilter<"Property"> | string
    imageUrl?: StringWithAggregatesFilter<"Property"> | string
    status?: EnumPropertyStatusWithAggregatesFilter<"Property"> | $Enums.PropertyStatus
    tokenId?: StringWithAggregatesFilter<"Property"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type FractionWhereInput = {
    AND?: FractionWhereInput | FractionWhereInput[]
    OR?: FractionWhereInput[]
    NOT?: FractionWhereInput | FractionWhereInput[]
    id?: StringFilter<"Fraction"> | string
    propertyId?: StringFilter<"Fraction"> | string
    walletId?: StringFilter<"Fraction"> | string
    supply?: IntFilter<"Fraction"> | number
    createdAt?: DateTimeFilter<"Fraction"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    owner?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transactions?: TransactionListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }

  export type FractionOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    walletId?: SortOrder
    supply?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    owner?: WalletOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    sellProposals?: SellProposalOrderByRelationAggregateInput
  }

  export type FractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FractionWhereInput | FractionWhereInput[]
    OR?: FractionWhereInput[]
    NOT?: FractionWhereInput | FractionWhereInput[]
    propertyId?: StringFilter<"Fraction"> | string
    walletId?: StringFilter<"Fraction"> | string
    supply?: IntFilter<"Fraction"> | number
    createdAt?: DateTimeFilter<"Fraction"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    owner?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    transactions?: TransactionListRelationFilter
    sellProposals?: SellProposalListRelationFilter
  }, "id">

  export type FractionOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    walletId?: SortOrder
    supply?: SortOrder
    createdAt?: SortOrder
    _count?: FractionCountOrderByAggregateInput
    _avg?: FractionAvgOrderByAggregateInput
    _max?: FractionMaxOrderByAggregateInput
    _min?: FractionMinOrderByAggregateInput
    _sum?: FractionSumOrderByAggregateInput
  }

  export type FractionScalarWhereWithAggregatesInput = {
    AND?: FractionScalarWhereWithAggregatesInput | FractionScalarWhereWithAggregatesInput[]
    OR?: FractionScalarWhereWithAggregatesInput[]
    NOT?: FractionScalarWhereWithAggregatesInput | FractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fraction"> | string
    propertyId?: StringWithAggregatesFilter<"Fraction"> | string
    walletId?: StringWithAggregatesFilter<"Fraction"> | string
    supply?: IntWithAggregatesFilter<"Fraction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Fraction"> | Date | string
  }

  export type SellProposalWhereInput = {
    AND?: SellProposalWhereInput | SellProposalWhereInput[]
    OR?: SellProposalWhereInput[]
    NOT?: SellProposalWhereInput | SellProposalWhereInput[]
    id?: StringFilter<"SellProposal"> | string
    propertyId?: StringFilter<"SellProposal"> | string
    fractionId?: StringFilter<"SellProposal"> | string
    walletId?: StringFilter<"SellProposal"> | string
    shardsForSale?: IntFilter<"SellProposal"> | number
    pricePerShard?: FloatFilter<"SellProposal"> | number
    remaining?: IntFilter<"SellProposal"> | number
    executed?: BoolFilter<"SellProposal"> | boolean
    buyers?: JsonFilter<"SellProposal">
    createdAt?: DateTimeFilter<"SellProposal"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    fraction?: XOR<FractionScalarRelationFilter, FractionWhereInput>
    creatorWallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type SellProposalOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    walletId?: SortOrder
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
    executed?: SortOrder
    buyers?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    fraction?: FractionOrderByWithRelationInput
    creatorWallet?: WalletOrderByWithRelationInput
  }

  export type SellProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SellProposalWhereInput | SellProposalWhereInput[]
    OR?: SellProposalWhereInput[]
    NOT?: SellProposalWhereInput | SellProposalWhereInput[]
    propertyId?: StringFilter<"SellProposal"> | string
    fractionId?: StringFilter<"SellProposal"> | string
    walletId?: StringFilter<"SellProposal"> | string
    shardsForSale?: IntFilter<"SellProposal"> | number
    pricePerShard?: FloatFilter<"SellProposal"> | number
    remaining?: IntFilter<"SellProposal"> | number
    executed?: BoolFilter<"SellProposal"> | boolean
    buyers?: JsonFilter<"SellProposal">
    createdAt?: DateTimeFilter<"SellProposal"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    fraction?: XOR<FractionScalarRelationFilter, FractionWhereInput>
    creatorWallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type SellProposalOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    walletId?: SortOrder
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
    executed?: SortOrder
    buyers?: SortOrder
    createdAt?: SortOrder
    _count?: SellProposalCountOrderByAggregateInput
    _avg?: SellProposalAvgOrderByAggregateInput
    _max?: SellProposalMaxOrderByAggregateInput
    _min?: SellProposalMinOrderByAggregateInput
    _sum?: SellProposalSumOrderByAggregateInput
  }

  export type SellProposalScalarWhereWithAggregatesInput = {
    AND?: SellProposalScalarWhereWithAggregatesInput | SellProposalScalarWhereWithAggregatesInput[]
    OR?: SellProposalScalarWhereWithAggregatesInput[]
    NOT?: SellProposalScalarWhereWithAggregatesInput | SellProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellProposal"> | string
    propertyId?: StringWithAggregatesFilter<"SellProposal"> | string
    fractionId?: StringWithAggregatesFilter<"SellProposal"> | string
    walletId?: StringWithAggregatesFilter<"SellProposal"> | string
    shardsForSale?: IntWithAggregatesFilter<"SellProposal"> | number
    pricePerShard?: FloatWithAggregatesFilter<"SellProposal"> | number
    remaining?: IntWithAggregatesFilter<"SellProposal"> | number
    executed?: BoolWithAggregatesFilter<"SellProposal"> | boolean
    buyers?: JsonWithAggregatesFilter<"SellProposal">
    createdAt?: DateTimeWithAggregatesFilter<"SellProposal"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    propertyId?: StringFilter<"Proposal"> | string
    creatorId?: StringFilter<"Proposal"> | string
    title?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    votes?: JsonFilter<"Proposal">
    executed?: BoolFilter<"Proposal"> | boolean
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    propertyId?: StringFilter<"Proposal"> | string
    creatorId?: StringFilter<"Proposal"> | string
    title?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    votes?: JsonFilter<"Proposal">
    executed?: BoolFilter<"Proposal"> | boolean
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    propertyId?: StringWithAggregatesFilter<"Proposal"> | string
    creatorId?: StringWithAggregatesFilter<"Proposal"> | string
    title?: StringWithAggregatesFilter<"Proposal"> | string
    description?: StringWithAggregatesFilter<"Proposal"> | string
    votes?: JsonWithAggregatesFilter<"Proposal">
    executed?: BoolWithAggregatesFilter<"Proposal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    propertyId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    amount?: IntFilter<"Listing"> | number
    price?: FloatFilter<"Listing"> | number
    active?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    propertyId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    amount?: IntFilter<"Listing"> | number
    price?: FloatFilter<"Listing"> | number
    active?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    propertyId?: StringWithAggregatesFilter<"Listing"> | string
    sellerId?: StringWithAggregatesFilter<"Listing"> | string
    amount?: IntWithAggregatesFilter<"Listing"> | number
    price?: FloatWithAggregatesFilter<"Listing"> | number
    active?: BoolWithAggregatesFilter<"Listing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type PendingUserWhereInput = {
    AND?: PendingUserWhereInput | PendingUserWhereInput[]
    OR?: PendingUserWhereInput[]
    NOT?: PendingUserWhereInput | PendingUserWhereInput[]
    id?: StringFilter<"PendingUser"> | string
    email?: StringFilter<"PendingUser"> | string
    password?: StringFilter<"PendingUser"> | string
    firstName?: StringNullableFilter<"PendingUser"> | string | null
    lastName?: StringNullableFilter<"PendingUser"> | string | null
    otp?: StringFilter<"PendingUser"> | string
    createdAt?: DateTimeFilter<"PendingUser"> | Date | string
  }

  export type PendingUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PendingUserWhereInput | PendingUserWhereInput[]
    OR?: PendingUserWhereInput[]
    NOT?: PendingUserWhereInput | PendingUserWhereInput[]
    password?: StringFilter<"PendingUser"> | string
    firstName?: StringNullableFilter<"PendingUser"> | string | null
    lastName?: StringNullableFilter<"PendingUser"> | string | null
    otp?: StringFilter<"PendingUser"> | string
    createdAt?: DateTimeFilter<"PendingUser"> | Date | string
  }, "id" | "email">

  export type PendingUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    _count?: PendingUserCountOrderByAggregateInput
    _max?: PendingUserMaxOrderByAggregateInput
    _min?: PendingUserMinOrderByAggregateInput
  }

  export type PendingUserScalarWhereWithAggregatesInput = {
    AND?: PendingUserScalarWhereWithAggregatesInput | PendingUserScalarWhereWithAggregatesInput[]
    OR?: PendingUserScalarWhereWithAggregatesInput[]
    NOT?: PendingUserScalarWhereWithAggregatesInput | PendingUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingUser"> | string
    email?: StringWithAggregatesFilter<"PendingUser"> | string
    password?: StringWithAggregatesFilter<"PendingUser"> | string
    firstName?: StringNullableWithAggregatesFilter<"PendingUser"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"PendingUser"> | string | null
    otp?: StringWithAggregatesFilter<"PendingUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PendingUser"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    email?: StringFilter<"PasswordReset"> | string
    otp?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    otp?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }, "id" | "email">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    email?: StringWithAggregatesFilter<"PasswordReset"> | string
    otp?: StringWithAggregatesFilter<"PasswordReset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type TokenMappingWhereInput = {
    AND?: TokenMappingWhereInput | TokenMappingWhereInput[]
    OR?: TokenMappingWhereInput[]
    NOT?: TokenMappingWhereInput | TokenMappingWhereInput[]
    id?: StringFilter<"TokenMapping"> | string
    dbId?: StringFilter<"TokenMapping"> | string
    tokenId?: IntFilter<"TokenMapping"> | number
    createdAt?: DateTimeFilter<"TokenMapping"> | Date | string
  }

  export type TokenMappingOrderByWithRelationInput = {
    id?: SortOrder
    dbId?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenMappingWhereInput | TokenMappingWhereInput[]
    OR?: TokenMappingWhereInput[]
    NOT?: TokenMappingWhereInput | TokenMappingWhereInput[]
    dbId?: StringFilter<"TokenMapping"> | string
    tokenId?: IntFilter<"TokenMapping"> | number
    createdAt?: DateTimeFilter<"TokenMapping"> | Date | string
  }, "id">

  export type TokenMappingOrderByWithAggregationInput = {
    id?: SortOrder
    dbId?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
    _count?: TokenMappingCountOrderByAggregateInput
    _avg?: TokenMappingAvgOrderByAggregateInput
    _max?: TokenMappingMaxOrderByAggregateInput
    _min?: TokenMappingMinOrderByAggregateInput
    _sum?: TokenMappingSumOrderByAggregateInput
  }

  export type TokenMappingScalarWhereWithAggregatesInput = {
    AND?: TokenMappingScalarWhereWithAggregatesInput | TokenMappingScalarWhereWithAggregatesInput[]
    OR?: TokenMappingScalarWhereWithAggregatesInput[]
    NOT?: TokenMappingScalarWhereWithAggregatesInput | TokenMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenMapping"> | string
    dbId?: StringWithAggregatesFilter<"TokenMapping"> | string
    tokenId?: IntWithAggregatesFilter<"TokenMapping"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TokenMapping"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    proposals?: ProposalCreateNestedManyWithoutCreatorInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutCreatorInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUpdateManyWithoutCreatorNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutCreatorNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    assets?: AssetCreateNestedManyWithoutWalletInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    assets?: AssetUpdateManyWithoutWalletNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPaymentsInput
    fromWallet: WalletCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    propertyId: string
    fromWalletId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPaymentsNestedInput
    fromWallet?: WalletUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fromWalletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    propertyId: string
    fromWalletId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fromWalletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    fraction?: FractionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    walletId: string
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    fraction?: FractionUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId?: string | null
    walletId: string
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    type: string
    referenceId: string
    createdAt?: Date | string
    wallet: WalletCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    type: string
    referenceId: string
    walletId: string
    createdAt?: Date | string
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyInput = {
    id?: string
    type: string
    referenceId: string
    walletId: string
    createdAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FractionCreateInput = {
    id?: string
    supply: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFractionsInput
    owner: WalletCreateNestedOneWithoutFractionsInput
    transactions?: TransactionCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalCreateNestedManyWithoutFractionInput
  }

  export type FractionUncheckedCreateInput = {
    id?: string
    propertyId: string
    walletId: string
    supply: number
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutFractionInput
  }

  export type FractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFractionsNestedInput
    owner?: WalletUpdateOneRequiredWithoutFractionsNestedInput
    transactions?: TransactionUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutFractionNestedInput
  }

  export type FractionCreateManyInput = {
    id?: string
    propertyId: string
    walletId: string
    supply: number
    createdAt?: Date | string
  }

  export type FractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalCreateInput = {
    id?: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutSellProposalsInput
    fraction: FractionCreateNestedOneWithoutSellProposalsInput
    creatorWallet: WalletCreateNestedOneWithoutSellProposalsInput
  }

  export type SellProposalUncheckedCreateInput = {
    id?: string
    propertyId: string
    fractionId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SellProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSellProposalsNestedInput
    fraction?: FractionUpdateOneRequiredWithoutSellProposalsNestedInput
    creatorWallet?: WalletUpdateOneRequiredWithoutSellProposalsNestedInput
  }

  export type SellProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalCreateManyInput = {
    id?: string
    propertyId: string
    fractionId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SellProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    id?: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutProposalsInput
    creator: UserCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    propertyId: string
    creatorId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutProposalsNestedInput
    creator?: UserUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyInput = {
    id?: string
    propertyId: string
    creatorId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutListingsInput
    seller: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    propertyId: string
    sellerId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutListingsNestedInput
    seller?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateManyInput = {
    id?: string
    propertyId: string
    sellerId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingUserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    otp: string
    createdAt?: Date | string
  }

  export type PendingUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    otp: string
    createdAt?: Date | string
  }

  export type PendingUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingUserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    otp: string
    createdAt?: Date | string
  }

  export type PendingUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    email: string
    otp: string
    createdAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMappingCreateInput = {
    id?: string
    dbId: string
    tokenId: number
    createdAt?: Date | string
  }

  export type TokenMappingUncheckedCreateInput = {
    id?: string
    dbId: string
    tokenId: number
    createdAt?: Date | string
  }

  export type TokenMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dbId?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dbId?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMappingCreateManyInput = {
    id?: string
    dbId: string
    tokenId: number
    createdAt?: Date | string
  }

  export type TokenMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dbId?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dbId?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type FractionListRelationFilter = {
    every?: FractionWhereInput
    some?: FractionWhereInput
    none?: FractionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SellProposalListRelationFilter = {
    every?: SellProposalWhereInput
    some?: SellProposalWhereInput
    none?: SellProposalWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fromWalletId?: SortOrder
    amount?: SortOrder
    distributed?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fromWalletId?: SortOrder
    amount?: SortOrder
    distributed?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fromWalletId?: SortOrder
    amount?: SortOrder
    distributed?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeFilter<$PrismaModel> | $Enums.TxType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FractionNullableScalarRelationFilter = {
    is?: FractionWhereInput | null
    isNot?: FractionWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxTypeFilter<$PrismaModel>
    _max?: NestedEnumTxTypeFilter<$PrismaModel>
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    walletId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    walletId?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    walletId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    valuation?: SortOrder
    nftAddress?: SortOrder
    ownerId?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    valuation?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    valuation?: SortOrder
    nftAddress?: SortOrder
    ownerId?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    valuation?: SortOrder
    nftAddress?: SortOrder
    ownerId?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    valuation?: SortOrder
  }

  export type EnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FractionCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    walletId?: SortOrder
    supply?: SortOrder
    createdAt?: SortOrder
  }

  export type FractionAvgOrderByAggregateInput = {
    supply?: SortOrder
  }

  export type FractionMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    walletId?: SortOrder
    supply?: SortOrder
    createdAt?: SortOrder
  }

  export type FractionMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    walletId?: SortOrder
    supply?: SortOrder
    createdAt?: SortOrder
  }

  export type FractionSumOrderByAggregateInput = {
    supply?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FractionScalarRelationFilter = {
    is?: FractionWhereInput
    isNot?: FractionWhereInput
  }

  export type SellProposalCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    walletId?: SortOrder
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
    executed?: SortOrder
    buyers?: SortOrder
    createdAt?: SortOrder
  }

  export type SellProposalAvgOrderByAggregateInput = {
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
  }

  export type SellProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    walletId?: SortOrder
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
  }

  export type SellProposalMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    fractionId?: SortOrder
    walletId?: SortOrder
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
  }

  export type SellProposalSumOrderByAggregateInput = {
    shardsForSale?: SortOrder
    pricePerShard?: SortOrder
    remaining?: SortOrder
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

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    executed?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    sellerId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type PendingUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMappingCountOrderByAggregateInput = {
    id?: SortOrder
    dbId?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMappingAvgOrderByAggregateInput = {
    tokenId?: SortOrder
  }

  export type TokenMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    dbId?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMappingMinOrderByAggregateInput = {
    id?: SortOrder
    dbId?: SortOrder
    tokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMappingSumOrderByAggregateInput = {
    tokenId?: SortOrder
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput> | ProposalCreateWithoutCreatorInput[] | ProposalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCreatorInput | ProposalCreateOrConnectWithoutCreatorInput[]
    createMany?: ProposalCreateManyCreatorInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput> | ProposalCreateWithoutCreatorInput[] | ProposalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCreatorInput | ProposalCreateOrConnectWithoutCreatorInput[]
    createMany?: ProposalCreateManyCreatorInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput> | ProposalCreateWithoutCreatorInput[] | ProposalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCreatorInput | ProposalCreateOrConnectWithoutCreatorInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutCreatorInput | ProposalUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProposalCreateManyCreatorInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutCreatorInput | ProposalUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutCreatorInput | ProposalUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput> | ProposalCreateWithoutCreatorInput[] | ProposalUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCreatorInput | ProposalCreateOrConnectWithoutCreatorInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutCreatorInput | ProposalUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProposalCreateManyCreatorInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutCreatorInput | ProposalUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutCreatorInput | ProposalUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetCreateNestedManyWithoutWalletInput = {
    create?: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput> | AssetCreateWithoutWalletInput[] | AssetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutWalletInput | AssetCreateOrConnectWithoutWalletInput[]
    createMany?: AssetCreateManyWalletInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type FractionCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput> | FractionCreateWithoutOwnerInput[] | FractionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutOwnerInput | FractionCreateOrConnectWithoutOwnerInput[]
    createMany?: FractionCreateManyOwnerInputEnvelope
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutFromWalletInput = {
    create?: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput> | PaymentCreateWithoutFromWalletInput[] | PaymentUncheckedCreateWithoutFromWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFromWalletInput | PaymentCreateOrConnectWithoutFromWalletInput[]
    createMany?: PaymentCreateManyFromWalletInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SellProposalCreateNestedManyWithoutCreatorWalletInput = {
    create?: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput> | SellProposalCreateWithoutCreatorWalletInput[] | SellProposalUncheckedCreateWithoutCreatorWalletInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutCreatorWalletInput | SellProposalCreateOrConnectWithoutCreatorWalletInput[]
    createMany?: SellProposalCreateManyCreatorWalletInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput> | AssetCreateWithoutWalletInput[] | AssetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutWalletInput | AssetCreateOrConnectWithoutWalletInput[]
    createMany?: AssetCreateManyWalletInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type FractionUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput> | FractionCreateWithoutOwnerInput[] | FractionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutOwnerInput | FractionCreateOrConnectWithoutOwnerInput[]
    createMany?: FractionCreateManyOwnerInputEnvelope
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutFromWalletInput = {
    create?: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput> | PaymentCreateWithoutFromWalletInput[] | PaymentUncheckedCreateWithoutFromWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFromWalletInput | PaymentCreateOrConnectWithoutFromWalletInput[]
    createMany?: PaymentCreateManyFromWalletInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput = {
    create?: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput> | SellProposalCreateWithoutCreatorWalletInput[] | SellProposalUncheckedCreateWithoutCreatorWalletInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutCreatorWalletInput | SellProposalCreateOrConnectWithoutCreatorWalletInput[]
    createMany?: SellProposalCreateManyCreatorWalletInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletsInput, UserUpdateWithoutWalletsInput>, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type AssetUpdateManyWithoutWalletNestedInput = {
    create?: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput> | AssetCreateWithoutWalletInput[] | AssetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutWalletInput | AssetCreateOrConnectWithoutWalletInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutWalletInput | AssetUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: AssetCreateManyWalletInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutWalletInput | AssetUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutWalletInput | AssetUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type FractionUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput> | FractionCreateWithoutOwnerInput[] | FractionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutOwnerInput | FractionCreateOrConnectWithoutOwnerInput[]
    upsert?: FractionUpsertWithWhereUniqueWithoutOwnerInput | FractionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FractionCreateManyOwnerInputEnvelope
    set?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    disconnect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    delete?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    update?: FractionUpdateWithWhereUniqueWithoutOwnerInput | FractionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FractionUpdateManyWithWhereWithoutOwnerInput | FractionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FractionScalarWhereInput | FractionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutFromWalletNestedInput = {
    create?: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput> | PaymentCreateWithoutFromWalletInput[] | PaymentUncheckedCreateWithoutFromWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFromWalletInput | PaymentCreateOrConnectWithoutFromWalletInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFromWalletInput | PaymentUpsertWithWhereUniqueWithoutFromWalletInput[]
    createMany?: PaymentCreateManyFromWalletInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFromWalletInput | PaymentUpdateWithWhereUniqueWithoutFromWalletInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFromWalletInput | PaymentUpdateManyWithWhereWithoutFromWalletInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SellProposalUpdateManyWithoutCreatorWalletNestedInput = {
    create?: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput> | SellProposalCreateWithoutCreatorWalletInput[] | SellProposalUncheckedCreateWithoutCreatorWalletInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutCreatorWalletInput | SellProposalCreateOrConnectWithoutCreatorWalletInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutCreatorWalletInput | SellProposalUpsertWithWhereUniqueWithoutCreatorWalletInput[]
    createMany?: SellProposalCreateManyCreatorWalletInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutCreatorWalletInput | SellProposalUpdateWithWhereUniqueWithoutCreatorWalletInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutCreatorWalletInput | SellProposalUpdateManyWithWhereWithoutCreatorWalletInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput> | AssetCreateWithoutWalletInput[] | AssetUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutWalletInput | AssetCreateOrConnectWithoutWalletInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutWalletInput | AssetUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: AssetCreateManyWalletInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutWalletInput | AssetUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutWalletInput | AssetUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type FractionUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput> | FractionCreateWithoutOwnerInput[] | FractionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutOwnerInput | FractionCreateOrConnectWithoutOwnerInput[]
    upsert?: FractionUpsertWithWhereUniqueWithoutOwnerInput | FractionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FractionCreateManyOwnerInputEnvelope
    set?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    disconnect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    delete?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    update?: FractionUpdateWithWhereUniqueWithoutOwnerInput | FractionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FractionUpdateManyWithWhereWithoutOwnerInput | FractionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FractionScalarWhereInput | FractionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutFromWalletNestedInput = {
    create?: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput> | PaymentCreateWithoutFromWalletInput[] | PaymentUncheckedCreateWithoutFromWalletInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFromWalletInput | PaymentCreateOrConnectWithoutFromWalletInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFromWalletInput | PaymentUpsertWithWhereUniqueWithoutFromWalletInput[]
    createMany?: PaymentCreateManyFromWalletInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFromWalletInput | PaymentUpdateWithWhereUniqueWithoutFromWalletInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFromWalletInput | PaymentUpdateManyWithWhereWithoutFromWalletInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput = {
    create?: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput> | SellProposalCreateWithoutCreatorWalletInput[] | SellProposalUncheckedCreateWithoutCreatorWalletInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutCreatorWalletInput | SellProposalCreateOrConnectWithoutCreatorWalletInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutCreatorWalletInput | SellProposalUpsertWithWhereUniqueWithoutCreatorWalletInput[]
    createMany?: SellProposalCreateManyCreatorWalletInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutCreatorWalletInput | SellProposalUpdateWithWhereUniqueWithoutCreatorWalletInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutCreatorWalletInput | SellProposalUpdateManyWithWhereWithoutCreatorWalletInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPaymentsInput
    connect?: PropertyWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<WalletCreateWithoutPaymentsInput, WalletUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPaymentsInput
    connect?: WalletWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PropertyUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPaymentsInput
    upsert?: PropertyUpsertWithoutPaymentsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPaymentsInput, PropertyUpdateWithoutPaymentsInput>, PropertyUncheckedUpdateWithoutPaymentsInput>
  }

  export type WalletUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<WalletCreateWithoutPaymentsInput, WalletUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPaymentsInput
    upsert?: WalletUpsertWithoutPaymentsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutPaymentsInput, WalletUpdateWithoutPaymentsInput>, WalletUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type FractionCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FractionCreateWithoutTransactionsInput, FractionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FractionCreateOrConnectWithoutTransactionsInput
    connect?: FractionWhereUniqueInput
  }

  export type EnumTxTypeFieldUpdateOperationsInput = {
    set?: $Enums.TxType
  }

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    upsert?: WalletUpsertWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTransactionsInput, WalletUpdateWithoutTransactionsInput>, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type FractionUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<FractionCreateWithoutTransactionsInput, FractionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FractionCreateOrConnectWithoutTransactionsInput
    upsert?: FractionUpsertWithoutTransactionsInput
    disconnect?: FractionWhereInput | boolean
    delete?: FractionWhereInput | boolean
    connect?: FractionWhereUniqueInput
    update?: XOR<XOR<FractionUpdateToOneWithWhereWithoutTransactionsInput, FractionUpdateWithoutTransactionsInput>, FractionUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletCreateNestedOneWithoutAssetsInput = {
    create?: XOR<WalletCreateWithoutAssetsInput, WalletUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAssetsInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<WalletCreateWithoutAssetsInput, WalletUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAssetsInput
    upsert?: WalletUpsertWithoutAssetsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutAssetsInput, WalletUpdateWithoutAssetsInput>, WalletUncheckedUpdateWithoutAssetsInput>
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type FractionCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput> | FractionCreateWithoutPropertyInput[] | FractionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutPropertyInput | FractionCreateOrConnectWithoutPropertyInput[]
    createMany?: FractionCreateManyPropertyInputEnvelope
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput> | ProposalCreateWithoutPropertyInput[] | ProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutPropertyInput | ProposalCreateOrConnectWithoutPropertyInput[]
    createMany?: ProposalCreateManyPropertyInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput> | ListingCreateWithoutPropertyInput[] | ListingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutPropertyInput | ListingCreateOrConnectWithoutPropertyInput[]
    createMany?: ListingCreateManyPropertyInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SellProposalCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput> | SellProposalCreateWithoutPropertyInput[] | SellProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutPropertyInput | SellProposalCreateOrConnectWithoutPropertyInput[]
    createMany?: SellProposalCreateManyPropertyInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type FractionUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput> | FractionCreateWithoutPropertyInput[] | FractionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutPropertyInput | FractionCreateOrConnectWithoutPropertyInput[]
    createMany?: FractionCreateManyPropertyInputEnvelope
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput> | ProposalCreateWithoutPropertyInput[] | ProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutPropertyInput | ProposalCreateOrConnectWithoutPropertyInput[]
    createMany?: ProposalCreateManyPropertyInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput> | ListingCreateWithoutPropertyInput[] | ListingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutPropertyInput | ListingCreateOrConnectWithoutPropertyInput[]
    createMany?: ListingCreateManyPropertyInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SellProposalUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput> | SellProposalCreateWithoutPropertyInput[] | SellProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutPropertyInput | SellProposalCreateOrConnectWithoutPropertyInput[]
    createMany?: SellProposalCreateManyPropertyInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type EnumPropertyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PropertyStatus
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type FractionUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput> | FractionCreateWithoutPropertyInput[] | FractionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutPropertyInput | FractionCreateOrConnectWithoutPropertyInput[]
    upsert?: FractionUpsertWithWhereUniqueWithoutPropertyInput | FractionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FractionCreateManyPropertyInputEnvelope
    set?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    disconnect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    delete?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    update?: FractionUpdateWithWhereUniqueWithoutPropertyInput | FractionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FractionUpdateManyWithWhereWithoutPropertyInput | FractionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FractionScalarWhereInput | FractionScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput> | ProposalCreateWithoutPropertyInput[] | ProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutPropertyInput | ProposalCreateOrConnectWithoutPropertyInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutPropertyInput | ProposalUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ProposalCreateManyPropertyInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutPropertyInput | ProposalUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutPropertyInput | ProposalUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPropertyInput | PaymentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPropertyInput | PaymentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPropertyInput | PaymentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput> | ListingCreateWithoutPropertyInput[] | ListingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutPropertyInput | ListingCreateOrConnectWithoutPropertyInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutPropertyInput | ListingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ListingCreateManyPropertyInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutPropertyInput | ListingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutPropertyInput | ListingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SellProposalUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput> | SellProposalCreateWithoutPropertyInput[] | SellProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutPropertyInput | SellProposalCreateOrConnectWithoutPropertyInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutPropertyInput | SellProposalUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SellProposalCreateManyPropertyInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutPropertyInput | SellProposalUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutPropertyInput | SellProposalUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type FractionUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput> | FractionCreateWithoutPropertyInput[] | FractionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FractionCreateOrConnectWithoutPropertyInput | FractionCreateOrConnectWithoutPropertyInput[]
    upsert?: FractionUpsertWithWhereUniqueWithoutPropertyInput | FractionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FractionCreateManyPropertyInputEnvelope
    set?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    disconnect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    delete?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    connect?: FractionWhereUniqueInput | FractionWhereUniqueInput[]
    update?: FractionUpdateWithWhereUniqueWithoutPropertyInput | FractionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FractionUpdateManyWithWhereWithoutPropertyInput | FractionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FractionScalarWhereInput | FractionScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput> | ProposalCreateWithoutPropertyInput[] | ProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutPropertyInput | ProposalCreateOrConnectWithoutPropertyInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutPropertyInput | ProposalUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ProposalCreateManyPropertyInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutPropertyInput | ProposalUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutPropertyInput | ProposalUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPropertyInput | PaymentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPropertyInput | PaymentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPropertyInput | PaymentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput> | ListingCreateWithoutPropertyInput[] | ListingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutPropertyInput | ListingCreateOrConnectWithoutPropertyInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutPropertyInput | ListingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ListingCreateManyPropertyInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutPropertyInput | ListingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutPropertyInput | ListingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SellProposalUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput> | SellProposalCreateWithoutPropertyInput[] | SellProposalUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutPropertyInput | SellProposalCreateOrConnectWithoutPropertyInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutPropertyInput | SellProposalUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SellProposalCreateManyPropertyInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutPropertyInput | SellProposalUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutPropertyInput | SellProposalUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutFractionsInput = {
    create?: XOR<PropertyCreateWithoutFractionsInput, PropertyUncheckedCreateWithoutFractionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFractionsInput
    connect?: PropertyWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutFractionsInput = {
    create?: XOR<WalletCreateWithoutFractionsInput, WalletUncheckedCreateWithoutFractionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutFractionsInput
    connect?: WalletWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutFractionInput = {
    create?: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput> | TransactionCreateWithoutFractionInput[] | TransactionUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFractionInput | TransactionCreateOrConnectWithoutFractionInput[]
    createMany?: TransactionCreateManyFractionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type SellProposalCreateNestedManyWithoutFractionInput = {
    create?: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput> | SellProposalCreateWithoutFractionInput[] | SellProposalUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutFractionInput | SellProposalCreateOrConnectWithoutFractionInput[]
    createMany?: SellProposalCreateManyFractionInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutFractionInput = {
    create?: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput> | TransactionCreateWithoutFractionInput[] | TransactionUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFractionInput | TransactionCreateOrConnectWithoutFractionInput[]
    createMany?: TransactionCreateManyFractionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type SellProposalUncheckedCreateNestedManyWithoutFractionInput = {
    create?: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput> | SellProposalCreateWithoutFractionInput[] | SellProposalUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutFractionInput | SellProposalCreateOrConnectWithoutFractionInput[]
    createMany?: SellProposalCreateManyFractionInputEnvelope
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutFractionsNestedInput = {
    create?: XOR<PropertyCreateWithoutFractionsInput, PropertyUncheckedCreateWithoutFractionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFractionsInput
    upsert?: PropertyUpsertWithoutFractionsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFractionsInput, PropertyUpdateWithoutFractionsInput>, PropertyUncheckedUpdateWithoutFractionsInput>
  }

  export type WalletUpdateOneRequiredWithoutFractionsNestedInput = {
    create?: XOR<WalletCreateWithoutFractionsInput, WalletUncheckedCreateWithoutFractionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutFractionsInput
    upsert?: WalletUpsertWithoutFractionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutFractionsInput, WalletUpdateWithoutFractionsInput>, WalletUncheckedUpdateWithoutFractionsInput>
  }

  export type TransactionUpdateManyWithoutFractionNestedInput = {
    create?: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput> | TransactionCreateWithoutFractionInput[] | TransactionUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFractionInput | TransactionCreateOrConnectWithoutFractionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFractionInput | TransactionUpsertWithWhereUniqueWithoutFractionInput[]
    createMany?: TransactionCreateManyFractionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFractionInput | TransactionUpdateWithWhereUniqueWithoutFractionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFractionInput | TransactionUpdateManyWithWhereWithoutFractionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SellProposalUpdateManyWithoutFractionNestedInput = {
    create?: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput> | SellProposalCreateWithoutFractionInput[] | SellProposalUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutFractionInput | SellProposalCreateOrConnectWithoutFractionInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutFractionInput | SellProposalUpsertWithWhereUniqueWithoutFractionInput[]
    createMany?: SellProposalCreateManyFractionInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutFractionInput | SellProposalUpdateWithWhereUniqueWithoutFractionInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutFractionInput | SellProposalUpdateManyWithWhereWithoutFractionInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutFractionNestedInput = {
    create?: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput> | TransactionCreateWithoutFractionInput[] | TransactionUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFractionInput | TransactionCreateOrConnectWithoutFractionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFractionInput | TransactionUpsertWithWhereUniqueWithoutFractionInput[]
    createMany?: TransactionCreateManyFractionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFractionInput | TransactionUpdateWithWhereUniqueWithoutFractionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFractionInput | TransactionUpdateManyWithWhereWithoutFractionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SellProposalUncheckedUpdateManyWithoutFractionNestedInput = {
    create?: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput> | SellProposalCreateWithoutFractionInput[] | SellProposalUncheckedCreateWithoutFractionInput[]
    connectOrCreate?: SellProposalCreateOrConnectWithoutFractionInput | SellProposalCreateOrConnectWithoutFractionInput[]
    upsert?: SellProposalUpsertWithWhereUniqueWithoutFractionInput | SellProposalUpsertWithWhereUniqueWithoutFractionInput[]
    createMany?: SellProposalCreateManyFractionInputEnvelope
    set?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    disconnect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    delete?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    connect?: SellProposalWhereUniqueInput | SellProposalWhereUniqueInput[]
    update?: SellProposalUpdateWithWhereUniqueWithoutFractionInput | SellProposalUpdateWithWhereUniqueWithoutFractionInput[]
    updateMany?: SellProposalUpdateManyWithWhereWithoutFractionInput | SellProposalUpdateManyWithWhereWithoutFractionInput[]
    deleteMany?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutSellProposalsInput = {
    create?: XOR<PropertyCreateWithoutSellProposalsInput, PropertyUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSellProposalsInput
    connect?: PropertyWhereUniqueInput
  }

  export type FractionCreateNestedOneWithoutSellProposalsInput = {
    create?: XOR<FractionCreateWithoutSellProposalsInput, FractionUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: FractionCreateOrConnectWithoutSellProposalsInput
    connect?: FractionWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutSellProposalsInput = {
    create?: XOR<WalletCreateWithoutSellProposalsInput, WalletUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSellProposalsInput
    connect?: WalletWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutSellProposalsNestedInput = {
    create?: XOR<PropertyCreateWithoutSellProposalsInput, PropertyUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSellProposalsInput
    upsert?: PropertyUpsertWithoutSellProposalsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSellProposalsInput, PropertyUpdateWithoutSellProposalsInput>, PropertyUncheckedUpdateWithoutSellProposalsInput>
  }

  export type FractionUpdateOneRequiredWithoutSellProposalsNestedInput = {
    create?: XOR<FractionCreateWithoutSellProposalsInput, FractionUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: FractionCreateOrConnectWithoutSellProposalsInput
    upsert?: FractionUpsertWithoutSellProposalsInput
    connect?: FractionWhereUniqueInput
    update?: XOR<XOR<FractionUpdateToOneWithWhereWithoutSellProposalsInput, FractionUpdateWithoutSellProposalsInput>, FractionUncheckedUpdateWithoutSellProposalsInput>
  }

  export type WalletUpdateOneRequiredWithoutSellProposalsNestedInput = {
    create?: XOR<WalletCreateWithoutSellProposalsInput, WalletUncheckedCreateWithoutSellProposalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSellProposalsInput
    upsert?: WalletUpsertWithoutSellProposalsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutSellProposalsInput, WalletUpdateWithoutSellProposalsInput>, WalletUncheckedUpdateWithoutSellProposalsInput>
  }

  export type PropertyCreateNestedOneWithoutProposalsInput = {
    create?: XOR<PropertyCreateWithoutProposalsInput, PropertyUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutProposalsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProposalsInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<PropertyCreateWithoutProposalsInput, PropertyUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutProposalsInput
    upsert?: PropertyUpsertWithoutProposalsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutProposalsInput, PropertyUpdateWithoutProposalsInput>, PropertyUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    upsert?: UserUpsertWithoutProposalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalsInput, UserUpdateWithoutProposalsInput>, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type PropertyCreateNestedOneWithoutListingsInput = {
    create?: XOR<PropertyCreateWithoutListingsInput, PropertyUncheckedCreateWithoutListingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutListingsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<PropertyCreateWithoutListingsInput, PropertyUncheckedCreateWithoutListingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutListingsInput
    upsert?: PropertyUpsertWithoutListingsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutListingsInput, PropertyUpdateWithoutListingsInput>, PropertyUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeFilter<$PrismaModel> | $Enums.TxType
  }

  export type NestedEnumTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxTypeFilter<$PrismaModel>
    _max?: NestedEnumTxTypeFilter<$PrismaModel>
  }

  export type NestedEnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
  }

  export type NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type WalletCreateWithoutUserInput = {
    id?: string
    address: string
    createdAt?: Date | string
    assets?: AssetCreateNestedManyWithoutWalletInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutCreatorInput = {
    id?: string
    propertyId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutCreatorInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput>
  }

  export type ProposalCreateManyCreatorInputEnvelope = {
    data: ProposalCreateManyCreatorInput | ProposalCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutSellerInput = {
    id?: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutSellerInput = {
    id?: string
    propertyId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type ListingCreateOrConnectWithoutSellerInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingCreateManySellerInputEnvelope = {
    data: ListingCreateManySellerInput | ListingCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    fraction?: FractionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    walletId: string
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[]
    OR?: WalletScalarWhereInput[]
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[]
    id?: StringFilter<"Wallet"> | string
    address?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    valuation?: FloatFilter<"Property"> | number
    nftAddress?: StringFilter<"Property"> | string
    ownerId?: StringFilter<"Property"> | string
    imageUrl?: StringFilter<"Property"> | string
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    tokenId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type ProposalUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutCreatorInput, ProposalUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProposalCreateWithoutCreatorInput, ProposalUncheckedCreateWithoutCreatorInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutCreatorInput, ProposalUncheckedUpdateWithoutCreatorInput>
  }

  export type ProposalUpdateManyWithWhereWithoutCreatorInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: StringFilter<"Proposal"> | string
    propertyId?: StringFilter<"Proposal"> | string
    creatorId?: StringFilter<"Proposal"> | string
    title?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    votes?: JsonFilter<"Proposal">
    executed?: BoolFilter<"Proposal"> | boolean
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
  }

  export type ListingUpsertWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
  }

  export type ListingUpdateManyWithWhereWithoutSellerInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutSellerInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    propertyId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    amount?: IntFilter<"Listing"> | number
    price?: FloatFilter<"Listing"> | number
    active?: BoolFilter<"Listing"> | boolean
    createdAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringNullableFilter<"Transaction"> | string | null
    walletId?: StringFilter<"Transaction"> | string
    propertyId?: StringNullableFilter<"Transaction"> | string | null
    fractionId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    amount?: FloatFilter<"Transaction"> | number
    hash?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserCreateWithoutWalletsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    proposals?: ProposalCreateNestedManyWithoutCreatorInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutCreatorInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type AssetCreateWithoutWalletInput = {
    id?: string
    type: string
    referenceId: string
    createdAt?: Date | string
  }

  export type AssetUncheckedCreateWithoutWalletInput = {
    id?: string
    type: string
    referenceId: string
    createdAt?: Date | string
  }

  export type AssetCreateOrConnectWithoutWalletInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput>
  }

  export type AssetCreateManyWalletInputEnvelope = {
    data: AssetCreateManyWalletInput | AssetCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type FractionCreateWithoutOwnerInput = {
    id?: string
    supply: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFractionsInput
    transactions?: TransactionCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalCreateNestedManyWithoutFractionInput
  }

  export type FractionUncheckedCreateWithoutOwnerInput = {
    id?: string
    propertyId: string
    supply: number
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutFractionInput
  }

  export type FractionCreateOrConnectWithoutOwnerInput = {
    where: FractionWhereUniqueInput
    create: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput>
  }

  export type FractionCreateManyOwnerInputEnvelope = {
    data: FractionCreateManyOwnerInput | FractionCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutWalletInput = {
    id?: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    fraction?: FractionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    userId?: string | null
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutFromWalletInput = {
    id?: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutFromWalletInput = {
    id?: string
    propertyId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutFromWalletInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput>
  }

  export type PaymentCreateManyFromWalletInputEnvelope = {
    data: PaymentCreateManyFromWalletInput | PaymentCreateManyFromWalletInput[]
    skipDuplicates?: boolean
  }

  export type SellProposalCreateWithoutCreatorWalletInput = {
    id?: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutSellProposalsInput
    fraction: FractionCreateNestedOneWithoutSellProposalsInput
  }

  export type SellProposalUncheckedCreateWithoutCreatorWalletInput = {
    id?: string
    propertyId: string
    fractionId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SellProposalCreateOrConnectWithoutCreatorWalletInput = {
    where: SellProposalWhereUniqueInput
    create: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput>
  }

  export type SellProposalCreateManyCreatorWalletInputEnvelope = {
    data: SellProposalCreateManyCreatorWalletInput | SellProposalCreateManyCreatorWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUpdateManyWithoutCreatorNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutCreatorNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetUpsertWithWhereUniqueWithoutWalletInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutWalletInput, AssetUncheckedUpdateWithoutWalletInput>
    create: XOR<AssetCreateWithoutWalletInput, AssetUncheckedCreateWithoutWalletInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutWalletInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutWalletInput, AssetUncheckedUpdateWithoutWalletInput>
  }

  export type AssetUpdateManyWithWhereWithoutWalletInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutWalletInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    referenceId?: StringFilter<"Asset"> | string
    walletId?: StringFilter<"Asset"> | string
    createdAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type FractionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FractionWhereUniqueInput
    update: XOR<FractionUpdateWithoutOwnerInput, FractionUncheckedUpdateWithoutOwnerInput>
    create: XOR<FractionCreateWithoutOwnerInput, FractionUncheckedCreateWithoutOwnerInput>
  }

  export type FractionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FractionWhereUniqueInput
    data: XOR<FractionUpdateWithoutOwnerInput, FractionUncheckedUpdateWithoutOwnerInput>
  }

  export type FractionUpdateManyWithWhereWithoutOwnerInput = {
    where: FractionScalarWhereInput
    data: XOR<FractionUpdateManyMutationInput, FractionUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FractionScalarWhereInput = {
    AND?: FractionScalarWhereInput | FractionScalarWhereInput[]
    OR?: FractionScalarWhereInput[]
    NOT?: FractionScalarWhereInput | FractionScalarWhereInput[]
    id?: StringFilter<"Fraction"> | string
    propertyId?: StringFilter<"Fraction"> | string
    walletId?: StringFilter<"Fraction"> | string
    supply?: IntFilter<"Fraction"> | number
    createdAt?: DateTimeFilter<"Fraction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutFromWalletInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutFromWalletInput, PaymentUncheckedUpdateWithoutFromWalletInput>
    create: XOR<PaymentCreateWithoutFromWalletInput, PaymentUncheckedCreateWithoutFromWalletInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutFromWalletInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutFromWalletInput, PaymentUncheckedUpdateWithoutFromWalletInput>
  }

  export type PaymentUpdateManyWithWhereWithoutFromWalletInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutFromWalletInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    propertyId?: StringFilter<"Payment"> | string
    fromWalletId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    distributed?: BoolFilter<"Payment"> | boolean
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type SellProposalUpsertWithWhereUniqueWithoutCreatorWalletInput = {
    where: SellProposalWhereUniqueInput
    update: XOR<SellProposalUpdateWithoutCreatorWalletInput, SellProposalUncheckedUpdateWithoutCreatorWalletInput>
    create: XOR<SellProposalCreateWithoutCreatorWalletInput, SellProposalUncheckedCreateWithoutCreatorWalletInput>
  }

  export type SellProposalUpdateWithWhereUniqueWithoutCreatorWalletInput = {
    where: SellProposalWhereUniqueInput
    data: XOR<SellProposalUpdateWithoutCreatorWalletInput, SellProposalUncheckedUpdateWithoutCreatorWalletInput>
  }

  export type SellProposalUpdateManyWithWhereWithoutCreatorWalletInput = {
    where: SellProposalScalarWhereInput
    data: XOR<SellProposalUpdateManyMutationInput, SellProposalUncheckedUpdateManyWithoutCreatorWalletInput>
  }

  export type SellProposalScalarWhereInput = {
    AND?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
    OR?: SellProposalScalarWhereInput[]
    NOT?: SellProposalScalarWhereInput | SellProposalScalarWhereInput[]
    id?: StringFilter<"SellProposal"> | string
    propertyId?: StringFilter<"SellProposal"> | string
    fractionId?: StringFilter<"SellProposal"> | string
    walletId?: StringFilter<"SellProposal"> | string
    shardsForSale?: IntFilter<"SellProposal"> | number
    pricePerShard?: FloatFilter<"SellProposal"> | number
    remaining?: IntFilter<"SellProposal"> | number
    executed?: BoolFilter<"SellProposal"> | boolean
    buyers?: JsonFilter<"SellProposal">
    createdAt?: DateTimeFilter<"SellProposal"> | Date | string
  }

  export type PropertyCreateWithoutPaymentsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPaymentsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPaymentsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
  }

  export type WalletCreateWithoutPaymentsInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    assets?: AssetCreateNestedManyWithoutWalletInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateWithoutPaymentsInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletCreateOrConnectWithoutPaymentsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutPaymentsInput, WalletUncheckedCreateWithoutPaymentsInput>
  }

  export type PropertyUpsertWithoutPaymentsInput = {
    update: XOR<PropertyUpdateWithoutPaymentsInput, PropertyUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPaymentsInput, PropertyUncheckedUpdateWithoutPaymentsInput>
  }

  export type PropertyUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type WalletUpsertWithoutPaymentsInput = {
    update: XOR<WalletUpdateWithoutPaymentsInput, WalletUncheckedUpdateWithoutPaymentsInput>
    create: XOR<WalletCreateWithoutPaymentsInput, WalletUncheckedCreateWithoutPaymentsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutPaymentsInput, WalletUncheckedUpdateWithoutPaymentsInput>
  }

  export type WalletUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    assets?: AssetUpdateManyWithoutWalletNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    proposals?: ProposalCreateNestedManyWithoutCreatorInput
    listings?: ListingCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutCreatorInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type WalletCreateWithoutTransactionsInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    assets?: AssetCreateNestedManyWithoutWalletInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
  }

  export type FractionCreateWithoutTransactionsInput = {
    id?: string
    supply: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFractionsInput
    owner: WalletCreateNestedOneWithoutFractionsInput
    sellProposals?: SellProposalCreateNestedManyWithoutFractionInput
  }

  export type FractionUncheckedCreateWithoutTransactionsInput = {
    id?: string
    propertyId: string
    walletId: string
    supply: number
    createdAt?: Date | string
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutFractionInput
  }

  export type FractionCreateOrConnectWithoutTransactionsInput = {
    where: FractionWhereUniqueInput
    create: XOR<FractionCreateWithoutTransactionsInput, FractionUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUpdateManyWithoutCreatorNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutCreatorNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    assets?: AssetUpdateManyWithoutWalletNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type FractionUpsertWithoutTransactionsInput = {
    update: XOR<FractionUpdateWithoutTransactionsInput, FractionUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FractionCreateWithoutTransactionsInput, FractionUncheckedCreateWithoutTransactionsInput>
    where?: FractionWhereInput
  }

  export type FractionUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FractionWhereInput
    data: XOR<FractionUpdateWithoutTransactionsInput, FractionUncheckedUpdateWithoutTransactionsInput>
  }

  export type FractionUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFractionsNestedInput
    owner?: WalletUpdateOneRequiredWithoutFractionsNestedInput
    sellProposals?: SellProposalUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellProposals?: SellProposalUncheckedUpdateManyWithoutFractionNestedInput
  }

  export type WalletCreateWithoutAssetsInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateWithoutAssetsInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletCreateOrConnectWithoutAssetsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutAssetsInput, WalletUncheckedCreateWithoutAssetsInput>
  }

  export type WalletUpsertWithoutAssetsInput = {
    update: XOR<WalletUpdateWithoutAssetsInput, WalletUncheckedUpdateWithoutAssetsInput>
    create: XOR<WalletCreateWithoutAssetsInput, WalletUncheckedCreateWithoutAssetsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutAssetsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutAssetsInput, WalletUncheckedUpdateWithoutAssetsInput>
  }

  export type WalletUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    proposals?: ProposalCreateNestedManyWithoutCreatorInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutCreatorInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type FractionCreateWithoutPropertyInput = {
    id?: string
    supply: number
    createdAt?: Date | string
    owner: WalletCreateNestedOneWithoutFractionsInput
    transactions?: TransactionCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalCreateNestedManyWithoutFractionInput
  }

  export type FractionUncheckedCreateWithoutPropertyInput = {
    id?: string
    walletId: string
    supply: number
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFractionInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutFractionInput
  }

  export type FractionCreateOrConnectWithoutPropertyInput = {
    where: FractionWhereUniqueInput
    create: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput>
  }

  export type FractionCreateManyPropertyInputEnvelope = {
    data: FractionCreateManyPropertyInput | FractionCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutPropertyInput = {
    id?: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutPropertyInput = {
    id?: string
    creatorId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutPropertyInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput>
  }

  export type ProposalCreateManyPropertyInputEnvelope = {
    data: ProposalCreateManyPropertyInput | ProposalCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPropertyInput = {
    id?: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
    fromWallet: WalletCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPropertyInput = {
    id?: string
    fromWalletId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput>
  }

  export type PaymentCreateManyPropertyInputEnvelope = {
    data: PaymentCreateManyPropertyInput | PaymentCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutPropertyInput = {
    id?: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutPropertyInput = {
    id?: string
    sellerId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type ListingCreateOrConnectWithoutPropertyInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput>
  }

  export type ListingCreateManyPropertyInputEnvelope = {
    data: ListingCreateManyPropertyInput | ListingCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type SellProposalCreateWithoutPropertyInput = {
    id?: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    fraction: FractionCreateNestedOneWithoutSellProposalsInput
    creatorWallet: WalletCreateNestedOneWithoutSellProposalsInput
  }

  export type SellProposalUncheckedCreateWithoutPropertyInput = {
    id?: string
    fractionId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SellProposalCreateOrConnectWithoutPropertyInput = {
    where: SellProposalWhereUniqueInput
    create: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput>
  }

  export type SellProposalCreateManyPropertyInputEnvelope = {
    data: SellProposalCreateManyPropertyInput | SellProposalCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    proposals?: ProposalUpdateManyWithoutCreatorNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutCreatorNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FractionUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FractionWhereUniqueInput
    update: XOR<FractionUpdateWithoutPropertyInput, FractionUncheckedUpdateWithoutPropertyInput>
    create: XOR<FractionCreateWithoutPropertyInput, FractionUncheckedCreateWithoutPropertyInput>
  }

  export type FractionUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FractionWhereUniqueInput
    data: XOR<FractionUpdateWithoutPropertyInput, FractionUncheckedUpdateWithoutPropertyInput>
  }

  export type FractionUpdateManyWithWhereWithoutPropertyInput = {
    where: FractionScalarWhereInput
    data: XOR<FractionUpdateManyMutationInput, FractionUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ProposalUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutPropertyInput, ProposalUncheckedUpdateWithoutPropertyInput>
    create: XOR<ProposalCreateWithoutPropertyInput, ProposalUncheckedCreateWithoutPropertyInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutPropertyInput, ProposalUncheckedUpdateWithoutPropertyInput>
  }

  export type ProposalUpdateManyWithWhereWithoutPropertyInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPropertyInput, PaymentUncheckedUpdateWithoutPropertyInput>
    create: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPropertyInput, PaymentUncheckedUpdateWithoutPropertyInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPropertyInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ListingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutPropertyInput, ListingUncheckedUpdateWithoutPropertyInput>
    create: XOR<ListingCreateWithoutPropertyInput, ListingUncheckedCreateWithoutPropertyInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutPropertyInput, ListingUncheckedUpdateWithoutPropertyInput>
  }

  export type ListingUpdateManyWithWhereWithoutPropertyInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutPropertyInput>
  }

  export type SellProposalUpsertWithWhereUniqueWithoutPropertyInput = {
    where: SellProposalWhereUniqueInput
    update: XOR<SellProposalUpdateWithoutPropertyInput, SellProposalUncheckedUpdateWithoutPropertyInput>
    create: XOR<SellProposalCreateWithoutPropertyInput, SellProposalUncheckedCreateWithoutPropertyInput>
  }

  export type SellProposalUpdateWithWhereUniqueWithoutPropertyInput = {
    where: SellProposalWhereUniqueInput
    data: XOR<SellProposalUpdateWithoutPropertyInput, SellProposalUncheckedUpdateWithoutPropertyInput>
  }

  export type SellProposalUpdateManyWithWhereWithoutPropertyInput = {
    where: SellProposalScalarWhereInput
    data: XOR<SellProposalUpdateManyMutationInput, SellProposalUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutFractionsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFractionsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFractionsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFractionsInput, PropertyUncheckedCreateWithoutFractionsInput>
  }

  export type WalletCreateWithoutFractionsInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    assets?: AssetCreateNestedManyWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletUncheckedCreateWithoutFractionsInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutCreatorWalletInput
  }

  export type WalletCreateOrConnectWithoutFractionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutFractionsInput, WalletUncheckedCreateWithoutFractionsInput>
  }

  export type TransactionCreateWithoutFractionInput = {
    id?: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    wallet: WalletCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutFractionInput = {
    id?: string
    userId?: string | null
    walletId: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutFractionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput>
  }

  export type TransactionCreateManyFractionInputEnvelope = {
    data: TransactionCreateManyFractionInput | TransactionCreateManyFractionInput[]
    skipDuplicates?: boolean
  }

  export type SellProposalCreateWithoutFractionInput = {
    id?: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutSellProposalsInput
    creatorWallet: WalletCreateNestedOneWithoutSellProposalsInput
  }

  export type SellProposalUncheckedCreateWithoutFractionInput = {
    id?: string
    propertyId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SellProposalCreateOrConnectWithoutFractionInput = {
    where: SellProposalWhereUniqueInput
    create: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput>
  }

  export type SellProposalCreateManyFractionInputEnvelope = {
    data: SellProposalCreateManyFractionInput | SellProposalCreateManyFractionInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutFractionsInput = {
    update: XOR<PropertyUpdateWithoutFractionsInput, PropertyUncheckedUpdateWithoutFractionsInput>
    create: XOR<PropertyCreateWithoutFractionsInput, PropertyUncheckedCreateWithoutFractionsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFractionsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFractionsInput, PropertyUncheckedUpdateWithoutFractionsInput>
  }

  export type PropertyUpdateWithoutFractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type WalletUpsertWithoutFractionsInput = {
    update: XOR<WalletUpdateWithoutFractionsInput, WalletUncheckedUpdateWithoutFractionsInput>
    create: XOR<WalletCreateWithoutFractionsInput, WalletUncheckedCreateWithoutFractionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutFractionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutFractionsInput, WalletUncheckedUpdateWithoutFractionsInput>
  }

  export type WalletUpdateWithoutFractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    assets?: AssetUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutFractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutFractionInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFractionInput, TransactionUncheckedUpdateWithoutFractionInput>
    create: XOR<TransactionCreateWithoutFractionInput, TransactionUncheckedCreateWithoutFractionInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFractionInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFractionInput, TransactionUncheckedUpdateWithoutFractionInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFractionInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFractionInput>
  }

  export type SellProposalUpsertWithWhereUniqueWithoutFractionInput = {
    where: SellProposalWhereUniqueInput
    update: XOR<SellProposalUpdateWithoutFractionInput, SellProposalUncheckedUpdateWithoutFractionInput>
    create: XOR<SellProposalCreateWithoutFractionInput, SellProposalUncheckedCreateWithoutFractionInput>
  }

  export type SellProposalUpdateWithWhereUniqueWithoutFractionInput = {
    where: SellProposalWhereUniqueInput
    data: XOR<SellProposalUpdateWithoutFractionInput, SellProposalUncheckedUpdateWithoutFractionInput>
  }

  export type SellProposalUpdateManyWithWhereWithoutFractionInput = {
    where: SellProposalScalarWhereInput
    data: XOR<SellProposalUpdateManyMutationInput, SellProposalUncheckedUpdateManyWithoutFractionInput>
  }

  export type PropertyCreateWithoutSellProposalsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSellProposalsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSellProposalsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSellProposalsInput, PropertyUncheckedCreateWithoutSellProposalsInput>
  }

  export type FractionCreateWithoutSellProposalsInput = {
    id?: string
    supply: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutFractionsInput
    owner: WalletCreateNestedOneWithoutFractionsInput
    transactions?: TransactionCreateNestedManyWithoutFractionInput
  }

  export type FractionUncheckedCreateWithoutSellProposalsInput = {
    id?: string
    propertyId: string
    walletId: string
    supply: number
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFractionInput
  }

  export type FractionCreateOrConnectWithoutSellProposalsInput = {
    where: FractionWhereUniqueInput
    create: XOR<FractionCreateWithoutSellProposalsInput, FractionUncheckedCreateWithoutSellProposalsInput>
  }

  export type WalletCreateWithoutSellProposalsInput = {
    id?: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    assets?: AssetCreateNestedManyWithoutWalletInput
    fractions?: FractionCreateNestedManyWithoutOwnerInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    payments?: PaymentCreateNestedManyWithoutFromWalletInput
  }

  export type WalletUncheckedCreateWithoutSellProposalsInput = {
    id?: string
    address: string
    userId: string
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutWalletInput
    fractions?: FractionUncheckedCreateNestedManyWithoutOwnerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFromWalletInput
  }

  export type WalletCreateOrConnectWithoutSellProposalsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutSellProposalsInput, WalletUncheckedCreateWithoutSellProposalsInput>
  }

  export type PropertyUpsertWithoutSellProposalsInput = {
    update: XOR<PropertyUpdateWithoutSellProposalsInput, PropertyUncheckedUpdateWithoutSellProposalsInput>
    create: XOR<PropertyCreateWithoutSellProposalsInput, PropertyUncheckedCreateWithoutSellProposalsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSellProposalsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSellProposalsInput, PropertyUncheckedUpdateWithoutSellProposalsInput>
  }

  export type PropertyUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type FractionUpsertWithoutSellProposalsInput = {
    update: XOR<FractionUpdateWithoutSellProposalsInput, FractionUncheckedUpdateWithoutSellProposalsInput>
    create: XOR<FractionCreateWithoutSellProposalsInput, FractionUncheckedCreateWithoutSellProposalsInput>
    where?: FractionWhereInput
  }

  export type FractionUpdateToOneWithWhereWithoutSellProposalsInput = {
    where?: FractionWhereInput
    data: XOR<FractionUpdateWithoutSellProposalsInput, FractionUncheckedUpdateWithoutSellProposalsInput>
  }

  export type FractionUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFractionsNestedInput
    owner?: WalletUpdateOneRequiredWithoutFractionsNestedInput
    transactions?: TransactionUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFractionNestedInput
  }

  export type WalletUpsertWithoutSellProposalsInput = {
    update: XOR<WalletUpdateWithoutSellProposalsInput, WalletUncheckedUpdateWithoutSellProposalsInput>
    create: XOR<WalletCreateWithoutSellProposalsInput, WalletUncheckedCreateWithoutSellProposalsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutSellProposalsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutSellProposalsInput, WalletUncheckedUpdateWithoutSellProposalsInput>
  }

  export type WalletUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    assets?: AssetUpdateManyWithoutWalletNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutSellProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
  }

  export type PropertyCreateWithoutProposalsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    listings?: ListingCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutProposalsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    listings?: ListingUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutProposalsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutProposalsInput, PropertyUncheckedCreateWithoutProposalsInput>
  }

  export type UserCreateWithoutProposalsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProposalsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProposalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
  }

  export type PropertyUpsertWithoutProposalsInput = {
    update: XOR<PropertyUpdateWithoutProposalsInput, PropertyUncheckedUpdateWithoutProposalsInput>
    create: XOR<PropertyCreateWithoutProposalsInput, PropertyUncheckedCreateWithoutProposalsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutProposalsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutProposalsInput, PropertyUncheckedUpdateWithoutProposalsInput>
  }

  export type PropertyUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutProposalsInput = {
    update: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCreateWithoutListingsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPropertiesInput
    fractions?: FractionCreateNestedManyWithoutPropertyInput
    proposals?: ProposalCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutListingsInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    ownerId: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
    fractions?: FractionUncheckedCreateNestedManyWithoutPropertyInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
    sellProposals?: SellProposalUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutListingsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutListingsInput, PropertyUncheckedCreateWithoutListingsInput>
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    proposals?: ProposalCreateNestedManyWithoutCreatorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutCreatorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type PropertyUpsertWithoutListingsInput = {
    update: XOR<PropertyUpdateWithoutListingsInput, PropertyUncheckedUpdateWithoutListingsInput>
    create: XOR<PropertyCreateWithoutListingsInput, PropertyUncheckedCreateWithoutListingsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutListingsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutListingsInput, PropertyUncheckedUpdateWithoutListingsInput>
  }

  export type PropertyUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletCreateManyUserInput = {
    id?: string
    address: string
    createdAt?: Date | string
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    valuation: number
    nftAddress: string
    imageUrl: string
    status?: $Enums.PropertyStatus
    tokenId: string
    createdAt?: Date | string
  }

  export type ProposalCreateManyCreatorInput = {
    id?: string
    propertyId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type ListingCreateManySellerInput = {
    id?: string
    propertyId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    walletId: string
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutWalletNestedInput
    fractions?: FractionUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    payments?: PaymentUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutWalletNestedInput
    fractions?: FractionUncheckedUpdateManyWithoutOwnerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFromWalletNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutCreatorWalletNestedInput
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
    listings?: ListingUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fractions?: FractionUncheckedUpdateManyWithoutPropertyNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
    listings?: ListingUncheckedUpdateManyWithoutPropertyNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    valuation?: FloatFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    tokenId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    fraction?: FractionUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyWalletInput = {
    id?: string
    type: string
    referenceId: string
    createdAt?: Date | string
  }

  export type FractionCreateManyOwnerInput = {
    id?: string
    propertyId: string
    supply: number
    createdAt?: Date | string
  }

  export type TransactionCreateManyWalletInput = {
    id?: string
    userId?: string | null
    propertyId?: string | null
    fractionId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type PaymentCreateManyFromWalletInput = {
    id?: string
    propertyId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type SellProposalCreateManyCreatorWalletInput = {
    id?: string
    propertyId: string
    fractionId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssetUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FractionUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutFractionsNestedInput
    transactions?: TransactionUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    fraction?: FractionUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    fractionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutFromWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutFromWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutFromWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUpdateWithoutCreatorWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSellProposalsNestedInput
    fraction?: FractionUpdateOneRequiredWithoutSellProposalsNestedInput
  }

  export type SellProposalUncheckedUpdateWithoutCreatorWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUncheckedUpdateManyWithoutCreatorWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FractionCreateManyPropertyInput = {
    id?: string
    walletId: string
    supply: number
    createdAt?: Date | string
  }

  export type ProposalCreateManyPropertyInput = {
    id?: string
    creatorId: string
    title: string
    description: string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: boolean
    createdAt?: Date | string
  }

  export type PaymentCreateManyPropertyInput = {
    id?: string
    fromWalletId: string
    amount: number
    distributed?: boolean
    createdAt?: Date | string
  }

  export type ListingCreateManyPropertyInput = {
    id?: string
    sellerId: string
    amount: number
    price: number
    active?: boolean
    createdAt?: Date | string
  }

  export type SellProposalCreateManyPropertyInput = {
    id?: string
    fractionId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FractionUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WalletUpdateOneRequiredWithoutFractionsNestedInput
    transactions?: TransactionUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFractionNestedInput
    sellProposals?: SellProposalUncheckedUpdateManyWithoutFractionNestedInput
  }

  export type FractionUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    supply?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    votes?: JsonNullValueInput | InputJsonValue
    executed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromWallet?: WalletUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWalletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromWalletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    distributed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraction?: FractionUpdateOneRequiredWithoutSellProposalsNestedInput
    creatorWallet?: WalletUpdateOneRequiredWithoutSellProposalsNestedInput
  }

  export type SellProposalUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fractionId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyFractionInput = {
    id?: string
    userId?: string | null
    walletId: string
    propertyId?: string | null
    type: $Enums.TxType
    amount: number
    hash: string
    createdAt?: Date | string
  }

  export type SellProposalCreateManyFractionInput = {
    id?: string
    propertyId: string
    walletId: string
    shardsForSale: number
    pricePerShard: number
    remaining: number
    executed?: boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    amount?: FloatFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUpdateWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSellProposalsNestedInput
    creatorWallet?: WalletUpdateOneRequiredWithoutSellProposalsNestedInput
  }

  export type SellProposalUncheckedUpdateWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellProposalUncheckedUpdateManyWithoutFractionInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    shardsForSale?: IntFieldUpdateOperationsInput | number
    pricePerShard?: FloatFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    executed?: BoolFieldUpdateOperationsInput | boolean
    buyers?: JsonNullValueInput | InputJsonValue
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