# Benchmark

Generally speaking Cynic is very efficient in creating new events and subscribing to them. It's also quite fast in publishing values and removing subscribers.

## Results

| Name  | Init          | Subscribe   | Publish     | Remove     |
|-------|---------------|-------------|-------------|------------|
| RxJS  | 140,442,531   | 1,179,885   | 33,629,291  | 7,817,756  |
| Cynic | 1,027,317,490 | 178,282,537 | 153,127,781 | 15,787,674 |
