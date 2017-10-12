# Architecture
AP 2.10 - Integration Service and Data Hub [Franz]

![DependencyDraft](images/dependencyDraft.png)

[11.08.17 - MeetingMinutes by Franz](https://github.com/OpenIntegrationHub/Architecture/wiki/MeetingMinutes)

## Open Questions
...
* Which Data stores come into consideration for a MDM system?
* * Comparison, Battle proven
* * If we were to use MongoDB, how do we tackle transactions? Two phase commits?
* * Versioning? Event sourcing?

* Data Model
* * Do we want a shared generic data model (shared library?) across services?

* Project scaffolding
* * Create a default project structure containing e.g. source code, k8s config, Jenkins file, Docker file, Docs, etc.

## Obstacles
...

## Dependencies
* AP 2.08 - Conception Integration Service [Igor]
  > ...
* AP 2.09 - Conception Data Hub & Standardization Data Model [Renat]
  > ...
