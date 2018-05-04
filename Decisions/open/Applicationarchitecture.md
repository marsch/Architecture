# Status
proposed

# Context
Which architecture pattern do we use for the OIH?

# Alternatives

## Alternative Microservice architecture

### Decision
no decision yet

### Consequences
Pros:
- High autonomy of services (implementation choices, independent development and life cycle)
- Easy to scale independent services
- Good reuse of components

Cons:
- Development and Test overhead due to inter service communication and separate environments
- Data redundance due because each service has its own data storage
- Harder to monitor

## Alternative Service oriented architecture

### Decision
no decision yet

### Consequences
Pros:
- Good reuse of components

Cons:
- Architecture definition is less concrete than microservices architecture
