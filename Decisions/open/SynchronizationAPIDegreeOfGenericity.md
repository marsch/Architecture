# Status
proposed

# Context
There will be a REST API provided by the Smart Data Framework that can be used by connectors of ISV apps for the
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
- Generic one-size-fits-all solution
- Small and lightweight API

Cons:
- Deserialization of JSON data seems to be more complex in particular if there is no object type given in the objects (this is in particular true if inheritance is supported)
- Generic code is often much harder to implement and maintain than code that is more domain-specific
- Unclear how conflict detection can be realized within the smart data framework
- Complexity of conflict handling will be shifted from framework into connector or ISV app

## Alternative "Domain-specific REST APIs for update propagation"
The API for update propagation will be completely domain-specific. There will be extra resources for the different 
aggregates, entities (?), value objects (?) that can be updated by the standard REST methods (POST, PUT, DELETE, PATCH).

**Example: Update to single ressource:**
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

**Example: Bulk update**

**HTTP Request:**

```
PATCH /contacts
```

**Body:**

```json
[
  {
    "aggregateUuid": "d10b642c-6e76-11e8-adc0-fa7ae01bbebc",
    "operationType": "delete",
    "operationTime": "2007-04-05T12:30-02:00",
    "operationOriginAppUuid": "com.snazzycontacts.SnazzyContacts", 
    "securityUserUuid": "bc9c46fe-238b-11e8-b467-0ed5f89f718b",
    "securityUserRole": "some-role",
    
    "aggregate": {}
  }, 
  {
    "aggregateUuid": "7d2817e6-6e77-11e8-adc0-fa7ae01bbebc",
    "operationType": "update",
    "operationTime": "2007-04-05T12:30-02:00",
    "operationOriginAppUuid": "com.snazzycontacts.SnazzyContacts", 
    "securityUserUuid": "bc9c46fe-238b-11e8-b467-0ed5f89f718b",
    "securityUserRole": "some-role",
      
    "aggregate": {
      "lastName": "Kuhn"
    }
  }
]
``` 

### Decision
no decision yet

### Consequences
Pros:
- Easy to understand and easy to read
- REST APIs could be generated out of master data models
- Validation of data delivered in the message body is possible and straight-forward
- Conflict handling can be much easier realized (in comparison to alternative 1), as the context and operation of the conflict is clear

Cons:
- The implementation of the update propagation component in the connector has to be (at least to a certain degree) also to be domain-specific
- Overall the API will be larger in comparison to alternative 1
 
