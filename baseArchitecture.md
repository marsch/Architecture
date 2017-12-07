Open Integration Hub – Development of an open source integration plattform with master data management for hybrid small and medium business usage scenarios

# Introduction
This document describes the architecture of the OIH.

# Goals, objectives, and constraints
## Assumptions
### Microservices architecture pattern
The Microservices architecture pattern will be used for all services of the OIH runtime. Reasons:
* Flexibility for implementation and deployment of individual microservices
* Scalability during development

### Container virtualization
Docker will be used as the virtualization solution.

### Service Communication OIH services
The microservices within the OIH provides http/rest with markup JSON APIs.

### Service Communication ISV applications with OIH
The API used by connectors to commuicate with the hub is messaging based with markup JSON. The main reason is, that the communication must be asynchronous.

### Master Data Model
A compatible Master Data Model can be created.
It must support different ISV applications with regional and language specific models and behaviors.


# System Scope and Context
![System Scope](https://github.com/openintegrationhub/Architecture/blob/master/Assets/MulticloudIntegration.png)

### Top level decomposition
The OIH consists of three parts:
* OIH runtime
* OIH Smart Data Framework
* OIH tooling

The decision to this decomposition considers that the Smart Data Framework is an optional component which is not necessary to deploy, run and use the OIH. The tooling is needed to configure OIH artifacts and initialize the OIH runtime.

### OIH runtime
The OIH runtime is the central part of the OIH. It must be deployable in a cloud environment and in onsite customer environments.
It contains all services necessary to connect an application to the OIH runtime and route messages to connected applications.

The OIH runtime consists of a message broker and multiple connectors.
The message broker is used to route messages between applications and to provide a publish/subscribe infrastructure for event based communication.
If the contract of the message broker interface cannot be met by a system or application, existing or newly created connectors can be used to transform communication style, protocol and data model according to the application specific requirements.

### Smart Data Framework
The OIH Smart Data Framework is an optional component providing hub and spoke style communication using a master data schema and providing management features like reporting and auditing.

### OIH Tooling for development and operations
The tools are used to create and configure the runtime artifacts for the OIH runtime like connectors and connections.

## Business Context
List of communication partners from a business perspective

### Partner ISV application
Domain specific services for the domains:
* Customer
* Product
### Partner ISV application user
Configuration services provided by the marketplace to configure the application in an OIH context:
* Register application to OIH
* Configure exchangeable data

## Technical Context
List of communication partners from a technical perspective

### Partner ISV application using the OIH API
Protocol: Message Queue/Topic

Markup: JSON

Data model: see MDM concept
### Partner ISV application with application specific communication
Protocol: application specific, e.g. HTTP/Rest, RFC

Markup: application specific, e.g. SOAP, XML, CSV, iDoc

Data model: application specific

### Partner Market place configuration service
Protocol: ND

Markup: JSON

Data model: ND

# Solution Strategy

There will be three usage scenarios:
- Main scenario: The Open Integration Hub including the Smart Data Framework with a given schema
- Derived scenario (Form the main scenario): The schema can be replaced/modified
- Minimal scenario: The Open Integration Hub provides many to many (m to n) integration without the schema / Smart Data Framework. For this scenario it is necessary that the user performs the mapping.

The following diagram shows the hub and spoke architecture for the implementation

![](https://github.com/openintegrationhub/Architecture/blob/master/Assets/SystemScopeV1.1.png)

## Master Data Model
The hub and spoke architecture relies heavily on a master data model. This model is created to support the integration between all applications using a common entity. To support more applications, the model will be extended in a community driven process. To enable a flexible release process for ISV applations and connectors, changes to the master data model must be backward compatible.

## Application specific contracts using connectors
An ISV application communicates with the OIH using its application specific protocol and data format. To match this, a connector is created and deployed as part of the OIH.
A connector is a runtime component which has the following characteristics:
* matches the application specific contract (protocol and format)
* matches the OIH contract (protocol and master data format)
* contains a transformation between the two data formats
* can support both directions for communication

## Routing
Messages interchanged by an application and the OIH are routed according to the configuration for this connection. The configuration determines:
* does the connections accept inbound and/or outbound messages
* which connected applications are allowed to communicate using this connection

## Integrating an ISV application
ISV applications with existing APIs for the exchange of master data are connected using a connector.
An ISV application without existing APIs needs to implement an API to enable the exchange of data with the OIH.

![](https://github.com/openintegrationhub/Architecture/blob/master/Assets/OIHApplicationV2.png)

The application should still use its own data storage to be independent from a connection to the OIH.
APIs for inbound and outbound data exchange can be implemented.

## Data Storage
Using the optional component "OIH Smart Data Framework", it is possible to store master data within the OIH. The Smart Data Framework provides capabilities like:
* Auditing
* Reporting
* Backup and Recovery
* Information Lifecycle Management (e.g. [GDPR](https://gdpr-info.eu/))

# Building Block View
# Runtime View
# Deployment View
# Glossary
