# Integration scenario with DataHub

## Overview

This document will summarize the design suggestion for [data synchronization](https://en.wikipedia.org/wiki/Data_synchronization)
scenario using DataHub (aka. Smart Data Framework).

Usage of Data Hub will be demonstrated based on the example integration scenario where we should
keep the contact data between [Wice CRM](http://wice.de), [Silver ERP](http://www.silvererp.com/) and 
[Mailchimp](https://mailchimp.com) in sync.

## User story

As a business user I would like to keep contact data between CRM, ERP and e-mail marketing programm in sync so that
I could communicate with my customers via multiple channels (direct calls, e-mail spam, etc.) and grow my revenues
with it.

![overview](https://raw.githubusercontent.com/openintegrationhub/architecture/master/images/overview.png)

## Assumptions

### A1
We assume all customers agree to use their PII for communication and store/transfer it to the systems above 
(ERP, CRM, Marketing).

### A2
Only contact data is kept in sync, no other type of customer data is synchornized.

## Implementation

Following diagram represents a graphical schema of the described solution:

![solution](https://raw.githubusercontent.com/openintegrationhub/architecture/master/images/Solution.png)

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
