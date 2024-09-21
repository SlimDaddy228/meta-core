type AddSource<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R
        ? (source: number, ...args: A) => R
        : never;
};

type Mapping<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R
        ? (...args: A) => R
        : never;
};


type TransformMethods<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R
        ? (...args: A) => Promise<R> // Преобразуем оригинальный метод в Promise
        : never;
} & {
    [K in keyof T as `_${string & K}`]: T[K] extends (...args: infer A) => infer R
        ? (...args: A) => R // Дублируем метод без Promise
        : never;
};

// Шаг 2: Утилита, которая добавляет дубликаты методов с Promise, но без Promise и с _ в названии
type AddPromiseOverload<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => Promise<infer R>
        ? (...args: A) => Promise<R> // Оригинальный метод с Promise
        : T[K] extends (...args: infer A) => infer R // Проверка, возвращает ли метод не Promise
            ? (...args: A) => R // Оригинальный метод без Promise
            : never;
} & TransformMethods<T>;

export type ClientRemote<T> = AddSource<AddPromiseOverload<T>>;
export type ServerRemote<T> = Mapping<AddPromiseOverload<T>>;