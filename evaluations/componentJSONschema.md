{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-06/schema#",
  "type": "object",
  "required": [
    "title",
    "description",
    "credentials",
    "triggers",
    "actions"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "Petstore API (Node.js)"
      ]
    },
    "description": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "elastic.io component for the Petstore API"
      ]
    },
    "docsUrl": {
      "type": "string",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "https://github.com/elasticio/petstore-component-nodejs"
      ]
    },
    "credentials": {
      "type": "object",
      "minProperties": 1,
      "properties": {
        "fields": {
          "type": "object",
          "minProperties": 1,
          "properties": {
            "[a-z]+": {
              "type": "object",
              "minProperties": 4,
              "required": [
                "label",
                "required",
                "viewClass",
                "note"
              ],
              "properties": {
                "label": {
                  "type": "string",
                  "description": "Name of the credential field",
                  "default": "",
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
                "viewClass": {
                  "type": "string",
                  "description": "Tbd",
                  "default": "",
                  "examples": [
                    "TextFieldWithNoteView"
                  ]
                },
                "note": {
                  "type": "string",
                  "description": "Explanation of the input which is expected for this credential field",
                  "default": "",
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
          "minProperties": 5,
          "required": [
            "main",
            "type",
            "title",
            "metadata"
          ],
          "properties": {
            "main": {
              "type": "string",
              "description": "Tbd",
              "default": "",
              "examples": [
                "./lib/triggers/getPetsByStatusWithGenerators.js"
              ]
            },
            "type": {
              "type": "string",
              "description": "Defines if the trigger is a polling or pushing trigger",
              "default": "",
              "examples": [
                "polling"
              ]
            },
            "title": {
              "type": "string",
              "description": "Descriptive name of the trigger",
              "default": "",
              "examples": [
                "Get Pets By Status With Generators"
              ]
            },
            "fields": {
              "type": "object",
              "minProperties": 1,
              "properties": {
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
                      "default": "",
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
                    "viewClass": {
                      "type": "string",
                      "description": "Tbd",
                      "default": "",
                      "examples": [
                        "SelectView"
                      ]
                    },
                    "model": {
                      "type": "object",
                      "properties": {
                        "available": {
                          "type": "string",
                          "description": "Describes if the model is available",
                          "default": "",
                          "examples": [
                            "Available"
                          ]
                        },
                        "pending": {
                          "type": "string",
                          "description": "Describes if the model is pending",
                          "default": "",
                          "examples": [
                            "Pending"
                          ]
                        },
                        "sold": {
                          "type": "string",
                          "description": "Describes if the model is sold",
                          "default": "",
                          "examples": [
                            "Sold"
                          ]
                        }
                      }
                    },
                    "prompt": {
                      "type": "string",
                      "description": "Needed to clafiry the model status",
                      "default": "",
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
                  "type": "string",
                  "description": "Tbd",
                  "default": "",
                  "examples": [
                    "./lib/schemas/getPetsByStatus.out.json"
                  ]
                }
              }
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
            "title",
            "metadata"
          ],
          "properties": {
            "main": {
              "type": "string",
              "description": "Tbd",
              "default": "",
              "examples": [
                "./lib/actions/createPetWithPromise.js"
              ]
            },
            "title": {
              "type": "string",
              "description": "Descriptive name of the action",
              "default": "",
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
                  "type": "string",
                  "description": "Source of the metdata",
                  "default": "",
                  "examples": [
                    "./lib/schemas/createPet.in.json"
                  ]
                },
                "out": {
                  "type": "string",
                  "description": "Tbd",
                  "default": "",
                  "examples": [
                    "./lib/schemas/createPet.out.json"
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
