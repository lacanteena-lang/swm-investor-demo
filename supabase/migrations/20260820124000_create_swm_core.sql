-- SWM CORE DATABASE
-- Initial MVP database foundation

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  mobile text,
  email text,
  selected_plan text not null default 'free'
    check (selected_plan in ('free', 'premium', 'pro', 'family')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.safety_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  blood_group text,
  medical_info text,
  address_line text,
  city text,
  state text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.emergency_contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  relationship text not null,
  phone text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  plan text not null default 'free'
    check (plan in ('free', 'premium', 'pro', 'family')),
  status text not null default 'active'
    check (status in ('active', 'inactive', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security

alter table public.profiles enable row level security;
alter table public.safety_profiles enable row level security;
alter table public.emergency_contacts enable row level security;
alter table public.subscriptions enable row level security;

-- Profiles policies

create policy "Users can view their own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

-- Safety profile policies

create policy "Users can view their own safety profile"
on public.safety_profiles
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own safety profile"
on public.safety_profiles
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own safety profile"
on public.safety_profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Emergency contact policies

create policy "Users can view their own emergency contacts"
on public.emergency_contacts
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own emergency contacts"
on public.emergency_contacts
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own emergency contacts"
on public.emergency_contacts
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own emergency contacts"
on public.emergency_contacts
for delete
to authenticated
using (auth.uid() = user_id);

-- Subscription policies

create policy "Users can view their own subscription"
on public.subscriptions
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own subscription"
on public.subscriptions
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own subscription"
on public.subscriptions
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);