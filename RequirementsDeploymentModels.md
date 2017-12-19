# Table of Contents
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of Contents](#table-of-contents)
- [Requirements Deployment Models](#requirements-deployment-models)
	- [Access Control (Private Cloud)](#access-control-private-cloud)
		- [Question](#question)
		- [Problem](#problem)
	- [Automated Administration](#automated-administration)
		- [Question](#question)
		- [Problem](#problem)
	- [Design for Performance](#design-for-performance)
	- [Elastic Environment](#elastic-environment)
	- [Rapid Provisioning](#rapid-provisioning)
		- [Question](#question)
		- [Problem](#problem)
	- [Realtime Resource Availability](#realtime-resource-availability)
		- [Question](#question)
		- [Problem](#problem)
	- [Resilient Environment](#resilient-environment)
	- [Resource Management](#resource-management)
		- [Question](#question)
		- [Problem](#problem)
	- [Resource Pooling](#resource-pooling)
		- [Question](#question)
		- [Problem](#problem)
	- [Self-Provisioning](#self-provisioning)
		- [Question](#question)
		- [Problem](#problem)
	- [Usage Monitoring](#usage-monitoring)
		- [Problem](#problem)
		- [Question](#question)
	- [Workload Distribution](#workload-distribution)
		- [Problem](#problem)
		- [Question](#question)

<!-- /TOC -->

# Requirements Deployment Models

## Access Control (Private Cloud)
### Question
How can access control be granted (for cloud service provider) if the open integration hub is operated in a private cloud?

### Problem
In the private cloud, you must determine who within the enterprise should have the authority to request resources from your private cloud

## Automated Administration
### Question
How can common administrative tasks be carried out consistently and automatically in response to pre-defined events?

### Problem
Open integration hub runtimes undergo numerous administrative tasks that need to be repeatedly and efficiently carried out and become subject to human error and slow response times when performed manually.

### Communication Protocol
As cloud is based on the Internet Protocol (IP), so for an application to be considered, it must use IP as its communication mechanism. Possible protocol: TCP.

### Design for Performance
It is crucial to ensure scalability. Means, the open integration hub runtime must be adjustable to high huge number of requests. This is especially true for the deployment in a public cloud.


## Elastic Environment
It is necessary to implement an elastic environment to realize the elasticity characteristic of a cloud.

## Rapid Provisioning
### Question
How can the provisioning of applications be automated and made available to open integration hub consumers on-demand?

### Problem
When an open integration hub consumer chooses what application it would like to lease, having the actual provisioning of these IT resources performed manually can require too much time and human interaction to be sufficiently effective and responsive.
 
## Realtime Resource Availability
### Question
How can open integration hub consumers access current availability status information for IT resources?

### Problem
Conventional IT resource usage and status reporting occurs at some point subsequent to the corresponding collection of usage and status data. This delay makes it impossible for open integration hub consumers to determine the current availability and status of the open integration hub and connected applications.

## Resilient Environment
It is necessary to provide a failover feature-set to realize the resiliency characteristic of a cloud.

## Resource Management
### Question
How can a open integration hub operator safely manage the open integration hub runtime without impacting neighboring IT resources?

### Problem
When open integration hub operators access and manage a deployed open integration hub runtime that coexists with other IT resources as part of a live production environment, management changes to an IT resource may inadvertently negatively impact others.

## Resource Pooling
### Question
How can an open integration hub runtime be organized to support dynamic sharing?

### Problem
When sharing an identical open integration runtime, it can be error-prone and burdensome to keep them fully synchronized on an on-going basis.

## Self-Provisioning
### Question
How can open integration hub consumers be empowered to have an open integration hub runtime provisioned on-demand?

### Problem
Manual or semi-automated IT resource provisioning processes required by cloud providers can be time-consuming and inefficient and can impose unnecessary delays and effort upon open integration hub consumers.
 
## Usage Monitoring
### Problem
How can open integration hub runtime usage be measured?

### Question
An open integration hub runtime that is shared can generate a variety of runtime scenarios that, if not tracked and responded to, can cause numerous failure, performance, and security concerns and can further make usage-based reporting impossible.

## Workload Distribution
### Problem
How can open integration hub over-utilization be avoided?

### Question
Open integration hub runtimes subjected to high volumes of concurrent usage can suffer degraded performance, reduced availability and reliability, and can become susceptible to overall failure.#
