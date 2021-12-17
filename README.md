# Cynic

Tiny and simple TS pub/sub library with great focus on performance.

## Concept

Most pub/sub libraries are based on string matching and some add an additional wildcard matching like `player.*`. Although this is a valid approach it's completely unnecessary.

We can simply externalize the internal nested structure of `player.*` into our custom data structure (object, array, etc.).

This makes the inner workings of the library more transparent and also more performant since we don't have to match an unknown string to a dynamic structure.

The `player.*` structure can be expressed as a simple object just like this:

```typescript
const player = {
    position: channel(),
    health: channel(),
    money: channel(),
};
```

And can be cleared just like this:

```typescript
for (const channel of player) {
    channel.clr();
}
```

Cynic internally uses sets as opposed to objects, maps or arrays. Since sets have time complexity of `O(1)` for `.add`, `.delete` and `.has` they're a great candidate for storing and accessing subscribers.

Also since Cynic provides a function to unsubscribe a subscriber you don't need to save callbacks into variables so you can remove subscribers later. 

## Usage

```typescript
const playerPosition = channel<{ x: number, y: number, z: number }>();
```

### sub

```typescript
const playerPositionUnsubscribe = playerPosition((pos) => {
    notifyEnemies(pos);
    updateChunks(pos);
});
```

### pub

```typescript
playerPosition.pub({
    x: 10, y: 0, z: 4
});
```

## lng

```typescript
const subCount = playerPosition.lng();
```

## has

```typescript
const hasLog = playerPosition.has(console.log);
```

## clr

```typescript
playerPosition.clr();
```

___

Have a beautiful day 🍀
