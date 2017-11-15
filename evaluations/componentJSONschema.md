{
  "definitions": {
    "viewClass": {
      "type": "string",
      "description": "Tbd",
      "default": "TextFieldWithNoteView",
      "examples": [
        "TextFieldWithNoteView"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-06/schema#",
  "type": "object",
  "required": [
    "title",
    "description",
    "credentials"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "default": "Component name",
      "examples": [
        "Petstore API (Node.js)"
      ]
    },
    "description": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "default": "Your component description",
      "examples": [
        "elastic.io component for the Petstore API"
      ]
    },
    "docsUrl": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "format": "uri",
      "default": "https://linkToYourDocs.com",
      "examples": [
        "https://github.com/elasticio/petstore-component-nodejs"
      ]
    },
    "credentials": {
      "type": "object",
      "minProperties": 1,
      "required": [
        "fields"
      ],
      "properties": {
        "fields": {
          "type": "object",
          "minProperties": 1,
          "patternProperties": {
            "[a-z]+": {
              "type": "object",
              "minProperties": 3,
              "required": [
                "label",
                "required",
                "viewClass"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Name of the credential field",
                  "default": "Credential Name",
                  "examples": [
                    "API key"
                  ]
                },
                "required": {
                  "type": "boolean",
                  "description": "Defines if the credential field is required",
                  "default": false,
                  "examples": [
                    true
                  ]
                },
                "viewClass": {"$ref": "#/definitions/viewClass"},
                "note": {
                  "type": "string",
                  "description": "Explanation of the input which is expected for this credential field",
                  "default": "E.g. Api Key",
                  "examples": [
                    "Please use <strong>elasticio</strong> as API key. For more details see <a href='https://petstore.elastic.io/docs/'>Petstore API docs</a>."
                  ]
                }
              }
            }
          }
        }
      }
    },
    "triggers": {
      "type": "object",
      "minProperties": 1,
      "patternProperties": {
        "[a-z]+": {
          "type": "object",
          "minProperties": 3,
          "required": [
            "main",
            "type",
            "title"
          ],
          "properties": {
            "main": {
              "type": "string",
              "description": "Tbd",
              "default": "Path to trigger.js",
              "examples": [
                "./lib/triggers/getPetsByStatusWithGenerators.js"
              ]
            },
            "type": {
              "type": "string",
              "enum": ["polling", "pushing"],
              "description": "Defines if the trigger is a polling or pushing trigger",
              "default": "polling",
              "examples": [
                "polling"
              ]
            },
            "title": {
              "type": "string",
              "description": "Descriptive name of the trigger",
              "default": "Trigger title",
              "examples": [
                "Get Pets By Status With Generators"
              ]
            },
            "fields": {
              "type": "object",
              "minProperties": 1,
              "patternProperties": {
                "[a-z]+": {
                  "type": "object",
                  "minProperties": 3,
                  "required": [
                    "label",
                    "required",
                    "viewClass"
                  ],
                  "properties": {
                    "label": {
                      "type": "string",
                      "description": "Decriptive name of the trigger field",
                      "default": "Field title",
                      "examples": [
                        "Pet Status"
                      ]
                    },
                    "required": {
                      "type": "boolean",
                      "description": "Defines if the credential field is required",
                      "default": false,
                      "examples": [
                        true
                      ]
                    },
                    "viewClass": {"$ref": "#/definitions/viewClass"},
                    "model": {
                      "type": ["string","object"],
                      "patternProperties": {
                        "[a-z]+": {
                          "type": "string",
                          "description": "Describes if the model is available",
                          "default": "Available",
                          "examples": [
                            "Available"
                          ]
                        }                
                      }
                    },
                    "prompt": {
                      "type": "string",
                      "description": "Needed to clafiry the model status",
                      "default": "Select Status",
                      "examples": [
                        "Select Pet Status"
                      ]
                    }
                  }
                }
              }
            },
            "metadata": {
              "type": "object",
              "properties": {
                "out": {
                  "type": ["object","string"],
                  "description": "Metadata defining the structure of the output messages.",
                  "default": "path to out metadata ",
                  "examples": [
                    "./lib/schemas/getPetsByStatus.out.json"
                  ]
                }
              }
            },
            "dynamicMetadata": {
              "type": "boolean",
              "description": "Defines dynamic Metadata is supported/enabled",
              "default": false,
              "examples": [
                true
              ]
            }
          }
        }
      }
    },
    "actions": {
      "type": "object",
      "minProperties": 1,
      "patternProperties": {
        "[a-z]+": {
          "type": "object",
          "minProperties": 3,
          "required": [
            "main",
            "title"
          ],
          "properties": {
            "main": {
              "type": "string",
              "description": "Tbd",
              "default": "Path to action .json",
              "examples": [
                "./lib/actions/createPetWithPromise.js"
              ]
            },
            "title": {
              "type": "string",
              "description": "Descriptive name of the action",
              "default": "Title Name",
              "examples": [
                "Create a Pet With Promise"
              ]
            },
            "metadata": {
              "type": "object",
              "minProperties": 2,
              "required": [
                "in",
                "out"
              ],
              "properties": {
                "in": {
                  "type": ["string", "object"],
                  "description": "Source of the metdata. Either a path to a json schema(string) or an inline json schema (object)",
                  "default": "Path to in metadata",
                  "examples": [
                    "./lib/schemas/createPet.in.json"
                  ]
                },
                "out": {
                  "type": ["string", "object"],
                  "description": "Metadata defining the structure of the output messages.",
                  "default": "Path to out metadata",
                  "examples": [
                    "./lib/schemas/createPet.out.json"
                  ]
                }
              }
            },
            "dynamicMetadata": {
              "type": "boolean",
              "description": "Defines dynamic Metadata is supported/enabled",
              "default": false,
              "examples": [
                true
              ]
            }
          }
        }
      }
    }
  }
}
