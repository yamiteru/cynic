# API

## Events

All event types have 3 different functions by which you can create them. First ends with `With` meaning you have to provide subscribers. Second ends in `Without` meaning you can't provide any subscribers. If you want to choose the right function based on the input you provide then use the function without `With`/`Without`.

### Event

Creates a basic event with either no set or a set filled with default subscribers.

```typescript
// With default subscribers
const event$ = event([...]);
const event$ = eventWith([...]);

// Without default subscribers
const event$ = event();
const event$ = eventWithout();
```

### Once

Creates an event which clears itself after the first publish.

```typescript
// With default subscribers
const event$ = once([...]);
const event$ = onceWith([...]);

// Without default subscribers
const event$ = once();
const event$ = onceWithout();
```

## Methods

Some methods also provide an unsafe version of themselves that make an assumption that the event passed into them has already been initialized. They throw an error if the event has not been initialized yet as opposed to their safe counterparts that either intialize the event or provide a default value. 

## Subscribe

Adds a subscriber to the event and returns a function which removes the subscriber if called.

```typescript
// Safe subscribe
const unsub = subscribe(event$, ...);

// Unsafe subscribe
const unsub = subscribeUnsafe(event$, ...);
```

## Publish

Published value to all subscribers.

```typescript
// Safe publish
publish(event$, ...);

// Unsafe publish
publishUnsafe(event$, ...);
```

## Size

Returns the number of subscribers in the provided event.

```typescript
// Safe size
const eventSize = size(event$);

// Unsafe size
const eventSize = sizeUnsafe(event$);
```

## Has

Return true if the provided event already has the provided callback.

```typescript
// Safe has
const hasCallback = has(event$, ...);

// Unsafe has
const hasCallback = hasUnsafe(event$, ...);
```

## Clear

Removes all subscribers on the provided event.

```typescript
clear(event$);
```
