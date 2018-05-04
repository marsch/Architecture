# Protocol

**Attendees:** Igor, Selim, Franz, Philipp, Frank, Andreas, Lutz

## Protocol from 16.03.2018
accepted

## Connectors
We agreed on the naming and packaging of the connector components. 
The OIH component "connector" will not be implemented and deployed as a single component.
Instead it will consist of multiple deployable components e.g.: application specific adapter, transformer, sdf adapter

## OIH API
We agreed on an API scenario where there is a main OIH API and additional wrapper apis.
The main API will be an asychron messaging based api with json format. A potential aditional apis could be a swagger api.

Igor presented a swagger file for the schema management services of the OIH API and an approach for the domain services of the OIH API.
The domain services could be implemented using a general service method instead of explicit services.

Philipp showed a version of the OIH API where the domain methods are explicitly implemented.

## next steps
- Igor:
		- prepare draft for Swagger API
