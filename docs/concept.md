# Concept

There are several types of event libraries out there in the wild. Functional, event emitters, pub/subs, signals, event streams, etc. I think all event libraries are in an essence event streams since they all create continuous streams of events. That's why Cynic is an event stream.

## Size

Some people say that size doesn't matter. I dare to disagree. When it comes to JavaScript libraries that run in a browser we be very aware about the number of bytes we force our users's browsers to download and parse. This makes our users wait hence making the UX worse.

Cynic is based on functional composition where the event is being passed around by reference and used in its methods. Thanks to this you always download and parse only the code you use unlike in libraries that use OOP or any other similar untreeshkeable approach.

Thanks to this the event itself can weight just around 85 bytes.

## Performance

Most event libraries internally use arrays or objects to store subscribers. Even though objects and array are very fast to initialize they're not ideal when it comes to storing unique callbacks.

Cynic internally uses a set which has a time complexity of `O(1)`for `.add`/`.has`/`.get`/`.delete`. Additionally sets can store unique callbacks making it a perfect data structure for the job.

Internally Cynic defers creation of the set since it's a much more expensive operation than creating on object. Thanks to this we not only make event initialization very fast but we also save memory when we don't really need it. The set is created when the event becomes alive by adding the first subscriber.

Also there are low-level and unsafe functions that are a little bit faster than their high-level and safe counterparts. You can use them to squeeze the last operation per second.

## Structure

Most event libraries add subscribers indirectly by using some form of string pattern matching (`emitter.emit("player.position", callback)`). This approach is not only problematic when it comes to providing correct types but it also adds an unnecessary layer of complexity to the underlying implementation.

Cynic adds subscribers directly on specific events (`subscribe(event$, callback)`). Thanks to this simple change we get good type support, no added underlying complexity and also freedom in the way we want to manage our events.

We could for example export/import individual events only where we need them or create a structure similar to the other event libraries like so:

```typescript
const events = {
    player: {
        position: event<Position>()
    }
};
``` 
