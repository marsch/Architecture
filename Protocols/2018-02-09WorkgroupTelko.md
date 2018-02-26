# Protocol of workgroup call on 09.02.2018

**Attendees:** Igor, Selim, Susanne, Franz, Raphael, Philipp

## previous protocol on 26.01.2018
accepted

# Intermicroservice and end-to-end communication
Several aspects of sync and async communication styles were discussed with different optinions in the workgroup.

Some requirements for the OIH (provided by IESE, not yet fixed):
- ASR.Availability.04: Updates happen in a cloud app of an ISV. The updates are buffered up to n days if the connection to the OIH platform is lost.
- ASR.Availability.08: The cloud apps are still working without the OIH platform.
- ASR.Availability.09: The cloud app of an ISV is currently not available. The other cloud apps are still working.

Igor suggested to start with a synchronous rest api for end-to-end and for intermicroservice communication.

Franz suggested to use an asynchronous messaging api with the communication patterns "fire and forget" (priority) and "sync over async" (if a response is needed). This would apply to intermicroservice communication and the communication between connector and smart data framework. The connector itself could provide whatever api is needed by the application.

Susanne suggested an asynchronous communication pattern to enable application decoupling and better scaling.

Igor suggested the "event sourcing" pattern as a solution to the requirements. 

## Next Steps
- Selim:
	- Microservices for usermanagement
-> ongoing	

- Igor:
	- Consultation with Selim about usermanagement
-> ongoing	
	- Preparation PoC
-> ongoing

- all:
	- form an opinion about "Intermicroservice and end-to-end communication"
