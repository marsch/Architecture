# Quality Guidelines for Integration Components

## Component Description and Documentation Guidelines

Component repository should have following in it:
1. Logo - 128x128 PNG file with transparent background
1. Component descriptor that satisfies the `component.json` such as
   * Each file should have a global `description` field filled.
   * Each file should have a link to the documentation, e.g. `README` file below
   * Each field in credentials should have a `note` on it explaining what exactly is required here (unless it's obvious, e.g.
   password)
   * Each field except `password` should have a `placeholder` configured with the meaningful sample (unless it's obvious)
   * Each trigger and action should have a `description` field configured explaining what given trigger/action does
   * Each field in the trigger/action should have a `note` explaining what expected to be there as well as meaningful example
   in `placeholder` which could be (for optional fields) a default value if field is empty
1. `README.MD` file that contains
   * Description of the application connector connects to
   * List of environment variables that need to be configured (e.g. OAuth ClientID/Secret)
   * Version and compatibility information
   * Documentation for the authentication process, how to find API key, etc.
   * Documentation for each Action and Trigger in the component, this description have to include
      * Screen shot of the parameters with sample meaningful values (if parameters are defined for given trigger/action)
      * Description of the parameters (if any)
      * Description of the incoming message and outgoing message (e.g. Update Contact Action)
      * Description of any attachments generated or consumed
   * Documentation for each Action and Trigger in the component may also include
      * Sample of the minimum viable input (e.g. for updating or creating something)
      * Description of the dynamic metadata generation rules, metadata discovery rules
   * Known limitations, may be with link to the issue
   * Contribution guidelines (they should be standardized)
   * License and copyright
1. License file
1. Changelog

## Semantic Convention for API-Component Mapping

It is important to define common rules on how an integration component respond
to and perform actions on generic actions on a domain object.

In general, any action or trigger should only make requests to one API endpoint
(with the exception of any calls required for authentication).  (I.e. It is ok
for a trigger to traverse paged results, but it should not make multiple calls
to combine data.)

In general, all actions or triggers should emit events individually as opposed
to creating batches.

### Triggers/Webhooks

#### Event Sourcing / Events updates
This describes the way a component should handle the creation of new objects and
the updates of existing objects.

**Polling Triggers** will initially fetch all objects.  After this initial import, it
will fetch new and updated objects.  It will emit one message per object that
changes since the last polling interval.  The entire object should be emitted as
the message body.  The name of the trigger for the `Customer` object should be
`getCustomers`.

**Webhooks** will get updates for objects as they happen as well as for objects
as they are created.  There should be one message per persisted change.  The
entire object should be emitted as the message body.

#### Object Deletion
This handles the case when an object is deleted.

Generally, **polling triggers** will not be able to detect this event.

**Webhooks** should emit an event with the `id` of the object that was deleted.

#### Object Move
The id or location of an object changes.  TBD.

### Actions

#### Enrich Object / Lookup
Given an incoming object, with some information, this type of component will
calculate and or add additional relevant information.

The outgoing object should be the same as the incoming object except that
additional properties will be added.  Any required information for
lookup/calculation should be specified in the incoming metadata so that the user
can provide a JSONata expression to provide that info.  These actions should be
designed that an arbitrary number of these actions can be chained together.

**Examples:**
* Calendar Date -> Day of week calculation (e.g. `October 16th 2017` -> `Wednesday`)
* Postal code -> Bundesland
* Expansion of child objects.  (e.g. Customer has some orders, you want to hydrate each order.)

**Example:**
A CRM may be set up such that a contact works for a company.  We are interested
in updates to a contact, but only when the contact works for a company with more
than 10 employees.  We can poll for updated contacts but the polling trigger
only provides the ID of the company the contact works for.  An enrich object
lookup would take the company ID, query the CRM's `companies` endpoint and then
attach the resulting data to the contact object emitted.

Example names: `calculateBundeslandFromPostalCode`, `getOrderById`

#### Upsert Object
Given an object that exists in `other` system, create an object in `this`
system.  See [**ID Linking**](https://github.com/openintegrationhub/architecture/blob/master/evaluations/ComponentQualityGuidelines.md#id-linking) for a definition of corresponding object.  If no
corresponding object exist, this action should do an insert action.  The
component should emit the state of the object after the update/insert.

Example Name: `upsertCustomer`

#### Delete Object
Given an incoming message with an id, delete the corresponding object in the
system.  See [**ID Linking**](https://github.com/openintegrationhub/architecture/blob/master/evaluations/ComponentQualityGuidelines.md#id-linking) for a definition of corresponding object.

Example name: `deleteCustomer`

### Action with only Side Effects
Perform an action which does not manipulate data.

Name should be of the form verb-noun.  The component should emit the input.

Example name: `sendEmail`

## ID Linking
There needs to be a system to link incoming objects from the  `other` system to
objects which potentially exist in `this` system.  Consider the following
possibilities.

### Shared ID Pattern
Objects share ids between systems.
* Pros: Two way linking is possible
* Cons: Ids need to exist in the same universe (i.e. GUID vs 64-bit integer).
`this` system needs to allow the user to specify an ID upon creation.
* If an native `upsert` operation exists in `this` system is present, use that.
Otherwise, do a query for existence to determine if an insert or update
operation is required.  `isNew` as metadata could be useful.

### Foreign Key pattern
`this` system stores the id of the object in `other` system.
* Assumes that an additional column/property can be created in `this` system.
* Checks to see if an item exists where `otherId === incomingId`.  If yes,
   update that item.  Otherwise create an item. `isNew` as metadata could be
   useful.
* Cons: Two way linking becomes complicated.

### Third Party System Which Links IDs
* Incoming object already is aware of the id in `this` system because
 this information was previously fetched from a master data system.
  * See **OIH** for implementation.

## Handling API Limits

### Intial Data Fetch

_Question_: How can we avoid to run into an API Limit while initially fetching all data using **Polling Triggers**?<br>

_Proposal_: Paging? (Please reformulate)

_Question_: How can we initially fetch all data while using **WebHooks**? (Maybe this topic has to be relocated in this file)<br>

_Proposal_: -

_Question_: How can we avoid to run into an API Limit while initially fetching all data using **Webhooks**?<br>

_Proposal_: -

### Object Update

_Question:_ How to handle updates for **polling triggers**?<br>

_Proposal_: -

_Question:_ How to handle updates for **Webhooks**?<br>

_Proposal:_ As **Webhooks** automatically emit an event with the id of the object that was, API limit handling is not needed. (Please Reformulate)

_Question:_ How to handle object changes in systems, without a change tracking?<br>

_Proposal:_ Implementation of a changelog is needed

## TODOS
- APIs with automatic object and field discovery
- Define any standardized metadata information that should be calculated and
added to the outbound message by the component.  (E.g. `isNew`, `timeOfEvent`,
standardized `id` field, etc)
- Define behavior for handling object merges
- Define behavior for object moves (API endpoint change because the type
changed, ID changes over the lifetime of an object, etc.)
- Hydration
- Logging
- Paging
