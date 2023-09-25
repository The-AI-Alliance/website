#!/bin/sh

set -ex

curl https://mirror.openshift.com/pub/openshift-v4/clients/oc/4.4/linux/oc.tar.gz | tar -xzvf -

./oc login -u apikey -p $IBMCLOUD_API_KEY --server $OPENSHIFT_SERVER -n $OPENSHIFT_NAMESPACE
./oc tag ${REGISTRY_URL}/${IMAGE_NAMESPACE}/${IMAGE_NAME}:${TAG_PREFIX}-${TRAVIS_COMMIT} ${APP_NAME}:latest