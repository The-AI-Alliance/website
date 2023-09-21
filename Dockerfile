#####################################################
# Setup image
#####################################################
FROM node:18-alpine AS base

RUN apk add --no-cache bash && /bin/bash

ENV APP_DIR=/home/node/app

USER node
WORKDIR ${APP_DIR}

# #####################################################
# Build
# #####################################################
FROM base AS build

COPY --chown=node:node package.json yarn.lock .yarnrc.yml ./
COPY --chown=node:node .yarn/ ./.yarn/

RUN yarn install --immutable

COPY --chown=node:node . ./

RUN yarn build &&\
  mkdir build &&\
  yarn prod-install build &&\
  cp -r next.config.js .next public build

# #####################################################
# Run
# #####################################################
FROM base AS run

COPY --chown=node:node --from=build ${APP_DIR}/build ./

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "yarn", "start" ]
