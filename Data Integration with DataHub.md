# Integration scenario with DataHub

## Overview

This document will summarize the design suggestion for [data synchronization](https://en.wikipedia.org/wiki/Data_synchronization)
scenario using DataHub (aka. Smart Data Framework).

Usage of 

## Demo scenario



## Known limitations

### Lim1
Given example is very limited and focused only on **data synchronization** which is only a subset of larger 
[**data integration**](https://en.wikipedia.org/wiki/Data_integration), 
[**application integration**](https://en.wikipedia.org/wiki/Enterprise_application_integration) or 
[**system integration**](https://en.wikipedia.org/wiki/System_integration) therefore can not be used
as the use-case for describing all of the the OIH application scenarios.

### Lim2
In the ideal world advantages of the 
[hub-and-spoke](https://en.wikipedia.org/wiki/Spoke%E2%80%93hub_distribution_paradigm)
architecture (hence usage of DataHub) only exist when synchornizing data between more than two systems 
(this conclusion can easily be proved with complexity calculation of the graph interconnectivity).
However in the real world most of the times systems where data should be synchornized rarely provide
sufficient functionality in their APIs that would enable practicle, reliable and performant data synchornization
even between two systems.
