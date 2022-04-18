# Cynic

Tiny and simple TS pub/sub library with great focus on performance.

## Concept

Most pub/sub libraries are based on string matching. Some even add an additional wildcard matching like `player.*`. Although this is a valid approach it's usually unnecessary.

We can simply externalize the internal nested structure of `player.*` into our custom data structure  (object, array, etc.) and logic around it.

This makes the inner workings of the library more transparent and also more performant since we don't have to match an unknown string to a dynamic structure. Also we get type safety as a bonus!

The `player.*` structure can be expressed as a simple object just like this:

```typescript
const player = {
    position: event{ x: number, y: number, z: number }(),
    health: event<number>(),
    money: event<number>(),
};
```

And can be cleared just like this:

```typescript
for (const $event of player) {
    clear(event$);
}
```

Cynic internally uses sets as opposed to objects, maps or arrays. Since sets have time complexity of `O(1)` for `.add`, `.delete` and `.has` they're a great candidate for storing and accessing data.

Also when you subscribe to a event you get back an unsubscribe function so you don't have to store callbacks in constants in order for you to unsubscribe a callback. 

___

## Usage

```typescript
// Non-mapped event
const $playerPosition = event<{ x: number, y: number, z: number }>();

// Mapped event
const $trigger = event<boolean, "active" | "inactive">((v) => v ? "active": "inactive");

// Validated event
const $onlyPositive event<number>((v) => v >= 0 ? v: undefined);

// Event with no input
const $clicked = trigger();

// Readonly event
const $readonlyTrigger = readonly($trigger);

// Event from EventTarget or EventEmitter
const $onWindowResize = from(window, "resize");
```

### subscribe

```typescript
const playerPositionUnsubscribe = subscribe($playerPosition, (pos) => {
    notifyEnemies(pos);
    updateChunks(pos);
});
```

### publish

```typescript
// event
publish($playerPosition, {
    x: 10, y: 0, z: 4
});

// trigger
publish($clicked);
```

## size

```typescript
const subCount = size($playerPosition);
```

## has

```typescript
const hasLog = has($playerPosition, console.log);
```

## clear

```typescript
clear($playerPosition);
```

___

## Modularity

Each `event` is basically just a wrapper around a set. This set is stored in an object property using a secret symbol. Thanks to this it can be accessed by official functions provided by this package but cannot be accessed anywhere else.

Thanks to this Cynic is very tree-shakable. If you think there should be more official functions just create a PR! I'm very open to any improvement of this library.

___

Have a beautiful day 🍀