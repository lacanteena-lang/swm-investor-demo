-- SWM: add the PIN code field used by SafetyProfile.tsx
alter table public.safety_profiles
add column if not exists pin_code text;
