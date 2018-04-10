# Base Architecture
Open Integration Hub – Development of an open source integration plattform with master data management for hybrid small and medium business usage scenarios

# Table of Contents
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Base Architecture](#base-architecture)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Assumptions and Constraints](#assumptions-and-constraints)
	- [Microservices Architecture Pattern](#microservices-architecture-pattern)
	- [Container Virtualization](#container-virtualization)
	- [Service Communication OIH Services](#service-communication-oih-services)
	- [Service Communication ISV Applications with OIH](#service-communication-isv-applications-with-oih)
	- [Master Data Model](#master-data-model)
- [System Scope and Context](#system-scope-and-context)
	- [Business Context](#business-context)
		- [Partner ISV Application](#partner-isv-application)
		- [Partner ISV Application User](#partner-isv-application-user)
	- [Technical Context](#technical-context)
		- [Partner ISV Application with Application Specific Communication](#partner-isv-application-with-application-specific-communication)
		- [Partner Market Place Configuration Service](#partner-market-place-configuration-service)
- [Solution Strategy](#solution-strategy)
	- [Master Data Model](#master-data-model)
	- [Application Specific Contracts using Connectors](#application-specific-contracts-using-connectors)
	- [Routing](#routing)
	- [Integrating an ISV Application](#integrating-an-isv-application)
	- [Data Storage](#data-storage)
- [Building Block](#building-block)
	- [Top level Decomposition](#top-level-decomposition)
		- [OIH Runtime](#oih-runtime)
		- [Smart Data Framework](#smart-data-framework)
		- [OIH Tooling for Development and Operations](#oih-tooling-for-development-and-operations)
	- [Level 1](#level-1)
		- [Motivation](#motivation)
		- [Contained Building Blocks](#contained-building-blocks)
	- [Level 2](#level-2)
		- [Motivation](#motivation)
		- [Contained Building Blocks](#contained-building-blocks)

<!-- /TOC -->

# Introduction
This document describes the architecture of the OIH.

# Assumptions and Constraints
## Microservices Architecture Pattern
The Microservices architecture pattern will be used for all services of the OIH runtime. Reasons:
* Flexibility for implementation and deployment of individual microservices
* Scalability during development

## Container Virtualization
Docker will be used as the virtualization solution.

## Service Communication ISV Applications with OIH
The API used by connectors to commuicate with the hub is messaging based with markup JSON. The main reason is, that the communication must be asynchronous.

## Master Data Model
A compatible Master Data Model can be created.
It must support different ISV applications with regional and language specific models and behaviors.

# System Scope and Context
![System Scope](Assets/MulticloudIntegration.png)

## Business Context
List of communication partners from a business perspective

### Partner ISV Application
The ISV application which is connected to the OIH.
Domain specific services for the domains:
* Customer
* Product
### Partner ISV Application User
The end customer who uses one of the connected ISV applications.
Configuration services provided by the marketplace to configure the application in an OIH context:
* Register application to OIH
* Configure exchangeable data

## Technical Context
List of communication partners from a technical perspective

### Partner ISV Application with Application Specific Communication
Protocol: application specific, e.g. HTTP/Rest, RFC

Markup: application specific, e.g. SOAP, XML, CSV, iDoc

Data model: application specific

### Partner Market Place Configuration Service
Protocol: ND

Markup: JSON

Data model: ND

# Solution Strategy

There will be three usage scenarios:
- Main scenario: The Open Integration Hub including the Smart Data Framework with a given schema
- Derived scenario (Form the main scenario): The schema can be replaced/modified
- Minimal scenario: The Open Integration Hub provides many to many (m to n) integration without the schema / Smart Data Framework. For this scenario it is necessary that the user performs the mapping.

The following diagram shows the hub and spoke architecture for the implementation

![](https://github.com/openintegrationhub/Architecture/blob/master/Assets/HubAndSpoke.png)

In the main scenario, all connected applications have a corresponding Connector which translates between the application specific interface of the application and the master data model of the OIH.

![](https://github.com/openintegrationhub/Architecture/blob/7fb4b043b2ffbc6c9681b21800fb3804f7201bae/Assets/ApiOverview.svg)

In the Minimal scenario the connector component can bypass the smart data framework and communicate directly with the connector component of another application

## Master Data Model
The hub and spoke architecture relies heavily on a master data model. This model is created to support the integration between all applications using a common entity. To support more applications, the model will be extended in a community driven process. To enable a flexible release process for ISV applations and connectors, changes to the master data model must be backward compatible.

## Application Specific Contracts using Connectors
To meet as many application specific contracts as possible, a connector is used.
A connector is a runtime component which has the following characteristics:
* matches the application specific contract (protocol and format)
* matches the OIH contract (protocol and master data format)
* contains a transformation between the two data formats
* can support both directions for communication

## Routing
Messages interchanged by an application and the OIH are routed according to the configuration for this connection. The configuration determines:
* does the connections accept inbound and/or outbound messages
* which connected applications are allowed to communicate using this connection

## Integrating an ISV Application
ISV applications with existing APIs for the exchange of master data are connected using a connector.
An ISV application without existing APIs needs to implement exchange interfaces to enable the exchange of data with the OIH.

![](Assets/IntegratingISVApplication.png)

The application should still use its own data storage to be independent from a connection to the OIH.
APIs for inbound and outbound data exchange can be implemented.

## Data Storage
Using the optional component "OIH Smart Data Framework", it is possible to store master data within the OIH. The Smart Data Framework provides capabilities like:
* Auditing
* Reporting
* Backup and Recovery
* Information Lifecycle Management (e.g. [GDPR](https://gdpr-info.eu/))

# Building Block
![](Assets/buildingBlocks2.png)

## Top level Decomposition
The OIH consists of three parts:
* OIH runtime
* OIH Smart Data Framework
* OIH tooling

The decision to this decomposition considers that the Smart Data Framework is an optional component which is not necessary to deploy, run and use the OIH. The tooling is needed to configure OIH artifacts and initialize the OIH runtime.

### OIH Runtime
The OIH runtime is the central part of the OIH. It must be deployable in a cloud environment and in onsite customer environments.
It contains all services necessary to connect an application to the OIH runtime and route messages to connected applications.

The OIH runtime consists of a message broker and multiple connectors.
The message broker is used to route messages between applications and to provide a publish/subscribe infrastructure for event based communication.
If the contract of the message broker interface cannot be met by a system or application, existing or newly created connectors can be used to transform communication style, protocol and data model according to the application specific requirements.

### Smart Data Framework
The OIH Smart Data Framework is an optional component providing hub and spoke style communication using a master data schema and providing management features like reporting and auditing.

### OIH Tooling for Development and Operations
The tools are used to create and configure the runtime artifacts for the OIH runtime like connectors and connections.

## Level 1
### Motivation
The system should be able to reuse existing components, to connect new ISV applications. The Connector should be implemented as a highly flexible component, easy to adapt and reuse.
### Contained Building Blocks
- Connector
An ISV application communicates with the OIH using its application specific protocol and data format. To match this, a connector is created and deployed as part of the OIH.
- Smart Data Framework
To enable a hub and spoke communication style, a master data model is used. The Smart Data Framework contains the master data model, routing logic and services for validation and synchronization.
## Level 2
### Motivation
The capability to adress customer- and applicationspecific protocols is the main feature of each connector. This capability will most likely see the most demand for reuse.
The capability to transform content and format should be provided in a flexible way.
To transform to the OIH master data model or to match directly to other applicationspecific formats, the optional component Transformator is used.
### Contained Building Blocks
- Adapter
resuable component to match the application specific contract by protocol
- Transformator
resuable component to match the application specific contract by format
- storage of raw data
the raw data send by the application is stored without any conversion or transformation.
