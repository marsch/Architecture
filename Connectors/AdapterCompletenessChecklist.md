# Completeness Checklist for adapters (Integration Components)

This document is designed to be a checklist.  After a component author has
written a component, they should be able to take this checklist to see if their
component is complete.

There is an additional guide `AdapterGuide.md` which explains how to design a adapter.

There is an additional document `AdapterOpenQuestions.md` which discusses
potential shortcomings and enhancements to the current adapter approach.

# Adapter Description and Documentation Guidelines

Adapter repository should have following in it:
- [ ] Logo - 128x128 PNG file with transparent background
- [ ] Adapter descriptor that satisfies the `component.json` such as
  - [ ] Each file should have a global `description` field filled.
  - [ ] Each file should have a link to the documentation, e.g. `README` file below
  - [ ] Each field in credentials should have a `note` on it explaining what exactly is required here (unless it's obvious, e.g.
   password)
  - [ ] Each field except `password` should have a `placeholder` configured with the meaningful sample (unless it's obvious)
  - [ ] Each trigger and action should have a `description` field configured explaining what given trigger/action does
  - [ ] Each field in the trigger/action should have a `note` explaining what expected to be there as well as meaningful example
   in `placeholder` which could be (for optional fields) a default value if field is empty
- [ ] `README.MD` file that contains
  - [ ] Description of the application adapter connects to
  - [ ] List of environment variables that need to be configured (e.g. OAuth ClientID/Secret)
  - [ ] Version and compatibility information
  - [ ] Documentation for the authentication process, how to find API key, etc.
  - [ ] Documentation for each Action and Trigger in the adapter, this description have to include
    - [ ] Screen shot of the parameters with sample meaningful values (if parameters are defined for given trigger/action)
    - [ ] Description of the parameters (if any)
    - [ ] Description of the incoming message and outgoing message (e.g. Update Contact Action)
    - [ ] Description of any attachments generated or consumed
  - [ ] Documentation for each Action and Trigger in the adapter may also include
    - [ ] Sample of the minimum viable input (e.g. for updating or creating something)
    - [ ] Description of the dynamic metadata generation rules, metadata discovery rules
  - [ ] Known limitations, may be with link to the issue
  - [ ] Contribution guidelines (they should be standardized)
  - [ ] License and copyright
- [ ] License file
- [ ] Changelog

# Required Component Behaviors
See the section `Given an API how should a adapter behave?` in the document
`AdapterGuide` to see which questions must be asked and answered to see which
case your adapter falls into.  The following sections list each case and then
the expected actions and triggers of the adapters.

## Case 1:
- The list of business objects is dynamic
- The structure of the objects is dynamic (*Implied by above statement*)
- The API supports webhooks

**Triggers**
- [ ] `getObjectsPolling` including functionality to
  - [ ] supply the list of readable objects
- [ ] `getObjectsWebhook` including functionality to
  - [ ] supply the list of readable objects
  - [ ] supply the structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including functionality to
  - [ ] supply the list of deletable objects
**Actions**
- [ ] `upsertObject` including functionality to
  - [ ] supply the list of writable objects
  - [ ] supply the structure of the incoming object
- [ ] `deleteObject` including functionality to
  - [ ] supply the list of deletable objects
- [ ] `lookupObject` including functionality to
  - [ ] supply the list of readable objects

## Case 2:
- The list of business objects is dynamic
- The structure of the objects is dynamic (*Implied by above statement*)
- The API does not support webhooks

**Triggers**
- [ ] `getObjectsPolling` including functionality to
  - [ ] supply the list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including functionality to supply the list of deletable objects
**Actions**
- [ ] `upsertObject` including functionality to
  - [ ] supply the list of writable objects
  - [ ] supply the structure of the incoming object
- [ ] `deleteObject` including functionality to
  - [ ] supply the list of deletable objects
- [ ] `lookupObject` including functionality to
  - [ ] supply the list of readable objects

## Case 3:
- The list of business objects is static
- The structure of the objects is dynamic
- The API supports webhooks

**Triggers**
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getObjectsWebhook` including
  - [ ] the static list of readable objects
  - [ ] functionality to supply the structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including
  - [ ] the static list of deletable objects
**Actions**
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] functionality to supply the structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObject` including
  - [ ] the static list of readable objects

## Case 4:
- The list of business objects is static
- The structure of the objects is dynamic
- The API does not support webhooks

**Triggers**
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including the static list of readable objects
**Actions**
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] functionality to supply the structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObject` including
  - [ ] the static list of readable objects

## Case 5:
- The list of business objects is static
- The structure of the objects is static
- The API supports webhooks

**Triggers**
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getObjectsWebhook` including
  - [ ] the static list of readable objects
  - [ ] the static structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including
  - [ ] the static list of deletable objects
**Actions**
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] the static structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObject` including
  - [ ] the static list of readable objects

## Case 6:
- The list of business objects is static
- The structure of the objects is static
- The API does not support webhooks

**Triggers**
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including the static list of readable objects
**Actions**
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] the static structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObject` including
  - [ ] the static list of readable objects

# Requirements to Test a Component
In order for an individual to test the correctness of a adapter, the following
resources are required in order to access the API:
- [ ] An instance/account/tenant for the tester to use.  This includes:
  - [ ] A server with the API is set up (or the API is already hosted in the cloud)
  - [ ] All services/daemons to process the API and webhooks are running
  - [ ] The necessary software licenses are provided to that the software may be
  run in the configuration
- [ ] The tester must be have permission to:
  - [ ] Login to the test account/system
  - [ ] Create, Update and Delete objects as required in the UI of the system
  - [ ] Configure API access for the adapter
- [ ] Data in the test instance/account/tenant can only be manipulated by the
tester and the adapter. (No shared test instances/accounts/tenants.)
