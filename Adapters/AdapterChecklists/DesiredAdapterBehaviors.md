# Desired Adapter Behaviors
See the section `Given an API how should a adapter behave?` in the document
`AdapterGuide` to see which questions must be asked and answered to see which
case your adapter falls into.  The following sections list each case and then
the expected actions and triggers of the adapters.

All items in each list is a should have.

## Case 1:
- The list of business objects is dynamic
- The structure of the objects is dynamic (*Implied by above statement*)
- The API supports webhooks

### Triggers
- [ ] `getObjectsPolling` including functionality to
  - [ ] supply the list of readable objects
- [ ] `getObjectsWebhook` including functionality to
  - [ ] supply the list of readable objects
  - [ ] supply the structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including functionality to
  - [ ] supply the list of deletable objects

### Actions
- [ ] `upsertObject` including functionality to
  - [ ] supply the list of writable objects
  - [ ] supply the structure of the incoming object
- [ ] `deleteObject` including functionality to
  - [ ] supply the list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] supply the list of readable objects
  - [ ] supply the list of fields that can be searched

## Case 2:
- The list of business objects is dynamic
- The structure of the objects is dynamic (*Implied by above statement*)
- The API does not support webhooks

### Triggers
- [ ] `getObjectsPolling` including functionality to
  - [ ] supply the list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including functionality to supply the list of deletable objects

### Actions
- [ ] `upsertObject` including functionality to
  - [ ] supply the list of writable objects
  - [ ] supply the structure of the incoming object
- [ ] `deleteObject` including functionality to
  - [ ] supply the list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] supply the list of readable objects
  - [ ] supply the list of fields that can be searched

## Case 3:
- The list of business objects is static
- The structure of the objects is dynamic
- The API supports webhooks

### Triggers
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getObjectsWebhook` including
  - [ ] the static list of readable objects
  - [ ] functionality to supply the structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including
  - [ ] the static list of deletable objects

### Actions
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] functionality to supply the structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] the static list of readable objects
  - [ ] supply the list of fields that can be searched

## Case 4:
- The list of business objects is static
- The structure of the objects is dynamic
- The API does not support webhooks

### Triggers
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including the static list of readable objects

### Actions
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] functionality to supply the structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] the static list of readable objects
  - [ ] supply the list of fields that can be searched

## Case 5:
- The list of business objects is static
- The structure of the objects is static
- The API supports webhooks

### Triggers
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getObjectsWebhook` including
  - [ ] the static list of readable objects
  - [ ] the static structure of the incoming objects
- [ ] `getDeletedObjectsWebhook` including
  - [ ] the static list of deletable objects

### Actions
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] the static structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] the static list of readable objects
  - [ ] the static list of fields that can be searched

## Case 6:
- The list of business objects is static
- The structure of the objects is static
- The API does not support webhooks

### Triggers
- [ ] `getObjectsPolling` including
  - [ ] the static list of readable objects
- [ ] `getDeletedObjectsPolling` (if possible)
  - [ ] including the static list of readable objects

### Actions
- [ ] `upsertObject` including
  - [ ] the static list of writable objects
  - [ ] the static structure of the incoming object
- [ ] `deleteObject` including
  - [ ] the static list of deletable objects
- [ ] `lookupObjectByField` including functionality to
  - [ ] the static list of readable objects
  - [ ] the static list of fields that can be searched
