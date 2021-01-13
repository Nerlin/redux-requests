module.exports = {
  docs: {
    Introduction: [
      'introduction/motivation',
      'introduction/installation',
      'introduction/basic-usage',
      'introduction/examples',
    ],
    Tutorial: [
      'tutorial/1-requests-aborts',
      'tutorial/2-batch-requests',
      'tutorial/3-request-keys',
      'tutorial/4-reacting-to-request-actions',
      'tutorial/5-resetting-requests',
      'tutorial/6-interceptors',
      'tutorial/7-local-updates',
      'tutorial/8-optimistic-updates',
      'tutorial/9-caching',
      'tutorial/10-automatic-normalisation',
    ],
    Drivers: [
      'drivers/using-drivers',
      'drivers/axios-driver',
      'drivers/fetch-driver',
      'drivers/graphql-driver',
      'drivers/promise-driver',
      'drivers/mock-driver',
    ],
    Guides: [
      'guides/actions',
      'guides/selectors',
      'guides/server-side-rendering',
      'guides/usage-with-redux-saga',
      'guides/usage-with-react',
      'guides/usage-with-typescript',
    ],
    'API reference': [
      'api-reference/request-action',
      'api-reference/handle-requests',
      'api-reference/success',
      'api-reference/error',
      'api-reference/abort',
      'api-reference/get-query',
      'api-reference/get-query-selector',
      'api-reference/get-mutation',
      'api-reference/get-mutation-selector',
      'api-reference/reset-requests',
      'api-reference/abort-requests',
      'api-reference/clear-requests-cache',
      'api-reference/join-request',
      'api-reference/add-watcher',
      'api-reference/remove-watcher',
      'api-reference/is-request-action-query',
      'api-reference/is-request-action',
      'api-reference/is-response-action',
      'api-reference/local-mutation-action',
      'api-reference/response-data',
      'api-reference/create-requests-store',
    ],
  },
};
