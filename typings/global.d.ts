declare type ValueOf<T> = T extends Object ? T[keyof T] : unknown;
