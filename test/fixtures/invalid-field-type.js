export const template = {
  'name': 'InvalidFieldType',
  'id': 'com.camunda.example.InvalidFieldType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:field',
        'name': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'Boolean',
      'binding': {
        'type': 'camunda:field',
        'name': 'bar'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1/type',
    'schemaPath': '#/definitions/properties/items/allOf/4/then/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/1/type',
          'schemaPath': '#/definitions/properties/items/allOf/4/then/properties/type/enum',
          'params': {
            'allowedValues': [
              'String',
              'Text',
              'Hidden',
              'Dropdown'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "Boolean" for binding type "camunda:field"; must be any of { String, Text, Hidden, Dropdown }'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1',
    'schemaPath': '#/definitions/properties/items/allOf/4/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];