# What is an integration process

An integration process or an integration flow describes the process of data propagation from one source system to n (any number of) target systems.

# Exemplary Integration Process

In the following one exemplary integration proccess is described.

**Starting situation:**

- There is only one _sender_
- There are n _receiver (applications)_ of the propagated data
- A _connector_ (consisting of _adapter_ and _transformer_) exsits for each application (_sender and receiver_)

## Integration Process steps

1. A new data record is added within the _sender_ application
2. The referring conenctor is informed about the new data (either by a webhook or through polling mechanisms)
3. The adapter syntactically transforms the data from the proprieraty format (e.g. XML, JS, CSV) into a JSON objects
    - The adapter also ensures that data is normalized (e.g. same format for date-times)
4. The adapter pushes the syntactically transformed data onto a message queue
5. The data is processed within the message queue
6. The transformer semantically transforms the incoming JSON object from the source model format into the Open Integration Hub master data model format
7. The transformer send the semantically transformed data to the OIH API v1
8. The data set is processed within the Open Integration Hub
9. The proccessed data is propagated to all dependent transformers (Dependencies are previously defined)
10. Within each transformer the new data is semantically transformed from the Open Integration Hub master data model into the source model format (Both JSON objects)
11. The semantically transformed data is pushed onto a messaging queue
12. The data is the syntactically transformed from a JSON object into the proprieraty format
13. The syntactically transformed data is pushed into the target systems (_receiver_)
14. The new data record is communicated to all _receiver_ applications

The following illustrations vizualizes the integration proccess:

_Note:_ The dashed lines symbolize optional parts of the Open Integration Hub.

![IntegrationProcess](Assets/OihIntegrationProcessUniDirectional.svg)

## Integration Process Components
### Connector
For the communication between an ISV application and the OIH, a connector component is used.
The connector can be implemented to meet the specific requirements of the ISV application.
To help with the implementation, an [implementation guideline](https://github.com/openintegrationhub/Connectors) and reusable components are provided.
The connector is obligated to meet the OIH API.

### OIH API
The OIH API is the interface provided by the OIH which is used by the connectors to exchange data with the OIH.

### Integration Framework
The OIH component "Integration Framework" provides basic services to enable authorization, validation and routing.

### Smart Data Framework
The OIH component "Smart Data Framework" provides capabilities to use a meta data model and data storages. A complete definition can be found within the [glossary](https://github.com/openintegrationhub/Connectors/wiki/Glossary#smart-data-framework).
