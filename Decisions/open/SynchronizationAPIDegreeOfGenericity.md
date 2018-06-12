# Status
proposed

# Context
There will be a REST API provided by the Smart Data Framework that can be used by connectors of ISV apps for 
propagation of updates. It has not yet been decided on the degree of genericity of this API (completely generic vs.
domain specific).

# Alternatives

## Alternative "Generic REST API for update propagation"
The API for update propagation will be completely generic. There will be a "data" resource that can be used to post changes to arbitrary
json data (compare to https://github.com/openintegrationhub/Architecture/blob/master/SmartDataFramework/oih-sdf-api-0.0.1.yaml).

### Decision
no decision yet

### Consequences
Pros:
- 

Cons:
- 

## Alternative "Domain-specific REST APIs for update propagation"
The API for update propagation will be completely domain-specific. There will be extra resources for the different 
aggregates, entities (?), value objects (?) that can be updated by the standard REST methods (POST, PUT, DELETE, PATCH).

**Example:**
Surname of a contact has changed.

**HTTP Request:**

```
PATCH /contacts/447d9088-6e54-11e8-adc0-fa7ae01bbebc
```

**Body:**

```json
{
    "lastName": "Kuhn"
}
``` 

### Decision
no decision yet

### Consequences
Pros:
- 

Cons:
- 

## Alternative "REST APIs for update propagation on the granularity of Domain-Driven-Design concepts"

### Decision
no decision yet

### Consequences
Pros:
- 

Cons:
- 
