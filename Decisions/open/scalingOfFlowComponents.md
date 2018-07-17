scaling of flow components

# Status
proposed

# Context
Is the OIH connector a scalable component?
The amount of exchanged messages between an ISB application and the OIH could grow to require a scaling of the oih connector.

# Alternatives

## Alternative connector scaling is supported
Additional instances of an OIH connector can be started for one tenant. 

### Decision
the decision was not yet made

### Consequences
Data conistency and sequencing must be ensured for multiple connector instances. 

## Alternative connector scaling is not supported
Only one instances of an OIH connector can be started for each tenant. 

### Decision
the decision was not yet made

### Consequences
scaling is limited to increasing the ressources for the single connector instance.
