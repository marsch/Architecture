# Roadmap

## POC 1 – point to point integration of ISV applications

- Business API is provided and maintained by ISV application owner or system integrator; It is not an OIH component
- Integration Node contains a minimum of one Integration flow, but can also contain more integration flows to allow communication
between additional ISV applications for different use cases

![POC1](https://github.com/openintegrationhub/Architecture/blob/roadmap/Roadmap/Assets/POC1PointToPoint.PNG)

## POC 2 – point to point integration of ISV applications using Connectors

- Business API is provided and maintained by ISV application owner or system integrator; It is not an OIH component
- Integration Node contains a minimum of one Integration flow, but can also contain more integration flows to allow communication
between additional ISV applications for different use cases
- Decoupling of ISV applications using Connectors
- Integration flow provides simple mapping & routing features between Connectors

![POC2](https://github.com/openintegrationhub/Architecture/blob/roadmap/Roadmap/Assets/POC2PointToPointUsingConnectors.PNG)

## POC 3 – hub & spoke integration of ISV applications with MDM

- Business API is provided and maintained by ISV application owner or system integrator; It is not an OIH component
- Integration Node contains a minimum of one Integration flow, but can also contain more integration flows to allow communication
between additional ISV applications for different use cases
- Decoupling of ISV applications using Connectors
- ISV specific connector component includes adapter and transformer modules to interact with the OIH Smart Data Framework
- Routing between OIH components is part of Integration Node deployment settings

![POC3](https://github.com/openintegrationhub/Architecture/blob/roadmap/Roadmap/Assets/POC3HubAndSpokeIntegrationWithMdm.PNG)

## POC 4 – hub & spoke integration of ISV applications with MDM and Identity Management

- Business API is provided and maintained by ISV application owner or system integrator; It is not an OIH component
- Integration Node contains a minimum of one Integration flow, but can also contain more integration flows to allow communication
between additional ISV applications for different use cases
- Decoupling of ISV applications using Connectors
- ISV specific connector component includes adapter and transformer modules to interact with the OIH Smart Data Framework
- Routing between OIH components is part of Integration Node deployment settings
- Identity management features allow secured transactions and processing of data

![POC4](https://github.com/openintegrationhub/Architecture/blob/roadmap/Roadmap/Assets/POC4HubAndSpokeWithMdmAndIdentityManagement.PNG)

## POC 5 – hub & spoke integration of ISV applications with MDM, Identity Management and Integration Repository

- Business API is provided and maintained by ISV application owner or system integrator; It is not an OIH component
- Integration Node contains a minimum of one Integration flow, but can also contain more integration flows to allow communication
between additional ISV applications for different use cases
- Decoupling of ISV applications using Connectors
- ISV specific connector component includes adapter and transformer modules to interact with the OIH Smart Data Framework
- Identity management features allow secured transactions and processing of data
- Integration repository allows central management including technical configuration of all Integration Nodes

![POC5](https://github.com/openintegrationhub/Architecture/blob/roadmap/Roadmap/Assets/POC5HubAndSpokeWithMdmIdentityManagementAndIntegrationRepository.PNG)
