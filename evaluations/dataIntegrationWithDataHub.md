# Integration scenario with DataHub

## Overview

This document will summarize the design suggestion for [data synchronization](https://en.wikipedia.org/wiki/Data_synchronization)
scenario using DataHub (aka. Smart Data Framework).

Usage of Data Hub will be demonstrated based on the example integration scenario where we should
keep the contact data between [Wice CRM](http://wice.de), [Silver ERP](http://www.silvererp.com/) and
[Mailchimp](https://mailchimp.com) in sync.

## User story

As a business user I would like to keep contact data between CRM, ERP and e-mail marketing program in sync so that
I could communicate with my customers via multiple channels (direct calls, e-mail spam, etc.) and grow my revenues
with it.

![overview](https://github.com/openintegrationhub/architecture/blob/master/images/overview.png)

## Assumptions

### A1
We assume all customers agree to use their PII for communication and store/transfer it to the systems above
(ERP, CRM, Marketing).

### A2
Only contact data is kept in sync, no other type of customer data is synchronized.

## Implementation

Following diagram represents a graphical schema of the described solution:

![solution](https://github.com/openintegrationhub/architecture/blob/master/images/Solution.png)

The diagram above demonstrates that all the communication goes through the central `Data Hub`. Instead of talking to
each other each of the services is connected to `Data Hub` via an integration directly. The integration is provided
by the `Integration Hub`.

The `Integration Hub` provides an integration component to communicate with the `Data Hub`. The component consists of:

* trigger: used to export data from `Data Hub`
* action: used to import data into `Data Hub`

The data are imported into the `Data Hub` as they come in *raw* format, without any transformation or aggregation. In
the example above this would mean that for each of the services (CRM, ERP and e-mail marketing) a separated collection
of raw data is maintained per tenant. Any updates (new objects, changes to objects and removal of objects) from these
systems are done on the raw data collections.

Additionally to the raw collections a collection per integration scenario is maintained to persist the results of
transformation of the raw data into a common model of an integration scenario. The common model is described as a set
of transformation rules (mapping expressions) that are applied on raw data. A scheduled job detects any changes to the
raw data collections, performs the transformation and stores the result into the common model collection.

The advantages of raw data storage are:

* any changes to a common model can be easily applied by re-evaluating the transformation rules on the raw data
* it is easy to introduce new integration scenarios without re-importing all the data again. Only a new set of
transformation rules for the common model in the given scenario is required.

A common model between these 3 systems is described as a set of transformation rules (mapping expressions) that are
applied on raw data. A scheduled job is detecting changes to the raw data collections and

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
architecture (hence usage of DataHub) only exist when synchronizing data between more than two systems
(this conclusion can easily be proved with complexity calculation of the graph interconnectivity).
However in the real world most of the times systems where data should be synchronized rarely provide
sufficient functionality in their APIs that would enable practical, reliable and performant data synchronization
even between two systems.
