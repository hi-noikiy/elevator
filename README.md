# elevator

Brief generator and relationship enrichment configuration for enriching users in Intercom.

## Overview

Elevator (code name) is an application for configuring Inception to do enrichment of contacts through Intercom.

### Connecting to Intercom

An important function of Elevator is to store the information needed to connect to the customer's Intercom account. This allows Inception to accept new contacts as they are introduced to Intercom, enrich them (including relationship enrichment), and send the enrichment data back to Intercom.

### The brief

The brief collects information from the user about different entities related to the customer's contacts. Each contact the customer has, or later acquires, will be enriched in relationship to these entities.

* The industry or market
* The company
* The team
* Key players:
  * Target accounts
  * Competitors
  * Other players in the space (vendors, etc)

### Operation

Once the brief is completed, the user has the option of triggering an enrichment of all current Intercom contacts and/or uploading contacts from a CSV into Intercom with enrichments.

In addition to enriching existing contacts, any new contacts acquired through Intercom or entered into Intercom, and any contacts within Intercom that are updated, are sent to the Inception platform for further enrichment.
