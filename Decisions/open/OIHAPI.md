# Status
proposed

# Context
The communication between the connectors and the OIH uses an API. Which protocol and technology should be used?
Requirements for the API: https://github.com/openintegrationhub/Architecture/blob/OIHAPI/OIHAPI.md

# Alternatives

## Alternative messaging based with json markup and optional wrapper apis 
The main oih api will be implemented using asynchron messaging.
Additional apis can be implemented as wrapper apis which provides additional interfaces e.g. rest/json and uses the main api.

### Decision
no decision yet

### Consequences
Request/reply scenarios must be implemented using reply queues.
Scalability is achieved using a scalable messaging infrastructure.
One to many communication is supported.


## Alternative rest/json
The main oih api will be implemented using json/rest.

### Decision
no decision yet

### Consequences
The synchron api request/response cycle must be managed (e.g. http polling, callbacks) to reduce the impact on the scalability and performance of the system.
One to many communication is not supported.
Scalability is achieved using a load balancing infrastructure component.

