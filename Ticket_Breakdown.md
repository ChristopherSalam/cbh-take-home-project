# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket #1 Add Column in Agents database for CustomAgentId

    Ticket #1 has some scoping issues. Do we need to generate a CustomAgentId or is null default a suitable value? If we need to generate a CustomAgentId, then a backfill is needed. 

Ticket #2 Create front end for view and input of CustomAgentId in Admin UI for facility managers

    Ticket #2 may involve multiple front ends, in which case we should have multiple tickets for places where the UI will need to be modified for input of this new custom ID. Ticket #2 is dependent on Ticket #1 but does not block #3 and #4.

Ticket #3 Modify getShiftsByFacility to include CustomAgentId

    Ticket #3 is dependent on Ticket #1 but does not block #3 and #4. As written the getShiftsByFacility likely does not include CustomAgentId, but we will need to supplement the provided metadata with this new information.

Ticket #4 Modify generateReport to include CustomAgentId

    If getShiftsByFacility and generateReport use a shared function, than a separate ticket #4 may not be needed. Ticket #4 is dependent on Ticket #1 but does not block #3 and #4.

Ticket #5 Allow lookups of Facility by CustomAgentId (optional)

    Optional. Down the road, we may come to favor CustomAgentId as an easier way to look up who did what. If so, we will have to add the ability to lookup facility this way, as described we primarily use Facility and the older AgentId to get the information we want.
