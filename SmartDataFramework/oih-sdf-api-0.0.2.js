{
  "openapi": "3.0.0",
  "info": {
    "title": "OIH Smart Data Framework REST API",
    "description": "REST API for communication with the Smart Data Framework.",
    "version": "0.0.1"
  },
  "tags": [
    {
      "name": "domains",
      "description": "Operations for domains"
    },
    {
      "name": "models",
      "description": "Operations for models"
    },
    {
      "name": "data",
      "description": "Operations for data"
    },
    {
      "name": "webhooks",
      "description": "Operations for webhooks"
    }
  ],
  "paths": {
    "/domains": {
      "get": {
        "tags": [
          "domains"
        ],
        "summary": "Retrieve the available domains for the authenticated user",
        "responses": {
          "200": {
            "description": "List of domains the user has access to",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Domains"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "domains"
        ],
        "summary": "Create a new Domain.",
        "description": "Creates a new Domain for the authenticated user.",
        "parameters": [
          {
            "in": "path",
            "name": "name",
            "description": "Provide a name for the new domain",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "description",
            "description": "Provide a description for the new domain",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The new domain has been created successfully"
          }
        }
      }
    },
    "/domains/{id}": {
      "get": {
        "tags": [
          "domains"
        ],
        "summary": "Retrieve a domain with given ID.",
        "description": "Provides details of a domain with a given ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Provide the id of the domain",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Domain with given ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/specificDomain"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "domains"
        ],
        "summary": "Update a domain by ID.",
        "description": "Updates details of a domain with a given ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Provide the id of the domain that needs to be updated",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "Provide the JSON schema for the updated model",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/updateDomain"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The domain has been updated successfully"
          }
        }
      }
    },
    "/models": {
      "get": {
        "tags": [
          "models"
        ],
        "summary": "Retrieve the available models for the authenticated user.",
        "responses": {
          "200": {
            "description": "List of models the user has access to",
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/ModelList"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "models"
        ],
        "summary": "Create a new a model.",
        "description": "Create a new model for authenticated user.",
        "parameters": [
          {
            "in": "query",
            "name": "model name",
            "description": "Provide the name of the new model",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "schema",
            "description": "Provide the JSON schema of the new model",
            "required": true,
            "schema": {
              "type": "object"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The new model has been created successfully"
          }
        }
      }
    },
    "/models/{id}": {
      "get": {
        "tags": [
          "models"
        ],
        "summary": "Retrieve a model by ID.",
        "description": "Provides details of a model with a given ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Provide the id of the domain",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Model with given ID",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AnyModel"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "models"
        ],
        "summary": "Update a model with given ID.",
        "description": "Updates a model with given ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Provide the id of the model",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "Provide the JSON schema for the updated model",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AnyModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Model has been updated successfully"
          }
        }
      }
    },
    "/data": {
      "post": {
        "tags": [
          "data"
        ],
        "summary": "Send an object for persistence",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Provide the id of the model",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "Object to to be persisted",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewData"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "New data has been uploaded successfully"
          }
        }
      }
    },
    "/webhooks": {
      "post": {
        "tags": [
          "webhooks"
        ],
        "summary": "Add a new webhook to receive notifications about data changes",
        "requestBody": {
          "description": "Webhook payload",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/WebhookSubscription"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Webhook subscription reponse",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookSubscriptionResponse"
                }
              }
            }
          }
        }
      }
    },
    "/webhooks/{id}": {
      "delete": {
        "tags": [
          "webhooks"
        ],
        "summary": "Delete an existing webhook subscrption by id",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The resource was deleted successfully."
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Domains": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Domain"
        }
      },
      "Domain": {
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "example": [
          {
            "id": 1,
            "name": "Products",
            "description": "This domain includes all product related models"
          },
          {
            "id": 2,
            "name": "Adresses",
            "description": "This domain includes all address/contact related models"
          },
          {
            "id": 3,
            "name": "Documents",
            "description": "This domain includes all document related models"
          },
          {
            "id": 4,
            "name": "Collaboration",
            "description": "This domain includes all collaboration related models"
          }
        ]
      },
      "specificDomain": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "example": [
          {
            "id": 1,
            "name": "Products",
            "description": "This domain includes all product related models"
          }
        ]
      },
      "updateDomain": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "example": [
          {
            "name": "Products",
            "description": "This domain includes all product related models"
          }
        ]
      },
      "ModelList": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": null
          },
          "model": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "example": [
          {
            "id": 1,
            "model": "Products",
            "description": "Master Data Model for product domain"
          },
          {
            "id": 2,
            "model": "Addresses",
            "description": "Master Data Model for addresse domain"
          },
          {
            "id": 3,
            "model": "Documents",
            "description": "Master Data Model for document domain"
          },
          {
            "id": 4,
            "model": "Collaboration",
            "description": "Master Data Model for collaboration domain"
          }
        ]
      },
      "NewData": {
        "type": "object",
        "required": [
          "model"
        ],
        "properties": {
          "metadata": {
            "type": "object",
            "example": {  
              "recordUid": "3",
              "created": "2018-03-07",
              "lastModified": "2018-03-10",
              "userId": "8",
              "tenantId": "3",
              "modelId": "1"
            }
          },
          "data": {
            "type": "object",
            "example": {
              "name": "knife",
              "price": 54,
              "vatCode": "12345",
              "costs": 20,
              "description": "einfacher text",
              "productCode": "R2D2",
              "extraDescription": "C3PO",
              "taxInformation": 3,
              "version": 3,
              "active": "2018-01-02",
              "articleGroup": [
                {
                  "articleGroup": "default",
                  "particleGroupCode": "H3NN",
                  "articleGroupDescription": null
                }
              ],
              "isProductionItem": true,
              "serialNumberUsed": "R2D2",
              "creator": "Philipp",
              "modifier": "Robin",
              "weight": "150 kg",
              "isStockItem": false,
              "pictureUrl": "http://picurl.de",
              "startDate": "2018-01-02",
              "endDate": "2018-01-02",
              "units": [
                {
                  "isSale": true,
                  "isPurchase": false,
                  "isProduction": true,
                  "description": "meter",
                  "abbrevation": "m"
                }
              ],
              "storages": [
                {
                  "code": "X84FKW",
                  "description": "SKW040206",
                  "area": "Seligenstadt",
                  "complex": "Klein-Welzheim",
                  "hall": "Hauptlager",
                  "corridor": "Reihe 4",
                  "shelf": "Regal 2",
                  "bay": "Fach 6",
                  "height": 20,
                  "width": 8
                }
              ]
            }
          }
        }
      },
      "WebhookSubscription": {
        "required": [
          "model",
          "url",
          "events"
        ],
        "properties": {
          "model": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "events": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "create",
                "update",
                "delete"
              ]
            }
          },
          "description": {
            "type": "string"
          }
        }
      },
      "WebhookSubscriptionResponse": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          }
        }
      },
      "AnyModel": {
        "anyOf": [
          {
            "type": "object"
          }
        ],
        "properties": {
          "applicationUid": {
            "type": "string",
            "description": "Identifies the application or service the record belongs to within the OIH."
          },
          "recordUid": {
            "type": "string",
            "description": "The record's UID within the respective application."
          },
          "created": {
            "type": "integer",
            "description": "The timestamp when the record was created within the application as a UNIX timestamp."
          },
          "lastModified": {
            "type": "integer",
            "description": "The timestamp when the record was modified in the application the last time as a UNIX timestamp."
          },
          "articleNo": {
            "type": "string"
          },
          "matchcode": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "gtin": {
            "type": "string"
          },
          "costCalc": {
            "type": "number"
          },
          "costAvg": {
            "type": "number"
          },
          "costLast": {
            "type": "number"
          },
          "costList": {
            "type": "number"
          },
          "costInventory": {
            "type": "number"
          },
          "dtCostLast": {
            "type": "string",
            "format": "date-time"
          },
          "articleGroups": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/components/schemas/ArticleGroup"
            }
          },
          "isSale": {
            "type": "boolean"
          },
          "isPurchase": {
            "type": "boolean"
          },
          "isWorkStep": {
            "type": "boolean"
          },
          "isProduction": {
            "type": "boolean"
          },
          "isStockTracing": {
            "type": "boolean"
          },
          "isCheckStock": {
            "type": "boolean"
          },
          "isService": {
            "type": "boolean"
          },
          "isPacking": {
            "type": "boolean"
          },
          "isConsumable": {
            "type": "boolean"
          },
          "isDivisible": {
            "type": "boolean"
          },
          "isShipping": {
            "type": "boolean"
          },
          "isCharges": {
            "type": "boolean"
          },
          "isSerialNo": {
            "type": "boolean"
          },
          "status": {
            "type": "string",
            "enum": [
              "new",
              "expiring",
              "blocked"
            ]
          },
          "drawingNo": {
            "type": "string"
          },
          "version": {
            "type": "string"
          },
          "dinStandard": {
            "type": "string"
          },
          "isRohsCompliant": {
            "type": "boolean"
          },
          "netWeight": {
            "type": "number"
          },
          "grossWeight": {
            "type": "number"
          },
          "density": {
            "type": "number"
          },
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "strength": {
            "type": "number"
          },
          "innerDiameter": {
            "type": "number"
          },
          "outerDiameter": {
            "type": "number"
          },
          "volume": {
            "type": "number"
          },
          "isReverseCharge": {
            "type": "boolean"
          },
          "isDiscount": {
            "type": "boolean"
          },
          "isReduction": {
            "type": "boolean"
          },
          "isIntrastat": {
            "type": "boolean"
          },
          "isPreferential": {
            "type": "boolean"
          },
          "customsTariff": {
            "type": "string"
          },
          "countryOrigin": {
            "$ref": "#/components/schemas/Country"
          },
          "replacementTime": {
            "type": "integer"
          },
          "units": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/components/schemas/Unit"
            }
          },
          "storages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Storage"
            }
          }
        },
        "required": [
          "articleNo"
        ]
      },
      "Storage": {
        "type": "object",
        "properties": {
          "description": {
            "type": "string"
          },
          "area": {
            "type": "string"
          },
          "complex": {
            "type": "string"
          },
          "hall": {
            "type": "string"
          },
          "corridor": {
            "type": "string"
          },
          "height": {
            "type": "string"
          }
        },
        "required": [
          "description"
        ]
      },
      "Currency": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "decimalDigits": {
            "type": "integer"
          },
          "subCode": {
            "type": "string"
          },
          "subDescription": {
            "type": "string"
          },
          "currencySymbol": {
            "type": "string"
          }
        },
        "required": [
          "code"
        ]
      },
      "Language": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": [
          "code"
        ]
      },
      "ArticleGroup": {
        "type": "object",
        "items": {
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "default",
                "shop"
              ]
            },
            "description": {
              "type": "string"
            }
          },
          "required": [
            "type"
          ]
        }
      },
      "Country": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "numberPlate": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "areaCode": {
            "type": "string"
          },
          "isoCode": {
            "type": "string"
          },
          "isoDescription": {
            "type": "string"
          },
          "countryCodePhone": {
            "type": "string"
          },
          "intrastatCode": {
            "type": "string"
          },
          "currency": {
            "$ref": "#/components/schemas/Currency"
          },
          "language": {
            "$ref": "#/components/schemas/Language"
          }
        },
        "required": [
          "code"
        ]
      },
      "Unit": {
        "type": "object",
        "properties": {
          "isPurchase": {
            "type": "boolean"
          },
          "isSale": {
            "type": "boolean"
          },
          "isProduction": {
            "type": "boolean"
          },
          "description": {
            "type": "string"
          },
          "abbreviation": {
            "type": "string"
          }
        },
        "required": [
          "description"
        ]
      }
    }
  }
}
