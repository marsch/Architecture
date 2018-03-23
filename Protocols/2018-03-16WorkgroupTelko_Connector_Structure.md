# Protocol

**Attendees:** Igor, Franz, Philipp, Jacob

## OIH connector structure
Igor presented two implementation overviews for the OIH connector. A SDF adapter handles the communication of a connector with the OIH.
1. one OIH connector is represented as one elastic.io integration flow consisting of three parts:
	- an application specific adapter component
	- an application specific transformer component
	- a SDF adapter component
	
2. one OIH connector is represented as one elastic.io integration flow consisting of two parts:
	- an application specific adapter component
	- a SDF adapter component
	The mapping is done within the smart data framework. The smart data framework contains a raw data storage

## OIH connector deployment artifacts
The OIH components will be deployed as Docker Container. The OIH connector will consists of more than one Docker Container, one for each component (adapter, transformer, sdf adapter). 
	
## follow ups:
@Igor: please provide the presentation of the integration flows

@all: follow up on OIH API
