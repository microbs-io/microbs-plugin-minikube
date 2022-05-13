[![Build Status](https://github.com/microbs-io/microbs-plugin-minikube/workflows/Commit/badge.svg?branch=main)](https://github.com/microbs-io/microbs-plugin-minikube/actions)
[![npm](https://img.shields.io/npm/v/@microbs.io/plugin-minikube?color=%2300B5AD&label=Latest)](https://www.npmjs.com/package/@microbs.io/plugin-minikube)
![Apache 2.0](https://img.shields.io/npm/l/@microbs.io/plugin-minikube?color=%23f6f8fa)

# microbs-plugin-minikube

## Contents

* [Usage](#usage)
* [Prerequisites](#prerequisites)
* [Configuration](#configuration)


## [](usage)Usage

Before using the `minikube` plugin you must have its [prerequisites](#prerequisites).

### `setup`

When running [`microbs setup [-k]`](https://microbs.io/docs/usage/cli/#setup), the `minikube`
plugin runs `minikube start`.

After deploying an application with `microbs setup [--app]`, run
[`minikube tunnel`](https://minikube.sigs.k8s.io/docs/handbook/accessing/#using-minikube-tunnel)
in another terminal window to enable communications between your machine and the
application. You may need to run `minikube tunnel` as a `sudo` user for
applications that expose privileged ports, such as the
[`ecommerce`](https://microbs.io/docs/apps/ecommerce) app which exposes port `80`.

Currently, the `minikube` plugin does not configure the size of the cluster it
deploys. If you find that you need more capacity, [destroy](#/docs/usage/cli#destroy)
your current cluster and run:

```text
minikube config set memory NUM_MB && \
minikube config set cpus NUM_CPUS
```

### `rollout`

The `minikube` plugin is unaffected by [`microbs rollout`](https://microbs.io/docs/usage/cli#rollout).

### `destroy`

When running [`microbs destroy [-k]`](https://microbs.io/docs/usage/cli/#destroy), the `minikube`
plugin runs `minikube delete`.


## [](prerequisites)Prerequisites


### Install dependencies

The `minikube` plugin requires the following software dependencies on the same machine as microbs:

|Software|Version|
|------|-----|
|[minikube](https://kubernetes.io/docs/tasks/tools/#minikube)|1.25.2|

### Install the plugin

microbs installs this plugin automatically when you [install microbs](https://microbs.io/docs/overview/getting-started/).

To reinstall this plugin, run this command:

`microbs plugins install minikube`

To upgrade this plugin to the latest version, run this command:

`microbs plugins update minikube`


## [](configuration)Configuration

Currently, the `minikube` plugin does not have any configurable settings.
