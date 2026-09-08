-- SWM: track SOS notification preparation status
-- Does not send notifications. It records that emergency contacts were identified.

alter table public.incident_timeline
add column if not exists notification_status text
  not null default 'pending';

alter table public.incident_timeline
add column if not exists notification_contact_count integer
  not null default 0;
