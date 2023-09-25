#!/bin/bash
set -e

if [[ $TRAVIS_TAG = v* ]]
then
    PROD='true'
    TAG=$TRAVIS_TAG
else
    PROD='false'
    TAG='dev'
fi

export PROD TAG
